import React, { Component } from "react";

class Dialog extends React.Component {
    static Header = function Header(props) {
        return <div className="dialog-header">{props.children}</div>;
    };

    static Body = function Body(props) {
        return <div className="dialog-body">{props.children}</div>;
    };

    static Actions = function Actions(props) {
        return <div className="dialog-actions">{props.children}</div>;
    };

    render() {
        let Content = {};
        React.Children.forEach(this.props.children, child => {
            Content[child.type.name] = child;
        });

        return (
            <div className="dialog">
                {Content.Header}
                {Content.Body}
                {Content.Actions}
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
                    <Dialog.Header>React common patterns</Dialog.Header>
                    <Dialog.Body>
                        In this chapter we'll discuss about another popular
                        react pattern named compound components. Compound
                        components is a pattern in which components are used
                        together such that they share an implicit state that
                        let's them communicate with each other in the
                        background.
                    </Dialog.Body>
                    <Dialog.Actions>
                        <button>Close</button>
                    </Dialog.Actions>
                </Dialog>
            </div>
        );
    }
}

export default App;

/*
const dialogHeader = `React common patterns`;

const dialogContent = `In this chapter we'll discuss about another popular react
pattern named compound components. Compound components is a
pattern in which components are used together such that they
share an implicit state that let's them communicate with
each other in the background.`;

//- Simple version
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

//- another example (implicit state sharing example)
//- try this in place of dialog
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
