import { Component } from 'react';

import AppInfo from '../app-info/app-info'; 
import SearchPanel from '../search-panel/search-panel'; 
import AppFilter from '../app-filter/app-filter'; 
import EmployeesList from '../empolyees-list/employees-list'; 
import EmployeesAddForm from '../employees-add-form/employees-add-form'; 

import './app.css'; 

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
            filter: 'rise'
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

    // 1. Создаем метод филтрации (работаем через стейт filter через строку, fiilter сравнививаем со строкой, которую получаем из компонента ниже)
    filterPost = (data, filter) => {
        switch(filter) { // break можем не ставить (react понимает и так что нужно сделать)
            case 'rise':
                return data.filter(item => item.rise); // сокращенная запись, чтобы сократить - if (item.rise) {return item}
            case 'moreThen1000':
                return data.filter(item => item.salary > 1000)
            default: 
                return data
        }
    }


    render() {
        const {data, term, filter} = this.state; // деструктуризируем стейты
        const employees = data.length;
        const bonus = data.filter(elem => elem.increase).length;
        const newData = this.filterPost(this.searchEmp(data, term), filter); // создаем новый массив (в аргумент передаем метод, который вернет массив, и передаем filter)

        return (
            <div className="app">
                <AppInfo employees={employees} bonus={bonus}/> 
    
                <div className="search-panel">
                    <SearchPanel 
                        onUpdateSearch={this.onUpdateSearch} /> 
                    <AppFilter
                        onUpdState={this.onUpdState} />
                </div>
    
                <EmployeesList 
                    data={newData} // в данные передаем отфильтрованные данные (заменяем data)
                    onDelete={this.onDelete} 
                    onToggleProp={this.onToggleProp} 
                    />
                <EmployeesAddForm 
                    onAdd={this.onAdd} 
                    />
            </div>
        );
    }
}

export default App; 