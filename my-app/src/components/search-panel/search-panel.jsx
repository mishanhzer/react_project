import { Component } from 'react';

import './search-panel.css';

// Нам нужно состояние и переделываем компронент в классовый
class SearchPanel extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onSearchUpdate = (e) => {
        const term = e.target.value;
        this.props.onSearchUpdate(term)
        this.setState({term});
    }

    render() {
        return (
            <input 
                type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                value={this.state.term}
                onChange={this.onSearchUpdate} />
        )
    }
}


export default SearchPanel;