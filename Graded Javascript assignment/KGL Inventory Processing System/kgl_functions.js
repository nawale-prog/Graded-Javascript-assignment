/*******************
 * Part A: Functions
********************/

function calculateProcurementCost(tonnageInKg, pricePerKg) {
  if (
    typeof tonnageInKg !== "number" ||
    typeof pricePerKg !== "number" ||
    tonnageInKg < 0 ||
    pricePerKg < 0
  ) {
    return "Invalid input";
  }
  return tonnageInKg * pricePerKg;
}

const validateBuyerName = (buyerName) => {
  return buyerName && buyerName.length >= 2;
};

function checkUserAuthorization(role) {
  switch (role) {
    case "Manager":
      return "procurement_and_sales";
    case "Sales Agent":
      return "sales_only";
    case "Director":
      return "view_aggregations";
    default:
      return "unauthorized";
  }
}

/*********************
 * Sales Record Object
**********************/

function createSalesRecord(produceName, tonnage, buyerName, amountPaid) {
  return {
    id: Math.floor(Math.random() * 9000) + 1000,
    produceName,
    tonnageInKgs: tonnage,
    buyerName,
    amountPaid,
    saleDate: new Date(),
    isCreditSale: false
  };
}

let sale = createSalesRecord("Beans", 500, "Naash Awale", 250000);

sale.branch = "Maganjo";
sale.isCreditSale = true;
sale["dueDate"] = new Date();

console.log(Object.keys(sale));

for (let key in sale) {
  console.log(`Property: ${key}, Value: ${sale[key]}`);
}
