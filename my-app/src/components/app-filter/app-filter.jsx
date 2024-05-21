import './app-filter.css';

const AppFilter = ({stateFilter, onFilter}) =>  { 
    const btnsData = [
        {name: 'everything', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'salary', label: 'З/П больше 1000$'},
    ]
    const btns = btnsData.map(item => {
        const active = stateFilter === item.name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return  (
            <button 
                    type='button'
                    className={`btn ${clazz}`}
                    key={item.name}
                    onClick={() => onFilter(item.name)}>
                        {item.label}
                </button>
        )
    })
    return (
        <div className="btn-group">
            {btns}
        </div>
    )
}


export default AppFilter;