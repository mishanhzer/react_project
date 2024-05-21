import './employees-list-item.css'; // ипортируем стили (эти стили экспортируются сначала в emplyees-list.js, затем в app.js, а затем уже в index.js)

const EmployeesListItem = ({name, salary, increase, rise, onDelete, onToggleProp, changeSalary}) => { 

    let classNames = 'list-group-item d-flex justify-content-between'
    if (increase) {
        classNames += ' increase'
    }
    if (rise) {
        classNames += ' like'
    }


    return (
        <li className={classNames}>
            <span 
                className="list-group-item-label" 
                onClick={onToggleProp} 
                data-toggle='rise'
                >{name}</span> 
            <input type="text" className="list-group-item-input" defaultValue={salary} onChange={(e) => changeSalary(e.target.value, name)}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button 
                    type="button"
                    className="btn-cookie btn-sm "
                    onClick={onToggleProp}
                    data-toggle='increase'>
                    <i className="fas fa-cookie"></i>
                </button>

                <button 
                        type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
    }


export default EmployeesListItem;