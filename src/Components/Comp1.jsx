import React, { Component } from 'react';

class Comp1 extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    handleCLick = () => {
        this.setState({ count: this.state.count + 1 })
    }


    render() {
        return (
            <>
                <h2>hello my name is {this.state.count}</h2>
                <button onClick={this.handleCLick} >click</button>
            </>
        )
    }
}

export default Comp1;