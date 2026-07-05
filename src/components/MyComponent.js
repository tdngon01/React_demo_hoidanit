
import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: "Ngon",
        age: 18
    }


    handleClick(event) {
        this.setState({
            name: "VY"
        })
        console.log("My name is", this.state.name)
        console.log("random")

    }

    handleOnMoveOver = (event) => {
        console.log(event.pageX)
    }

    //JSX
    render() {
        return (
            <div>
                <h1>Hello React Class Component</h1>
                <button onClick={(event) => { this.handleClick(event) }}>One Click</button>
                <br />
                <button onClick={this.handleOnMoveOver}>Two Click</button>
            </div>
        );
    }
}
export default MyComponent;