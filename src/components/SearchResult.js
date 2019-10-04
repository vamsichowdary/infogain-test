import React from 'react';

const SearchResult = (props)=>{
    const {_id,name,gender} = props.data;

    return (

      
        <div className='row'>
            <div className="col-md-4 border">{_id}</div>
            <div className="col-md-4 border">{name}</div>
            <div className="col-md-4 border">{gender}</div>
        </div>
    );

}

export default SearchResult;