import Item from "./Item";
import { ProductsContainer } from './styledComponents';
import LinearIndeterminate from './LinearIndeterminate';

const ItemList = ({items}) =>{
    return(
        <ProductsContainer>
           { items.length>0? 
            items.map(item=><Item  key={item.id} id={item.id} title={item.name} stock={item.stock} price={item.price} pictureUrl={item.image} description={item.description}/>) 
            :<LinearIndeterminate />
            }
        </ProductsContainer>
    );
}
export default ItemList;