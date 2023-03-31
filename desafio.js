class ProductManager {
    constructor() {
        this.products = []
        this.index = 0
    }

    getProducts = () => {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(p => p.id === id);
        if (!product) {
          console.error('Not found');
          return;
        }
        return product;
      }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        this.index++
        const id = this.index;
        const product = {
            id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock){
            console.log("Error: Todos los campos son obligatorios");
            return;
        }
        if (this.products.some(p => p.code === product.code)) {
            console.error(`El código ya está siendo utilizado: ${code}`);
            return;
        };

        this.products.push(product)
    }
}


const manager = new ProductManager()

manager.addProduct(
    'Lentes de sol',
    'Ray ban ClubMaster',
    34000,
    'https://http2.mlstatic.com/D_NQ_NP_710134-MLA50997233933_082022-O.webp',
    12345678,
    3,
)
manager.addProduct(
    'Lentes de sol',
    'Aviator Caravan',
    38000,
    'https://http2.mlstatic.com/D_NQ_NP_972870-MLA48699908684_122021-O.webp',
    123456789,
    2,
)

manager.getProducts()
manager.getProductById(2);


console.log(manager.products)
console.log(manager.getProductById(1))
