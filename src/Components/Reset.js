import React, { Component } from 'react';
export class Reset extends Component {
    render() {
        return (
            <div className="col-2">
                <div className="button-group">
                    <button className="btn btn-lock btn-success w100-reset"><i className="fa fa-refresh text-danger" aria-hidden="true"></i></button>
                </div>
            </div>
        );
    }
}
export default Reset;
