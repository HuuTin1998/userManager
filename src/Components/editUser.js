import React, { Component } from 'react';
export class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
           id: this.props.editdefaultValue.id,
           name: this.props.editdefaultValue.name,
           tel: this.props.editdefaultValue.Tel,
           Permission: this.props.editdefaultValue.Permission
       }
    }
    // Xây dựng hàm .. Khi thay đổi giá trị trong ô input thì sẽ lưu giá trị đó vào biến name = event.target.value
    onChangeEdit = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        // Đẩy giá trị value vào state thông qua giá trị name
        this.setState({
            [name]: value
        });
    }
    changeEdituser = ()=>{
        this.props.changeEdituser();
    }
    showatEdit = ()=>{
        if(this.props.eventEdit === true)
        {
            return(
                    <form>
                        <div className="card bg-light mb-3">
                            <div className="card-header"><i className="fa fa-user-md" aria-hidden="true"></i> Cập nhật users</div>
                                <div className="card-body">
                                    <div className="form-group">
                                    <label>Tên user</label>
                                    <input onChange = {(event)=>this.onChangeEdit(event)} defaultValue = {this.props.editdefaultValue.id} type="text" name="id" className="form-control" />
                                    <input onChange = {(event)=>this.onChangeEdit(event)} defaultValue = {this.props.editdefaultValue.name} type="text" name="name" className="form-control" placeholder="Tên users" autoComplete="off" />
                                    </div>
                                    <div className="form-group">
                                    <label>Điện thoại</label>
                                    <input onChange = {(event)=>this.onChangeEdit(event)} defaultValue = {this.props.editdefaultValue.Tel} type="text" name="tel" className="form-control" placeholder="Điện thoại" autoComplete="off" />
                                    </div>
                                    <div className="form-group">
                                    <label>Quyền</label>
                                    <select onChange = {(event)=>this.onChangeEdit(event)} defaultValue = {this.props.editdefaultValue.Permission} className="custom-select" name="Permission">
                                        <option>Chọn Quyền mặc định</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Modrator</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                    </div>
                                </div>
                            <div className="form-group text-center">
                                <button type="button" onClick={()=>this.changeEdituser()} className="btn btn-lock btn-primary">Lưu thông tin</button>
                            </div>
                        </div>
                    </form>
            );
        }else{
            return ;
        }
    }
    render() {
        console.log(this.state.id);
        return (
            <div className="col-12">
                {
                    this.showatEdit()
                }
            </div>
        );
    }
}
 
export default EditUser;
