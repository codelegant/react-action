/**
 * Author: CodeLai
 * Email: codelai@dotdotbuy.com
 * DateTime: 2016/8/25 17:20
 */
import React from 'react';
import { render } from 'react-dom';
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import IndexRoute from 'react-router/lib/IndexRoute';
import Link from 'react-router/lib/Link';
import IndexLink from 'react-router/lib/IndexLink';
import browserHistory from 'react-router/lib/browserHistory';
import Redirect from 'react-router/lib/Redirect';
import withRouter from 'react-router/lib/withRouter';
import useBasename from 'history/lib/useBasename';

import About from './About';
import Inbox from './Inbox';

const withExampleBasename = history => useBasename(() => history)({ basename: `/view` });

const Dashboard = () => <h2>Welcome to the app!</h2>;

const Message = props =>
  <h3>Message, ID:{props.params.id},Name:{props.location.query.name}</h3>;

/**
 * 如果使用 <Link to="/">Home</Link>，当 / 下面的页面被访问时，Home 会被激活
 * 为了避免这种情况，需要使用 <IndexLink to="/">Home</IndexLink>
 */
const App = props => (
  <div>
    <h1>App</h1>
    <ul>
      <li><IndexLink to="/app.html"
                     activeStyle={{ color: 'red' }}>Home</IndexLink></li>
      <li><Link to="/about"
                activeStyle={{ color: 'red' }}>About</Link></li>
      <li><Link to="/inbox"
                activeStyle={{ color: 'red' }}>Inbox</Link></li>
      <li><Link to="/page"
                activeStyle={{ color: 'red' }}>Page</Link></li>
    </ul>
    {props.children}
  </div>
);

class Page extends React.Component {
  componentDidMount() {
    //进入后触发
    console.log('Welcome to Page!');
  }

  componentWillUnmount() {
    //离开前触发
    console.log('You have unsaved information, are you sure you want to leave this page?');
  }

  render() {
    return (<div>Staff</div>);
  }
}

const RouterPage = withRouter(Page);

render((
  <Router history={withExampleBasename(browserHistory)}>
    <Route path="/app.html"
           component={App}>
      <IndexRoute component={Dashboard}/>
      <Route path="/about"
             component={About}/>
      <Route path="/page"
             onEnter={(nextState, replace) => {
               console.log('Enter Page');
             }}
             onLeave={() => {
               console.log('Leave Page');
             }}
             component={RouterPage}/>
      <Route path="/inbox"
             component={Inbox}>
        {/* 跳转 /inbox/messages/:id 到 /messages/:id */}
        <Redirect from="/inbox/messages/:id"
                  to="/messages/:id"/>
        <Route path="/messages/:id"
               component={Message}/>
      </Route>
    </Route>
  </Router>
), document.getElementById('container'));

// const routes = {
//   path       : '/',
//   component  : App,
//   indexRoute : {component: Dashboard},
//   childRoutes: [
//     {path: 'about', component: About},
//     {
//       path       : 'inbox',
//       component  : Inbox,
//       childRoutes: [{
//         path   : 'messages/:id',
//         onEnter: ({params}, replace) => replace(`/messages/${params.id}`)
//       }]
//     },
//     {
//       component  : Inbox,
//       childRoutes: [{
//         path: 'messages/:id', component: Message
//       }]
//     }
//   ]
// };
// render(<Router routes={routes} />, document.getElementById('container'));