import {productsService} from "./products.service.js";

export async function loader () {
    const products = await productsService.getProducts();
    return { products };
}