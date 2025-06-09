const myLibrary = [];

function Book() {
  if (!new.target) {
    console.log("You forget new keyword");
  }
  (this.id = crypto.randomUUID()),
    (this.title = title),
    (this.author = author),
    (this.page = page),
    (this.read = read ? "Read" : "Not Read");
}

function addBookToLibrary() {
  const newBook = new Book(title, author, page, read);
  myLibrary.push(newBook);
}
