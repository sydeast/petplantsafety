import React, {Component} from 'react';
import SearchList from './searchlist';
import Scroll from './scrolltemp';
import { connect } from 'react-redux';
import { searchPlants } from '../../actions/actions';

class Search extends Component {

  constructor(props) {
      super(props);
      this.state = {
          searchTerm: '',
          showSearch: false,
          searchResults: ''
      }
      this.handleToggleClick = this.handleToggleClick.bind(this);
  }
  // <div className="Search">
  //   <p> here her here</p>
  // </div>

  // // use state
  // const [searchField, setSearchField] = useState("");

  // //


  // const handleChange = e => {
  //   setSearchField(e.target.value);
  // };

  // function searchList() {
  //   return (
  //     <Scroll>
  //       <SearchList filteredPlants={filteredPlants} />
  //     </Scroll>
  //   )

  // };

  // return (
  //   <section className="garamond">
  //   <div className="navy georgia ma0 grow">
  //     <h2 className="f2">Search your course</h2>
  //   </div>
  //   <div className="pa2">
  //     <input 
  //       className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
  //       type = "search" 
  //       placeholder = "Search People" 
  //       onChange = {handleChange}
  //     />
  //   </div>
  //   {searchList()}
  // </section>
  // )
 
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

  handleSubmit = e => {
    e.preventDefault()
    this.props.searchPlants(this.state.searchTerm)
    this.handleToggleClick()

}

render() {
  let searchResults = ''
    return (
        <div className="search-form">
            <form onSubmit={this.handleSubmit}>
                <h3>
                    <label>
                    What plant would you like to find?
                    </label>
                    
                </h3>
                <p>
                <input type="text" name="q" placeholder="Enter a name here" onChange={this.handleChange} value={this.state.plant_item}/>
                <input type="submit" value="search" />
                </p>
            </form>
            
        </div>
    );
    }
}

export default connect(null, {searchPlants})(Search);