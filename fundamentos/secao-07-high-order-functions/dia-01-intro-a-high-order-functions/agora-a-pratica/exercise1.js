const books = [
    {
        id: 1,
        name: 'As Crônicas de Gelo e Fogo',
        genre: 'Fantasia',
        author: {
            name: 'George R. R. Martin',
            birthYear: 1948,
        },
        releaseYear: 1991,
    },
    {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: {
            name: 'J. R. R. Tolkien',
            birthYear: 1892,
        },
        releaseYear: 1954,
    },
    {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: {
            name: 'Isaac Asimov',
            birthYear: 1920,
        },
        releaseYear: 1951,
    },
    {
        id: 4,
        name: 'Duna',
        genre: 'Ficção Científica',
        author: {
            name: 'Frank Herbert',
            birthYear: 1920,
        },
        releaseYear: 1965,
    },
    {
        id: 5,
        name: 'A Coisa',
        genre: 'Terror',
        author: {
            name: 'Stephen King',
            birthYear: 1947,
        },
        releaseYear: 1986,
    },
    {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: {
            name: 'H. P. Lovecraft',
            birthYear: 1890,
        },
        releaseYear: 1928,
    },
];

const authorBornIn1947 = () => 
books.find((book) => 
book.author.birthYear === 1947).author.name;

const smallerName = () => {
    let nameBook = books[0];
    books.forEach((book) => {
        if (book.name.length < nameBook.name.length) {
            nameBook = book;
        }
    });
    return nameBook.name;
};

const getNamedBook = () => 
books.find((book) => book.name.length === 26);

const everyoneWasBornOnSecXX = () => {
    const beginningofCentury = 1901;
    const endOfCentury = 2000;
    return books.every((book) => 
    book.author.birthYear >= beginningofCentury && book.author.birthYear <= endOfCentury);
};

const someBookWasReleaseOnThe80s = () => {
  const decadeBegins = 1980;
  const decadeEnds = 1989;
  return books.some((book) =>
  book.releaseYear >= decadeBegins && book.releaseYear <= decadeEnds);
};

const authorUnique = () => {
    return books.every((book) =>
    !books.some((someBooks) =>
    (someBooks.author.birthYear === book.author.birthYear)
    && someBooks.author.name !== book.author.name));
};