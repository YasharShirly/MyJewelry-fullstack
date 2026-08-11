import axios from "axios";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { addProduct } from "./api/productService";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button } from "@mui/material";
import './AddProductForm.css'
import { width } from "@mui/system";

export default function AddProductForm(){
    let {register,formState,handleSubmit}=useForm();
    let user=useSelector((state=>state.u.currentUser));
    
    const save=(data)=>{
        alert(data)
        console.log(data);
        addProduct(data,user)
        .then(res=>{
            console.log(res);
            alert(" מוצר נוסף בהצלחה קיבל קוד"+res.data.id)
        }).catch(err=>{
            alert("תקלה בהוספת קורס"+err.message)
            console.log(err);
        })
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
    

    return <> <h2> : מלא פרטי הוספת המוצר</h2>
    <form className="addM" >
        <div style={{display:"flex"}}><TextField label="שם מוצר" className="TF" style={{margin:"15px"}} {...register("name",{required:{value:true,message:"שדה חובה"}})}></TextField>
        <br />{formState.errors.name&&<div style={{color: "red" ,width:"5vw" ,height:"2.5vh" }}>{formState.errors.name.message}</div>}
        <TextField label="מחיר" className="TF" style={{margin:"15px"}}{...register("price",{required:{value:true,message:"שדה חובה"}})}></TextField>
        {formState.errors.price&&<div style={{color: "red" ,width:"5vw",height:"2.5vh"}}>{formState.errors.price.message}</div>}</div>
        <div style={{display:"flex"}}><TextField label="תיאור" className="TF" style={{margin:"15px"}} {...register("discrep")}></TextField>
        <TextField label="מידה" className="TF" style={{margin:"15px"}} {...register("size")}></TextField></div>
        <div style={{display:"flex"}}><TextField label="תאריך ייצור" className="TF" style={{margin:"15px"}} type="date" variant="outlined"slotProps={{inputLabel: {shrink: true,},
        }}{...register("createDate")}></TextField>
        <Box
        component="form"
        // sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off">
        <div>
            <TextField
            className="TF"
            style={{margin:"15px"}}
            select
            label="צבע"
            defaultValue=""
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
        <div style={{display:"flex"}}><Box
        component="form"
        // sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off">
        <div>
            <TextField
            className="TF"
            style={{margin:"15px"}}
            select
            label="קטגוריה"
            defaultValue=""
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
        
        <TextField label="ניתוב תמונה" className="TF" style={{margin:"15px"}} {...register("imgUrl")}></TextField></div>
        <Button style={{backgroundColor:"rgb(251, 251, 243)",color: "black",fontFamily:"system-ui",fontSize: "1vw"}} 
        variant="contained" onClick={handleSubmit(save)}>שליחה</Button>

    </form></>
}