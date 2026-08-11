import axios from "axios";
import { useState } from "react"
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";
import { userIn } from "./userslice";
import "./Register.css";
import { Box, Button, TextField } from "@mui/material";

export const Register=()=>{
let navigate=useNavigate()
let u=useSelector(state=>state.u.currentUser);
let { register, handleSubmit, formState: { errors } } = useForm();
let disp=useDispatch();

const sendToServer=(data)=>{
    alert("שליחה לשרת")
    axios.post("http://localhost:5000/user",data)
    .then(res=>{
        alert("משתמש נוסף בהצלחה")
        console.log(res.data);
        disp(userIn(res.data))
    })
    .catch(err=>{
        console.log(err)
        alert("שגיאה בהוספת משתמש נסה מאוחר יותר\n" + err.response.data)
    })
}
return <>
<h2>: הרשם אלינו</h2>
<form className="addReg" onSubmit={handleSubmit(sendToServer)}>
{u ?  <IconButton style={{borderRadius:"1vw",fontSize:"large"}}onClick={()=>{navigate("/list")}}> 
            <HomeIcon />
            חזרה לדף הבית 
      </IconButton>
       : <Box>
    <div><TextField label="שם משתמש" style={{width:"30vw"}} {...register("name", {
            required: { value: true, message: "שם הוא שדה חובה" }})} ></TextField>{errors.name && <div className="err-msg" style={{color:"red"}}>
            {errors.name.message}</div>}</div>
    <div><TextField label="סיסמא" style={{width:"30vw",margin:"15px"}} {...register("password", {
            required: { value: true, message: "סיסמא היא שדה חובה" },
            pattern: {
                value: /[A-Z]{1,}/&&/[a-z]{1,}/&&/[0-9]{1,0}/&&/[!*@$&]{1,}/, message: "!הסיסמא צריכה להכיל אות גדולה, אות קטנה, מספר וסימן"
            }
        })}></TextField> {errors.password && <div className="err-msg" style={{color:"red"}}>
        {errors.password.message}</div>}</div>
        <div><TextField label="מייל" style={{width:"30vw",marginBottom:"15px"}} {...register("mail", {
            required: { value: true, message: "מייל הוא שדה חובה" },
            pattern: {
                value:/^[A-Za-z0-9]{2,}@(gmail|012).com$/,message:"!מייל לא תקין, צריך להכיל אותיות/מספרים ומבנה מייל תקין"
            }
        })} ></TextField>{errors.mail && <div className="err-msg" style={{marginBottom:"15px",color:"red"}} >
        {errors.mail.message}</div>}</div>
        <Button style={{backgroundColor:"rgb(251, 251, 243)",color: "black",fontFamily:"system-ui",fontSize: "1vw"}} variant="contained" onClick={handleSubmit(sendToServer)}>הרשם</Button>
</Box>}
</form>
</>
}