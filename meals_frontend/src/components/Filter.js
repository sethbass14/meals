import React from 'react';

const Filter = (props) =>
  (
    <div className="filter">
      <div className="ui two column grid container">
        <div className="row">
          <div className="column">
            <a className="back"onClick={() => window.history.back()}>
              <i className="arrow circle left icon"></i>
              <p>Go Back</p>
            </a>
          </div>
          <div className="column">
            <label></label>
            <input type="text" placeholder="Search Meals" value={props.searchTerm} onChange={props.handleChange}></input>
          </div>
        </div>
      </div>
    </div>
  )


export default Filter
