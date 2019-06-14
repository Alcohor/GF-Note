import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import  NoteBookContent  from "./component/noteBookContent";
import UserContent from './component/userContent'
import MarkedNote from './component/markedNote'
import UserSetting from './component/userSetting'
import ExportNote from './component/exportNote'
import './index.scss'
export class AppRouter extends React.Component {
  render() {
    return (
      <div className="app-content">
        <HashRouter>
          <Switch>
            <Route path={'/user'} component={UserContent}/>
            <Route path={'/book/:bookId'} component={NoteBookContent}/>
            <Route path={'/mark'} component={MarkedNote}/>
            <Route path={'/setting'} component={UserSetting}/>
            <Route path={'/export'} component={ExportNote}/>
          </Switch>
        </HashRouter>
      </div>
    )
  }
}

export default AppRouter;