/*******************************
 * Part A: Variables & Types
 *******************************/

const companyName = "Karibu Groceries LTD";

const minimumTonnage = 1000;

let isOperational = true;

let managerName;

let closedBranches = null;

console.log(typeof companyName);
console.log(typeof minimumTonnage);
console.log(typeof isOperational);
console.log(typeof managerName);
console.log(typeof closedBranches);

/*******************************
 * Part B: String Manipulation
 *******************************/

let dealerNameInput = " Naash Hirsi ";

let trimmedName = dealerNameInput.trim();

let cleanDealerName = trimmedName
  .toLowerCase()
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log(`Cleaned Dealer Name: ${cleanDealerName}`);

if (cleanDealerName.length >= 2 && cleanDealerName !== "") {
  console.log("Valid dealer name");
} else {
  console.log("Invalid dealer name");
}

/*******************************
 * Part C: Conditional Logic
 *******************************/

let userRole = "Sales Agent";
let procurementTonnage = 1500;
let produceType = "Beans";
let costInUgx = "50000";

if (userRole === "Sales Agent") {
  console.log("Error: Sales Agents are not allowed to record produce.");
} else if (procurementTonnage < 1000) {
  console.log("Error: Minimum tonnage not met.");
} else if (Number(costInUgx) < 10000) {
  console.log("Error: Cost must be at least 5 digits.");
} else {
  console.log("Procurement record accepted.");
}

let costNumber = Number(costInUgx);
if (procurementTonnage >= 1000 && costNumber >= 10000) {
  console.log("Procurement record valid");
} else {
  console.log("Procurement record invalid");
}

/*******************************
 * Part D: Arrays
 *******************************/

let kglProduce = ["Beans", "Grain Maize", "Cow peas", "G-nuts", "Soybeans"];

kglProduce.push("Green Peas");
kglProduce.shift();

console.log("G-nuts exists:", kglProduce.includes("G-nuts"));
console.log(kglProduce);
console.log("Length:", kglProduce.length);

let branch2Produce = ["Maize", "Beans"];
let allProduce = kglProduce.concat(branch2Produce);

console.log(allProduce);
