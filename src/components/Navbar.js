import { Box } from '@mui/system';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <>
      <Box>
        <AppBar color="default">
          <Toolbar>
            <Typography variant="h5" flexGrow={1}><Link to='/' style={{textDecoration: "none"}}> BURGER20</Link></Typography>
            <Box flexGrow={1}>
              <Link to='/category/burgers' style={{textDecoration: "none"}}><Button color='inherit'>Hamburguesas</Button></Link>
              <Link to='/category/extras' style={{textDecoration: "none"}}><Button color='inherit'>Papas y Extras</Button></Link>
              <Link to='/category/bebidas' style={{textDecoration: "none"}}><Button color='inherit'>Bebidas</Button></Link>
            </Box>
            <Link to='/cart'>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <CartWidget />
              </IconButton>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default NavBar;
