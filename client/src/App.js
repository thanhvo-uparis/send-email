import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import AddUser from './components/AddUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/addUser" element={<AddUser/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
