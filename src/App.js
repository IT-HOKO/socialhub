
import './App.css';
import Sidebar from './components/Sidebar';
import {home, users} from './pages/home';
import {main, send, received, deleted} from './pages/telegram'
import {tiktok_send, tiktok_api} from './pages/tiktok'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
          <Sidebar />
          <Switch>
            <Route path="/home" exact component={home} />
            <Route path="/home/users" exact component={users}/>
            <Route path="/telegram/main" exact component={main} />
            <Route path="/telegram/send" exact component={send} />
            <Route path="/telegram/received" exact component={received} />
            <Route path="/telegram/deleted" exact component={deleted} />
            <Route path="/tiktok/send" exact component={tiktok_send} />
            <Route path="/tiktok/send" exact component={tiktok_api} />
          </Switch>
    </Router>

  );
}

export default App;
