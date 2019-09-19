import React, { Component } from 'react';
export class Adduser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:"",
            name:"",
            tel:"",
            Permission:""
        }
    }
    
    hienthinut = ()=>{ 
        if(this.props.hamformAddusers === true)
        {
            return <div className="btn btn-lock btn-outline-secondary w100 mb-2" onClick={()=>this.props.hamdoiTrangthai()}>Đóng lại</div>
        }else{
            return <div className="btn btn-lock btn-outline-info w86 mb-2" onClick={()=>this.props.hamdoiTrangthai()} title="Thêm mới user"><i className="fa fa-plus text-center" aria-hidden="true"></i></div>
        }
    }
    isChange = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
        
    }
    kiemtraTrangthai = ()=>{
        if(this.props.hamformAddusers === true)
        {
            return (
                <div className="col">
                <form>
                    <div className="card bg-light mb-3">
                        <div className="card-header"><i className="fa fa-pencil" aria-hidden="true"></i> Thêm mới users vào hệ thống</div>
                            <div className="card-body">
                                <div className="form-group">
                                <input type="text" name="name" onChange={(event)=>this.isChange(event)} className="form-control" placeholder="Tên users" autoComplete="off" />
                                </div>
                                <div className="form-group">
                                <input type="text" name="tel" onChange={(event)=>this.isChange(event)} className="form-control" placeholder="Điện thoại" autoComplete="off" />
                                </div>
                                <div className="form-group">
                                <select className="custom-select" name="Permission" onChange={(event)=>this.isChange(event)}>
                                    <option>Chọn Quyền mặc định</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Modrator</option>
                                    <option value={3}>Normal</option>
                                </select>
                                </div>
                            </div>
                        <div className="form-group text-center">
                            <button type="reset" className="btn btn-lock btn-primary" onClick={(name,Tel,Permission)=>this.props.add(this.state.name,this.state.tel,this.state.Permission)}>Lưu thông tin</button>
                        </div>
                    </div>
                </form>
                </div>
            );
        }
    }
    render() {
        return (
                <div>
                {
                    this.hienthinut()
                }
                {
                    this.kiemtraTrangthai()
                }
                </div>
        );
    }
}

export default Adduser;
