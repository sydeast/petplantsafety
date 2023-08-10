import React, {Component, useState } from 'react';
import SearchList from './searchlist';
import Scroll from './scrolltemp';
import { connect, useSelector } from 'react-redux';
import { searchPlants } from '../../actions/actions';

class Search extends Component {
    // state ={
    //     searchTerm: '',
    //     searchResults: []
    //     showSearch: false
    // }
//   function Search() {

  constructor(props) {
      super(props);
      this.state = {
          searchTerm: '',
          showSearch: false,
         searchResults: []
        }
      this.handleToggleClick = this.handleToggleClick.bind(this);
  }
  // <div className="Search">
  //   <p> here her here</p>
  // </div>

  // // use state
  // const [searchField, setSearchField] = useState("");

  // //

 
  handleToggleClick() {
    this.setState(state => ({
      showSearch: true
    }));
  }

   handleChange = e => {
    this.setState({
        searchTerm: e.target.value
    });
};

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.searchPlants(this.state.searchTerm)
    this.handleToggleClick()

}

render() {
    const {searchResults} = this.props;
    return (
        <div className="search-form">
            <form onSubmit={this.handleSubmit}>
                <h3>
                    <label>
                    What plant would you like to find?
                    </label>
                    
                </h3>
                <p>
                <input 
                    type="text" 
                    name="q" 
                    placeholder="Enter a name here" 
                    onChange={this.handleChange} 
                    value={this.state.plant_item}/>
                <input type="submit" value="search" />
                </p>
            </form>
            
        </div>
    );
    }
}

const mapStateToProps = (state) => {
  return {
    searchResults: state.searchResults
  };
};

export default connect(mapStateToProps, {searchPlants})(Search);