import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import "./App.css"
import logo from './assets/svg/logo.svg';
import { IconButton } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Home } from './pages/Home'
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Article } from "./pages/Article";
import { Cart } from "./pages/Cart";
import { InfoOutlineIcon, PlusSquareIcon, Search2Icon, SearchIcon } from '@chakra-ui/icons';

function App() {

  return (
    <ChakraProvider>
      <Router>
        
        <header>
          {/* <body> */}
            <div className="topnav">
              <a className="active" href='/'>Home</a>
              

              <div className="search-container">
                <form action="">
                    <input type="text" placeholder="Search.." name="search" autoComplete='off'/>
                    <button type="submit" id='search'><Search2Icon marginBottom={1}/></button>
                </form>
              </div>

              <div className="compte">
                <a id='login' href='/cart'><InfoOutlineIcon /></a>
                <a id='cart' href='/login' ><PlusSquareIcon /></a>
              </div>
            </div>
          {/* </body> */}
        </header>
      
        <Routes>
          <Route path='/' element={< Home />}></Route>
          <Route path='/register' element={< Register />}></Route>
          <Route path='/login' element={< Login />}></Route>
          <Route path='/article/:id' element={< Article />}></Route>
          <Route path='/cart' element={< Cart />}></Route>
        </Routes>
      </Router>

    </ChakraProvider>
  )
}

export default App;
