
import { BrowserRouter, Routes, Route, Link } from 'react-router';

import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import BookCard from './components/BookCard';
import FlexDemo from './components/FlexDemo';

import './App.css';

export default function App() {
  
  return (
    
    <div className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8 border-b border-slate-200 pb-4">
          <div className="text-3xl font-extrabold text-slate-900">ReactJS Book Store</div>
          <div className="mt-1 text-slate-600">A step-by-step ReactJS component demonstration for beginners</div>
        </div>

        <div>
          
          
            <BrowserRouter>

            <div className="mb-6 flex flex-wrap gap-4">
              
              <Link to="/"> Open Home </Link>
              <Link to="/login"> Open Login </Link>
              <Link to="/register"> Open Register </Link>
              <Link to="/BookCard"> Open Books </Link>
              <Link to="/flex-demo"> Open Flexbox Demo </Link>
            
            </div>

            <Routes>
              
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/BookCard" element={<BookCard />} />
              <Route path="/flex-demo" element={<FlexDemo />} />
           
            </Routes>
          </BrowserRouter>

        </div>

        
      </div>
    </div>
  );
}
