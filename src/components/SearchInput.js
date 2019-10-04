import React from 'react';
import InputTextBox from './InputTextBox';

const SearchInput = (props) =>{

   const searchSubmit = (filter) => {
     props.getFilter(filter);
    }


return (

    <>
        <InputTextBox inputSubmit={searchSubmit}/>
    </>

)

}



export default SearchInput;