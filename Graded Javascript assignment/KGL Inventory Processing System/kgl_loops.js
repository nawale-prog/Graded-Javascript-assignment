/*****************
 * Weekly Tonnage
******************/

let weeklyTonnage = [1200, 1500, 980, 2000, 1100, 1800, 1300];

let total = 0;
for (let i = 0; i < weeklyTonnage.length; i++) {
  total += weeklyTonnage[i];
}

let average = total / weeklyTonnage.length;

console.log(`Total Tonnage: ${total}`);
console.log(`Average Daily Tonnage: ${average}`);

/********************
 * Credit Sales Count
*********************/

let salesRecords = [
  createSalesRecord("Beans", 200, "A", 100000),
  createSalesRecord("Maize", 300, "B", 150000),
  createSalesRecord("G-nuts", 400, "C", 200000),
  createSalesRecord("Soybeans", 500, "D", 250000),
  createSalesRecord("Cow peas", 600, "E", 300000)
];

salesRecords[1].isCreditSale = true;
salesRecords[3].isCreditSale = true;

let creditCount = 0;
for (let sale of salesRecords) {
  if (!sale.isCreditSale) continue;
  creditCount++;
}

console.log(`Total credit sales: ${creditCount}`);

/******************
 * Inventory Check
*******************/

let inventory = [
  { name: "Beans", tonnage: 500 },
  { name: "Maize", tonnage: 0 },
  { name: "G-nuts", tonnage: 300 }
];

for (let item of inventory) {
  if (item.tonnage === 0) {
    console.log(`Manager Alert: ${item.name} is out of stock`);
    break;
  }
}
