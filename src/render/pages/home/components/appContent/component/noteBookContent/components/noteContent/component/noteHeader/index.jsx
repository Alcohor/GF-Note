import React, { PureComponent } from 'react';
import './index.scss'
class NoteHeader extends PureComponent{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="note-header">
        <h1 className="note-title">深入浅出Webpack</h1>
        <div className="more-note-info">
          <span className="create-time">创建时间: 2019-03-02 22:21:07</span>
          <span>最后修改: 五分钟前</span>
        </div>
      </div>
    )
  }
}

export default NoteHeader;