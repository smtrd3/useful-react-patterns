import React, { Component } from "react";

// List presentational component
class List extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>
                        {item.first_name} {item.last_name}
                    </li>
                ))}
            </ul>
        );
    }
}

// container component
class ListContainer extends React.Component {
    state = {
        items: []
    };

    async componentDidMount() {
        let res = await fetch(`https://reqres.in/api/users?per_page=10&page=1`);
        let json = await res.json();
        this.setState({ items: json.data });
    }

    render() {
        return <List items={this.state.items} />;
    }
}

class App extends Component {
    ref = React.createRef();

    state = {
        value: ""
    };

    render() {
        return (
            <div className="demo first">
                <h1 className="title">Container</h1>
                <ListContainer />
                <div>
                    <button onClick={this.submit}>Submit</button>
                </div>
            </div>
        );
    }
}

export default App;
