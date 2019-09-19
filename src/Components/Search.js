import React, { Component } from 'react';

export class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueSearch:''
        }
    }
    isChange = (event) =>{
        this.setState({
            valueSearch: event.target.value
        });
        //Khi search thì dữ liệu sẽ real time
        this.props.checkConnect(this.state.valueSearch);
    }
    render() {
        return (
            <div className="col-8">
                <div className="btn-group">
                    <input type="text" className="form-control w-ip-search" onChange = {(event)=>this.isChange(event)} placeholder="Nhập từ khóa" autoComplete="off" />
                    <button type="button" onClick={(dulieu)=>this.props.checkConnect(this.state.valueSearch)} className="btn btn-info"><i className="fa fa-search" aria-hidden="true"></i></button>
                </div>
            </div>
        );
    }
}

export default Search;
