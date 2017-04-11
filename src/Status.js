import React from 'react';

const status = {
    done: "Done!",
    canceled: "Canceled",
    default: "Active"
};

class Status extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeDone = this.handleChangeDone.bind(this);
        this.handleChangeCanceled = this.handleChangeCanceled.bind(this);
        this.handleChangeActive = this.handleChangeActive.bind(this);
        this.state = {
            checkDone: true,
            checkCanceled: true,
            checkActive: true
        };
    }

    handleChangeDone(props) {
        this.setState(prevState => ({
            checkDone: !prevState.checkDone
        }));
            this.props.statusText(status.done);
    };

    handleChangeCanceled(props) {
        this.setState(prevState => ({
            checkCanceled: !prevState.checkCanceled
        }));
            this.props.statusText(status.canceled);
    };

    handleChangeActive(props) {
        this.setState(prevState => ({
            checkActive: !prevState.checkActive
        }));
            this.props.statusText(status.default);
    };

    render() {

        return (
            <p>
                <input type="radio" className="checkbox" name='status' onChange={this.handleChangeDone}  id="boxDone"/>
                <label style={{color:  'red'}}>
                 Done
                </label>
                <input type="radio" className="checkbox" name='status' onChange={this.handleChangeCanceled} id="boxCanceled"/>
                <label>
                    Cancel
                </label>
                <input type="radio" className="checkbox" name='status' onChange={this.handleChangeActive} id="boxCanceled"/>
                <label>
                    Active
                </label>
            </p>

        );
    }

}

export default Status;
