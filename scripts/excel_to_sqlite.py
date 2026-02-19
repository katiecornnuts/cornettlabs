#!/usr/bin/env python3
"""
excel_to_sqlite.py
Converts survivoR.xlsx (22 sheets) to survivor.db (SQLite).

Usage:
    python3 scripts/excel_to_sqlite.py

Outputs:
    client/public/survivor.db
"""

import os
import re
import sqlite3
import pandas as pd
from python_calamine import CalamineWorkbook

EXCEL_PATH = os.path.join(
    os.path.expanduser("~"), "Downloads", "survivoR.xlsx"
)
OUTPUT_PATH = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "client", "public", "survivor.db"
)

def sheet_to_table_name(sheet_name: str) -> str:
    """Convert 'Season Summary' -> 'season_summary'"""
    name = sheet_name.lower()
    name = re.sub(r'[^a-z0-9]+', '_', name)
    name = name.strip('_')
    return name

def sanitize_col(col_name: str) -> str:
    name = str(col_name).lower()
    name = re.sub(r'[^a-z0-9]+', '_', name)
    name = name.strip('_')
    return name if name else 'col'

def main():
    print(f"Reading: {EXCEL_PATH}")
    wb = CalamineWorkbook.from_path(EXCEL_PATH)
    sheet_names = wb.sheet_names
    print(f"Found {len(sheet_names)} sheets.\n")

    if os.path.exists(OUTPUT_PATH):
        os.remove(OUTPUT_PATH)
        print(f"Removed existing: {OUTPUT_PATH}")

    conn = sqlite3.connect(OUTPUT_PATH)

    for sheet_name in sheet_names:
        table_name = sheet_to_table_name(sheet_name)
        print(f"  '{sheet_name}'  ->  table: {table_name}")

        sheet = wb.get_sheet_by_name(sheet_name)
        rows = list(sheet.to_python())

        if len(rows) < 2:
            print(f"    (no data rows, skipping)")
            continue

        headers = [sanitize_col(c) for c in rows[0]]
        data_rows = rows[1:]

        df = pd.DataFrame(data_rows, columns=headers)
        df.to_sql(table_name, conn, if_exists='replace', index=False)
        print(f"    {len(df)} rows, {len(df.columns)} columns written.")

    conn.close()
    size_mb = os.path.getsize(OUTPUT_PATH) / (1024 * 1024)
    print(f"\nDone! Output: {OUTPUT_PATH}  ({size_mb:.1f} MB)")

if __name__ == "__main__":
    main()
