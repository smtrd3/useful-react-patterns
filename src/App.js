import React, { Component } from "react";

class FilterableList extends React.Component {
    state = {
        filter: "",
        items: [],
        loading: true
    };

    async componentDidMount() {
        let res = await fetch(`https://reqres.in/api/users?per_page=20&page=1`);
        let json = await res.json();
        setTimeout(() => {
            this.setState({ items: json.data, loading: false });
        }, 1000);
    }

    render() {
        let { items, loading, filter } = this.state;
        return (
            <div>
                <div>
                    <label>Filter list</label>
                    <input
                        value={filter}
                        onChange={e =>
                            this.setState({ filter: e.target.value })
                        }
                    />
                </div>
                <div>
                    {loading && (
                        <div className="row loading">Loading Users...</div>
                    )}
                    {items
                        .filter(item => item.first_name.toLowerCase().startsWith(filter))
                        .map(item => (
                            <div key={item.id} className="row">
                                {this.props.render(item)}
                            </div>
                        ))}
                </div>
            </div>
        );
    }
}

class App extends Component {
    render() {
        return (
            <div className="demo ch-4">
                <h1 className="title">Render Props</h1>
                <FilterableList
                    render={item => (
                        <div>
                            {item.first_name} {item.last_name}
                        </div>
                    )}
                />
            </div>
        );
    }
}

export default App;





/*
<div className="custom-row">
    <img src={item.avatar} />
    <span className="name" style={{ color: 'red' }}>
        {item.first_name} {item.last_name}
    </span>
</div>
*/