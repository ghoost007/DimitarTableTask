import React from 'react';

const TableHeader = (props) =>(
    <thead>
        <tr className="table-header-row">
            { props.headers && props.headers.map((header, index) => (
                <th key={index}>{header}</th>)
                ) 
            }
        </tr>
    </thead>
);

export default TableHeader;