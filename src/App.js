import "./App.css";
import React, { Component } from "react";
import { CardList } from "./component/CardList/CardList.jsx";
import { Search } from "./component/Search/Search.jsx";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
      search: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((user) => this.setState({ monster: user }));
  }
  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };
  render() {
    const { monster, search } = this.state;
    const searchResult = monster.filter((monster) =>
      monster.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <div className="App">
        <h1>My Udemy React Application</h1>

        <Search
          placeholder="Search monsters"
          handleChange={this.handleChange}
        ></Search>

        <CardList monster={searchResult}></CardList>
      </div>
    );
  }
}
export default App;
