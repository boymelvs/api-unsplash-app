import React from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";

class App extends React.Component {
   state = { data: [] };

   onSearch = async (query) => {
      const res = await axios.get("https://api.unsplash.com/search/photos", {
         headers: { Authorization: "Client-ID Wc8mJstv96FVSon0AoTvDDLo4k_QW_wUIPZ3cACx0nE" },
         params: { query: query, per_page: 25, order_by: "latest" },
      });

      this.setState({ data: res.data.results });
   };

   render() {
      return (
         <main>
            <SearchBar onSearch={this.onSearch} />
            <Card datas={this.state.data} />
         </main>
      );
   }
}

export default App;
