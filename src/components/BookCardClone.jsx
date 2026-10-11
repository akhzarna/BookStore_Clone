import { useState } from 'react';

// 1. A simple JavaScript array: each object describes one sample book.

const otherBooks = [
  {
    id: 2,
    title: 'Travel Journal',
    author: 'Ayesha Khan',
    description: 'Ideas for planning trips and recording your adventures.',
    price: 'Rs. 650',
    icon: '🌍',
  },
  {
    id: 3,
    title: 'Journal',
    author: 'Ali Khan',
    description: 'Ideas for planning trips and recording your adventures.',
    price: 'Rs. 50',
    icon: '🌍',
  },
  {
    id: 4,
    title: 'Journal Clone',
    author: 'Khan',
    description: 'Ideas for planning trips and recording your adventures.',
    price: 'Rs. 750',
    icon: '🌍',
  },
  {
    id: 5,
    title: 'Journal Clone',
    author: 'Khan',
    description: 'Ideas for planning trips and recording your adventures.',
    price: 'Rs. 850',
    icon: '🌍',
  },
  {
    id: 6,
    title: 'Journal Clone',
    author: 'Khan',
    description: 'Ideas for planning trips and recording your adventures.',
    price: 'Rs. 950',
    icon: '🌍',
  }
];

var flag = 'in Class Section B';

const initialBooks = [
  {
    id: 2,
    title: 'Section B Travel Journal',
    author: 'Ayesha Khan',
    description: 'Ideas for planning trips and recording your adventures.',
    price: 'Rs. 650',
    icon: '🌍',
  },
  {
    id: 3,
    title: 'Journal',
    author: 'Ali Khan',
    description: 'Ideas for planning trips and recording your adventures.',
    price: 'Rs. 650',
    icon: '🌍',
  },
   {
    id: 4,
    title: 'Journal Clone',
    author: 'Khan',
    description: 'Ideas for planning trips and recording your adventures.',
    price: 'Rs. 650',
    icon: '🌍',
  },
  {
    id: 4,
    title: 'Journal Clone',
    author: 'Khan',
    description: 'Ideas for planning trips and recording your adventures.',
    price: 'Rs. 650',
    icon: '🌍',
  },
  {
    id: 4,
    title: 'Journal Clone',
    author: 'Khan',
    description: 'Ideas for planning trips and recording your adventures.',
    price: 'Rs. 650',
    icon: '🌍',
  }
];

