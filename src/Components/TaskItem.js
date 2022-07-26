import React, { Component } from 'react';

class TaskItem extends Component {
  render() {
    const { data, index } = this.props;
    return (
      <tr key={ index }>
        <td>{ index + 1 }</td>
        <td>{ data.name }</td>
        <td className="text-center">
          <span className="label label-success">
          { data.status ? 'Kích Hoạt' : 'Ẩn' }
          </span>
        </td>
        <td className="text-center">
          <button type="button" className="btn btn-warning">
            <span className="fa fa-pencil mr-5" />Sửa
          </button>
          <button type="button" className="btn btn-danger">
            <span className="fa fa-trash mr-5" />Xóa
          </button>
        </td>
      </tr>
    )
  }
}

export default TaskItem;