import React from 'react'
import './index.scss'
import NoteHeader from './component/noteHeader'
class AppMainContent extends React.Component{
  render() {
    return (
      <div className="app-main-content">
        <NoteHeader/>
        <div id="editor"></div>
      </div>
    )
  }

  componentDidMount() {
    const e = import('wangeditor');
    e.then(({ default: wangEditor}) => {
      const editor = new wangEditor('#editor');
      editor.create();
    })
  }
}
export default AppMainContent