// import data from "./data";
import { BrowserRouter,Link, Route, Routes } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <>
    <BrowserRouter>
    <div>
      <header>
        <Link to={"/"}>AMAZON</Link>
      </header>
      <main>
        
        <Routes>
          <Route path='/product/:slug' element={<ProductScreen/>}/>
          <Route exact path='/' element={<HomeScreen/>}/>
        </Routes>
      </main>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
