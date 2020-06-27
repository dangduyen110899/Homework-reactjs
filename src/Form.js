import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      pass: '',
      avatar: '',
      phone: '',
      age: 1,
      gender: 'male',
      favorite: {
        soccer: false,
        badminton: false,
        sailing: false
      },
      note: "Buổi học đầu tiên về html"
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleChangeFavorite = event => {
    const check = event.target.checked
    const value = event.target.value
    let favorites = this.state.favorite
    for (const key in favorites) {
      if (favorites.hasOwnProperty(key)) {
        if(key === value) {
          favorites[key] = check
        }
      }
    }
    this.setState({
      favorite: favorites
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    axios.post(`https://jsonplaceholder.typicode.com/users`, this.state)
      .then(res => {
        console.log(res);
      })
  }

  render(){
    const { name, email, pass, avatar, phone, age, gender, favorite, note } = this.state
    return(
      <>
      <form onSubmit={this.handleSubmit}>
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
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleChange} />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="">Email:</label>
              </td>
              <td>
                <input
                  type="email"
                  name="email"
                  value = {email}
                  onChange={this.handleChange} />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="">Mật khẩu:</label>
              </td>
              <td>
                <input
                  type="password"
                  name="pass"
                  value={pass}
                  onChange={this.handleChange} />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="">Avatar:</label>
              </td>
              <td>
                <input
                  type="file"
                  name="avatar"
                  value = {avatar}
                  onChange={this.handleChange} />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="">Số điện thoại:</label>
              </td>
              <td>
                <input
                  type="number"
                  name="phone"
                  value = {phone}
                  onChange={this.handleChange} />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="">Tuổi:</label>
              </td>
              <td>
                <select
                  name="age"
                  value = {age}
                  onChange={this.handleChange} >
                  <option value="1">1 tuổi</option>
                  <option value="2">2 tuổi</option>
                  <option value="3">3 tuổi</option>
                  <option value="4">4 tuổi</option>
                </select >
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="">Giới tính:</label>
              </td>
              <td>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={this.handleChange}/>Nam<br/>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={this.handleChange}/> Nữ
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="">Sở thích:</label>
              </td>
              <td>
                <input
                  type="checkbox"
                  value="soccer"
                  defaultChecked={favorite.soccer}
                  onClick={this.handleChangeFavorite}/> Đá bóng<br/>
                <input
                  type="checkbox"
                  value="badminton"
                  defaultChecked={favorite.badminton}
                  onClick={this.handleChangeFavorite}/> Cầu lông<br/>
                <input
                  type="checkbox"
                  value="sailing"
                  defaultChecked={favorite.sailing}
                  onClick={this.handleChangeFavorite}/> Đua thuyền
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="">Ghi chú:</label>
              </td>
              <td>
                <textarea
                  rows="3"
                  cols="25"
                  name="note"
                  value={note}
                  onChange={this.handleChange}/>
              </td>
            </tr>
          </tbody>

        </table>
        <button type="submit" onSubmit={this.handleSubmit}>Đăng kí</button>
      </form >
      </>
    );
  }
}

export default Form

