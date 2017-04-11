import React from 'react';
import TableTask from './TableTask';
import TableTitle from './TableTitle';

class Table extends React.Component {
    render() {
        var rows = [];
        const tableTitles = {
            titleTask: "To do",
            titleStatus: " Status",
            titleBox: "Options"
        };

        for (var i = 0; i < this.props.taskArray.length; i++) {
            rows.push(<TableTask key={i} task={this.props.taskArray[i]}/>)
        }

        return (

            <table>
                <thead>
                    <TableTitle title={tableTitles}/>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );

    }
}

export default Table;
