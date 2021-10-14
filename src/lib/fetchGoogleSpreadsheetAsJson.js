import { GOOGLE_SPREADSHEET_ID } from '../env'

// returns a array of rows
async function fetchGoogleSpreadsheetRows(id) {
  const body = await (await fetch(`https://docs.google.com/spreadsheets/d/${id}/gviz/tq?tqx=out:json`)).text()
  return JSON.parse(body.substr(47).slice(0, -2)).table.rows
}

// the first row is the one with the labels
function parseLabels(rows) {
  return rows.shift().c.map(col => col?.v).filter(col => col)
}

function parseData(rows) {
  return rows.map(row => row.c.map(col => col?.v))
}

function joinRowAndLabels(row, labels) {
  return labels.reduce((acc, label, i) => {
    acc[label] = row[i]
    return acc
  } , {})
}

function joinDataWithLables(data, labels) {
  return data.map(row => joinRowAndLabels(row, labels))
}

function normalizeRows(rows) {
  const labels = parseLabels(rows)
  const data = parseData(rows)
  const records = joinDataWithLables(data, labels)

  return records
}

function normalizeRowTypes(row) {
  if (row["date_of_birth"]) Date.parse(row["date_of_birth"])
  if (row["date_of_admission"]) Date.parse(row["date_of_admission"])
  row["name"] = row["first_name"] + " " + row["last_name"]
  row["specialties"] = row["specialties"] ? row["specialties"].toString().split(/[\s,]+/) : []

  return row
}

function normalizeTypes(rows) {
  return rows.map(normalizeRowTypes)
}

function log(data) {
  console.info(data)
  return data
}

export function fetchGoogleSpreadsheetAsJson() {
  return fetchGoogleSpreadsheetRows(GOOGLE_SPREADSHEET_ID).then(normalizeRows).then(normalizeTypes).then(log)
}
