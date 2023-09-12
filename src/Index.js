/*
var foo = {
  get bar() {
    return this._bar;
  },
  set bar(value) {
    this._bar = value;
  },
};

Class ProductManager {
    constructor(getProducts){
    this.getProducts = getProducts
clea
 }

}
*/



class ProductManager {
    constructor(){
        this.products = []
    }

    static id = 0

    addProduct(title, description, price, thumbnail, code, stock){

        ProductManager.id++
        this.products.push({title, description, price, thumbnail, code, stock, id:ProductManager.id});
    }

    getProducts(){
        return this.products;
    }

    getProductsById(id){
        if(!this.products.find((product) => products.id === id)){
            console.log("Not Found")

        }else{
            console.log("Existe")
        }

    }
}
    const products = new ProductManager
    /*Primera llamada = arreglo vacio*/
    console.log(products.getProducts());

    /*Agrgar productos*/
    console.log(products.addProduct('product1', 'description1', '1000', 'thumbnail1', '1234', '10'))
    console.log(products.addProduct('product2', 'description2', '2000', 'thumbnail1', '5678', '20'))


    /*Segunda llamada = arreglo con productos*/
    console.log(products.getProducts());


    products.getProductsById(2)