import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import Checkbox from './Checkbox'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      pass: '',
      avatar: [],
      phone: '',
      age: 1,
      gender: 'male',
      favorites: [
        {id: 1, value: 'soccer', isChecked: false, name: 'Đá bóng'},
        {id: 2, value: 'badminton', isChecked: false, name: 'Cầu lông'},
        {id: 3, value: 'sailing', isChecked: false, name: 'Đua thuyền'}
      ],
      note: 'Buổi học đầu tiên về html'
    }
  }

  handleOnChange = event => {
    if(event.target.type === 'file') {
      this.setState({
        avatar: event.target.files[0]
      })
    }
    else {
      this.setState({
        [event.target.name]: event.target.value
      })
    }
  }

  handleCheckFavorite = event => {
    let favorites = this.state.favorites
    favorites.forEach(favorite => {
      if (favorite.value === event.target.value)
        favorite.isChecked =  event.target.checked
    })
    this.setState({
      favorites: favorites
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    const formdata = new FormData()
    for (const key in this.state) {
      if (this.state.hasOwnProperty(key)) {
        if(key === 'favorites') {
          const favorites = []
          this.state.favorites.forEach(element => {
            if(element.isChecked === true) {
              favorites.push(element.id)
            }
          })
          formdata.append('favorites',favorites)
        }
        else {
          formdata.append(key,this.state[key])
        }
      }
    }
    axios.post(`http://167.99.77.218/api/reactjs`,formdata)
      .then(res => {
        console.log(res)
      })
  }

  render(){
    const { name, email, pass, phone, age, gender, favorites, note } = this.state
    return(
      <>
      <form id="myForm" onSubmit={this.handleOnSubmit}>
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
                <label>Họ tên:</label>
              </td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleOnChange} />
              </td>
            </tr>

            <tr>
              <td>
                <label>Email:</label>
              </td>
              <td>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleOnChange} />
              </td>
            </tr>

            <tr>
              <td>
                <label>Mật khẩu:</label>
              </td>
              <td>
                <input
                  type="password"
                  name="pass"
                  value={pass}
                  onChange={this.handleOnChange} />
              </td>
            </tr>

            <tr>
              <td>
                <label>Avatar:</label>
              </td>
              <td>
                <input
                  type="file"
                  name="avatar"
                  onChange={this.handleOnChange} multiple />
              </td>
            </tr>

            <tr>
              <td>
                <label>Số điện thoại:</label>
              </td>
              <td>
                <input
                  type="number"
                  name="phone"
                  value={phone}
                  onChange={this.handleOnChange} />
              </td>
            </tr>

            <tr>
              <td>
                <label>Tuổi:</label>
              </td>
              <td>
                <select
                  name="age"
                  value={age}
                  onChange={this.handleOnChange} >
                  <option value="1">1 tuổi</option>
                  <option value="2">2 tuổi</option>
                  <option value="3">3 tuổi</option>
                  <option value="4">4 tuổi</option>
                </select >
              </td>
            </tr>

            <tr>
              <td>
                <label>Giới tính:</label>
              </td>
              <td>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={this.handleOnChange}/>Nam<br/>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={this.handleOnChange}/> Nữ
              </td>
            </tr>

            <tr>
              <td>
                <label>Sở thích:</label>
              </td>
              <td>
                {
                  favorites.map((favorite) => {
                    return (
                      <Checkbox
                        handleCheckFavorite={this.handleCheckFavorite}
                        {...favorite} />
                    )
                  })
                }
              </td>
            </tr>

            <tr>
              <td>
                <label>Ghi chú:</label>
              </td>
              <td>
                <textarea
                  rows="3"
                  cols="25"
                  name="note"
                  value={note}
                  onChange={this.handleOnChange}/>
              </td>
            </tr>
          </tbody>
        </table>
        <button
          type="submit"
          onSubmit={this.handleOnSubmit}>Đăng kí</button>
      </form >
      </>
    )
  }
}

export default Form

