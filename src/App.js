import React, { Component } from "react";

const dialogHeader = `React common patterns`;

const dialogContent = `In this chapter we'll discuss about another popular react
pattern named compound components. Compound components is a
pattern in which components are used together such that they
share an implicit state that let's them communicate with
each other in the background.`;

class Dialog extends React.Component {
    render() {
        return (
            <div className="dialog">
                <div className="dialog-header">{dialogHeader}</div>
                <div className="dialog-body">{dialogContent}</div>
                <div className="dialog-actions">
                    <button>Close</button>
                </div>
            </div>
        );
    }
}

class App extends Component {
    render() {
        return (
            <div className="demo ch-5">
                <h1 className="title">Compound component</h1>
                <Dialog>
                    <span>Hello</span>
                    <b>Hello</b>
                </Dialog>
            </div>
        );
    }
}

export default App;


























/*
static Header = props => (
    <div className="dialog-header">{props.children}</div>
);

static Body = props => <div className="dialog-body">{props.children}</div>;

static Actions = props => (
    <div className="dialog-actions">{props.children}</div>
);

render() {
    return <div className="dialog">
        { this.props.children}
    </div>;
}



<Dialog.Header>{ dialogHeader }</Dialog.Header>
<Dialog.Body>
    {dialogContent}
</Dialog.Body>
<Dialog.Actions>
    <button>Close</button>
</Dialog.Actions>




// step 3:
let c = {}
React.Children.forEach(this.props.children, child => {
    c[child.type] = child
})




// implicit state sharing example
class Toggle extends React.Component {
    state = {
        on: false
    };
    static On = props =>
        props.on ? <div className="on">{props.children}</div> : null;
    static Off = props =>
        props.on ? null : <div className="off">{props.children}</div>;

    render() {
        let { on } = this.state;
        return (
            <div
                className="toggle"
                onClick={() =>
                    this.setState(currState => ({ on: !currState.on }))
                }
            >
                {React.Children.map(this.props.children, child =>
                    React.cloneElement(child, { on })
                )}
            </div>
        );
    }
}


*/
