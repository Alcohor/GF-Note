import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import  NoteBookContent  from "./component/noteBookContent";
import UserContent from './component/userContent'
import './index.scss'
export class AppRouter extends React.Component {
  render() {
    return (
      <div className="app-content">
        <HashRouter>
          <Switch>
            <Route path={'/note-book'} component={NoteBookContent}/>
            <Route path={'/user'} component={UserContent}/>
          </Switch>
        </HashRouter>
      </div>
    )
  }
}

export default AppRouter;