import React from 'react'
import AppSideMenu from './components/appSideMenu'
import AppMainContent from './components/AppMainContent';
import './index.scss'
class HomePage extends React.Component{
  render() {
    return (
      <div className="app-home">
        <div className="app-common-layout-wrap menu" span={3}><AppSideMenu/></div>
        <div className="app-common-layout-wrap nav" span={5}></div>
        <div className="app-common-layout-wrap content" span={16}><AppMainContent/></div>
    </div>
    )
  }
}

export default HomePage; 