import React, { Component } from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { Drawer, Grid2, Stack, Toolbar, Typography, Button, Select, MenuItem, FormControl, InputLabel , Dialog , DialogTitle , DialogContent , DialogActions } from '@mui/material';



class Comp2 extends Component {


    constructor() {
        super(),
            this.state = {
                dialogOpen: false,
                fname: "",
                email: "",
                password: "",
                mobile: "",
                batch: "",
                technology:"",
            }
    }

    formHandle = (e) => {
       // console.log(e.target.name, e.target.value);
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = () => {
        console.log("clicked");
        console.log(this.state);
        this.setState({dialogOpen:true});
    }

    handleDialogSubmit = ()=>{
        this.setState({dialogOpen:false});
    }




    render() {
        return (
            <>
                <Box sx={{ width: "100%", height: "100vh" }} >
                    <AppBar position='fixed'>
                        <Toolbar>
                            <Typography variant='h5'>Vector Skill academy</Typography>
                        </Toolbar>
                    </AppBar>
                    <Grid2 sx={{ mt: 10, display: 'flex', justifyContent: "center", alignItems: "center" }} >
                        <Paper elevation={5} sx={{ width: "80%", maxWidth: 900, padding: 4 }} >
                            <Grid2 textAlign={'center'} padding={2} >
                                <Typography variant='h5' >Create Student account</Typography>
                            </Grid2>
                            <Stack spacing={2} >
                                <TextField id="outlined-basic" label="Full Name" name='fname' variant="outlined" onChange={this.formHandle} fullWidth required />
                                <TextField id="outlined-basic" label="email" name='email' variant="outlined" onChange={this.formHandle} fullWidth required />
                                <TextField id="outlined-basic" label="password" name='password' type='password' onChange={this.formHandle} variant="outlined" fullWidth required />
                                <TextField id="outlined-basic" label="Mobile number" name='mobile' type='number' onChange={this.formHandle} variant="outlined" fullWidth />
                                <Stack direction="row" spacing={2} >
                                    <FormControl fullWidth >
                                        <InputLabel>Batch</InputLabel>
                                        <Select label="batch" name='batch' value={this.state.batch}  onChange={this.formHandle}  fullWidth  >
                                            <MenuItem value="online">Online</MenuItem>
                                            <MenuItem value="offline">Offline</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl fullWidth >
                                        <InputLabel>Technology</InputLabel>
                                        <Select label="Technology" name="technology"  value={this.state.technology} onChange={this.formHandle}  fullWidth  >
                                            <MenuItem value="fullstack"> FullStack batch </MenuItem>
                                            <MenuItem value="frontend">Frontend batch</MenuItem>
                                            <MenuItem value="devops">Devops batch</MenuItem>
                                            <MenuItem value="backend">Backend batch</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Stack>
                                <Button variant="contained" size='large' sx={{ backgroundColor: "green" }} onClick={this.handleSubmit}  >submit</Button>
                                <Dialog open={this.state.dialogOpen} onClose={this.handleSubmit} fullWidth   >
                                    <DialogTitle>Student Data</DialogTitle>
                                    <DialogContent>
                                        <Stack spacing={2} margin={2} >
                                           <Typography variant='h6' >FirstName : {this.state.fname} </Typography>
                                           <Typography variant='h6' >Email : {this.state.email} </Typography>
                                           <Typography variant='h6' >Password : {this.state.password} </Typography>
                                           <Typography variant='h6' >Mobile : {this.state.mobile} </Typography>
                                           <Typography variant='h6' >Batch : {this.state.batch} </Typography>
                                           <Typography variant='h6' >Technology: {this.state.technology} </Typography>
                                        </Stack>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={this.handleDialogSubmit}  >Close</Button>
                                    </DialogActions>
                                    </Dialog>
                            </Stack>
                        </Paper>
                    </Grid2>
                </Box>
            </>
        )
    }
}
export default Comp2;