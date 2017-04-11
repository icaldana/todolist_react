import React from 'react';
class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.callerFunction = this.callerFunction.bind(this);
    }

    callerFunction() {
        if (this.state.message.length > 1) {
            this.props.getTask(this.state.message);
            this.setState({message: " "});
        }
    }

    handleChange(props) {
        this.setState({message: props.target.value});

    };

    render() {
        return (
            <p>
                <label>Task:
                </label>
                <input type="text" onChange={this.handleChange} value={this.state.message}/>
                <button onClick={this.callerFunction}>Submit</button>
            </p>
        );
    }
}

export default Input
