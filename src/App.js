import React, { Component } from "react";

class App extends Component {
    ref = React.createRef();

    state = {
        value: ""
    };

    submit = () => {
        alert(`Uncontrolled input value is "${this.ref.current.value}"`);
    };

    render() {
      let { value } = this.state 
        return (
            <div className="demo master">
               Nothing here
            </div>
        );
    }
}

export default App;
