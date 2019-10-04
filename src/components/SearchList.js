import React from 'react';
import SearchResult from './SearchResult';

const SearchList = ({searchlist,filter}) => {
    const filtr = filter.toUpperCase();
    const searchData = searchlist
    .filter((user)=>{
        return   user.name.toUpperCase().indexOf(filtr) !== -1
    })
    .map((user,index,arr)=>{

        return  <SearchResult data={user} key = {index}/>
        
    });

    if(searchData.length!== 0){

    return (
        
        <div className="container">
        <div className="row mt-3 ">
            <div className="col-md-4 border">Id</div>
            <div className="col-md-4 border">Name</div>
            <div className="col-md-4 border">Gender</div>
        </div>
         {searchData}

        </div>

    );
    }else{
      return  <div><h2>Sorry No Matches found</h2></div>
    }

}

export default SearchList;
