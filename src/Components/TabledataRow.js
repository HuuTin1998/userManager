import React, { Component } from 'react';
export class TabledataRow extends Component {
    permissionShow = ()=>{
        if(this.props.permission === 1) {return "Admin"}
        else if(this.props.permission === 2){return "Moderator"}
        else{return "Normal User"}
    }
    editfunctionClick = ()=>{
        this.props.tbreditFunction();
        this.props.changeEdituser();
    }
    deleteButtonrow = (idUsers)=>{
       this.props.deleteButton(idUsers);
    }
    render() {
        return (
            <tr>
                    <td>{this.props.stt + 1}</td>
                    <td>{this.props.userName}</td>
                    <td>{this.props.phone}</td>
                    <td>{this.permissionShow()}</td>
                    <td className="button-group">
                        <button type="button" onClick={()=>this.editfunctionClick()} className="btn btn-warning" title="Chỉnh sửa thông tin"><i className="fa fa-pencil" aria-hidden="true" /></button>
                        <button type="button" className="btn btn-danger ml-2" title="Xóa thông tin" onClick = {(idUsers)=>this.deleteButtonrow(this.props.id)}><i className="fa fa-trash-o" aria-hidden="true" /></button>
                    </td>
            </tr>
        );
    }
}
export default TabledataRow;
