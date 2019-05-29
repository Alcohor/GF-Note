import React from 'react';
import Login from './components/login/login';
import Registe from './components/registe/registe';
import './index.scss';


class AdminPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'login'
    }
  }
  render() {
    return (
      <div className="admin-page">
        <div className="content">
          { this.state.type === 'login' 
            ? <Login handleChangeAdminType={this.handleChangeAdminType} /> 
            : <Registe handleChangeAdminType={this.handleChangeAdminType}/> 
          }
        </div>
      </div>
    )
  }
  handleChangeAdminType = (e, newType) => {
    console.log(e)
    e.preventDefault()
    this.setState({
      type: newType
    })
  }
}

export default AdminPage;