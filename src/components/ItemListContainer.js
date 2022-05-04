import { useState, useEffect} from "react";
import ItemList from './ItemList';
import { useParams } from "react-router-dom";
import { getCategory } from "../utils/FetchFirebase";

const ItemListContainer = () => {
    const [datos , setDatos] = useState([]);
    const {categoryId} = useParams();

    useEffect(() => {
        getCategory(categoryId)
            .then(response=> setDatos(response))
            .catch(err => console.log(err));
    }, [categoryId]);
    
    return (
        <>
        <ItemList items={datos}/>
        </>
    );
}
export default ItemListContainer;