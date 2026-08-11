import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import LittleCart from './LittleCart';
import { useSelector } from 'react-redux';

export default function AlertDialog() {
let open=useSelector(state=>state.c.isShow)



  return (
    <React.Fragment>
     
      <Dialog
        open={open}
       
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        
        <DialogContent>
        <LittleCart/>
        </DialogContent>
       
      </Dialog>
    </React.Fragment>
  );
}