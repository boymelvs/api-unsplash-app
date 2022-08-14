import React from "react";

class SearchBar extends React.Component {
   state = { value: "" };

   onTyping = (e) => {
      this.setState({ value: e.target.value });
   };

   onFormSubmit = (e) => {
      e.preventDefault();
      this.props.onSearch(this.state.value);
   };

   render() {
      return (
         <form onSubmit={this.onFormSubmit}>
            <input type="text" className="search" id="search" placeholder="Search" value={this.state.value} onChange={this.onTyping} />

            <input type="submit" id="search-btn" value="Search" />
         </form>
      );
   }
}

export default SearchBar;
