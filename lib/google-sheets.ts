import { google, sheets_v4 } from "googleapis";

type CellValue = string | number | boolean | null;

interface AppendResult {
  success: boolean;
  updatedRange: string | null | undefined;
}

function getAuthClient() {
  return new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
}

function getSheetsClient(): sheets_v4.Sheets {
  return google.sheets({ version: "v4", auth: getAuthClient() });
}

export function isGoogleSheetsConfigured(): boolean {
  return Boolean(
    process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim() &&
      process.env.GOOGLE_PRIVATE_KEY?.trim() &&
      process.env.GOOGLE_SHEET_ID?.trim()
  );
}

/** Single destination tab for every enquiry. Never create extra tabs per form. */
export function getSheetTabName(): string {
  return process.env.GOOGLE_SHEET_TAB_NAME?.trim() || "Sheet1";
}

/** Append a single row to the one configured Google Sheet tab */
export async function appendRow(values: CellValue[]): Promise<AppendResult> {
  const sheets = getSheetsClient();
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;
  const sheetName = getSheetTabName();

  if (!spreadsheetId) {
    throw new Error("Missing spreadsheet ID: set GOOGLE_SHEET_ID");
  }

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `'${sheetName.replace(/'/g, "''")}'!A:A`,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: [values] },
  });

  return {
    success: true,
    updatedRange: response.data.updates?.updatedRange,
  };
}
