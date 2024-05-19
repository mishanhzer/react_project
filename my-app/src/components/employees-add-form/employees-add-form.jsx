import './employees-add-form.css';
import { Component } from 'react';


// Создаем компонент EmployeesAddForm
class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length < 3 || !this.state.salary) return
        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className='app-add-form'>
                <h3>Добавьте нового сотрудника</h3>
                <form 
                    className='add-form d-flex'
                    onSubmit={this.onSubmit}
                    >
                    <input 
                        type="text" 
                        className='form-control new-post-label'
                        placeholder="как его зовут?" 
                        name='name'
                        value={this.state.name}
                        onChange={this.onValueChange}/>
                    <input 
                        type="number" 
                        className='form-control new-post-label'
                        placeholder="З/П в $?" 
                        name='salary'
                        value={this.state.salary}
                        onChange={this.onValueChange}/>
                    <button 
                        type='submit'
                        className="btn btn-outline-light"
                        >Добавить</button>
            </form>
            </div>
        )
    }
}

export default EmployeesAddForm;
