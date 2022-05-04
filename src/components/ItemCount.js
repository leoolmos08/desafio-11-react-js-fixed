import { useState, useEffect } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box } from "@mui/system";
import { IconButton } from "@mui/material";
import { Button } from "@mui/material";

function ItemCount({stock, initial, onAdd}) {

    const [count , setCount] = useState(initial);

    const increment = ()=>{
        if(count<stock){
            setCount(count+1);
        }
    }
    const reduce = ()=>{
        if(count>initial){
            setCount(count-1);
        }
    }
    useEffect(() => {
        setCount(initial);
    },[]);

    return(
        <>
        <Box className="countContainer">
            <IconButton onClick={reduce}>
                <RemoveIcon />
            </IconButton>
            <p>{count}</p>
            <IconButton onClick={increment}>
                <AddIcon />
            </IconButton>
            { count ?
            <Button variant="contained" onClick={() => onAdd(count)}>Añadir al carrito</Button>
            :<Button variant="contained" disabled>Añadir al carrito</Button>
            }
        </Box>
        </>
    )
    
}

export default ItemCount;