import React, {Component} from 'react'
// import './search-box.styles.css'

class DropDown extends Component {
    render() {


        return <select onChange={this.props.handleChange} 
        className="drop-down"
        >
            {this.props.options.map(option => (
                console.log(option)
                // <option value="Red">Red</option>
            ) )}
        </select>
    };
}

export default DropDown;