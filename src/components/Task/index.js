import React from 'react';
import './style.css';

const Task = (props) => (

  <div className="Task">
    {
      props.isEditing ?
      <div className="Task__editing">
        <input type="text"
          className="Task__editor"
          defaultValue={props.task.get('content')}
          onChange={props.handleChangeTaskContent} />
        <div className="Task__editing-action">
          <i className="fas fa-check" onClick={props.handleEdit}></i>
          <i className="fas fa-ban" onClick={props.handleCancelEdit}></i>
        </div>
        <div className="Task__editing-bgr" onClick={props.handleCancelEdit}></div>
      </div>
      :
      <>
      <div className="Task__time">
        <i className="far fa-calendar-alt"></i> {props.task.get('time')}
      </div>
      <div className="Task__main">
        <div className="Task__content">
          {props.task.get('content')}
        </div>
        <div className="Task__action">
          <div className="Task__btn" >
              <i className="far fa-edit" onClick={props.handleChooseEditTask}></i>
          </div>
          <div className="Task__btn">
              <i className="far fa-trash-alt" onClick={props.handleDeleteTask}></i>
          </div>
        </div>
      </div>
      </>
    }
  </div>
)

export default Task;
