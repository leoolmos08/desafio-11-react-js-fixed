import { Box } from "@mui/system";
import ItemCount from "./ItemCount";
import { ImageDetail, InfoContainer, Title, Desc, Price } from './styledComponents';
import LinearIndeterminate from './LinearIndeterminate';
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { CartContext } from "./CartContext";

const ItemDetail = ({item}) =>{
    const [itemCount, setItemCount] =  useState(0);
   const useCtx = useContext(CartContext);
    const onAdd = (qty) => {
        alert("Has seleccionado  " + qty + "  items.");
        setItemCount(qty);
        useCtx.addToCart(item, qty); 
    }
    return(
        <>
        { item.image?
        <Box className="container">
            <Box className="imgContainer" >
                <ImageDetail src={item.image}/>
            </Box>
            <InfoContainer>
                <Title>{item.name}</Title>
                <Desc>{item.description}</Desc>
                <Price>$ {item.price}</Price>
                <Desc>{item.stock} unidades disponibles</Desc>
                {
                    itemCount === 0 ?
                    <ItemCount stock={item.stock} initial={0} onAdd={onAdd} />
                    :<Link to='/cart' style={{textDecoration: "none"}}><Button variant="contained" color="success"> Ir al carrito </Button></Link>
                }
             </InfoContainer>
        </Box>
        :<LinearIndeterminate />
        }
        </>

    );
}

export default ItemDetail;