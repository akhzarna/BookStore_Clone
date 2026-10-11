
import { useState } from 'react';
import { useNavigate } from 'react-router';

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
  },
  {
    _id: '65ed8cd838df668685b80ac3',
    title: 'معاشياتِ اسلام',
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
    coverPhotoUri: 'books/معاشياتِ اسلام_1710066904500/معاشياتِ اسلام.png',
    fileUri: 'books/معاشياتِ اسلام_1710066904500/معاشياتِ اسلام.pdf',
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
    createdAt: '2024-03-10T10:35:04.755Z',
    updatedAt: '2024-03-10T10:35:04.755Z'
  },
  {
    _id: '65c0f1dcb96e547f60281571',
    title: 'کلمہ طیبہ پر ایمان لانے کا مقصد',
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
    coverPhotoUri: 'books/کلمہ طیبہ پر ایمان لانے کا مقصد_1707143644063/کلمہ طیبہ پر ایمان لانے کا مقصد.png',
    fileUri: 'books/کلمہ طیبہ پر ایمان لانے کا مقصد_1707143644063/کلمہ طیبہ پر ایمان لانے کا مقصد.pdf',
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
    createdAt: '2024-02-05T14:34:04.079Z',
    updatedAt: '2024-02-05T14:34:04.079Z'
  },
  {
    _id: '65c0f1b4b96e547f6028156b',
    title: 'مسئلہِ جبر و قدر',
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
    coverPhotoUri: 'books/مسئلہِ جبر و قدر_1707143604204/مسئلہِ جبر و قدر.png',
    fileUri: 'books/مسئلہِ جبر و قدر_1707143604204/مسئلہِ جبر و قدر.pdf',
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
    createdAt: '2024-02-05T14:33:24.251Z',
    updatedAt: '2024-02-05T14:33:24.251Z'
  },
  {
    _id: '65ba365657e3e988e6740d78',
    title: 'حقیقتِ صوم و صلوٰۃ',
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
    coverPhotoUri: 'books/حقیقتِ صوم و صلوٰۃ_1706702421839/حقیقتِ صوم و صلوٰۃ.png',
    fileUri: 'books/حقیقتِ صوم و صلوٰۃ_1706702421839/حقیقتِ صوم و صلوٰۃ.txt',
    chapters: [
      'عبادت',
      'نماز',
      'نماز میں آپ کیا پڑھتے ہیں؟',
      'نماز باجماعت',
      'نمازیں بے اثر کیوں ہو گئیں؟',
      'روزہ'
    ],
    bookType: 'UNICODE',
    category: {
      _id: '65ba1bb257e3e988e6740cff',
      name: 'Literature App Books',
      createdAt: '2024-01-31T10:06:42.636Z',
      updatedAt: '2024-02-06T12:41:15.502Z',
      __v: 0
    },
    tags: [],
    averageRating: null,
    createdAt: '2024-01-31T12:00:22.151Z',
    updatedAt: '2024-04-17T20:18:09.968Z'
  },
  {
    _id: '65bfba55b96e547f602810e6',
    title: 'خطبات',
    description: 'Books By Syed Abul Ala Maududi',
    narrator: 'Ali',
    isPublished: true,
    author: {
      _id: '65ba1bab57e3e988e6740cfb',
      name: 'مولانا سید ابو الاعلیٰ مودودیؒ',
      createdAt: '2024-01-31T10:06:35.438Z',
      updatedAt: '2024-01-31T10:06:35.438Z',
      __v: 0
    },
    coverPhotoUri: 'audiobooks/خطبات_1707063892678/cover.png',
    audioFilesUri: ['audiobooks/خطبات_1707063892678/1.mp3'],
    bookType: 'AUDIO',
    category: {
      _id: '65ba1bb257e3e988e6740cff',
      name: 'Literature App Books',
      createdAt: '2024-01-31T10:06:42.636Z',
      updatedAt: '2024-02-06T12:41:15.502Z',
      __v: 0
    },
    tags: [],
    averageRating: null,
    createdAt: '2024-02-04T16:24:53.558Z',
    updatedAt: '2024-02-04T16:24:53.558Z',
    timestamps: []
  }
];

export default function BottomCard() {

  const navigate = useNavigate();

  const baseUrl = 'http://159.65.157.115/';
  const [realBooks, setRealBooks] = useState(initialBooks);

  function loadAllBooks() {
    // setRealBooks(initialBooks);
    navigate('/');
  }

  function loadPdfBooks() {
    // const pdfBooks = initialBooks.filter((book) => book.bookType === 'PDF');
    // setRealBooks(pdfBooks);
    navigate('/Login');
  }

  function loadUnicodeBooks() {
    // const unicodeBooks = initialBooks.filter((book) => book.bookType === 'UNICODE');
    // setRealBooks(unicodeBooks);
    navigate('/Register');
  }

  function loadAudioBooks() {
    // const audioBooks = initialBooks.filter((book) => book.bookType === 'AUDIO');
    // setRealBooks(audioBooks);
    navigate('/AudioBooks');
  }

  function findBook() {
    const found = initialBooks.find((book) => book.title === 'خطبات' || book.title === 'روزہ');
    console.log('Find Book:', found);
    setRealBooks(found ? [found] : []);
  }

  function purchaseBook() {
    navigate('/login');
  }

  return (

    <section className="mt-6" aria-labelledby="books-title ">
      
      <div className="mb-6 flex flex-wrap items-center gap-3 ">
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


       <button
          type="button"
          onClick={purchaseBook}
          className="cursor-pointer rounded-lg bg-amber-500 px-4 py-2 font-semibold text-slate-900 shadow-md transition duration-150 hover:bg-amber-600 active:scale-95"
        >
          Purchase Book
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
