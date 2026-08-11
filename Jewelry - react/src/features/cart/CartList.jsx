import { IconButton, List } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import CartListItem from "./CartListItem"
import Button from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import HomeIcon from '@mui/icons-material/Home';
import { resetCart } from "./cartSlice";

export default function CartList(){

    let a=useSelector(state=>state.c.arr)
    let sp=useSelector(state=>state.c.sumProduct)
    let sc=useSelector(state=>state.c.sumPrice)
    let disp=useDispatch();
    let navig=useNavigate();

    return <div >
        <h1>סל הקניות שלי</h1>
        <div className="divList">{a.length==0 ? "אין מוצרים בסל" : 
        <ul className="divList">
            {a.map(item=><li key={item.idproducts}><CartListItem item={item}/></li>)} 
        </ul>}</div> 
        {a.length==0 ? <IconButton style={{borderRadius:"1vw",fontSize:"large"}}onClick={()=>{navig("/list")}}> 
            <HomeIcon />
            חזרה לדף הבית 
        </IconButton>:""} 

        {a.length==0 ? "" : <p><h3 style={{fontSize:"1vw"}}>כמות מוצרים בסל: {sp}, סה"כ לתשלום: ₪{sc}  </h3> 
     
        <Button >{a.length>0&&<Link className="check" to="/checkout">לסיום הזמנה ותשלום</Link>} </Button></p>  }      
           {a.length==0 ? "" :<IconButton style={{borderRadius:"1vw",fontSize:"large"}}onClick={()=>{disp(resetCart())}}> 
            <DeleteForeverIcon />
            ריקון עגלה 
      </IconButton>}

    </div>

    


}