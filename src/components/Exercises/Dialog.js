import React from 'react'
import AddIcon from '@material-ui/icons/AddCircle';
import {Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import Form from './Form';

export default class extends React.Component {

  constructor(props) {
    super(props)
  
    this.state = {
       open:false
    }
  }
  
  
  handleToggle = () => {
    this.setState({
      open : !this.state.open
    })
  }
  
  handleSubmit = (exercise) => {
    this.props.handleSubmit(exercise)
    this.handleToggle()
  }
  
  render(){
    const {open} = this.state
    return (
      <>
        <IconButton onClick={this.handleToggle} variant='fab' color='inherit' >
          <AddIcon />
        </IconButton>
        <Dialog
        open={open}
        onClose={this.handleToggle}
        >
        <DialogTitle id="alert-dialog-title">
            Creat a new Exercise
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            pleas fill out the form below
          </DialogContentText>
        <Form
          handleSubmit={this.handleSubmit}
        />
        </DialogContent>
        <DialogActions>
         
        </DialogActions>
      </Dialog>  
      </>
    )
  }
}
