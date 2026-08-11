import { useDispatch } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Tooltip from '@mui/material/Tooltip';
import * as React from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import MailIcon from '@mui/icons-material/Mail';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { addItem, deleteAllprod, removeItem } from "./cartSlice";

export default function CartListItem({item}){
  const [count, setCount] = React.useState(1);
    let disp=useDispatch();

    return <div >
        <h3> {item.name}</h3>
        <img src={"images/"+item.imgUrl}/>
        <p>כמות: {item.qty}</p>
        <p> ₪ סה"כ: {item.qty*item.price}</p>

      <Tooltip title="מחיקת מוצר">
      <IconButton>
        <DeleteIcon onClick={()=>{disp(deleteAllprod(item))}}/>
      </IconButton>
    </Tooltip>
    
      <IconButton>
            <AddIcon onClick={()=>{disp(addItem(item))}}/>
      </IconButton>

      <IconButton>
            <RemoveIcon onClick={()=>{disp(removeItem(item))}}/>
      </IconButton>

    </div>
}