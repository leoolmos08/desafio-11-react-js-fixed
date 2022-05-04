import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getBurger } from "../utils/FetchFirebase";


const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { itemId } = useParams();

    useEffect(() => {
        getBurger(itemId)
            .then(response => setDato(response))
            .catch(err => console.log(err));
    }, []);
    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;