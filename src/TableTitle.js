import React from 'react';
class TableTitle extends React.Component {
    render() {
        return <tr>
            <th>
                {this.props.title.titleTask}</th>
            <th>
                {this.props.title.titleStatus}</th>

            <th>
                {this.props.title.titleBox}</th>
        </tr>
    }
}

export default TableTitle;
