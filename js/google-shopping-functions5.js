//Use the functions you created in 1 - 5 to ouput (console.log) the following lists of items.

// All items made by Sony.
// All items made by Sony that are available.
// All available items by the author "Adorama Camera"
// All items made by Nikon with the author eBay.

var data = require('../products.json');

//Write your solutions below

function getItems(inputData){
  return inputData.items
}

//console.log(items[2].product.brand)
function getItemsByBrand(items, brand){
  var counter=0
for (var i =0; i<items.length; i++){
var product = items[i].product
var itemBrand = product.brand
  if(itemBrand===brand){
arr.push(items[i])
counter++
  }
}
console.log(counter)
return arr
}


function getAvailableProducts(items){
//var allItems = getItems (inputData)
  var arr2 = []
  //var count = 0
  for (i = 0 ; i<items.length; i++){
    var product = items[i].product
    var inventories = product.inventories[0]
    var availability = inventories.availability
    var price = inventories.price
    if(availability==='inStock'){
    arr2.push(product.title)
    }
}
return arr2
}

function getItemsByAuthor(items, author2){
//console.log(authorName)
arr3=[]
counter3 = 0
for (var i=0; i<items.length; i++){
  var product = items[i].product
  var authorName = product.author.name
  if(authorName.search(author2) !== -1){
    arr3.push(items[i])
    counter3++
  }
}
console.log(counter3)
return arr3
}


var items= getItems(data)
var arr = []
var count = 0

// // All items made by Sony.
//console.log(getItemsByBrand(items,'Sony'))

// // All items made by Sony that are available.
// var sonyItems = getItemsByBrand(items,'Sony')
// console.log(getAvailableProducts(sonyItems))

// All available items by the author "Adorama Camera"
// console.log(getItemsByAuthor(items, 'Adorama Camera'))

// All items made by Nikon with the author eBay.
var nikonItems = getItemsByBrand(items,'Nikon')
console.log(getItemsByAuthor(nikonItems, 'eBay'))
