// import data from "./data";
import { Suspense } from 'react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import  Container  from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap'
const ProductScreen = React.lazy(()  => import('./screens/ProductScreen'))
const HomeScreen = React.lazy(() => import('./screens/HomeScreen'));

function App() {
  return (
    <>
    <Suspense fallback={<div><b>Loading...</b></div>}>
    <BrowserRouter>
    <div className='d-flex flex-column site-container'>
      <header>
        <Navbar bg='dark' variant='dark'>
          <Container>
            <LinkContainer to='/'>
              <Navbar.Brand>AMAZON</Navbar.Brand>
            </LinkContainer>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container>
          <Routes>
          <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/" element={<HomeScreen />} />
          </Routes>
            </Container>        
      </main>
      <footer>
      <div className="text-center">All rights reserved</div>
      </footer>
    </div>
    </BrowserRouter>
    </Suspense>
    </>
  );
}

export default App;
