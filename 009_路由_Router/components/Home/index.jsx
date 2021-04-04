import React from 'react';
import { NavLink, Route ,Redirect} from 'react-router-dom'
import News from './News'
import Message from './Message'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
const Home = (props) => {
  return (
    <div>
      <h3>我是Home的内容</h3>
      <div>
        <ul className="nav nav-tabs">
          <li>
            <NavLink className="list-group-item" to="/home/news">News</NavLink>
          </li>
          <li>
            <NavLink className="list-group-item" to="/home/message">Message</NavLink>
          </li>
        </ul>
        <Switch>
          <Route  path="/home/news" component={News} />
          <Route  path="/home/message" component={Message} />
          <Redirect to="/home/news" />
        </Switch>
      </div>
    </div>
  )
}

export default Home;