import query from "../db/db.js"

export async function getAllOrders(req, res) {
    try {
        let result = await query("select * from orders ")
        res.json(result[0]);
    }
    catch (err) {
        res.status(400).send("מצטערים אי אפשר לשלוף את כל ההזמנות " + err.message)
    }
}

export async function getAllOrdersIsNotOut(req, res) {
    try {
        let result = await query("select * from orders where isOut=0")
        res.json(result[0]);
    }
    catch (err) {
        res.status(400).send(" מצטערים אי אפשר לשלוף את כל ההזמנות שלא יצאו לדרך" + err.message)
    }
}

export async function getOrderById(req, res) {
    let id = req.params.id;
    try {
        let result = await query("select * from orders where idorders=" + id)
        if (result[0].length == 0)
            return res.status(404).send("מצטערים אין הזמנה עם כזה קוד");
        res.json(result[0][0])
    }
    catch (err) {
        res.status(400).send("מצטערים אי אפשר לשלוף הזמנה לפי קוד" + err.message)
    }

}

// export const addOrder = async (req, res) => {
//     let body = req.body;
//     console.log(body)
//     if (!body.products || body.products.length == 0 || !body.user_code || !body.address)
//     return   res.status(404).send("חסרים נתונים כדי להוסיף הזמנה ")
//     let result = await query(`insert into orders (user_code,address,is_out) values(${body.user_code},"${body.address}",0)`);
//     console.log(result)
//     let orderid = result[0].insertId;
//     let str = "insert into productstoorder (order_id,product_id,amount) values"
//     let i = 0;
//     for (; i < body.n.length - 1; i++)
//         str += `(${body.products[i].id},${orderid},${body.products[i].qty}),`;
//     str += `(${body.products[i].id}, ${orderid},${body.products[i].qty});`;
//     console.log(body.products)
    
//     result = await query(str);
//     console.log(result)
//     res.json("הצליח להוסיף בהצלחה את ההזמנה לכל המוצרים שהתקבלו")

// }


export const addOrder = async (req, res) => {
    console.log(req.body)
    let body = req.body;
    if( body.products.length == 0 || !body.idusers || !body.address)
         return  res.status(404).send("חסרים נתונים כדי להוסיף הזמנה ")
    try {
        let result = await query(`insert into orders (iduser, isOut,address,dateOrder,dateArrive) values(${body.idusers},0,'${body.address}',now(),Date_add(now(),INTERVAL 7 DAY))`);
        console.log(result)
        let orderid = result[0].insertId;
        let str = "insert into prodfororder(orderid,prodid,qty) values"
        let i = 0;
        for (; i < body.products.length-1; i++)
            str += `(${orderid},${body.products[i].idproducts},${body.products[i].qty}),`;
        str += `(${orderid},${body.products[i].idproducts},${body.products[i].qty});`;
        console.log(body.products)

        result = await query(str);
        console.log(result)

        if (result[0].affectedRows == 0)
            return res.status(404).send("אי אפשר להוסיף כזה הזמנה")
        res.json("הצליח להוסיף בהצלחה את ההזמנה לכל המוצרים שהתקבלו")
    }
    catch (err) {
        console.log(err)
        res.status(400).send("מצטערים אי אפשר להוסיף הזמנה " + err.message)
    }
}

export async function updateOrder(req, res) {
    let { body } = req;
    let str = "update order set ";
    if (body.dateArrive)
        str += "dateArrive='" + body.dateArrive + "',"
    if (body.isOut)
        str += "isOut='" + body.isOut + "',";
    str.substring(0, str.length - 1)
    str += "where idorders=" + req.params.idorders;
    try {
        let result = await query(str);
        if (result[0].affectedRows == 0)
            return res.status(404).send("אי אפשר לעדכן הזמנה")
        let result2 = await query("select * from orders where idorders=" + req.params.idorders)
        return res.json(result2[0][0])
    }
    catch (err) {
        res.status(400).send("מצטערים אי אפשר לעדכן הזמנה " + err.message)
    }

}