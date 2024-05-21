import { Component } from 'react';

import AppInfo from '../app-info/app-info'; 
import SearchPanel from '../search-panel/search-panel'; 
import AppFilter from '../app-filter/app-filter'; 
import EmployeesList from '../empolyees-list/employees-list'; 
import EmployeesAddForm from '../employees-add-form/employees-add-form'; 

import './app.css'; 

// Реализовать фильтры и сделать домашнее заданее по инпуту
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Abdulrashid', salary: 450, increase: false, rise: true, id: 1}, 
                {name: 'Farhat', salary: 3500, increase: false, rise: false, id: 2},
                {name: 'Magomed', salary: 4450, increase: true, rise: false, id: 3},
            ], 
            term: '',
            filter: 'everything'
        };
        this.maxId = 4; 
    }

    onDelete = (id) => {
        this.setState(({data}) => ({
            data: data.filter(element => element.id !== id)
        }))
    }

    onAdd = (name, salary) => {
        const newItem = {
            name: name,
            salary: salary,
            increase: false,
            rise: false, 
            id: this.maxId++
        }
        
        this.setState(({data}) => {
            const newArr = [...data, newItem];

            return {
                data: newArr
            }
        })
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => { 
                if (item.id === id) { 
                    return {...item, [prop]: !item[prop]} 
                }
                return item;  
            })
        }))
    }
    
    searchEmp = (data, term) => {
        if (term.length === 0) {
            return data;
        }
        return data.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term: term});
    }


    filterBtn = (data, filter) => {
        switch (filter) {
            case 'rise': 
                return data.filter(item => item.rise);
            case 'salary':
                return data.filter(item => item.salary > 1000);
            default:
                return data;
        }
    }

    onFilter = (filter) => {
        this.setState({filter});
    }

    changeSalary = (newSalary, name) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.name === name) {
                    return {...item, salary: newSalary}
                }
                return item;
            })
        }))
    }
    

    render() {
        const {data, term, filter} = this.state; // деструктуризируем стейты
        const employees = data.length;
        const bonus = data.filter(elem => elem.increase).length;
        // const newData = this.searchEmp(data, term); 
        const newData = this.filterBtn(this.searchEmp(data, term), filter); 


        return (
            <div className="app">
                <AppInfo employees={employees} bonus={bonus}/> 
    
                <div className="search-panel">
                    <SearchPanel 
                        onUpdateSearch={this.onUpdateSearch} /> 
                    <AppFilter 
                        stateFilter={filter}
                        onFilter={this.onFilter}/>
                </div>
    
                <EmployeesList 
                    data={newData} // в данные передаем отфильтрованные данные (заменяем data)
                    onDelete={this.onDelete} 
                    onToggleProp={this.onToggleProp} 
                    changeSalary={this.changeSalary}
                    />
                <EmployeesAddForm 
                    onAdd={this.onAdd} 
                    />
            </div>
        );
    }
}

export default App; 