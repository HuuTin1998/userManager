import React, { Component } from 'react';
import TabledataRow from './TabledataRow';

export class Tabledata extends Component {
    deleteButton = (idUsers)=>{
        this.props.deleteUsers(idUsers);
    }
    mappingdataUser = ()=> this.props.dulieu.map((value,key)=>(
        <TabledataRow
         key={key} 
         stt={key} 
         id = {value.id}
         deleteButton = {(idUsers)=>this.deleteButton(idUsers)}
         changeEdituser = {()=>this.props.changeEdituser()}
         tbreditFunction = {(user)=>this.props.tbeditFunction(value)}
         userName={value.name} 
         phone={value.Tel} 
         permission = {value.Permission}>
         </TabledataRow>
    ))
    render() {
        return (
            <div className="col mt-table">
                <table className="table table-hover">
                <thead>
                    <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Điện thoại</th>
                    <th>Quyền</th>
                    <th>Tùy chọn</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.mappingdataUser()
                    }
                </tbody>
                </table>
            </div>
        );
    }
}

export default Tabledata;
