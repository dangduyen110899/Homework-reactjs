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

  handleChangeName = event => {
    this.setState({
      name: event.target.value
    });
  }

  handleChangeEmail = event => {
    this.setState({
      email: event.target.value
    });
  }

  handleChangePass = event => {
    this.setState({
      pass: event.target.value
    });
  }

  handleChangeAvatar = event => {
    this.setState({
      avatar: event.target.value
    });
  }

  handleChangePhone = event => {
    this.setState({
      phone: event.target.value
    });
  }

  handleChangeAge = event => {
    this.setState({
      age: event.target.value
    });
  }

  handleChangeGender = event => {
    this.setState({
      gender: event.target.value
    });
  }

  handleChangeNote = event => {
    this.setState({
      note: event.target.value
    });
  }

  handleChangeSoccer = event => {
    this.setState(prevState => ({
      soccer: !prevState.soccer,
    }));
  }

  handleChangeBadminton = event => {
    this.setState(prevState => ({
      badminton: !prevState.badminton,
    }));
  }

  handleChangeSailing = event => {
    this.setState(prevState => ({
      sailing: !prevState.sailing,
    }));
  }

  handleSubmit = event => {
    const favorites = {
      soccer: this.state.soccer,
      badminton: this.state.badminton,
      sailing: this.state.sailing
    }
    const object = {
          name : this.state.name,
          phone : this.state.phone,
          email : this.state.email,
          pass : this.state.pass,
          avatar : this.state.avatar,
          age : this.state.age,
          gender : this.state.gender,
          favorite: favorites,
          note : this.state.note }
    event.preventDefault();
    console.log(object)
  }

  render(){
    const { name, email, pass, avatar, phone, age, gender, favorite, note } = this.state
    return(
      <div>
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
                  value={name}
                  onChange={this.handleChangeName} />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="">Email:</label>
              </td>
              <td>
                <input
                  type="email"
                  value = {email}
                  onChange={this.handleChangeEmail} />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="">Mật khẩu:</label>
              </td>
              <td>
                <input
                  type="password"
                  value={pass}
                  onChange={this.handleChangePass} />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="">Avatar:</label>
              </td>
              <td>
                <input
                  type="file"
                  value = {avatar}
                  onChange={this.handleChangeAvatar} />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="">Số điện thoại:</label>
              </td>
              <td>
                <input
                  type="number"
                  value = {phone}
                  onChange={this.handleChangePhone} />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="">Tuổi:</label>
              </td>
              <td>
                <select
                  value = {age}
                  onChange={this.handleChangeAge} >
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
                  value="male"
                  checked={gender === "male"}
                  onChange={this.handleChangeGender}/>Nam<br/>
                <input
                  type="radio"
                  value="female"
                  checked={gender === "female"}
                  onChange={this.handleChangeGender}/> Nữ
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="">Sở thích:</label>
              </td>
              <td>
                <input type="checkbox" value="soccer" defaultChecked={favorite.soccer} onClick={this.handleChangeSoccer}/> Đá bóng <br/>
                <input type="checkbox" value="badminton" defaultChecked={favorite.badminton} onClick={this.handleChangeBadminton}/> Cầu lông <br/>
                <input type="checkbox" value="sailing" defaultChecked={favorite.sailing} onClick={this.handleChangeSailing}/> Đua thuyền
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="">Ghi chú:</label>
              </td>
              <td>
                <textarea
                  rows="3" cols="25"
                  value={note}
                  onChange={this.handleChangeNote}/>
              </td>
            </tr>
          </tbody>
        </table>
        <button
          type="submit"
          onClick={this.handleSubmit}>Đăng kí</button>
      </div>
    );
  }
}

export default Form
