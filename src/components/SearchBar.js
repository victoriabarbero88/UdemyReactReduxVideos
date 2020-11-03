import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment" style={{backgroundColor: 'lightcoral'}}>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label style={{alignItems: 'center'}}><img src="/pngwing.com (2).png" style={{maxWidth: 50}} alt=""></img>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
