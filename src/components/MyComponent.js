
import React from 'react';

class MyComponent extends React.Component {

    handleClick(event) {
        console.log(event.target)
    }

    handleOnMoveOver(event) {
        console.log(event.pageX)
    }

    //JSX
    render() {
        return (
            <div>
                <h1>Hello React Class Component</h1>
                <button onClick={this.handleClick}>One Click</button>
                <br />
                <button onClick={this.handleOnMoveOver}>Two Click</button>
            </div>
        );
    }
}
export default MyComponent;