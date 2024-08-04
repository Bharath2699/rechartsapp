import Linecharts from './components/Linecharts';
import Piecharts from './components/Piecharts';
import Sidebar from "./components/Sidebar"
import './App.css';

function App() {
  return (
    <div className="App">

      <div className='side'>
        <Sidebar/>
      </div>
      <div className='charts-card'>
        <h1>Dashboard</h1>
        <div className='charts'>
            <Linecharts/>
            <Piecharts/>
        </div>
      </div>
    </div>
  );
}

export default App;
