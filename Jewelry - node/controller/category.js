import query from "../db/db.js"
export async function getAllcategorys(req,res){
    try{
        let result=await query("select * from category")
        res.json(result[0]);   
    }
    catch(err){
        res.status(400).send("מצטערים אי אפשר לשלוף את כל הקטגוריות " + err.message)
    }

}