let inventory = [
  { item: "Pen", price: 50, quantity: 200 },
  { item: "Notebook", price: 350, quantity: 80 },
  { item: "Ruler", price: 100, quantity: 150 },
  { item: "Eraser", price: 30, quantity: 300 },
  { item: "Marker", price: 200, quantity: 60 }
];

let totalStockValue= 0
let highesttotalStockValue= 0
let combinedStockValue= 0

for(i=0; i<inventory.length; i++){
    totalStockValue= inventory[i].price * inventory[i].quantity

    if(totalStockValue>0){
        combinedStockValue= totalStockValue++
        // console.log(combinedStockValue)
    }
    if(totalStockValue>= 15000){
        console.log(inventory[i].item)
    }

     if(totalStockValue>highesttotalStockValue){
        highesttotalStockValue= totalStockValue
    }
}
console.log(highesttotalStockValue)