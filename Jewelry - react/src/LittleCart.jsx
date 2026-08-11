import { useSelector } from "react-redux";
import './ProductList.css'
export default function LittleCart(){

    let a=useSelector(state=>state.c.arr)
    let sp=useSelector(state=>state.c.sumProduct)
    let sc=useSelector(state=>state.c.sumPrice)

    return <div className="LittelCart">
    <h2>: סל הקניות שלי</h2>
    <div >{a.length==0 ? "אין מוצרים בסל" : 
    <ul className="ulLittel">
        {a.map(item=><li key={item.idproducts}>
             <img src={"images/"+item.imgUrl}/>
             <p> {item.name}</p>
             <p>₪ {item.qty*item.price}  =  {item.qty}  *   ₪ {item.price} </p>
             <p> </p>

        </li>)} 
    </ul>}

    </div> 
        <h3>כמות מוצרים בסל : {sp}</h3> 
        <h3>₪  סה"כ לתשלום:  {sc}</h3>
    </div>

}