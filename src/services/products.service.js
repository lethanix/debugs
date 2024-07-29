class Products {
    #products = [];
    constructor() {}

    async getProducts() {
        const smartphones = await fetch('https://dummyjson.com/products/category/smartphones')
            .then(res => {
                return res.json()
            });

        const tablets = await fetch('https://dummyjson.com/products/category/tablets')
            .then(res => {
                return res.json()
            });

        const laptops = await fetch('https://dummyjson.com/products/category/laptops')
            .then(res => {
                return res.json()
            });

        const accesories = await fetch('https://dummyjson.com/products/category/mobile-accesories')
            .then(res => {
                return res.json()
            });
        let data = [];
        data = data.concat(tablets.products);
        data = data.concat(laptops.products);
        data = data.concat(accesories.products);
        data = data.concat(smartphones.products);

        this.#products = data;
        return [...data];
    }
}
export const productsService = new Products();
await productsService.getProducts()