import React, { Component } from 'react';
import { Box, AppBar, Toolbar, Typography, Button, Stack } from '@mui/material';

class Comp4 extends Component {
    constructor() {
        super();
        this.state = {
            showContent: null,
        };
    }

    handleJS = () => {
        this.setState({ showContent: 'JS' });
    }

    handleRe = () => {
        this.setState({ showContent: 'React' });
    }

    render() {
        return (
            <>
                <Box>
                    <AppBar position='fixed'>
                        <Toolbar>
                            <Typography variant='h5'>Vector Skill Academy</Typography>
                        </Toolbar>
                    </AppBar>
                    <Box sx={{ width: "100%", height: "100vh", mt: 15 }}>
                        <Stack direction={'row'} spacing={2} p={2}>
                            <Button variant="outlined" onClick={this.handleJS}>JavaScript</Button>
                            <Button variant="outlined" onClick={this.handleRe}>React</Button>
                        </Stack>

                        {this.state.showContent === 'JS' && (
                            <Box m={4} sx={{ border: "2px solid red", width: "80%", height: "20vh" }}>
                                <Typography variant='h4'>JavaScript</Typography>
                                <Typography variant='body1'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit alias harum totam sed veritatis odio illum esse similique accusamus...
                                </Typography>
                            </Box>
                        )}

                        {this.state.showContent === 'React' && (
                            <Box m={4} sx={{ border: "2px solid red", width: "80%", height: "20vh" }}>
                                <Typography variant='h4'>React</Typography>
                                <Typography variant='body1'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit alias harum totam sed veritatis odio illum esse similique accusamus...
                                </Typography>
                            </Box>
                        )}
                    </Box>
                </Box>
            </>
        );
    }
}

export default Comp4;
