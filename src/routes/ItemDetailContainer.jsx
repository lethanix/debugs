import {useParams} from 'react-router-dom';
import {useEffect, useState, useRef} from "react";
import {productsService} from "../services/products.service.js";

export default function ItemDetailContainer() {
    const [item, setItem] = useState({});
    const {itemId} = useParams();
    const dataFetchedRef = useRef(false);

    useEffect(() => {
        const fetchData = async () => {
            const data = await productsService.getProducts();
            const itemFound = data.find((item) => item.id === Number(itemId));
            setItem(itemFound);
        }

        // To avoid making multiple fetch to the API
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;

        fetchData()
            .catch(console.error);

    }, [itemId]);

    console.log(item)
    return (
        <div className="gap-4">
            <h1 className="text-2xl">{item.title}</h1>
            <div className="flex bg-ctp-mantle p-4 rounded gap-4">
                <img src={item.thumbnail}/>
                <div>
                    <h2 className="text-xl">Description</h2>
                    <p className="mt-2">{item.description}</p>
                </div>
            </div>
        </div>
    )
}
