import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { userIn } from "./userslice";
import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Register.css";
import axios from "axios";
import { Box, Button, Card, TextField } from "@mui/material";

export const Login=()=>{
    let {register,handleSubmit,formState:{errors}}=useForm();
    let disp=useDispatch();
    let navig=useNavigate();
    let u=useSelector(state=>state.u.currentUser);
    
    const sendToServer=(data)=>{ 
        alert("שליחה לשרת")
        axios.post("http://localhost:5000/user/login",data)
        .then(res=>{
            alert("משתמש התחבר בהצלחה ")
            console.log(res.data);
            disp(userIn(res.data))
        })
        .catch(err=>{
            console.log(err)
            alert(" שגיאה בהתחברות משתמש נסה מאוחר יותר\n" + err.response.data);
        })
    }
    return <><h2>: התחברות</h2>

    <form className="addReg" >
       
    {u ? <div style={{display:"flex"}}><IconButton style={{borderRadius:"1vw",fontSize:"large"}}onClick={()=>{navig("/list")}}> 
            <HomeIcon />
            חזרה לדף הבית 
      </IconButton>
       <IconButton style={{borderRadius:"1vw",fontSize:"large"}}onClick={()=>{navig("/cart")}}> 
        <ShoppingCartIcon />
            לסל הקניות
      </IconButton>
      </div>: <Box >
        <div><TextField label="שם משתמש" style={{width:"30vw"}} {...register("name", {
            required: { value: true, message: "שם הוא שדה חובה" }})} ></TextField>{errors.name && <div className="err-msg" style={{color:"red"}}>
            {errors.name.message}</div>}</div>
        <div> <TextField label="סיסמא" style={{width:"30vw",margin:"15px"}} {...register("password", {
            required: { value: true, message: "סיסמא היא שדה חובה" },
            pattern: {
                value: /[A-Z]{1,}/&&/[a-z]{1,}/&&/[0-9]{1,0}/&&/[!*@$#&]{1,}/, message: "!הסיסמא צריכה להכיל אות גדולה, אות קטנה, מספר וסימן"
            }
        })}> </TextField> {errors.password && <div className="err-msg" style={{color:"red"}}>
        {errors.password.message}</div>}</div>
        <Button style={{backgroundColor:"rgb(251, 251, 243)",color: "black",fontFamily:"system-ui",fontSize: "1vw"}} variant="contained" onClick={handleSubmit(sendToServer)}>התחבר</Button>
        </Box>} 
    </form>
   
    </>
}