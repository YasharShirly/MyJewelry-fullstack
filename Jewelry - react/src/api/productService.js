import axios from "axios"

// let baseUrl = "http://localhost:5000/prouduct"

// export const getAllProducts = (pageNum) => {
//     return axios.get(baseUrl + `?page=${pageNum}&perpage=3`)
// }

// export const getTotalPages = () => {
//     return axios.get(baseUrl + "/totalPages?perpage=3")
// }

export const deleteProd=(data,user)=>{
    return  axios.delete("http://localhost:5000/prouduct/"+data.idproducts,{
        headers: {
            authorization: user?.token
    }})
}

export const addProduct=(data,user)=>{
    return axios.post("http://localhost:5000/prouduct", data, {
             headers: {
                 authorization: user?.token
             }
         })
}
 
 export const editProduct=(data,user)=>{
     return axios.put("http://localhost:5000/prouduct/"+data.idproducts, data, {
         headers: {
             authorization: user?.token
         }
     })
 
}