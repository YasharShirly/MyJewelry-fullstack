import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetCart } from "./cartSlice";

export default function Cheackout(){

let navig=useNavigate();
let [address,setAddress]=useState("כתובת");
let disp=useDispatch();

let current=localStorage.getItem("currentUser");
let user=JSON.parse(current)
console.log(user)
useEffect(()=>{
    if(!current)
        navig("/log");
},[current]);

let arr=useSelector(state=>state.c.arr)
const saveOrderInServer=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:5000/order",{
        idusers:user.idusers,
        address:address,
        products:arr
    }).then(res=>{
        alert("הזמנה בוצעה בהצלחה");
        navig("/list");
        disp(resetCart());
    }).catch(err=>{
        console.log(err);
        alert("שגיאה בביצוע ההזמנה"+ err.response.data);
    })
}
    return <form style={{display:"flex",flexDirection: "column"}}>
        <h2>:הכנס כתובת</h2>
        <TextField  onChange={(e)=>{
            setAddress(e.target.value);
        }}/>
        <Button style={{backgroundColor:"rgb(251, 251, 243)",color: "black",fontFamily:"system-ui",fontSize: "1vw",marginTop:"10px"}} variant="contained" onClick={saveOrderInServer}>לתשלום</Button>
    </form>
}
