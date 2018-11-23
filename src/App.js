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
            <div className="demo first">
                <h1 className="title">Container</h1>
                {/* <code>
                  { JSON.stringify(this.state, null, 2) }
                </code> */}
                <div>
                    <button onClick={this.submit}>Submit</button>
                </div>
            </div>
        );
    }
}

export default App;
