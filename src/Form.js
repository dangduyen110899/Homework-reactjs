import React, { Component } from 'react'
import './App.css'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      pass: '',
      avatar: '',
      phone: '',
      age: '1 tuổi',
      gender: 'Nam',
      favorite: [
        {id: 1, value: "da bong", isChecked: false},
        {id: 2, value: "cau long", isChecked: false},
        {id: 3, value: "dua thuyen", isChecked: false},
      ],
      note: "Buổi học đầu tiên về html"
    }
  }
  handleChange = event => {
    const value = event.target.value
    this.setState({
      // ...this.state,
      [event.target.name]: value
    });
  }
  handleChangeFavorite = event => {
    let favorite = this.state.favorite
    favorite.forEach(fvr => {
       if (fvr.value === event.target.value)
          fvr.isChecked =  event.target.checked
    })
    this.setState({favorite: favorite})
    console.log(favorite)
    //chỗ này em không hiểu sao mà ko set lại state được
  }
  handleSubmit = event => {
    // let favorite = this.state.favorite
    // let str = ' '
    // console.log(favorite)
    // favorite.forEach((item,value) => {
    //    if (item.isChecked === true)
    //       str += value
    // })
    alert('Tên của bạn: ' + this.state.name + ' \n' +
          'Số điện thoại: ' + this.state.phone + ' \n' +
          'Email: ' + this.state.email + ' \n' +
          'Mật khẩu: ' + this.state.pass + ' \n' +
          'Tuổi: ' + this.state.age + ' \n' +
          'Giới tính: ' + this.state.gender + ' \n' +
          'Sở thích: ' + ' \n' +
          'Ghi chú: ' + this.state.note + ' \n');
     event.preventDefault();
  }
  render(){
    const { name, email, pass, avatar, phone, age, gender, favorite, note } = this.state
    return(
      <div>
        <form >
          <h1>Đăng kí thành viên.</h1>
          <table>
              <thead>
                  <tr>
                      <th>Nội dung</th>
                      <th>Giá trị</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>
                          <label htmlFor="">Họ tên:</label>
                      </td>
                      <td>
                          <input type="text" name="name" value = {name} onChange={this.handleChange} />
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <label htmlFor="">Email:</label>
                      </td>
                      <td>
                          <input type="email" name="email" value = {email} onChange={this.handleChange} />
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <label htmlFor="">Mật khẩu:</label>
                      </td>
                      <td>
                          <input type="password" name="pass" value={pass} onChange={this.handleChange} />
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <label htmlFor="">Avatar:</label>
                      </td>
                      <td>
                          <input type="file" name="file" value = {avatar} multiple onChange={this.handleChange} />
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <label htmlFor="">Số điện thoại:</label>
                      </td>
                      <td>
                          <input type="number" name="phone"value = {phone} onChange={this.handleChange} />
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <label htmlFor="">Tuổi:</label>
                      </td>
                      <td>
                          <select name = "age" value = {age} onChange={this.handleChange} >
                              <option name="1 tuổi" value="1 tuổi">1 tuổi</option>
                              <option name="2 tuổi" value="2 tuổi">2 tuổi</option>
                              <option name="3 tuổi" value="3 tuổi">3 tuổi</option>
                              <option name="4 tuổi" value="4 tuổi">4 tuổi</option>
                          </select >
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <label htmlFor="">Giới tính:</label>
                      </td>
                      <td>
                          <input type="radio" name="gender" className="input_r" value="Nam" checked={gender === "Nam"} onChange={this.handleChange}/>Nam  <br/>
                          <input type="radio" name="gender" className="input_r" value ="Nu"checked={gender === "Nu"} onChange={this.handleChange}/> Nữ 
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <label htmlFor="">Sở thích:</label>
                      </td>
                      <td>
                          <input key={favorite.id} type="checkbox" className="input_r" value={favorite.value} name={favorite.value} checked={favorite.isChecked} onClick={this.handleChangeFavorite}/> Đá bóng <br/>
                          <input key={favorite.id} type="checkbox" className="input_r" value={favorite.value} namename={favorite.value} checked={favorite.isChecked} onClick={this.handleChangeFavorite}/> Cầu lông <br/>
                          <input key={favorite.id} type="checkbox" className="input_r" value={favorite.value} name={favorite.value} checked={favorite.isChecked} onClick={this.handleChangeFavorite}/> Đua thuyền
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <label htmlFor="">Ghi chú:</label>
                      </td>
                      <td>
                          <textarea name="note" rows="3" cols="25" value={note} onChange={this.handleChange}/>
                      </td>
                  </tr>
              </tbody>
          </table>
          <button type="submit" onClick={this.handleSubmit} >Đăng kí</button>
        </form>
      </div>
    );
  }
}

export default Form