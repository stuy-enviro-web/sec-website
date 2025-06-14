"use server";
import { google } from "googleapis";

const credentials = {
    type: process.env.type,
    project_id: process.env.project_id,
    private_key_id: process.env.private_key_id,
    private_key: process.env.private_key,
    client_email: process.env.client_email,
    client_id: process.env.client_id,
    auth_uri: process.env.auth_uri,
    token_uri: process.env.token_uri,
    auth_provider_x509_cert_url: process.env.auth_provider_x509_cert_url,
    client_x509_cert_url: process.env.client_x509_cert_url,
};

type CacheEntry = {
    timestamp: number;
    data: string[][];
};

const cache: Record<string, CacheEntry> = {};

export async function getSheetsData(
    spreadsheetId: string,
    range: string
): Promise<string[][]> {
    const key = `${spreadsheetId}:${range}`;
    const now = Date.now();

    // if cached and not older than 20s, return it
    const entry = cache[key];
    if (entry && now - entry.timestamp < 20_000) {
        return entry.data;
    }

    try {
        // optimize auth by using a single long-lived JWT client (faster token reuse)
        const auth = new google.auth.JWT({
            email: credentials.client_email!,
            key: credentials.private_key!.replace(/\\n/g, "\n"),
            scopes: [ "https://www.googleapis.com/auth/spreadsheets.readonly" ],
        });
        // fetch & cache the access token once per instantiation
        await auth.authorize();

        const sheets = google.sheets({ version: "v4", auth });
        let response;
        // retry with exponential backoff on 429 quota errors
        for (let attempt = 0; attempt < 5; attempt++) {
            try {
                response = await sheets.spreadsheets.values.get({ spreadsheetId, range });
                break;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (err: any) {
                const isQuota = err?.code === 429;
                if (!isQuota || attempt === 4) throw err;
                const delay = Math.pow(2, attempt) * 1000;
                console.warn(`Quota hit, retrying in ${delay}ms (attempt ${attempt + 1})`);
                await new Promise(res => setTimeout(res, delay));
            }
        }

        const values = response?.data.values || [];
        // update cache
        cache[key] = { timestamp: now, data: values };
        return values;
    } catch (error) {
        console.error("Error fetching data from Google Sheets:", error);
        throw error;
    }
}
