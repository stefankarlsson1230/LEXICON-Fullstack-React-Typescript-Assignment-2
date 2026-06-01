// TODO: Define an interface for a Book with the following properties:
// - title (string)
// - author (string)
// - year (number)
// - isAvailable (boolean)
interface Book {
    title: string;
    author: string;
    year: number;
    isAvailable: boolean;
}


// TODO: Create a function that takes a Book and returns a description string
function getBookDescription(book: Book): string {
    return `${book.title}, (${book.year}) by ${book.author}`;
}


// TODO: Create an array of at least 3 books
const library: Book[] = [
    {
        title: "A Game of Thrones",
        author: "George R. R. Martin",
        year: 1996,
        isAvailable: true
    },
    {
        title: "A Clash of Kings",
        author: "George R. R. Martin",
        year: 1998,
        isAvailable: true
    },
    {
        title: "A Storm of Swords",
        author: "George R. R. Martin",
        year: 2000,
        isAvailable: false
    },
    {
        title: "A Feast for Crows",
        author: "George R. R. Martin",
        year: 2005,
        isAvailable: false
    },
    {
        title: "A Dance with Dragons",
        author: "George R. R. Martin",
        year: 2011,
        isAvailable: true
    },
];


// TODO: Create a function that finds all available books
function getAvailableBooks(books: Book[]): Book[] {
    const availableBooks: Book[] = [];

    for(let book of books) {
        if (book.isAvailable) availableBooks.push(book);
    }

    return availableBooks;
}


// TODO: Create a function that finds a book by title
function findBookByTitle(books: Book[], title: string): Book | undefined {

    for(let book of books) {
        if (book.title === title) return book;
    }

    return undefined;
}


// Test your code
console.log(getAvailableBooks(library));


// Extra Test
const availableBooks: Book[] = getAvailableBooks(library);
for(let book of availableBooks) console.log(getBookDescription(book));

