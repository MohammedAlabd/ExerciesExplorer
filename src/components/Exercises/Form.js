import React, { Component } from 'react'
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, withStyles } from '@material-ui/core'
import {muscles} from "../../store" 


const styles = theme => ({
    formControl:{
        width:300
    }
}) 

export default withStyles(styles) (class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title:"",
             description:"",
             muscles:""
        }
    }
    
    handleChange = name => event => {
        this.setState({
            [name]:event.target.value
        })
    }

    handleSubmit = () => {
    console.log("done");

        this.props.handleSubmit({
            id:this.state.title.toLocaleLowerCase().concat("-"),
            ...this.state
        })
    }
    
    render() {
        const {classes} = this.props
        return (
            <form>
                <TextField onChange={this.handleChange('title')} className={classes.formControl} required margin="normal"  label="title" /> <br/>
                <FormControl className={classes.formControl} >
                    <InputLabel htmlFor={muscles} >Muscles</InputLabel>
                        <Select
                        value={muscles}
                        onChange={this.handleChange('muscles')}
                        >
                            {muscles.map( group =>
                                <MenuItem key ={group} value={group}>
                                    {group}
                                </MenuItem>
                            )}
                        </Select>
                </FormControl> <br/>
                <TextField onChange={this.handleChange('description')} className={classes.formControl} required margin="normal" multiline rows='4' label="description"/> <br/>
                <Button onClick={this.handleSubmit} color="primary" variant="contained">
                    Create
                </Button>
            </form>
        )
    }
})
