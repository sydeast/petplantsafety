import React, {Component, useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { fetchPlants, searchPlants } from '../../actions/actions';
import Searchlist from './searchResultsList';
import { useErrorBoundary } from "react-error-boundary";


class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: '',
            showSearch: false,
  
          }
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(state => ({
          showSearch: true        }));
    };
    
    handleChange = e => {
        this.setState({
            searchTerm: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.searchPlants(this.state.searchTerm)
        this.handleToggleClick()
        
        
    };

    randomKey = Math.floor(Math.random() * 3000);
    
    
    

    render() {
        return (
            <div className="search-form">
                <form >
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
                            value={this.state.searchTerm}
                            />
                        <button onClick={e => 
                            {
                                this.handleSubmit(e)
                                
                                
                            }}>Search</button>
                    </p>
                </form>
               
                <div className='resultsSearch'>
                 {this.state.showSearch ? 

                 <Searchlist results={this.props.plants.searchResults} /> :
                 <div>Results will display here</div>
                 }
                </div>
            </div>
            

        );

        }
}
const mapStateToProps = ({plants}) => ({plants});
export default connect(mapStateToProps, {searchPlants})(Search);