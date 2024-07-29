import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {productsService} from "../services/products.service.js";

function ItemListContainer({greeting}) {
    const [products, setProducts] = useState([]);
    const {categoryId} = useParams();

    console.log(categoryId);
    useEffect(() => {
        const fetchData = async () => {
            const data = await productsService.getProducts();
            if (!categoryId) {
                setProducts(data);
            } else {
                const itemsFiltered = data.filter((item) => item.category === categoryId);
                setProducts(itemsFiltered);
            }
        }

        fetchData()
            .catch(console.error);

    }, [categoryId]);

    console.log(products)

    return (
        <div>
            <h1 className="text-2xl">{greeting}</h1>
            <h2 className="text-xl capitalize">{categoryId}</h2>
            <div className="flex flex-wrap gap-4">
                {products.map(item => (
                    <Link to={`/items/${item.id}`} key={item.id} className="gap-4 m-4 rounded-lg hover:bg-ctp-blue hover:text-ctp-crust bg-ctp-crust " >
                        <img src={item.thumbnail} className="" alt={item.title} />
                        <p>{item.title}</p>
                    </Link>
                ))}

            </div>
        </div>
    );
}

export default ItemListContainer;