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
      note: ''
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
    favorite.forEach(fruite => {
       if (fruite.value === event.target.value)
          fruite.isChecked =  event.target.checked
    })
    this.setState({favorite: favorite})
  }
  handleSubmit = event => {
    alert(this.state.name + ' ' + this.state.phone + ' ' + this.state.favorite + ' '+ this.state.gender);
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
                          <input type="password" name="password" value = {pass} onChange={this.handleChange} />
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
                          <select value = {age} onChange={this.handleChange} >
                              <option value="1 tuổi">1 tuổi</option>
                              <option value="2 tuổi">2 tuổi</option>
                              <option value="3 tuổi">3 tuổi</option>
                              <option value="4 tuổi">4 tuổi</option>
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
                          <input type="checkbox" className="input_r" value={favorite.value} checked={favorite.isChecked} onChange={this.handleChangeFavorite}/> Đá bóng <br/>
                          <input type="checkbox" className="input_r" value={favorite.value} checked={favorite.isChecked} onChange={this.handleChangeFavorite}/> Cầu lông <br/>
                          <input type="checkbox" className="input_r" value={favorite.value} checked={favorite.isChecked} onChange={this.handleChangeFavorite} /> Đua thuyền
                      </td>
                  </tr>
                  <tr>
                      <td>
                          <label htmlFor="">Ghi chú:</label> 
                      </td>
                      <td>
                          <textarea rows="3" cols="25" value={note} onChange={this.handleChange} >Buổi học đầu tiên về html</textarea>  
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