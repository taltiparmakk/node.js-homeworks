const books = [
    { name: "Martin Eden", author: "Jack London" },
    { name: "Serenad", author: "Zülfü Livaneli" },
    { name: "Dönüşüm", author: "Franz Kafka" },
  ];
  
  const listBooks = () => {
    books.map((book) => {
      console.log(book.name);
    });
  };
  
  const addBook = (newBook) => {
    const promise1 = new Promise((resolve, reject) => {
      books.push(newBook);
      resolve(books);
      //reject('BIR HATA OLUSTU');
    });
  
    return promise1;
  };
  
  async function showBooks() {
    try {
      await addBook({ name: "Kendimi 8-9 Senedir İyi Hissetmiyorum ", author: "Feyyaz Yiğit" });
      listBooks();
    } catch (error) {
      console.log(error);
    }
  }
  
  showBooks();
  
  
