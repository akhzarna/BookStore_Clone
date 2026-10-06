
import { BrowserRouter, Routes, Route, Link } from 'react-router';

import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import BookCard from './components/BookCard';

import './App.css';

export default function App() {
  
  return (
    
    <div className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="mx-auto max-w-7xl">

        <header className="mb-8 border-b border-slate-200 pb-4">
          <h1 className="text-3xl font-extrabold text-slate-900">ReactJS Book Store</h1>
          <p className="mt-1 text-slate-600">A step-by-step ReactJS component demonstration for beginners</p>
        </header>

        <main>
          
          
          <BrowserRouter>
            
            <nav className="mb-6 flex gap-4">
              
              <Link to="/"> Home Click </Link>
              <Link to="/login"> Login Click </Link>
              <Link to="/register"> Register Click </Link>
              <Link to="/BookCard"> Books Loading... </Link>
            
            </nav>

            <Routes>
              
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/BookCard" element={<BookCard />} />
           
            </Routes>

          </BrowserRouter>

        </main>

        
      </div>
    </div>
  );
}
