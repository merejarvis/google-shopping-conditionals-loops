
document.addEventListener('DOMContentLoaded', function () {
  // THIS LINE STARTS THE PARSING OF THE JSON
  var json = {}

  fetch('../products.json')
  .then(res => res.json())
  .then((data) => {
    // DO NOT REMOVE ANYTHING BEFORE THIS LINE
    console.log('Checkout this JSON! ', data)

    // START YOUR CODE FROM HERE AND HERE ONLY
    // ALL YOUR INTERNAL FUNCTIONS SHOULD START FROM HERE AND HERE ONLY TOO

    var items = data.items
    var shoppingList = document.querySelector('#shopping-list')

    // TARGET THE ADDTOCART BUTTON
    var addIt = document.querySelector('#addIt')
    addIt.addEventListener('click', addToCart)

    function addToCart () {
      var shoppingList = document.querySelectorAll('#shopping-list li')
      if (!shoppingList.length) {
        alert('shopping list is empty')
        return // need to return, so the function stops running
      }
      var cartList = document.querySelector('#cart-list')
      var lastItem = shoppingList[shoppingList.length - 1]
      cartList.appendChild(lastItem)
    }


      function getItemsByBrand(items, brand){
        var arr=[]
      for (var i =0; i<items.length; i++){
      var product = items[i].product
      var itemBrand = product.brand
        if(itemBrand===brand){
      arr.push(product.title)
        }
      }
      return arr
      }

      function getItemsByAuthor(items, author2){
      //console.log(authorName)
      var arr3=[]
      for (var i=0; i<items.length; i++){
        var product = items[i].product
        var authorName = product.author.name
        if(authorName.search(author2) !== -1){
          arr3.push(product.title)
        }
      }
      return arr3
      }


    // Starter code. List out items' name into the shopping list
    // HINT: EVERY FUNCTIONS HERE WILL BE ABLE TO ACCESS THE items VARIABLE
    items.forEach(function (item) {
      var listItem = document.createElement('li')
      listItem.textContent = item.product.title
      shoppingList.appendChild(listItem)
    })

    // TARGET THE SEARCHBRAND BUTTON

var searchBrand = document.querySelector('#searchBrandButton')
    searchBrand.addEventListener('click', searchBrandFn)

    function searchBrandFn(){
while (shoppingList.firstChild) {
    shoppingList.removeChild(shoppingList.firstChild);
}
var requestedBrand = document.querySelector('#searchBrandField').value
console.log(requestedBrand)
      var arr = getItemsByBrand(data.items, requestedBrand)
      console.log(arr)
      arr.forEach(function (item) {
         var listItem = document.createElement('li')
         listItem.textContent = item
         shoppingList.appendChild(listItem)
       })
    }


// TARGET THE SEARCHAUTHOR BUTTON

var searchAuthor = document.querySelector('#searchAuthorButton')
searchAuthor.addEventListener('click', searchAuthorFn)

function searchAuthorFn(){
while (shoppingList.firstChild) {
shoppingList.removeChild(shoppingList.firstChild);
}
var requestedAuthor = document.querySelector('#searchAuthorField').value
console.log(requestedAuthor)
  var arrAuthor = getItemsByAuthor(data.items, requestedAuthor)
  console.log(arrAuthor)
  arrAuthor.forEach(function (item) {
     var listItem = document.createElement('li')
     listItem.textContent = item
     shoppingList.appendChild(listItem)
   })
}

    // DO NOT REMOVE ANYTHING AFTER THIS LINE
  })
})
