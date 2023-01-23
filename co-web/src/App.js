import { Route,Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './Components/Header';
import Products from './Components/Products';
import SingleProduct from './Components/SingleProduct';


function App() {

  
  return (
    <>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path=':id' element={<SingleProduct/>}/>
      </Routes>
    </>
  );
}

export default App;
