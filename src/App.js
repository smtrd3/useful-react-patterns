import React, { Component } from "react";

// List presentational component
class List extends React.Component {
    render() {
        let { items, loading } = this.props;
        return (
            <ul>
                { loading && <li>Loading Users ...</li>}
                {items.map(item => (
                    <li key={item.id}>
                        {item.first_name} {item.last_name}
                    </li>
                ))}
            </ul>
        );
    }
}

// withUser HOC factory
const withUsers = ComposedComponent => class extends React.Component {
    state = {
        items: [],
        loading: true
    };

    async componentDidMount() {
        let res = await fetch(`https://reqres.in/api/users?per_page=10&page=1`);
        let json = await res.json();
        setTimeout(() => {
            this.setState({ items: json.data, loading: false });
        }, 1000);
    }

    render() { 
        let { items, loading } = this.state;

        return (
            <ComposedComponent {...this.props} items={items} loading={loading}/>
        )
    }
};

// enhanced/composed List component
const ListWithUsers = withUsers(List)

class App extends Component {
    ref = React.createRef();

    state = {
        value: ""
    };

    render() {
        return (
            <div className="demo ch-3">
                <h1 className="title">Container</h1>
                <ListWithUsers />
            </div>
        );
    }
}

export default App;


/*
async function getData() {
    let res = await fetch(`https://reqres.in/api/users?per_page=10&page=1`);
    let json = await res.json();
    return json.data
}
*/