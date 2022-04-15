let myLibrary = [];

let book = {};

function Book(author, title, pages, read) {
  // the constructor..

  //Object variables
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;

  //Object Functions
}

function addBookToLibrary() {
  //Add a book to libray
  book = new Book(auther.value, title.value, pages.value, read.value);
  myLibrary.push(book);
}