shoppingList=["rice","potatoes","tomatoes","lays","sugar"]
// shoppingBasket=shoppingList  this will update both the list if any one is changed
shoppingBasket=[...shoppingList]
shoppingBasket.push("bringal")
shoppingBasket.push("sugar")
shoppingBasket.push("carrot")
console.log("The original shopping list:   "+shoppingList)
console.log("The updated shopping list:  "+shoppingBasket)
