import React, { Component } from 'react'
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'
import uuidv1 from 'uuid/v1'
import { fromJS } from 'immutable'
import './style.css'
import Column from './components/Column/'
import AddNewModal from './components/AddNewModal/'
import Task from './components/Task/'

class App extends Component {
  state = {
    displayModal: false,
    selectedColumn: '',
    editingColumnIndex: '',
    taskContent: '',
    editingTaskIndex: null,
    editedTaskId: null,
    columns: fromJS([
      { id: 'td', title: 'TO DO', tasks: [{id: 1, content: 'Demo task', time: '04/15/2019, 9:25:35 PM'}] },
      { id: 'ip', title: 'IN PROGRESS', tasks: [] },
      { id: 'de', title: 'DONE', tasks: [] }
    ]),
  }

  //thay doi trang thai cua newtask
  handleToggleModal = (choosenColumn = '') => () => {
    this.setState(prevState => ({
      displayModal: !prevState.displayModal,
      selectedColumn: choosenColumn
    }))
  }

  //chon column thi trang thai newtask checked
  handleChangeSelectedColumn = (selectedColumn) => () => {
    this.setState({ selectedColumn: selectedColumn })
  }

  //them task vao column
  handleAddNewTask = () => {
    // Lấy nội dung task
    const { taskContent } = this.state
    // Kiểm tra xem nội dung có rỗng hay không trước khi lưu lại
    if (taskContent.trim() === '') {
      return toastr.warning('Please enter your task', 'Notice', { timeOut: 2000 })
    }
    // Lấy id cột mà chúng ta muốn thêm task vào
    const { selectedColumn, columns } = this.state
    // Tạo task mới với đầy đủ thông tin là id, nội dung và thời gian tạo
    const newTask = fromJS({
      id: uuidv1(),
      content: taskContent,
      time: new Date().toLocaleString()
    })
    // Lấy vị trí cột đó
    const columnIndex = columns.findIndex(column => column.get('id') === selectedColumn)
    // Lưu lại task đó vào cột
    const updatedColumn = columns.updateIn(
      [columnIndex, 'tasks'],
      tasks => tasks.push(newTask)
    )
    // Cập nhật lại state, ở đây chúng ta đồng thời sẽ reset lại các state của modal 
    // như đóng modal và clear nội dung task, cột được chọn
    this.setState({
      displayModal: false,
      selectedColumn: '',
      taskContent: '',
      columns: fromJS(updatedColumn)
    })
  }

  //ham xoa task
  handleDeleteTask = (columnIndex, taskIndex) => () => {
    const result = window.confirm('Are your sure to delete this task?')
    if (result) {
      const { columns } = this.state
      const updatedColumn = columns.updateIn(
        [columnIndex, 'tasks'],
        tasks => tasks.remove(taskIndex))
      this.setState({ columns: fromJS(updatedColumn) }, () => {
        toastr.success('Delete task success', 'Notice', { timeOut: 2000 })
      })
    }
  }

  //hàm chọn sửa task
  handleChooseEditTask = (columnIndex, taskIndex, taskId) => () => {
    this.setState({
      editingColumnIndex: columnIndex,
      editingTaskIndex: taskIndex,
      editedTaskId: taskId
    })
  }

  handleCancelEdit = () => {
    this.setState({
      editingColumnIndex: '',
      taskContent: '',
      editedTaskId: null,
      editingTaskIndex: null
    })
  }

  handleEdit = () => {
    const { columns, editingColumnIndex, taskContent, editingTaskIndex } = this.state
    // Cập nhật nội dung task theo index của cột và của task
    const updatedColumn = columns.updateIn(
      [editingColumnIndex, 'tasks'],
      tasks => tasks.setIn([editingTaskIndex, 'content'], taskContent)
    )
    this.setState({
      editingColumnIndex: '',
      taskContent: '',
      editedTaskId: null,
      editingTaskIndex: null,
      columns: fromJS(updatedColumn)
    })
  }

  //ham cho phep thay doi du lieu trong task moi
  handleChangeTaskContent = (event) => {
    console.log(event.target.value)
    this.setState({
      taskContent: event.target.value
    })
  }

  render() {
    const { columns, displayModal, taskContent, editedTaskId } = this.state
    return (
      <div className="App">
        <h1 className="App__title">TO DO LIST</h1>
        <div className="App__content">
          {
            columns.map((column, columnIndex) => (
              <Column key={column.get('id')}
                column={column}
                handleAddNewTask={this.handleToggleModal}>
                {
                  column.get('tasks').map((task, taskIndex) => (
                    <Task key={task.get('id')}
                      task={task}
                      handleDeleteTask={this.handleDeleteTask(columnIndex, taskIndex)}
                      isEditing={task.get('id') === editedTaskId}
                      handleCancelEdit={this.handleCancelEdit}
                      handleChooseEditTask={this.handleChooseEditTask(columnIndex, taskIndex, task.get('id'))}
                      handleChangeTaskContent={this.handleChangeTaskContent}
                      handleEdit={this.handleEdit} />
                  ))
                }
              </Column>
            ))
          }
        </div>
        {
          displayModal &&
          <AddNewModal handleToggleModal={this.handleToggleModal()}
            selectedColumn={this.state.selectedColumn}
            handleChangeSelectedColumn={this.handleChangeSelectedColumn}
            taskContent={taskContent}
            handleChangeTaskContent={this.handleChangeTaskContent}
            handleAddNewTask={this.handleAddNewTask}
          />
        }
      </div>
    )
  }
}

export default App
