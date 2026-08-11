import axios from "axios";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { editProduct } from "./api/productService";
import './EditProduct.css'
import { Box, Button, MenuItem, TextField } from "@mui/material";
import { width } from "@mui/system";

export default function EditProduct({item,closeEdit}){
    let {register,formState,handleSubmit}=useForm({
    defaultValues: { idproducts:item.idproducts,name: item.name, price: item.price,color:item.color,size:item.size,discrep:item.discrep,idcategory:item.idcategory,newDate:item.newDate,imgUrl:item.imgUrl }});
    let user = useSelector(state => state.u.currentUser);

    const save = (data) => {
        alert(data)
        data.idproducts=item.idproducts;
        console.log(data)

        editProduct(data, user)
            .then(res => {
                console.log(res)
                alert("מוצר עודכן בהצלחה קיבל קוד " + res.data.idproducts)
            }).catch(err => {
                alert("תקלה בעדכון מוצר" + err.response.data)
                console.log(err)
            })
            closeEdit()
    }
    const cancle=()=>{
        closeEdit()
    }
   
    const currencies = [
        {
          value: '1',
          label: 'זהב',
        },
        {
          value: '2',
          label: 'כסף',
        },
      ];
  
      const categorys = [
          {
          value: '1',
          label: 'שרשראות',
        },
        {
          value: '2',
          label: 'טבעות',
        },
        {
          value: '3',
          label: 'צמידים',
        },
        {
          value: '4',
          label: 'עגילים',
        },
      ];

    return <div className="outer">

    <form className="edit" >        <h2>: עריכת מוצר</h2>
    <div  style={{display:"flex"}}><TextField label="שם מוצר" className="TF1" style={{margin:"15px"}} {...register("name",{required:{value:true,message:"שדה חובה"}})}></TextField>
        {formState.errors.name&&<div style={{color: "red" ,width:"5vw" ,height:"2.5vh" }}>{formState.errors.name.message}</div>}
        <TextField label="תיאור" className="TF1" style={{margin:"15px"}} {...register("discrep")}></TextField>
        <TextField label="מחיר" className="TF1" style={{margin:"15px"}}{...register("price",{required:{value:true,message:"שדה חובה"}})}></TextField>
        {formState.errors.price&&<div style={{color: "red" ,width:"5vw" ,height:"2.5vh" }}>{formState.errors.price.message}</div>}
    </div>
    <div style={{display:"flex"}}>
        <TextField label="מידה" className="TF1" style={{margin:"15px"}} {...register("size")}></TextField>
        <TextField label="תאריך ייצור" className="TF1" style={{margin:"15px"}} type="date" variant="outlined"slotProps={{inputLabel: {shrink: true,},
        }}defaultValue={item.newDate}{...register("newDate")}></TextField>
        
        <Box
        component="form"
        // sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off">
        <div>
            <TextField
            className="TF1"
            style={{margin:"15px"}}
            select
            label="צבע"
            defaultValue={item.color==(`זהב`)? 1 : 2}
            {...register("color")}
            >
            {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
            ))}
            </TextField>
        </div>
        </Box>
    </div>  
    <div style={{display:"flex"}}>
        <Box
        component="form"
        // sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off">
        <div>
            <TextField
            className="TF1"
            style={{margin:"15px"}}
            select
            label="קטגוריה"
            defaultValue={item.idcategory}
            {...register("idcategory")}
            >
            {categorys.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
            ))}
            </TextField>
        </div>
        </Box>
        <TextField label="ניתוב תמונה" className="TF1" style={{margin:"15px"}} {...register("imgUrl")}></TextField>
    </div>

        <Button style={{backgroundColor:"rgb(251, 251, 243)",color: "black",fontFamily:"system-ui",fontSize: "1vw",marginBottom:"10px"}} 
        variant="contained" onClick={cancle}>ביטול</Button>
        <Button className="bt" style={{backgroundColor:"rgb(251, 251, 243)",color: "black",fontFamily:"system-ui",fontSize: "1vw"}} 
        variant="contained" onClick={handleSubmit(save)}>שמור שינויים</Button>
    </form></div>
}
