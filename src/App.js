import React from 'react'
import Homepage from './Product_Components/Homepage'
import Searchpage from './Product_Components/Searchpage'
import Productdetails from './Product_Components/Productdetails'
import Navbar from './NavBar/Navbar';
import Error from './ErrorHandler/Error';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { QueryClientProvider , QueryClient } from 'react-query';

const queryclient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryclient}>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Homepage />} />
            <Route exact path='/search' element={<Searchpage />} />
            <Route exact path='/product' element={<Productdetails />} />
            <Route path='/*' element={<Error />} />
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>

  )
}

export default App