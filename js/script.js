const form = document.querySelector('form');
const submitButton = form.querySelector('.addBook');
const title = form.querySelector('#title');
const author = form.querySelector('#author');
const pages = form.querySelector('#pages');
const read = form.querySelector('#read');
const bookContent = document.querySelector('.book-content');

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
  if(document.querySelector('#error') == null){
      let error = document.createElement('a');
      error.setAttribute('id', 'error');
      error.appendChild(document.createTextNode('Please enter a valid value for the marked(*) inputs'));
      document.querySelector('#first-form').prepend(error);
  }
  let asteriskSpan = document.createElement('a');
  asteriskSpan.classList.add('error');
  asteriskSpan.appendChild(document.createTextNode(' (*)'));
  ele.parentNode.querySelector('span').appendChild(asteriskSpan);
}

const removeError = (ele) => {
  // this function will remove error text
  let asteriskSpan = ele.parentNode.querySelector('.error');
  asteriskSpan.remove();
}

const removeErrorMessage = () => {
  let errorMsg = document.querySelector('#error');
  errorMsg.remove();
}

const clearInput = () => {
  title.value = '';
  author.value = '';
  pages.value = '1';
  read.checked = false;
}

const validateForm = () => {
  if (title.value == "" && title.parentNode.querySelector('.error') == null) addError(title);
  if (title.value !== "" && title.parentNode.querySelector('.error') !== null) removeError(title);

  if (author.value == "" && author.parentNode.querySelector('.error') == null) addError(author);
  if (author.value !== "" && author.parentNode.querySelector('.error') !== null) removeError(author);

  if ((typeof(parseInt(pages.value)) == 'number' && pages.value <= 0) && pages.parentNode.querySelector('.error') == null) addError(pages);
  if ((typeof(parseInt(pages.value)) == 'number' && pages.value > 0) && pages.parentNode.querySelector('.error') !== null) removeError(pages);

  if (title.value == '' || pages.value == '' || author.value == '' || pages.value <= 0) return false;
  else return true;
}

const printBook = (newBook, checked) => {
  let book = document.createElement('div');   //create new book element
  book.classList.add('book');                 //add class to book element
  bookContent.appendChild(book);      //add book element to book content (grid)

  //populate data of newBook into book element

  //create and add title of book
  let bookTitle = document.createElement('h2');
  bookTitle.innerHTML = newBook.title;
  book.appendChild(bookTitle);

  //create and add author of book
  let bookAuthor = document.createElement('p');
  bookAuthor.innerHTML = newBook.author;
  book.appendChild(bookAuthor);

  //create and add page # of book
  let bookPages = document.createElement('p');
  bookPages.innerHTML = newBook.pages;
  book.appendChild(bookPages);

  //create and add 'read' checkbox of book
  let bookRead = document.createElement('input');
  bookRead.type = "checkbox";
  if(checked == true) bookRead.checked = true;
  book.appendChild(bookRead);

  //add delete button
  let deleteButton = document.createElement('button');
  deleteButton.classList.add('deleteBook');
  deleteButton.innerHTML = 'gdf';
  book.appendChild(deleteButton);
}

function addBookToLibrary() {
  //Add a book to libray
  if(validateForm() == false) return;                                      //if invalid form, do not create book
  if(document.querySelector('#error')) removeErrorMessage();               //remove error if there was any
  
  let librarySize = myLibrary.length;                                      //create variable to hold the new book index #
  let checked = read.checked;                                              //hold value of read checkbox

  book = new Book(author.value, title.value, pages.value, read.value);     //creates book based on input
  myLibrary.push(book);                                                    //pushes into array
  clearInput();                                                            //clears input field

  printBook(myLibrary[librarySize], checked);                              //creates and adds new book element into grid
}

submitButton.addEventListener('click', addBookToLibrary);