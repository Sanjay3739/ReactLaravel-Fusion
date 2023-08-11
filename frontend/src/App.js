import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, } from 'react-router-dom';
import Home from './pages/home';
import Create from './pages/create';
import Edit from './pages/edit';
import Show from './pages/view';
import Demo from './pages/demo';
import Form from './pages/form';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/create' element={<Create />} />
      <Route path='/edit/:id' element={<Edit />} />
      <Route path='/show/:id' element={<Show />} />
      <Route path='/demo' element={<Demo />} />
      <Route path='/form' element={<Form />} />
    </Routes>
  );
}
export default App;
