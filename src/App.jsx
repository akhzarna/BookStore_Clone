import BookCardClone from './components/BookCardClone';
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
          <BookCard />
          <BookCardClone />

        </main>
      
      </div>
    </div>
  );
}
