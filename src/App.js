import React from 'react';
import Table from './Table';
import Input from './Input';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: []
        };
        this.getTaskFromInput = this.getTaskFromInput.bind(this);
    }

    addToTask(tasks, props) {
        return tasks.push(props)
    }

    getTaskFromInput(props) {
        this.setState({
            task: this.state.task.concat([props])
        });
    };

    render() {
        return (
            <div className="App">
                <Input getTask={this.getTaskFromInput}/>
                <Table taskArray={this.state.task}/>
            </div>
        );
    }

}
export default App;
