import React, { Component } from 'react';
import '../style.css'

class SearchBar extends Component {

    state = {
        inputRecord: ''
    }

    onSubmitForm = (e) => {
        e.preventDefault()
        this.props.executable(this.state.inputRecord)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitForm} className="ui search custonsearch">
                    <div className="ui icon input">
                        <input className="prompt" 
                            value={this.state.inputRecord} 
                            onChange={(e) => this.setState({inputRecord: e.target.value})} 
                            // onKeyUp={this.onSubmitForm}
                            type="text" 
                            placeholder="Search pictures..." />
                        <i className="search icon"></i>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar