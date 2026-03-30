function describeProduct(product){
    
    console.log(`Product: ${product.name}| Price: ₦${product.price}| Stock: ${product.stock} units`)
    return product 
}
let product1= {name: "Indomie", price: 150, stock:200}
let product2= {name: "Car", price: 89000, stock:65}
let product3= {name: "Milk", price: 4300, stock:193}
describeProduct(product1)
describeProduct(product2)
describeProduct(product3)