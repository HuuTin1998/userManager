import React,{Component} from 'react';
import Headers from './Headers';
import "./../App.css";
import Search from './Search';
import Tabledata from './Tabledata';
import Adduser from './Adduser';
import Footer from './Footer';
import Reset from './Reset';
import dataUser from "./../Data/data.json";
import EditUser from './editUser';
const uuid = require('uid');
export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienthiForm: true,
      data: dataUser,
      searchText:'',
      statusEdit:false,
      objectEdit:{}
    }
  }
  
  componentWillMount() {
    if(localStorage.getItem('userData') === null)
    {
      localStorage.setItem('userData',JSON.stringify(dataUser));
    }else{
      var temp = JSON.parse(localStorage.getItem('userData'));
      this.setState({
        data:temp
      });
    }
  }
  
  doiTrangthai = ()=>{
    this.setState({
      hienthiForm: !this.state.hienthiForm
    });
  }
    //Chuyển đổi trạng thái
    changeEdituser = ()=>{
      this.setState({
        statusEdit: !this.state.statusEdit
      });
    }
  connectSearch = (dulieu)=>{
   // tự động khai báo state
    this.setState({
      searchText: dulieu
    });
  }
  // Connect Adduser
  connectAdduser = (name,Tel,Permission)=>{
    var item = {};
    item.id = uuid();
    item.name = name;
    item.Tel = Tel;
    item.Permission = Permission;
    var items = this.state.data;
    items.push(item);
    this.setState({
      data:items
    });  
  }
  editFunction = (user)=>{
  //Dữ liệu trả về cho vào state
    this.setState({
      objectEdit: user
    });
  }
  // Xóa user
  deleteUsers = (idUsers)=>{
   //Loại bỏ id trùng bằng cách sử dụng hàm filter
   var tempData = this.state.data.filter(items => items.id !== idUsers);
    this.setState({
      data: tempData
    });
    //Cập nhật lại dữ liệu khi xóa xong vào localstorage
    localStorage.setItem('userData',JSON.stringify(tempData));
  }
  render() { 
    var ketqua = [];
    this.state.data.forEach((item) => {
      if(item.name.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1)
      {
        //Nếu có dữ liệu thì đẩy dữ liệu đó vào item
        ketqua.push(item);
      }
    });
    return (
      <div>
        <Headers></Headers>
        <div className="searchForm">
          <div className="container">
            <div className="row">
            {/* Hiển thị cập nhật */}
            {/* Truyền dữ liệu vừa lấy về vào trong Edituser thông qua state */}
             <EditUser 
             editdefaultValue = {this.state.objectEdit} 
             eventEdit = {this.state.statusEdit} 
             changeEdituser = {()=>this.changeEdituser()}
             >
             </EditUser>
              <Search 
              checkConnect={(dulieu)=> this.connectSearch(dulieu)}
              >
              </Search>
              <Reset></Reset>
              <div className="col-12">
                <hr />
              </div>
              <Tabledata
                deleteUsers = {(idUsers)=>this.deleteUsers(idUsers)}
                changeEdituser = {()=>this.changeEdituser()}
                tbeditFunction = {(user)=>this.editFunction(user)}
                dulieu = {ketqua}
              ></Tabledata>
              <Adduser
                add = {(name,Tel,Permission)=>this.connectAdduser(name,Tel,Permission)}
                hamformAddusers = {this.state.hienthiForm} 
                hamdoiTrangthai = {()=>this.doiTrangthai()}
                >
               </Adduser>
              <Footer></Footer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
