import React from 'react';
import Nav from './components/noteNavList'
import NoteContent from './components/noteContent'
import './index.scss'
class NoteBookContent extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className="note-book-content">
        <Nav/>
        <NoteContent/>
      </div>
    )
  }
}

export default NoteBookContent;