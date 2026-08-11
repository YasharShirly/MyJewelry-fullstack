import { useDispatch, useSelector } from "react-redux";
import { addItem, closeOpen, openWindow } from "./features/cart/cartSlice";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import './OneProduct.css'
import { Delete } from "@mui/icons-material";
import { useState } from "react";
import EditProduct from "./EditProduct";
import { deleteProd } from "./api/productService";

export default function OneProduct(props) {
  let one = props.one;
  let u = useSelector(state => state.u.currentUser);
  let dispatch = useDispatch();
  let [productForEdit, setProductFromEdit] = useState(null)

  function DeleteProduct() {
    alert("delete")
    deleteProd(one, u)
      .then(res => {
        console.log(res)
        alert("המוצר" + res.data.idproducts + "נמחק בהצלחה")
        props.deleteFromList(one.idproducts);
      })
      .catch(err => {
        alert("תקלה במחיקת מוצר" + err.message)
      })
  }

  return <div className="liImg">
    <Card variant="outlined" sx={{ maxWidth: 340, borderRadius: "2vw" }}>
      <Box sx={{ p: 1 }}>
        <Stack
          direction="column"
          sx={{ justifyContent: 'space-between', alignItems: 'center', margin: '15px' }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {one.name}
          </Typography>
          <Typography gutterBottom variant="h3" component="div">
            <img src={"images/" + one.imgUrl} />
          </Typography>
        </Stack>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {one.discrep}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 1 }}>
        <Typography gutterBottom variant="body2">

          {u && u.role == "ADMIN" ? <div>
            <Tooltip title="עריכת מוצר">
              <IconButton onClick={() => { setProductFromEdit(one) }}>
                <EditIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="מחיקת מוצר">
              <IconButton onClick={DeleteProduct}>
                <Delete />
              </IconButton>
            </Tooltip>
          </div> :
            <IconButton aria-label="delete" size="large" onClick={() => {
              dispatch(addItem(one));
              dispatch(openWindow(one))
              setTimeout(() => {
                dispatch(closeOpen(one))
              }, 1500)
            }}>
              <AddShoppingCartIcon fontSize="inherit" />
            </IconButton>}   ₪ {one.price}

        </Typography>
      </Box>
    </Card>


    {productForEdit && <EditProduct item={productForEdit} closeEdit={() => { setProductFromEdit(null) }} />}
    {/* {productForDelete && <DeleteProduct item={productForDelete} closeEdit={()=>{setProductFromDelete(null)}}/>} */}

  </div>

}