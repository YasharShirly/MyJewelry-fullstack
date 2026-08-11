import query from "../db/db.js"
export async function getAllProducts(req,res){
    try{
        let s=req.query.s;
        let page=req.query.page||1;
        let perpage=req.query.perpage||10;
        let q ="select * , Date_format(createDate, '%Y-%m-%d') as 'newDate' from products where isActive='1' ";
        if(s){

            q+=" and name like '%"+s+"%' or discrep like '%"+s+"%'";}
        let toprice=req.query.toprice;
        if(toprice)
            if(s)
                q+=" and price <"+toprice;
        q+=" limit "+perpage+" offset "+(page-1)*perpage;
        console.log(q);
        let result=await query(q);
        res.json(result[0]);   
    }
    catch(err){
        return res.status(400).send("מצטערים אי אפשר לשלוף את כל המוצרים " + err.message)
    }

}

export async function getProdById(req,res){
    let id=req.params.id;
    try{
    let result=await query("select * from products where idproducts ="+id)
    if(result[0].length==0)
        return res.status(404).send("מצטערים אין מוצר עם כזה קוד");
    res.json(result[0][0])
    }
    catch(err){
        res.status(400).send("מצטערים אי אפשר לשלוף מוצר לפי קוד" + err.message)
    }

}

export async function updateProd(req,res){
    let { body } = req;
    let str = "update products set ";
    if (body.price)
        str += "price='" + body.price + "',"
    if (body.name)
        str += " name='" + body.name + "',";
    if (body.discrep)
        str += " discrep='" + body.discrep+"'";
    str.substring(0,str.length-1)
    str += " where idproducts="+req.params.id;
    try {
        let result = await query(str);
        if (result[0].affectedRows == 0)
            return res.status(404).send("אי אפשר לעדכן כזה מוצר")
        let result2 = await query("select * from products where idproducts=" + req.params.id)
        return res.json(result2[0][0])
    }
    catch (err) {
        res.status(400).send("מצטערים אי אפשר לעדכן מוצר " + err.message)
    }
}

export async function getProdByIdCategory(req, res) {

    try {
        let idcategory = req.params.id;
        let result = await query("select * from products as p join category as c on p.idcategory=c.idcategory where p.idcategory=" + idcategory);

        res.json(result[0]);
    }
    catch (err) {
        res.status(400).send(" מצטערים אי אפשר להשלוף מוצר לפי קוד קטגוריה " + err.message)
    }
}

export const addProd = async (req, res) => {
    console.log(req)
    let body = req.body;
    if (!body.name || !body.price || !body.size||!body.discrep||!body.idcategory)
        return res.status(404).send("name price size discrep idcategory imgUrl are required");
    try {
        let result = await query(`insert into products (name,price,color,size,discrep,idcategory,createDate,imgUrl) 
            values("${body.name}",'${body.price}','${body.color}','${body.size}','${body.discrep}','${body.idcategory}','${body.createDate}','${body.imgUrl}')`);
        if (result[0].affectedRows == 0)
            return res.status(404).send("אי אפשר להוסיף כזה מוצר")
        return res.json({
            name: body.name,
            price: body.price,
            color: body.color,
            size: body.size,
            discrep: body.discrep,
            idcategory: body.idcategory,
            createDate: body.createDate,
            imgUrl:body.imgUrl,
            id: result[0].insertId
        });
    }
    catch (err) {
        res.status(400).send("מצטערים אי אפשר להוסיף מוצר   " + err.message)
    }


}

export async function deleteById(req,res){
    let id=req.params.id;
    let result=await query("update products set isActive=false where idproducts="+id)
    // let result=await query("delete from products where idproducts="+id)
    if(result[0].affectedRows==0)
        return res.status(404).send("מצטערים אין מוצר עם כזה קוד")
    res.send("נמחק בהצלחה")
}

export const totalPages=async(req,res)=>{
    try{
        let s=req.query.s;
        let perpage = req.query.perpage||10;
        let q="select count(*) from products where isActive='1' ";
        if(s)
            q+=" and name like '%"+s+"%' or discrep like '%"+s+"%'";
        let toprice=req.query.toprice;
        if(toprice)
            if(s)
                q+=" and price <"+toprice;
            else 
                q+=" and price <"+toprice;
        let result=await query(q);
        return res.json({totalPages: Math.ceil(result[0][0]["count(*)"]/perpage)});
    }
    catch(err){
        return res.status(400).send("תקלה בשליפת מוצרים",err.message)
    }
}