import Dashboard from './Components/Dashboard';
import constants from './Components/constants';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className='header-style'>{constants.Headers}</div>
      <Dashboard/>
    </div>
  );
}

export default App;
