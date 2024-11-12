import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import { Box, Button, Typography } from '@mui/material';


class Comp3 extends Component{
    constructor(){
        super();
        this.state = {
            text:"",
            countRes:0,
        }
    }

    textChange = (e)=>{
        //console.log(e.target.value);
        this.setState({text:e.target.value});        
    }

    handleSubmit = ()=>{
      console.log(this.state.text);
      let count = this.state.text.length;
      console.log(count);
      this.setState({countRes:count});
    }

    render(){
        return(
            <>
            <Box  sx={{padding:4}} >
                <Typography variant='h5' sx={{margin:2}}  > Count : {this.state.countRes} </Typography>
             <TextField label="Text" variant="outlined"  onChange={this.textChange}  fullWidth />
             <Button variant='contained' sx={{marginTop:2}} fullWidth  size='large' onClick={this.handleSubmit}>Submit</Button>
            </Box>
            </>
        )
    }

}


export default Comp3;