// const { doc } = require("prettier");

const myLibrary = [];
const booksContainer = document.querySelector("#books-container");
const newBookBtn = document.querySelector("#new-book-btn");
const cancelBtn = document.querySelector("#cancelBtn");
const bookForm = document.querySelector("#book-form");
const formDialog = document.querySelector("#form-dialog");

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  info() {
    return `${title} by ${author}, ${pages} pages, ${
      read ? "read" : "not read yet"
    }`;
  }
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

// Create a book card and add it to books-container
function showOneBook(book) {
  const card = document.createElement("div");
  const cardTitle = document.createElement("div");
  const cardAuthor = document.createElement("div");
  const cardPages = document.createElement("div");
  const cardRead = document.createElement("div");
  card.setAttribute(
    "class",
    "card bg-gray-50 h-48 w-72 rounded text-center p-8"
  );
  cardTitle.setAttribute("class", "text-xl bg-rose-300");
  cardAuthor.setAttribute("class", "leading-loose");
  cardPages.setAttribute("class", "leading-loose");
  cardRead.setAttribute("class", "leading-loose");
  cardTitle.textContent = book.title;
  cardAuthor.textContent = book.author;
  cardPages.textContent = book.pages;
  cardRead.textContent = book.read ? "Read" : "Not read yet";
  card.appendChild(cardTitle);
  card.appendChild(cardAuthor);
  card.appendChild(cardPages);
  card.appendChild(cardRead);
  booksContainer.appendChild(card);
}

function showBooks(booksArray) {
  booksArray.forEach(showOneBook);
}

// Show the book form when the new book button is clicked
newBookBtn.addEventListener("click", function () {
  formDialog.showModal();
});

cancelBtn.addEventListener("click", function () {
  formDialog.close();
});

// Prevent the form submitting to server and get input data
bookForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const title = document.querySelector("#book-form #title").value;
  const author = document.querySelector("#book-form #author").value;
  const pages = document.querySelector("#book-form #page").value;
  const read = document.querySelector("#book-form #read").checked;

  addBookToLibrary(title, author, pages, read);
  showOneBook(myLibrary[myLibrary.length - 1]);

  bookForm.reset();
});

addBookToLibrary("Algorithm", "Tom", "450", true);
addBookToLibrary("Database", "Susan", "300", false);
addBookToLibrary("Data Structure", "Louis", "200", true);
showBooks(myLibrary);
