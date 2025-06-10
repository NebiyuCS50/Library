const myLibrary = [];

function Book(title, author, page, read) {
  if (!new.target) {
    console.log("You forgot the `new` keyword");
  }
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.page = page;
  this.read = read ? "Read" : "Not Read";
}

//display Books
function displayBooks() {
  const content = document.querySelector(".content");
  content.textContent = "";
  myLibrary.forEach((book) => {
    const row = document.createElement("div");
    row.classList.add("table-row");

    const body = document.createElement("div");
    body.classList.add("highlight");

    const titleDiv = document.createElement("div");
    titleDiv.textContent = book.title;

    const authorDiv = document.createElement("div");
    authorDiv.textContent = book.author;

    const pageDiv = document.createElement("div");
    pageDiv.textContent = book.page;

    const readDiv = document.createElement("div");
    readDiv.textContent = book.read;

    // Append each column to the row
    row.appendChild(titleDiv);
    row.appendChild(authorDiv);
    row.appendChild(pageDiv);
    row.appendChild(readDiv);
    // Append the row to the table
    content.appendChild(row);
  });
}

//button on click
const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  const formContainer = document.createElement("div");
  formContainer.classList.add("form-container");
  if (document.querySelector(".form-container")) return;

  const logo = document.createElement("div");
  logo.classList.add("logo-container");
  logo.textContent = "Add new book";

  const form = document.createElement("form");
  form.classList.add("form");

  const formGroup = document.createElement("div");
  formGroup.classList.add("form-group");

  const bookTitle = document.createElement("label");
  bookTitle.textContent = "Book Title";
  const titleInp = document.createElement("input");
  titleInp.type = "text";
  titleInp.id = "email";
  titleInp.name = "bookTitle";
  titleInp.placeholder = "Enter book title";
  titleInp.required = true;
  const bookAuthor = document.createElement("label");
  bookAuthor.textContent = "Book Author";
  const authInp = document.createElement("input");
  authInp.type = "text";
  authInp.id = "email";
  authInp.name = "bookAuthor";
  authInp.placeholder = "Enter book author";
  authInp.required = true;
  const bookPages = document.createElement("label");
  bookPages.textContent = "Book Page";
  const pageInp = document.createElement("input");
  pageInp.type = "text";
  pageInp.id = "email";
  pageInp.name = "bookPage";
  pageInp.placeholder = "Enter book page";
  pageInp.required = true;
  const bookRead = document.createElement("label");
  bookRead.textContent = "Did you read it ?";
  const myDict = document.createElement("div");
  myDict.classList.add("mydict");
  const containerRadio = document.createElement("div");
  const labelRadioTrue = document.createElement("label");
  const inputRadioTrue = document.createElement("input");
  inputRadioTrue.type = "radio";
  inputRadioTrue.name = "radio";
  inputRadioTrue.checked = "";
  const spanRadioTrue = document.createElement("span");
  spanRadioTrue.textContent = "Yes";
  const labelRadioFalse = document.createElement("label");
  const inputRadioFalse = document.createElement("input");
  inputRadioFalse.type = "radio";
  inputRadioFalse.name = "radio";
  const spanRadioFalse = document.createElement("span");
  spanRadioFalse.textContent = "No";
  myDict.appendChild(containerRadio);
  containerRadio.appendChild(labelRadioTrue);
  labelRadioTrue.appendChild(inputRadioTrue);
  labelRadioTrue.appendChild(spanRadioTrue);
  containerRadio.appendChild(labelRadioFalse);
  labelRadioFalse.appendChild(inputRadioFalse);
  labelRadioFalse.appendChild(spanRadioFalse);
  //button
  const btnForm = document.createElement("button");
  btnForm.classList.add("form-submit-btn");
  btnForm.type = "submit";
  btnForm.textContent = "Submit";
  formContainer.appendChild(logo);
  formContainer.appendChild(form);
  form.appendChild(formGroup);
  formGroup.appendChild(bookTitle);
  formGroup.appendChild(titleInp);
  formGroup.appendChild(bookAuthor);
  formGroup.appendChild(authInp);
  formGroup.appendChild(bookPages);
  formGroup.appendChild(pageInp);
  formGroup.appendChild(bookRead);
  formGroup.appendChild(myDict);
  form.appendChild(btnForm);
  document.body.appendChild(formContainer);

  //from

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const bookTitle = titleInp.value;
    const bookAuthor = authInp.value;
    const bookPages = pageInp.value + " pages";
    let bookRead;
    if (inputRadioTrue.checked) {
      bookRead = true;
    } else if (inputRadioFalse.checked) {
      bookRead = false;
    }
    const newBook = new Book(bookTitle, bookAuthor, bookPages, bookRead);
    myLibrary.push(newBook);
    console.log(myLibrary);
    formContainer.remove();
    displayBooks();
  });
});
