import React from 'react';

const TableFilter = (props) =>(
    <div>
        <select onChange={(e) => {props.handleSelectFilterOption(e.target.value)} }>
            <option value={"none"}>All</option>
            { props.options && props.options.map((option, index) => (
                <option key={index} value={option}>{option}</option>)
                ) 
            }
        </select>
    </div>
   );

export default TableFilter;