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

    addProducts(title, description, price, thumbnail, code, stock){

        for(let i = 0; i < this.products.length; i ++ ){

            if(this.products[i].code === code){
            console.log(`El codigo ${code} esta repetido`);
            break;
            }
        }

        const newProduct ={
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }
            /*console.log(Object.values(newProduct))*/

            if(!Object.values(newProduct).includes(undefined)){
                ProductManager.id++;
                this.products.push({
                    ...newProduct,
                    id:ProductManager.id,
                });
            }else{
                console.log("Todos los campos son requeridos")
            }
    }

    getProducts(){
        return this.products;
    }

    existe(id){
        return this.products.find((product) => product.id === id)

    }
    getProductsById(id){
        !this.existe(id) ? console.log("Not Found") : console.log(this.existe(id));
    }
}
    const products = new ProductManager

    console.log(products.getProducts());

    console.log(products.addProducts('product1', 'description1', '1000', 'thumbnail1', '1234', '10'))
    console.log(products.addProducts('product2', 'description2', '2000', /* 'thumbnail1',*/'4567', '20'))

    console.log(products.getProducts());
    console.log(products.addProducts('Manzana', 'Fruta', '1000', 'thumbnail1', '1234', '1'))

    products.getProductsById(3)
