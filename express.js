
const express = require('express');
 const XLSX = require('xlsx');

const app = express();

app.get('/osman', (req, res) => {
   
const filePath = './data.xlsx';
const workbook = XLSX.readFile(filePath);
console.log(workbook.SheetNames);
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const data = XLSX.utils.sheet_to_json(sheet);
console.log(data);

  res.send(data);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
