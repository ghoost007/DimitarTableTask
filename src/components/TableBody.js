import React from 'react';

const TableRow = (props) =>(
    <tr className="table-body-row">
        <td>{props.data.id}</td>
        <td contentEditable suppressContentEditableWarning 
            onBlur={(e) => props.handleUpdateRow({id:props.data.id, prop: 'userId', value: e.target.innerHTML})}>
            {props.data.userId}
        </td>
        <td contentEditable suppressContentEditableWarning 
            onBlur={(e) => props.handleUpdateRow({id:props.data.id, prop: 'title', value: e.target.innerHTML})}>
            {props.data.title}</td>
        <td contentEditable suppressContentEditableWarning
            onBlur={(e) => props.handleUpdateRow({id:props.data.id, prop: 'body', value: e.target.innerHTML})}>
            {props.data.body}
        </td>
        <td><button className="button" onClick={(e) => {props.handleDeleteRow(props.data.id)}}>Remove</button></td>
    </tr>
)

const TableBody= (props) =>(
    <tbody className="table-content">
        { props.data && props.data.map((item, index) => (
                <TableRow key={index}
                    data={item}
                    handleDeleteRow={props.handleDeleteRow}
                    handleUpdateRow={props.handleUpdateRow}
                />
            )) 
        }
    </tbody>
);

export default TableBody;