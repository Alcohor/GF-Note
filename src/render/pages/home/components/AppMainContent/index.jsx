import React from 'react'
import './index.scss'
class AppMainContent extends React.Component{
  render() {
    return (
      <div className="app-main-content">
        <div>
          <h1>这是一条笔记的标题</h1>
          创建时间：2019-05-22 11：23：28
        </div>
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