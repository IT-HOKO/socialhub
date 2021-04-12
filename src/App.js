
import './App.css';
import Sidebar from './components/Sidebar';
import Overview from './pages/home';
import {main, send, received, deleted} from './pages/telegram'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
          <Sidebar />
          <Switch>
            <Route path="/overview" exact component={Overview} />
            <Route path="/telegram/main" exact component={main} />
            <Route path="/telegram/send" exact component={send} />
            <Route path="/telegram/received" exact component={received} />
            <Route path="/telegram/deleted" exact component={deleted} />
          </Switch>
    </Router>

  );
}

export default App;
