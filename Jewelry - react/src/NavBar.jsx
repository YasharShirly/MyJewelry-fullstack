import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LogoutIcon from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { userOut } from './features/user/userslice';
import './NavBar.css';
import { resetCart } from './features/cart/cartSlice';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

export default function NavBar() {
    let u=useSelector(state=>state.u.currentUser);
    let sp=useSelector(state=>state.c.sumProduct);
    let disp=useDispatch();
    let navig=useNavigate();
    return <div>

    <Box sx={{ flexGrow: 1 } }>
      <AppBar position="absolute" >
        <Toolbar className="navbar" >
         
          <Typography className="liNav" variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="list">המוצרים שלנו</Link>
          </Typography>

          <Typography className="liNav" variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {u&& u.role=="ADMIN" ?<Link to="add" >הוספת מוצר</Link>: <Link to="cart">
            <IconButton aria-label="cart" >
                <StyledBadge badgeContent={sp} color="rgba(0, 0, 0, 0.54)">
                <ShoppingCartIcon />
                </StyledBadge>
            </IconButton> סל הקניות 
           </Link>}
          </Typography>

          <Typography className="liNav" variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {!u&&<Link to="reg">הרשמה</Link>}
          </Typography>

          <Typography className="liNav" variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {!u&&<Link to="log">התחברות</Link>}
          </Typography>   

        {u&&<Tooltip title="יציאה">
            <IconButton sx={{color:"white", display:"block",position:"absolute",left:"55vw"}}>
            <LogoutIcon id='out' onClick={()=>{
                disp(userOut());
                disp(resetCart());
                navig("/list");
                }}/>
            </IconButton>
        </Tooltip>}

          {/* <Button color="inherit"><input type="button"   value="יציאה" /></Button> */}
          <Typography className="liNav" variant="h6" component="div" sx={{ flexGrow: 1 }}>
           <h3 >שלום {!u?"אורח":u.name}</h3>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
      
    </div>


}
