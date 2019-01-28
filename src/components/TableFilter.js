import React from 'react';

const TableFilter = (props) =>(
    <div>
        <div className="form-group">
            <label>Filter By User Id:</label>
            <select onChange={(e) => {props.handleSelectFilterOption(e.target.value)} }>
                <option value={"none"}>All</option>
                { props.options && props.options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>)
                    ) 
                }
            </select>
        </div>
    </div>
   );

export default TableFilter;