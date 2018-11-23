import React, { Component } from "react";

// List presentational component
class List extends React.Component {
    render() {
        let { items, loading } = this.props
        return (
            <ul>
                {loading && <li>Loading users list...</li>}
                {items.map(item => (
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
        items: [],
        loading: true
    };

    async componentDidMount() {
        let res = await fetch(`https://reqres.in/api/users?per_page=10&page=1`);
        let json = await res.json();
        setTimeout(() => {
            this.setState({ items: json.data, loading: false });
        }, 1000)
    }

    render() {
        let { items, loading } = this.state
        return <List items={items} loading={loading}/>;
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
            </div>
        );
    }
}

export default App;
