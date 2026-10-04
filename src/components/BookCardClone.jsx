import { useState } from 'react';

const initialBooks = [
  {
    _id: '663b818f38df668685b8d31d',
    title: 'زندگی بعد موت',
    description: 'Books By Syed Abul Ala Maududi',
    isPublished: true,
    isArabic: false,
    author: {
      _id: '65ba1bab57e3e988e6740cfb',
      name: 'مولانا سید ابو الاعلیٰ مودودیؒ',
      createdAt: '2024-01-31T10:06:35.438Z',
      updatedAt: '2024-01-31T10:06:35.438Z',
      __v: 0
    },
    coverPhotoUri: 'books/زندگی بعد موت_1715175823931/زندگی بعد موت.jpeg',
    fileUri: 'books/زندگی بعد موت_1715175823931/زندگی بعد موت.pdf',
    chapters: [],
    bookType: 'PDF',
    category: {
      _id: '65ba1bb257e3e988e6740cff',
      name: 'Literature App Books',
      createdAt: '2024-01-31T10:06:42.636Z',
      updatedAt: '2024-02-06T12:41:15.502Z',
      __v: 0
    },
    tags: [],
    averageRating: null,
    createdAt: '2024-05-08T13:43:44.006Z',
    updatedAt: '2024-05-08T13:43:44.006Z'
  }
];

export default function BookCardClone() {

  const baseUrl = 'http://159.65.157.115/';
  const [realBooks, setRealBooks] = useState(initialBooks);

  function loadAllBooks() {
    setRealBooks(initialBooks);
    console.log('Load All Books — Total:', initialBooks.length, initialBooks);
  }

  function loadPdfBooks() {
    const pdfBooks = initialBooks.filter((book) => book.bookType === 'PDF');
    setRealBooks(pdfBooks);
    console.log('PDF Books — Total:', pdfBooks.length, pdfBooks);
  }

  function loadUnicodeBooks() {
    const unicodeBooks = initialBooks.filter((book) => book.bookType === 'UNICODE');
    setRealBooks(unicodeBooks);
    console.log('Unicode Books — Total:', unicodeBooks.length, unicodeBooks);
  }

  function loadAudioBooks() {
    const audioBooks = initialBooks.filter((book) => book.bookType === 'AUDIO');
    setRealBooks(audioBooks);
    console.log('Audio Books — Total:', audioBooks.length, audioBooks);
  }

  function findBook() {
    const found = initialBooks.find((book) => book.title === 'خطبات' || book.title === 'روزہ');
    console.log('Find Book:', found);
    setRealBooks(found ? [found] : []);
  }

  return (
    <section className="mt-6" aria-labelledby="books-title">
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={loadAllBooks}
          className="cursor-pointer rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white shadow-md transition duration-150 hover:bg-indigo-700 active:scale-95 active:bg-indigo-900"
        >
          Load All Books
        </button>

        <button
          type="button"
          onClick={loadPdfBooks}
          className="cursor-pointer rounded-lg bg-rose-600 px-4 py-2 font-semibold text-white shadow-md transition duration-150 hover:bg-rose-700 active:scale-95 active:bg-rose-900"
        >
          PDF Books
        </button>

        <button
          type="button"
          onClick={loadUnicodeBooks}
          className="cursor-pointer rounded-lg bg-teal-600 px-4 py-2 font-semibold text-white shadow-md transition duration-150 hover:bg-teal-700 active:scale-95 active:bg-teal-900"
        >
          Unicode Books
        </button>

        <button
          type="button"
          onClick={loadAudioBooks}
          className="cursor-pointer rounded-lg bg-violet-600 px-4 py-2 font-semibold text-white shadow-md transition duration-150 hover:bg-violet-700 active:scale-95 active:bg-violet-900"
        >
          Audio Books
        </button>

        <button
          type="button"
          onClick={findBook}
          className="cursor-pointer rounded-lg bg-amber-500 px-4 py-2 font-semibold text-slate-900 shadow-md transition duration-150 hover:bg-amber-600 active:scale-95"
        >
          Find Book
        </button>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {realBooks.map((book, index) => (
          <article
            key={book._id ?? `${book.id}-${index}`}
            className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
          >
            {book.coverPhotoUri && (
              <img
                src={`${baseUrl}${book.coverPhotoUri}`}
                alt={`Cover of ${book.title}`}
                className="h-64 w-full bg-slate-800 object-contain"
                loading="lazy"
              />
            )}

            <div className="flex flex-col gap-3 p-6">
              <h1 className="text-2xl font-bold text-slate-800">{book.title}</h1>
              <h2 className="text-base font-medium text-slate-600">{book.description}</h2>
              <h3 className="text-sm font-semibold text-slate-400">{book.author?.name}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
