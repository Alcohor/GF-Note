import React from 'react';
import AdminPage from './pages/admin'
import HomePage from './pages/home'

class App extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      isLogin : false,
      userInfo: null
    }
  }
  render() {
    return (
      <div id="app" style={{ height: '100%' }}>
        { !this.state.isLogin ? <HomePage/> : <AdminPage/> }
      </div>
    )
  }
}

export default App;
