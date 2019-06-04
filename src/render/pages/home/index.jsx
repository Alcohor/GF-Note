import React from 'react'
import AppSideMenu from './components/appSideMenu'
import AppRouter from './components/appContent'
import './index.scss'
class HomePage extends React.Component{
  render() {
    return (
      <div className="app-home">
        <div className="app-common-layout-wrap menu"><AppSideMenu/></div>
          <AppRouter/>
    </div>
    )
  }
}

export default HomePage; 