import logo from './logo.svg';
import './App.css';
import AddBook from './Components/AddBook';
import SearchBook from './Components/SearchBook';
import NaviBar from './Components/NaviBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DeleteBook from './Components/DeleteBook';
import ViewAll from './Components/ViewAll';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddBook/>}/>
      <Route path='/search' element={<SearchBook/>}/>
      <Route path='/delete' element={<DeleteBook/>}/>
      <Route path='/view' element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
