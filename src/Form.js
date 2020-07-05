import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import Checkbox from './Checkbox'
import Input from './Input'


class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: {
        name: 'name',
        type: 'text',
        value: ''
      },
      email: {
        name: 'email',
        type: 'email',
        value: ''
      },
      pass: {
        name: 'pass',
        type: 'password',
        value: ''
      },
      avatar: [],
      phone: {
        name: 'phone',
        type: 'number',
        value: ''
      },
      age: 1,
      gender: {
        name: 'gender',
        type: 'radio',
        value: 'male'
      },
      favorites: [
        {
          id: 1,
          value: 'soccer',
          isChecked: false,
          name: 'Đá bóng'
        },
        {
          id: 2,
          value: 'badminton',
          isChecked: false,
          name: 'Cầu lông'
        },
        {
          id: 3,
          value: 'sailing',
          isChecked: false,
          name: 'Đua thuyền'
        }
      ],
      note: 'Buoi hoc dau tien'
    }
  }

  handleOnChange = event => {
     if(event.target.type === 'file') {
      this.setState({
        avatar: event.target.files[0]
      })
    }
    else if(event.target.nodeName === 'INPUT') {
      let inputValue = event.target.value
      let inputName = event.target.name
      let statusCopy = Object.assign({}, this.state)
      statusCopy[inputName].value = inputValue
      this.setState(statusCopy)
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
        else if(key === 'avatar' || key === 'note' || key === 'age') {
          formdata.append(key,this.state[key])
        }
        else {
          formdata.append(key,this.state[key].value)
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
                <Input
                  {...name}
                  handleOnChange={this.handleOnChange} />
              </td>
            </tr>

            <tr>
              <td>
                <label>Email:</label>
              </td>
              <td>
                <Input
                  {...email}
                  handleOnChange={this.handleOnChange} />
              </td>
            </tr>

            <tr>
              <td>
                <label>Mật khẩu:</label>
              </td>
              <td>
                <Input
                  {...pass}
                  handleOnChange={this.handleOnChange} />
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
                  onChange={this.handleOnChange} />
              </td>
            </tr>

            <tr>
              <td>
                <label>Số điện thoại:</label>
              </td>
              <td>
                <Input
                  {...phone}
                  handleOnChange={this.handleOnChange} />
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
                <Input
                  {...gender}
                  genderName='Nam'
                  checked={gender.value === "male"}
                  handleOnChange={this.handleOnChange} />
                <Input
                  {...gender}
                  genderName='Nữ'
                  checked={gender.value === "male"}
                  handleOnChange={this.handleOnChange} />
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

