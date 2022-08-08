import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import './GlobalStyle.css';

function App() {
  return (
    <div id="container">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
