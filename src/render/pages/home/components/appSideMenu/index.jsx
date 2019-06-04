import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import { Layout, Menu, Breadcrumb, Icon, Switch } from 'antd';
import { withRouter } from 'react-router-dom'
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


class AppMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
      theme: 'dark',
      current: 'note-book',
    };
  }

  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
    this.props.history.push(e.key)
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <div className="app-side-menu">
        <Menu onClick={this.handleClick} style={{ height:'100%' }} theme={this.state.theme} defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="user">
            <Icon type="user" />
            <span>我的</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="book" />
                <span>笔记本</span>
              </span>
            }
          >
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <Icon type="star" />
            <span>收藏</span>
          </Menu.Item>
          <Menu.Item key="11">
            <Icon type="setting" />
            <span>设置</span>
          </Menu.Item>
          <Menu.Item key="12">
            <Icon type="to-top" />
            <span>导出</span>
          </Menu.Item>
          <div className="theme-swith-btn">
            <Switch
            checked={this.state.theme === 'dark'}
            onChange={this.changeTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"
          />
          </div>
        </Menu>
      </div>
    );
  }
}

let menuDom = document.createElement('div')
ReactDOM.render(<AppMenu />, menuDom);

export default withRouter(AppMenu);