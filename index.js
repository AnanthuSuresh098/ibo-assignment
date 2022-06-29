/*
You have been given a list of products which is having property productName, quantity and description.


PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}



2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]

*/

const listOfProducts = [
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television",
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner",
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan",
  },
];

//1.

const getUniqueProductCount = () => {
  const obj = {};

  let TVcount = 0;
  let ACcount = 0;
  let FANcount = 0;

  listOfProducts.map((e) => {
    if (e.productName == "TV") {
      TVcount++;
      obj[e.productName] = TVcount;
    }
    if (e.productName == "AC") {
      ACcount++;
      obj[e.productName] = ACcount;
    }
    if (e.productName == "FAN") {
      FANcount++;
      obj[e.productName] = FANcount;
    }
  });

  return obj;
};

console.log(getUniqueProductCount());

//2.

const getUniqueProducts = () => {
  let TVsum = 0;
  let ACsum = 0;
  let FANsum = 0;

  const productsArray = [];

  listOfProducts.map((e) => {
    if (e.productName == "TV") {
      TVsum += e.quantity;
    }
    if (e.productName == "AC") {
      ACsum += e.quantity;
    }
    if (e.productName == "FAN") {
      FANsum += e.quantity;
    }
  });

  productsArray.push(
    {
      productName: "TV",
      quantity: TVsum,
      description: "television",
    },
    {
      productName: "AC",
      quantity: ACsum,
      description: "air conditioner",
    },
    {
      productName: "FAN",
      quantity: FANsum,
      description: "Ceiling Fan",
    }
  );

  return productsArray;
};

console.log(getUniqueProducts());
