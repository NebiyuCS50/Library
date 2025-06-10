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

function addBookToLibrary(title, author, page, read) {
  const newBook = new Book(title, author, page, read);
  myLibrary.push(newBook);
}
console.log(myLibrary);

addBookToLibrary("The Hobbit by J.R.R.", "Tolkien", "295 pages", true);
addBookToLibrary("The Hobbit by J.R.R.", "Tolkien", "295 pages", true);
addBookToLibrary("The Hobbit by J.R.R.", "Tolkien", "295 pages", true);
addBookToLibrary("The Hobbit by J.R.R.", "Tolkien", "295 pages", true);

//display Books

function displayBooks() {
  const content = document.querySelector(".content");
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
const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  const formContainer = document.createElement("div");
  formContainer.classList.add("form-container");

  const form = document.createElement("form");
  form.classList.add("form");
  const container_1 = document.createElement("div");
});
displayBooks();
