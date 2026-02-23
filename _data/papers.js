import fs from "node:fs";
import path from "node:path";

const csvPath = path.join(process.cwd(), "content", "papers.csv");

function splitCsvLine(line) {
  return line.split(",").map((value) => value.trim());
}

export default function loadPapers() {
  if (!fs.existsSync(csvPath)) return [];
  const raw = fs.readFileSync(csvPath, "utf8").trim();
  if (!raw) return [];
  const [headerLine, ...rows] = raw.split(/\r?\n/);
  const headers = splitCsvLine(headerLine);
  return rows
    .map((line) => splitCsvLine(line))
    .filter((cols) => cols.length >= 4)
    .map((cols) => {
      const row = {};
      headers.forEach((header, index) => {
        row[header] = cols[index] || "";
      });
      return row;
    });
}
