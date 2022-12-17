// import data from "./data";
import { Suspense } from 'react';
import React from 'react';
import { BrowserRouter,Link, Route, Routes } from 'react-router-dom'
// import ProductScreen from './screens/ProductScreen';
const ProductScreen = React.lazy(()  => import('./screens/ProductScreen'))
const HomeScreen = React.lazy(() => import('./screens/HomeScreen'));

function App() {
  return (
    <>
    <Suspense fallback={<div><b>Loading...</b></div>}>
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
    </Suspense>
    </>
  );
}

export default App;
