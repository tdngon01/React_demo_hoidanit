
import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: "Anhba",
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
    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })

    }
    handSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }
    //JSX
    render() {
        return (
            <div>
                <h1>Hello React Class Component</h1>
                <button onClick={(event) => { this.handleClick(event) }}>One Click</button>
                <br />
                <button onClick={this.handleOnMoveOver}>Two Click</button>
                <form onSubmit={(event) => this.handSubmit(event)}>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />


                    <button>
                        click one
                    </button>
                </form>
            </div>
        );
    }
}
export default MyComponent;