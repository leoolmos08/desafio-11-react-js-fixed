import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { useContext } from 'react';
import { CartContext } from './CartContext';

function CartWidget (){
    let useCtx = useContext(CartContext);
    return (
        <>
            <Badge badgeContent={useCtx.itemsQty()} color="secondary">
              <ShoppingCartIcon />
            </Badge>
        </>
    );
}

export default CartWidget;