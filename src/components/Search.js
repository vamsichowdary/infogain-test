import React, {Component} from 'react';
import SearchInput from './SearchInput';
import SearchList from './SearchList';
import {SearcList} from '../data/search-list';
class Search extends Component{

    constructor(props){
        super(props);
        this.state = {
            searchData:SearcList,
            filter:'',
            loading:''
        }
        this.getFilterData = this.getFilterData.bind(this);
    }
    getFilterData(filter){
        
        this.setState({
            filter:filter,
        })
        
    } 

    render(){
        return(
            <div>
                <p>{this.state.loading}</p>
                <SearchInput getFilter={this.getFilterData}/>
                <SearchList  searchlist = {this.state.searchData} filter = {this.state.filter}/>
            </div>
        );
    }
}

export default Search;

