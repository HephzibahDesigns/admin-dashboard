import './App.css';
import MainBoard from './components/MainBoard';
import Rightside from './components/Rightside';
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="App">
      <div className='AppGlass'>
      <Sidebar />
      <MainBoard />
      <Rightside />
      </div>
    </div>
  );
}

export default App;
