import React from "react";
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFilter from "./TableFilter";
import AppHeader from "./Header";

export default class TableApp extends React.Component {
    state = {
        initialData: [], // data that comes from the server
        filterData: [], // values used as options in select filter 
        selectedFilter: 'none', // selected value to filter, none by default
        tableHeaders: ['Id','User Id', 'Title', 'Body', '' ],// array specifying columns headers 
        tableBody: [], // data which is manipulated; 
    };
    filterTable() {
        let filterOption = this.state.selectedFilter;
        let tableBody = [];
        if(filterOption == "none"){
            tableBody = this.state.initialData
        }
        else{
            tableBody = this.state.initialData.filter((option) => filterOption == option.userId);
        }
        this.setState(()=>({ tableBody }))
    }
    handleSelectFilterOption = (selectedFilter) =>{
        this.setState(() => ({ selectedFilter }),()=> this.filterTable());
    }
    handleDeleteRow = (idToRemove) => {
        this.setState((prevState) => ({
            initialData: prevState.initialData.filter((option) => idToRemove !== option.id)
        }), this.filterTable);
    };
    handleUpdateRow = (updateData)=>{
        this.setState((state) => {
            const data = state.tableBody.map((item) =>{
                if(item.id == updateData.id){
                    item[updateData.prop] = updateData.value
                    return item
                }
                else return item
            })
            return data
        });
    }
    componentDidMount() {
        try {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => this.setState(
                { initialData: data,
                  filterData: [...new Set(data.map((item) => item.userId ) )]
                 })
            )
            .then(() => this.filterTable());
      
        } catch (e) {
          // Do nothing at all
        }
    };
    render(){
       return(
            <div>
                <AppHeader />
                <div className="container">
                    <TableFilter options={this.state.filterData} handleSelectFilterOption={this.handleSelectFilterOption}/>
                    <div className="table-wrapper">  
                        <table>
                            <TableHeader headers={this.state.tableHeaders} />
                            <TableBody data={this.state.tableBody}
                             handleDeleteRow={this.handleDeleteRow} 
                             handleUpdateRow={this.handleUpdateRow}
                            />
                        </table>    
                    </div>
                    <div className="app-footer"></div>
                </div>
            </div>
        );
    }
}

