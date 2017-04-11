import React from 'react';
import Status from './Status';

class TableTask extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            checked: "Active"
        };
    }

    handleChange(props) {
        this.setState({checked: props})
    }

    render() {
        return (
            <tr>
                <td>{this.props.task}
                </td>
                <td>{this.state.checked}</td>
                <td>{<Status statusText={this.handleChange}/>}</td>

            </tr>
        );
    }
}

export default TableTask;
