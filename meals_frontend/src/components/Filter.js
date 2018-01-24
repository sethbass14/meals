import React from 'react';

const Filter = (props) =>
  (
    <div className="filter">
      <input type="text" placeholder="Search Meals" value={props.searchTerm} onChange={props.handleChange}></input>
    </div>
  )
export default Filter
