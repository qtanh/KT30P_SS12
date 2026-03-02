let products = [
{ id: "P01", name: "Laptop MacBook Pro M3", price: 2000, category: "Laptop", inStock: true },
{ id: "P02", name: "Chuột khong day Logitech", price: 45, category: "Phụ kiện", inStock: true },
{ id: "P03", name: "Ban phím cơ Keychron", price: 95, category: "Phụ kiện", inStock: false },
{ id: "P04", name: "Man hinh Dell UltraSharp", price: 450, category: "Man hinh", inStock: true },
{ id: "P05", name: "Tai nghe Sony WH-1000XM5", price: 350, category: "Phụ kiện", inStock: true }
];
function filterAndArrange (){
    let result = products.filter((value)=>{
        return value.inStock==true;
    })
    
    let newArray = result.forEach((value)=>{
        return console.log(`Id: ${value.id} - name:${value.name} - price: ${value.price} - category: ${value.category} - inStock: ${value.inStock}`);
        
    })
}
filterAndArrange();
function tagtag (){
    let shownUp = products.filter((value)=>{
        return value.category=="Phụ kiện";
    })
    let showArray = shownUp.forEach((value)=>{
        return console.log(`name:${value.name}`);
        
    })
}
tagtag();
function totalValue (){
    let result = products.filter((value)=>{
        return value.inStock==true;
    })
    let count = result.reduce((acc,value)=>{
        return acc+value.price;
    },0)
    console.log(`Value of available products: ${count}`);
    
}
totalValue();