// Compare changing a plain array with updating an array stored in React state.
export default function BookCardClone() {

  // Copy the array so pushing into otherBooks does not change our state array.
  // const [realBooks, setRealBooks] = useState(() => [...otherBooks]);
  
  const baseUrl = 'http://159.65.157.115/';

  // http://159.65.157.115/books/زندگی بعد موت_1715175823931/زندگی بعد موت.jpeg

  const [realBooks, setRealBooks] = useState(
    [
    {
      "_id": "663b818f38df668685b8d31d",
      "title": "زندگی بعد موت",
      "description": "Books By Syed Abul Ala Maududi",
      "isPublished": true,
      "isArabic": false,
      "author": {
        "_id": "65ba1bab57e3e988e6740cfb",
        "name": "مولانا سید ابو الاعلیٰ مودودیؒ",
        "createdAt": "2024-01-31T10:06:35.438Z",
        "updatedAt": "2024-01-31T10:06:35.438Z",
        "__v": 0
      },
      "coverPhotoUri": "books/زندگی بعد موت_1715175823931/زندگی بعد موت.jpeg",
      "fileUri": "books/زندگی بعد موت_1715175823931/زندگی بعد موت.pdf",
      "chapters": [],
      "bookType": "PDF",
      "category": {
        "_id": "65ba1bb257e3e988e6740cff",
        "name": "Literature App Books",
        "createdAt": "2024-01-31T10:06:42.636Z",
        "updatedAt": "2024-02-06T12:41:15.502Z",
        "__v": 0
      },
      "tags": [],
      "averageRating": null,
      "createdAt": "2024-05-08T13:43:44.006Z",
      "updatedAt": "2024-05-08T13:43:44.006Z"
    },
    {
      "_id": "65ed8cd838df668685b80ac3",
      "title": "معاشياتِ اسلام",
      "description": "Books By Syed Abul Ala Maududi",
      "isPublished": true,
      "isArabic": false,
      "author": {
        "_id": "65ba1bab57e3e988e6740cfb",
        "name": "مولانا سید ابو الاعلیٰ مودودیؒ",
        "createdAt": "2024-01-31T10:06:35.438Z",
        "updatedAt": "2024-01-31T10:06:35.438Z",
        "__v": 0
      },
      "coverPhotoUri": "books/معاشياتِ اسلام_1710066904500/معاشياتِ اسلام.png",
      "fileUri": "books/معاشياتِ اسلام_1710066904500/معاشياتِ اسلام.pdf",
      "chapters": [],
      "bookType": "PDF",
      "category": {
        "_id": "65ba1bb257e3e988e6740cff",
        "name": "Literature App Books",
        "createdAt": "2024-01-31T10:06:42.636Z",
        "updatedAt": "2024-02-06T12:41:15.502Z",
        "__v": 0
      },
      "tags": [],
      "averageRating": null,
      "createdAt": "2024-03-10T10:35:04.755Z",
      "updatedAt": "2024-03-10T10:35:04.755Z"
    },
    {
      "_id": "65c0f1dcb96e547f60281571",
      "title": "کلمہ طیبہ پر ایمان لانے کا مقصد",
      "description": "Books By Syed Abul Ala Maududi",
      "isPublished": true,
      "isArabic": false,
      "author": {
        "_id": "65ba1bab57e3e988e6740cfb",
        "name": "مولانا سید ابو الاعلیٰ مودودیؒ",
        "createdAt": "2024-01-31T10:06:35.438Z",
        "updatedAt": "2024-01-31T10:06:35.438Z",
        "__v": 0
      },
      "coverPhotoUri": "books/کلمہ طیبہ پر ایمان لانے کا مقصد_1707143644063/کلمہ طیبہ پر ایمان لانے کا مقصد.png",
      "fileUri": "books/کلمہ طیبہ پر ایمان لانے کا مقصد_1707143644063/کلمہ طیبہ پر ایمان لانے کا مقصد.pdf",
      "chapters": [],
      "bookType": "PDF",
      "category": {
        "_id": "65ba1bb257e3e988e6740cff",
        "name": "Literature App Books",
        "createdAt": "2024-01-31T10:06:42.636Z",
        "updatedAt": "2024-02-06T12:41:15.502Z",
        "__v": 0
      },
      "tags": [],
      "averageRating": null,
      "createdAt": "2024-02-05T14:34:04.079Z",
      "updatedAt": "2024-02-05T14:34:04.079Z"
    },
    {
      "_id": "65c0f1b4b96e547f6028156b",
      "title": "مسئلہِ جبر و قدر",
      "description": "Books By Syed Abul Ala Maududi",
      "isPublished": true,
      "isArabic": false,
      "author": {
        "_id": "65ba1bab57e3e988e6740cfb",
        "name": "مولانا سید ابو الاعلیٰ مودودیؒ",
        "createdAt": "2024-01-31T10:06:35.438Z",
        "updatedAt": "2024-01-31T10:06:35.438Z",
        "__v": 0
      },
      "coverPhotoUri": "books/مسئلہِ جبر و قدر_1707143604204/مسئلہِ جبر و قدر.png",
      "fileUri": "books/مسئلہِ جبر و قدر_1707143604204/مسئلہِ جبر و قدر.pdf",
      "chapters": [],
      "bookType": "PDF",
      "category": {
        "_id": "65ba1bb257e3e988e6740cff",
        "name": "Literature App Books",
        "createdAt": "2024-01-31T10:06:42.636Z",
        "updatedAt": "2024-02-06T12:41:15.502Z",
        "__v": 0
      },
      "tags": [],
      "averageRating": null,
      "createdAt": "2024-02-05T14:33:24.251Z",
      "updatedAt": "2024-02-05T14:33:24.251Z"
    },
    {
      "_id": "65ba365657e3e988e6740d78",
      "title": "حقیقتِ صوم و صلوٰۃ",
      "description": "Books By Syed Abul Ala Maududi",
      "isPublished": true,
      "isArabic": false,
      "author": {
        "_id": "65ba1bab57e3e988e6740cfb",
        "name": "مولانا سید ابو الاعلیٰ مودودیؒ",
        "createdAt": "2024-01-31T10:06:35.438Z",
        "updatedAt": "2024-01-31T10:06:35.438Z",
        "__v": 0
      },
      "coverPhotoUri": "books/حقیقتِ صوم و صلوٰۃ_1706702421839/حقیقتِ صوم و صلوٰۃ.png",
      "fileUri": "books/حقیقتِ صوم و صلوٰۃ_1706702421839/حقیقتِ صوم و صلوٰۃ.txt",
      "chapters": [
        "عبادت",
        "نماز",
        "نماز میں آپ کیا پڑھتے ہیں؟",
        "نماز باجماعت",
        "نمازیں بے اثر کیوں ہو گئیں؟",
        "روزہ"
      ],
      "bookType": "UNICODE",
      "category": {
        "_id": "65ba1bb257e3e988e6740cff",
        "name": "Literature App Books",
        "createdAt": "2024-01-31T10:06:42.636Z",
        "updatedAt": "2024-02-06T12:41:15.502Z",
        "__v": 0
      },
      "tags": [],
      "averageRating": null,
      "createdAt": "2024-01-31T12:00:22.151Z",
      "updatedAt": "2024-04-17T20:18:09.968Z"
    },
    {
      "_id": "65bfba55b96e547f602810e6",
      "title": "خطبات",
      "description": "Books By Syed Abul Ala Maududi",
      "narrator": "Ali",
      "isPublished": true,
      "author": {
        "_id": "65ba1bab57e3e988e6740cfb",
        "name": "مولانا سید ابو الاعلیٰ مودودیؒ",
        "createdAt": "2024-01-31T10:06:35.438Z",
        "updatedAt": "2024-01-31T10:06:35.438Z",
        "__v": 0
      },
      "coverPhotoUri": "audiobooks/خطبات_1707063892678/cover.png",
      "audioFilesUri": [
        "audiobooks/خطبات_1707063892678/1.mp3"
      ],
      "category": {
        "_id": "65ba1bb257e3e988e6740cff",
        "name": "Literature App Books",
        "createdAt": "2024-01-31T10:06:42.636Z",
        "updatedAt": "2024-02-06T12:41:15.502Z",
        "__v": 0
      },
      "createdAt": "2024-02-04T16:24:53.558Z",
      "updatedAt": "2024-02-04T16:24:53.558Z",
      "timestamps": []
    }
  ]);

  const [demoResult, setDemoResult] = useState('');

//   const [realBooks, setRealBooks] = useState([
//   {
//     id: 0,
//     title: 'Everyday Cooking',
//     author: 'Sara Ahmed',
//     description: 'Simple recipes and kitchen tips for beginners.',
//     price: 'Rs. 750',
//     icon: '🍳',
//   },
//   {
//     id: 1,
//     title: 'A Guide to Gardening',
//     author: 'Ali Hassan',
//     description: 'Learn to grow flowers, herbs, and vegetables at home.',
//     price: 'Rs. 900',
//     icon: '🌱',
//   },
//   {
//     id: 2,
//     title: 'Travel Journal',
//     author: 'Ayesha Khan',
//     description: 'Ideas for planning trips and recording your adventures.',
//     price: 'Rs. 650',
//     icon: '🌍',
//   },
//   {
//     id: 3,
//     title: 'Journal',
//     author: 'Ali Khan',
//     description: 'Ideas for planning trips and recording your adventures.',
//     price: 'Rs. 650',
//     icon: '🌍',
//   },
//    {
//     id: 4,
//     title: 'Journal Clone',
//     author: 'Khan',
//     description: 'Ideas for planning trips and recording your adventures.',
//     price: 'Rs. 650',
//     icon: '🌍',
//   },
//   {
//     id: 5,
//     title: 'Clone',
//     author: 'JS',
//     description: 'Ideas for planning trips and recording your adventures.',
//     price: 'Rs. 650',
//     icon: '🌍',
//   },
//   {
//     id: 6,
//     title: 'Clone',
//     author: 'JS',
//     description: 'Ideas for planning trips and recording your adventures.',
//     price: 'Rs. 650',
//     icon: '🌍',
//   }
// ]);

//   const [realBooks, setRealBooks] = useState([
//   {
//     id: 0,
//     title: 'Everyday Cooking',
//     author: 'Sara Ahmed',
//     description: 'Simple recipes and kitchen tips for beginners.',
//     price: 'Rs. 750',
//     icon: '🍳',
//   },
//   {
//     id: 1,
//     title: 'A Guide to Gardening',
//     author: 'Ali Hassan',
//     description: 'Learn to grow flowers, herbs, and vegetables at home.',
//     price: 'Rs. 900',
//     icon: '🌱',
//   },
//   {
//     id: 2,
//     title: 'Travel Journal',
//     author: 'Ayesha Khan',
//     description: 'Ideas for planning trips and recording your adventures.',
//     price: 'Rs. 650',
//     icon: '🌍',
//   },
//   {
//     id: 3,
//     title: 'Journal',
//     author: 'Ali Khan',
//     description: 'Ideas for planning trips and recording your adventures.',
//     price: 'Rs. 650',
//     icon: '🌍',
//   },
//    {
//     id: 4,
//     title: 'Journal Clone',
//     author: 'Khan',
//     description: 'Ideas for planning trips and recording your adventures.',
//     price: 'Rs. 650',
//     icon: '🌍',
//   },
//   {
//     id: 5,
//     title: 'Clone',
//     author: 'JS',
//     description: 'Ideas for planning trips and recording your adventures.',
//     price: 'Rs. 650',
//     icon: '🌍',
//   },
//   {
//     id: 6,
//     title: 'Clone',
//     author: 'JS',
//     description: 'Ideas for planning trips and recording your adventures.',
//     price: 'Rs. 650',
//     icon: '🌍',
//   }
// ]);

  
function addDummyBook() {

    const dummyBook = {

      id: otherBooks.length,
      title: 'Dummy Book',
      author: 'Demo Author',
      description: 'A sample book added by clicking the button.',
      price: 'Rs. 500',
      icon: '📚',

    };

    // push() changes the array, but does not ask React to render again.
    // The grid now reads realBooks, so this separate array stays console-only.
    
    otherBooks.push(dummyBook);

    // Copy the objects so each console entry shows the array at that click.
    console.log('Check kar Lo:', otherBooks.map((book) => ({ ...book })));
  }

  function addRealBooks() {

    const newBook = {
      id: realBooks.length,
      title: 'Real Book',
      author: 'Demo Author',
      description: 'A sample book added using React state.',
      price: 'Rs. 500',
      icon: '📚',
    };

    // Create a new array instead of pushing into the existing state array.
    
    const updatedBooks = [...realBooks, newBook];
    setRealBooks(updatedBooks); // Ask React to render the updated book list.
    
    console.log('realBooks after adding a book:', updatedBooks.map((book) => ({ ...book })));
  }

  function showDestructuring() {
    // Array destructuring: get the first item by POSITION.
    // Same as: const firstBook = realBooks[0];
    
    const [firstBook] = realBooks;
    // const { title, author, price } = realBooks;

    if (!firstBook) {
      console.log('Add a book first to try destructuring.');
      setDemoResult('Destructuring: add a book first.');
      return;
    }

    // Object destructuring: get values by PROPERTY NAME.
    // Same as: const title = firstBook.title; (and likewise for author and price)
    const { title, author, price } = firstBook;

    console.log('Array destructuring — first book:', firstBook);
    console.log('Destructured title:', title);
    console.log('Destructured author:', author);
    console.log('Destructured price:', price);
    setDemoResult(`Destructuring: ${title} by ${author} costs ${price}`);
    // Destructuring only reads values; it does not change state or the book.
  }

  function showMapTitles() {
    // const titlesOnly = realBooks.map((book) => ({
    //   id: `title-${book.id}`,
    //   title: `Title: ${book.title}`,
    //   author: 'map() result',
    //   description: 'This item is the output of map() and shows only the title.',
    //   price: '',
    //   icon: '📘',
    // }));

    const bookTitles = realBooks.map((abc) => abc.title);

    console.log('bookTitles:', bookTitles);

    // setRealBooks(titlesOnly);
    // setDemoResult(`map(): ${titlesOnly.map((book) => book.title).join(', ')}`);
  }

  function showFilteredBooks() {
    
    const demoBooks = realBooks.filter((book) => book.price === 'Rs. 650');
    console.log('Section C is checking Consoles', demoBooks);
    
    setRealBooks(demoBooks);
    setDemoResult(
      demoBooks.length > 0
        ? `filter(): ${demoBooks.map((book) => book.title).join(', ')}`
        : 'filter(): no books found for Demo Author'
    );
  }

  function showFirstDemoBook() {
    const firstDemoBook = realBooks.find((book) => book.author === 'Demo Author');
    console.log('find() result:', firstDemoBook);
    setRealBooks(firstDemoBook ? [firstDemoBook] : []);
    setDemoResult(
      firstDemoBook
        ? `find(): ${firstDemoBook.title} by ${firstDemoBook.author}`
        : 'find(): no matching book found'
    );
  }

  function resetBooks() {
    setRealBooks(initialBooks);
    setDemoResult('State reset to original books.');
  }

  // ── New Button Handlers ──────────────────────────────────────────
  function loadAllBooks() {
    console.log('Load All Books — Total:', realBooks.length, realBooks);
  }

  function loadPdfBooks() {
    const pdfBooks = realBooks.filter((book) => book.bookType === 'PDF');
    console.log('PDF Books — Total:', pdfBooks.length, pdfBooks);
  }

  function loadUnicodeBooks() {
    const unicodeBooks = realBooks.filter((book) => book.bookType === 'UNICODE');
    console.log('Unicode Books — Total:', unicodeBooks.length, unicodeBooks);
  }

  function loadAudioBooks() {
    const audioBooks = realBooks.filter((book) => book.bookType === 'AUDIO');
    console.log('Audio Books — Total:', audioBooks.length, audioBooks);
  }

  function findBook() {
    const found = realBooks.find((book) => book.title === 'روزہ');
    console.log('Find Book (روزہ):', found);
  }

  // if else
  // Ternary operator
  // Switch statement

  // const bookTitles = realBooks.map((obj) => obj.title);
  // const demoBooks = realBooks.filter((book) => book.author === 'Demo Author');
  // const firstDemoBook = realBooks.find((book) => book.author === 'Demo Author');

  // Uncomment these examples during the lecture; none changes realBooks.

  // 1. if / else is a statement: use it before return, then display its result.
  
  // div is block by default (new line); span is inline (flows within a line).
  // div normally fills available width; span uses the space its content needs.
  // div groups layout content; span styles text fragments; CSS can change their display.
  
  // Grid arranges direct children in rows and columns, ideal for a book catalog.
  // Flexbox arranges direct children along a row or column, ideal for buttons or card content.
  // They can be nested: Grid positions book cards, while Flexbox arranges content inside them.
  
  // Get every book's title.
  // const bookTitles = realBooks.map((book) => book.title);

  // Get ALL books by Demo Author.
    // const demoBooks = realBooks.filter(
    //   (book) => book.author === 'Demo Author'
    // );

  // Get the FIRST book by Demo Author.
    // const firstDemoBook = realBooks.find(
    //   (book) => book.author === 'Demo Author'
    // );

    // map() shows all seven titles.
    // filter() shows both new book objects.
    // find() shows only the first new book object.

    // Spread Operator: [...realBooks, newBook] creates a new array with all existing books and the new book at the end. This is important because React state should not be mutated directly. Instead of pushing into the existing array, we create a new array that includes all previous books and the new one. This ensures that React recognizes the change and re-renders the component accordingly.
    // ...realBooks puts all existing books into a new array, then newBook is added at the end.
  
    // Spread: collects existing values into a new array or object.
   
    // Destructuring: extracts values into variables.

    // Without Template Literals, you would concatenate strings and variables using the + operator. For example, to log the title and price of a book, you would write:
    // title = 'Everyday Cooking';
    // price = 500;

    // console.log('Book: ' + title + ', Price: Rs. ' + price);
    // Book: Everyday Cooking, Price: Rs. 500
    // console.log(`Book: ${title}, Price: Rs. ${price}`);
    // Book: Everyday Cooking, Price: Rs. 500


    // Book: Everyday Cooking, Price: Rs. 750
    // With Template Literals, you can embed expressions inside string literals using `${expression}` syntax. This allows for dynamic string construction, such as including variable values directly within strings. 
    // console.log(`Book: ${title}, Price: Rs. ${price}`);
    // Book: Everyday Cooking, Price: Rs. 750

    // if (this){

    //   return ();

    // }else{

    //         return ();

    // }

    let collectionMessage;
      if (otherBooks.length > 5) {
        collectionMessage = 'Your book collection is growing!';
      } else {
        collectionMessage = 'Add more books to grow your collection.';
      }

  return (

    // JSX section with a heading and a grid of cards. The heading has a bottom margin of 24px (mb-6). The grid has 1 column by default, 2 columns on small screens (sm:grid-cols-2), and 3 columns on large screens (lg:grid-cols-3). Each card is an article element with a border, background color, and shadow. The card contains an icon, title, author, description, and price.
    
    <section className="mt-6!" aria-labelledby="other-books-title">
          {/* mt mean margin top */}
          {/* mb mean margin bottom */}
          {/* HTML root font size is 16px */}
          {/* tailwind default spacing unit is 0.25rem so 0.25x16 = 4px */}
          {/* mt-12 mean 48px */}
          {/* mb-6 mean 24px */}
          {/* Yes, normally browsers use 16px as the default font size for the root <html> element. */}
          {/* Tailwind uses a default spacing increment of 0.25rem */}

        {/* 
            | Tailwind | Meaning             | CSS property      |
            | -------- | ------------------- | ----------------- |
            | `mt`     | Margin Top          | `margin-top`      |
            | `mb`     | Margin Bottom       | `margin-bottom`   |
            | `ml`     | Margin Left         | `margin-left`     |
            | `mr`     | Margin Right        | `margin-right`    |
            | `mx`     | Margin left + right | horizontal margin |
            | `my`     | Margin top + bottom | vertical margin   |
            | `m`      | All four sides      | margin            | */}

        {/* document.getElementById("other-books-title"); */}
    

    {/* <span> Learning span: I now start on a new line.</span>
    <span> Learning span: I now start on a new line.</span>

    <div> Learning div: I now flow within a line.</div>
    <div> Learning div: I now flow within a line.</div>
    
    <span className="block">Learning span: I now start on a new line.</span>
    <span className="block">Learning span: I now start on a new line.</span>

    <div className="inline">Learning div: I now flow within a line.</div>
    <div className="inline">Learning div: I now flow within a line.</div>

    <h1> I am testing JS {flag} </h1>

    <h2 id="other-books-title" className="mb-12! text-2xl font-bold text-slate-950">
        Others Category Books
      </h2> */}

      {/* <button
        type="button"
        onClick={addDummyBook}
        className="mb-6! cursor-pointer rounded-lg bg-indigo-600 px-4! py-2! font-semibold text-white shadow-md transition duration-150 hover:bg-indigo-700 hover:shadow-lg active:translate-y-1 active:scale-95 active:bg-indigo-900 active:shadow-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600 motion-reduce:transition-none"
      >
        Add Dummy Book (Check Console)
      </button>

      <button
        type="button"
        onClick={addRealBooks}
        className="mb-6! ml-3! cursor-pointer rounded-lg bg-emerald-600 px-4! py-2! font-semibold text-white shadow-md transition duration-150 hover:bg-emerald-700 hover:shadow-lg active:translate-y-1 active:scale-95 active:bg-emerald-900 active:shadow-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600 motion-reduce:transition-none"
      >
        addRealBooks
      </button>

      <button
        type="button"
        onClick={showDestructuring}
        className="mb-6! ml-3! cursor-pointer rounded-lg bg-slate-700 px-4! py-2! font-semibold text-white shadow-md transition duration-150 hover:bg-slate-800 active:translate-y-1 active:scale-95 active:shadow-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-700 motion-reduce:transition-none"
      >
        Show Destructuring (Console)
      </button>

      <button
        type="button"
        onClick={showMapTitles}
        className="mb-6! ml-3! cursor-pointer rounded-lg bg-violet-600 px-4! py-2! font-semibold text-white shadow-md transition duration-150 hover:bg-violet-700 active:translate-y-1 active:scale-95 active:shadow-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-600 motion-reduce:transition-none"
      >
        Show map()
      </button>

      <button
        type="button"
        onClick={showFilteredBooks}
        className="mb-6! ml-3! cursor-pointer rounded-lg bg-amber-500 px-4! py-2! font-semibold text-slate-900 shadow-md transition duration-150 hover:bg-amber-600 active:translate-y-1 active:scale-95 active:shadow-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-500 motion-reduce:transition-none"
      >
        Show filter()
      </button>

      <button
        type="button"
        onClick={showFirstDemoBook}
        className="mb-6! ml-3! cursor-pointer rounded-lg bg-rose-500 px-4! py-2! font-semibold text-white shadow-md transition duration-150 hover:bg-rose-600 active:translate-y-1 active:scale-95 active:shadow-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-500 motion-reduce:transition-none"
      >
        Show find()
      </button>

      <button
        type="button"
        onClick={resetBooks}
        className="mb-6! ml-3! cursor-pointer rounded-lg bg-slate-400 px-4! py-2! font-semibold text-slate-900 shadow-md transition duration-150 hover:bg-slate-500 active:translate-y-1 active:scale-95 active:shadow-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-400 motion-reduce:transition-none"
      >
        Reset Books
      </button> */}

      {/* ── New Buttons ── */}
      <button
        type="button"
        onClick={loadAllBooks}
        className="mb-4! cursor-pointer rounded-lg bg-indigo-600 px-4! py-2! font-semibold text-white shadow-md transition duration-150 hover:bg-indigo-700 active:scale-95 active:bg-indigo-900"
      >
        Load All Books
      </button>

      <button
        type="button"
        onClick={loadPdfBooks}
        className="mb-4! ml-3! cursor-pointer rounded-lg bg-rose-600 px-4! py-2! font-semibold text-white shadow-md transition duration-150 hover:bg-rose-700 active:scale-95 active:bg-rose-900"
      >
        PDF Books
      </button>

      <button
        type="button"
        onClick={loadUnicodeBooks}
        className="mb-4! ml-3! cursor-pointer rounded-lg bg-teal-600 px-4! py-2! font-semibold text-white shadow-md transition duration-150 hover:bg-teal-700 active:scale-95 active:bg-teal-900"
      >
        Unicode Books
      </button>

      <button
        type="button"
        onClick={loadAudioBooks}
        className="mb-4! ml-3! cursor-pointer rounded-lg bg-violet-600 px-4! py-2! font-semibold text-white shadow-md transition duration-150 hover:bg-violet-700 active:scale-95 active:bg-violet-900"
      >
        Audio Books
      </button>

      <button
        type="button"
        onClick={findBook}
        className="mb-4! ml-3! cursor-pointer rounded-lg bg-amber-500 px-4! py-2! font-semibold text-slate-900 shadow-md transition duration-150 hover:bg-amber-600 active:scale-95"
      >
        Find Book
      </button>

      <div className="mb-6! rounded-lg border border-slate-200 bg-slate-50 p-4!" aria-live="polite">
        
        {/* <p>Books in state: {otherBooks.length}</p> */}
        
        {/* {demoResult && <p className="mt-2 font-medium text-slate-700">{demoResult}</p>} */}

        {/* The result of the if / else above can be displayed inside JSX. */}
        
        {/* <h1> Hello we are testing if/Else{collectionMessage}</h1> */}

        {/* 2. A ternary is an expression, so it works directly inside JSX braces.
            Syntax: condition ? valueIfTrue : valueIfFalse */}
       
        {/* {
        otherBooks.length > 5 ? (
          <p className="text-emerald-700">You have more than five books.</p>
        ) : (
          <p className="text-indigo-700">You have five or fewer books.</p>
        )
        } */}

        {/* 3. && displays JSX only when the condition is true (no else case). */}
        
        {/* {otherBooks.length > 5 && (
          <p className="font-semibold">New milestone: more than five books!</p>
        )} */}
      
      </div>

              {/* sl mean small */}
              {/* lg mean large */}
              {/* xl:grid-cols-4 sets 4 columns at extra-large widths */}

      {/* grid enables Grid; grid-cols-1 sets 1 column; gap-6 adds spacing; sm:grid-cols-2 and lg:grid-cols-3 set 2 and 3 columns at larger widths. */}
      
    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
      
      {realBooks.map((book, index) => {
        
        return (
          <article key={book._id ?? `${book.id}-${index}`} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              
              {book.coverPhotoUri && (

                <img
                  src={`${baseUrl}${book.coverPhotoUri}`}
                  alt={`Cover of ${book.title}`}
                  className="h-64 w-full bg-slate-800 object-contain"
                  loading="lazy"
                />
                
              )}
              
              <div className="flex flex-col gap-3 p-6!">

              <h1 className="text-2xl font-bold text-slate-800">{book.title}</h1>
              <h2 className="text-1xl font-bold text-slate-600">{book.description}</h2>
              <h3 className="text-1xl font-bold text-slate-400">{book.author.name}</h3>

              {/* <h1 className="text-2xl font-bold text-slate-800">{book.author.onemorearray[0].one}</h1> */}

                {/* <h1 className="text-2xl font-bold text-slate-800">{book.title}</h1> */}
                {/* <h2 className="text-1xl font-bold text-slate-600">{book.description}</h2> */}
                {/* <h3 className="text-1xl font-bold text-slate-400">{book.author.name}</h3> */}
              </div>

          </article>
          );
        })
      }
    </div>



    {/*  Base URL http://159.65.157.115/   */} 

         {/* {
      "_id": "663b818f38df668685b8d31d",
      "title": "زندگی بعد موت",
      "description": "Books By Syed Abul Ala Maududi",
      "isPublished": true,
      "isArabic": false,
      "author": {
        "onemorearray":[{"one":"We are testing"}]
        "_id": "65ba1bab57e3e988e6740cfb",
        "name": "مولانا سید ابو الاعلیٰ مودودیؒ",
        "createdAt": "2024-01-31T10:06:35.438Z",
        "updatedAt": "2024-01-31T10:06:35.438Z",
        "__v": 0
      },
      "coverPhotoUri": "books/زندگی بعد موت_1715175823931/زندگی بعد موت.jpeg",
      "fileUri": "books/زندگی بعد موت_1715175823931/زندگی بعد موت.pdf",
      "chapters": [],
      "bookType": "PDF",
      "category": {
        "_id": "65ba1bb257e3e988e6740cff",
        "name": "Literature App Books",
        "createdAt": "2024-01-31T10:06:42.636Z",
        "updatedAt": "2024-02-06T12:41:15.502Z",
        "__v": 0
      },
      "tags": [],
      "averageRating": null,
      "createdAt": "2024-05-08T13:43:44.006Z",
      "updatedAt": "2024-05-08T13:43:44.006Z"
    }, */}

        {

          // {realBooks.map((book, index) => {
          // 
          // // const cardKey = book._id ?? `${book.id}-${index}`;
          // // const isMapResult = abc.author === 'map() result';
          // // const isSingleResult = abc.author === 'Demo Author' && otherBooks.length === 1;
          // 
          // return (
          // <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          // {/* flex enables Flexbox; h-36 sets height; items-center and justify-center center the icon vertically and horizontally; bg-indigo-100 sets the background; text-5xl sizes the icon. */}
          // {/* h-36 means 144px */}
          // 
          // {/* <div className="flex h-36 items-center justify-center bg-slate-500 text-5xl" aria-hidden="true">
          // {abc.icon || '📚'}
          // </div> */}
          // 
          // 
          // {/* flex enables Flexbox; flex-col stacks content vertically; gap-3 spaces items; p-6! adds padding with !important to override the global CSS reset. */}
          // {/* gap-3 mean 12px gap and p-6 mean 24px padding */}
          // {/* text-xl → extra-large font size: 1.25rem, usually 20px. */}
          // 
          // <div className="flex flex-col gap-3 p-6!">
          // <h3 className="text-2xl font-bold text-slate-800">{book.title}</h3>
          // 
          // 
          // <>
          // {/* <p className="text-sm text-slate-400"> By {book.author.author}</p>
          // <p className="text-base text-slate-600">{book.description}</p> */}
          // {/* <p className="text-lg font-semibold text-indigo-600">{abc.price}</p> */}
          // </>
          // 
          // 
          // 
          // 
          // {/* {isMapResult && (
          // <p className="text-sm italic text-slate-500">Shown by map() — the array now contains only title-based objects.</p>
          // )} */}
          // 
          // {/* {isSingleResult && (
          // <p className="text-sm font-medium text-emerald-700">This is the first matched result from find().</p>
          // )} */}
          // 
          // </div>
          // </article>
          // );
          // })}

        }


    </section>
  );
}
