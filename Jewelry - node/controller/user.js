import bcryptjs from "bcryptjs";
import query from "../db/db.js";
import { generateToken } from "../utils/help.js";
import { validatePassword, validateEmail} from "../ValidationHelper.js";

export async function getAllUsers(req,res){
    try{
        let result=await query("select * from users")
        res.json(result[0]);   
    }
    catch(err){
        res.status(400).send("מצטערים אי אפשר לשלוף את כל המשתמשים " + err.message)
    }

}
export async function getUserById(req,res){
    let id=req.params.id;
    try{
    let result=await query("select * from users where idusers="+id)
    if(result[0].length==0)
        return res.status(404).send("מצטערים אין משתמש עם כזה קוד");
    res.json(result[0][0])
    }
    catch(err){
        res.status(400).send("מצטערים אי אפשר לשלוף משתמש לפי קוד" + err.message)
    }

}

export async function loginUser(req,res){
    let { body } = req;
    if (!body.name || !body.password)
        return res.status(404).send("חסר שם משתמש או סיסמא")
    try {

        let result = await query("select * from users where name='" + body.name + "'" );
        if (result[0].length == 0)
            return res.status(404).send("לא נמצא משתמש עם פרטים כאלו")
        let isValidPassword=await bcryptjs.compare(body.password,result[0][0].password)
        if(!isValidPassword)
            return res.status(404).send("סיסמא שגויה");
        let{password,...resu}=result[0][0];
        resu.token=generateToken(resu)
        return res.json(resu);
    }
    catch (err) {
        res.status(400).send("מצטערים אי אפשר להשלוף את כל המשתמשים " + err.message)
    }
}

export const addUser=async(req,res)=>{
    let already=await query("select * from users where name like '"+req.body.name+"'");
    if(already[0].length>0)
        return res.status(409).send("כבר קיים משתמש עם שם כזה");
    let body=req.body;
    if(!body.name||!body.password||!body.mail)
        return res.status(404).send("name , password , mail are required");
    if(!validateEmail(body.mail))
        return res.status(404).send("not valid mail");
    if(!validatePassword(body.password))
        return res.status(404).send("not valid password");
    try{
        let hidenPassword=await bcryptjs.hash(body.password,12);
        let result=await query(`insert into users(name,password,mail) values('${body.name}','${hidenPassword}','${body.mail}')`);
        if(result[0].affectedRows==0)
            return res.status(404).send("אי אפשר להוסיף כזה משתמש");
        let u=({
            name:body.name,
            mail:body.mail,
            id:result[0].insertId,
            role:"USER"
        });
        u.token=generateToken(u);
        return res.json(u);
        
    }
    catch(err){
        res.status(400).send("מצטערים אי אפשר לעדכן משתמש " + err.message)
    }

}

export async function updateUser(req,res){
    let { body } = req;
    let str = "update user set ";
    if (body.mail)
        str += "mail='" + body.mail + "',"
    if (body.password)
        str += " password='" + body.password + "',";
    if (body.name)
        str += " name='" + body.name + "',";
    str.substring(0,str.length-1)
    str += "where id=" + req.params.idusers;
    try {
        let result = await query(str);
        if (result[0].affectedRows == 0)
            return res.status(404).send("אי אפשר לעדכן כזה משתמש")
        let result2 = await query("select * from users where id=" + req.params.idusers)
        return res.json(result2[0][0])
    }
    catch (err) {
        res.status(400).send("מצטערים אי אפשר לעדכן משתמש " + err.message)
    }

}
