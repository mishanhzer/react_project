import './app-info.css'; 

const AppInfo = ({allEmp, bonusEmp}) => { // Получаем пропсы и передаем их куда надо
    return (
        <div className="app-info"> 
            <h1>Учет сотрудников в компании "Cherevato TEAM"</h1>
            <h2>Общее число сотрудников: {allEmp}</h2>
            <h2>Премию получат: {bonusEmp}</h2>
        </div>
    )
}

export default AppInfo; 