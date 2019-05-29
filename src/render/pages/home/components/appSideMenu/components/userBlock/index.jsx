import { Avatar } from 'react';
import './index.scss'

class UserBlock extends React.Component {
  constructor() {
    super(props)
  }

  render() {
    return (
      <div className="div">
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      </div>
    )
  }
}

export default UserBlock