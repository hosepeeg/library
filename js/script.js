const form = document.querySelector('form');
const submitButton = form.querySelector('.addBook');
const title = form.querySelector('#title');
const author = form.querySelector('#author');
const pages = form.querySelector('#pages');
const read = form.querySelector('#read');

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

const addError = (ele) => {
  // this function will add error text
}

const removeError = (ele) => {
  // this function will remove error text
}

const validateForm = () => {
  if (title.value == "" && document.querySelector('#titleError') == null) addError(title);
  if (author.value == "" && document.querySelector('#titleError') == null) addError(author);
  if (pages.value == "" && document.querySelector('#titleError') == null) addError(pages);

  if (title.value == '' || pages.input == '' || author.input == '') return false;
  else return true;
}

function addBookToLibrary() {
  //Add a book to libray
  if(validateForm() == false) return;
  book = new Book(author.value, title.value, pages.value, read.value);
  myLibrary.push(book);
}

submitButton.addEventListener('click', addBookToLibrary);