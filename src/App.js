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
            <div className="demo ch-1">
                <h1 className="title">Controlled component</h1>
                {/* <code>
                  { JSON.stringify(this.state, null, 2) }
                </code> */}
                <div className="uncontrolled-input">
                    <label>Uncontrolled component</label>
                    <input placeholder="Uncontrolled Component" ref={this.ref} />
                </div>
                <div className="controlled-input">
                    <label>Controlled component</label>
                    <input
                        placeholder="Controlled Component"
                        value={value}
                        onChange={e => this.setState({ value: e.target.value })}
                    />
                </div>
                <div>
                    <button onClick={this.submit}>Submit</button>
                </div>
            </div>
        );
    }
}

export default App;
