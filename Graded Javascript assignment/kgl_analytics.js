let procurements = [
  { id: 1, dealerName: "Naash", produceType: "Beans", tonnageInKgs: 1200, costInUgx: 6000000, procurementDate: new Date() },
  { id: 2, dealerName: "Hirsi", produceType: "Maize", tonnageInKgs: 900, costInUgx: 4000000, procurementDate: new Date() },
  { id: 3, dealerName: "Awale", produceType: "G-nuts", tonnageInKgs: 1500, costInUgx: 10000000, procurementDate: new Date() },
  { id: 4, dealerName: "Moha", produceType: "Soybeans", tonnageInKgs: 2000, costInUgx: 11000000, procurementDate: new Date() },
  { id: 5, dealerName: "Anna", produceType: "Cow peas", tonnageInKgs: 800, costInUgx: 3500000, procurementDate: new Date() },
  { id: 6, dealerName: "Kato", produceType: "Beans", tonnageInKgs: 1300, costInUgx: 6500000, procurementDate: new Date() }
];

let withCostPerKg = procurements.map(p => ({
  ...p,
  costPerKg: p.costInUgx / p.tonnageInKgs
}));

let validProcurements = procurements.filter(p => p.tonnageInKgs >= 1000);
console.log(validProcurements, validProcurements.length);

let totals = procurements.reduce(
  (acc, p) => {
    acc.tonnage += p.tonnageInKgs;
    acc.cost += p.costInUgx;
    return acc;
  },
  { tonnage: 0, cost: 0 }
);

console.log(`Total Tonnage: ${totals.tonnage}`);
console.log(`Total Cost: ${totals.cost}`);

function getUniqueDealers(records) {
  return [...new Set(records.map(r => r.dealerName))];
}

console.log(getUniqueDealers(procurements));

let authorizedRoles = new Set(["Manager", "Director"]);

function isAuthorizedForProcurement(role) {
  return authorizedRoles.has(role);
}

let kglPriceList = new Map([
  ["Beans", 5500],
  ["Grain Maize", 4800],
  ["Cow peas", 6000],
  ["G-nuts", 7200],
  ["Soybeans", 5800]
]);

function calculateSaleTotal(produceName, tonnageInKgs) {
  if (!kglPriceList.has(produceName)) return "Price not found";
  return kglPriceList.get(produceName) * tonnageInKgs;
}

let highestPrice = Math.max(...kglPriceList.values());

for (let [name, price] of kglPriceList) {
  console.log(`Produce: ${name}, Price per Kg: ${price} UgX`);
}

console.log(`Highest Price: ${highestPrice}`);
