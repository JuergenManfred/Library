
const myLibrary = [];

function Book(author, title, numberOfPages, read) {
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.read = read;

}
function addBookToLibrary(book) {
    myLibrary.push(book)
}
const newBookDialog = document.querySelector("#newBookDialog");
const bookList = document.createElement('div');
bookList.className = "book-list"
const div2 = document.querySelector('div')
div2.appendChild(bookList)
function displayBooks() {
    

    // Clear the existing content
    bookList.innerHTML = '';

    // Loop through the array of books
    myLibrary.forEach(book => {

        // Create a container for each book
        const bookContainer = document.createElement('div');
        bookContainer.classList.add('book-card');
        
        const bookTitle = document.createElement('h3')
        bookTitle.textContent = book.title
        
        const bookAuthor = document.createElement('h2')
        bookAuthor.textContent = `Author: ${book.author}`
        
        const bookNumberOfPages = document.createElement('p')
        bookNumberOfPages.textContent = `Pages: ${book.numberOfPages}`
        
        const bookRead = document.createElement('h4')
        bookRead.textContent = `Did you read it? ${book.read ? "Yes" : "No"}`
      


        bookContainer.appendChild(bookTitle);
        bookContainer.appendChild(bookAuthor);
        bookContainer.appendChild(bookNumberOfPages);
        bookContainer.appendChild(bookRead);

        bookList.appendChild(bookContainer);
    })
}
const newBookButton = document.createElement("button");
newBookButton.classList = "newBookButton";
newBookButton.textContent = "NEW BOOK";
div2.appendChild(newBookButton)
newBookButton.addEventListener("click", newBookButtonClickHandler)

function newBookButtonClickHandler() {
    newBookDialog.showModal();
    const newBookForm = document.createElement("form");
    newBookForm.classList = "newBookForm";

    const labelTitel = document.createElement("label");
    labelTitel.textContent = "Title:";

    const inputTitle = document.createElement("input");
    inputTitle.type = "text";
    inputTitle.placeholder = "insert Title";
    
    const labelAuthor = document.createElement("label");
    labelAuthor.textContent = "Author:"
    const inputAuthor = document.createElement("input");
    inputAuthor.type = "text";
    inputAuthor.placeholder = "insert Author";

    const labelPages = document.createElement("label")
    labelPages.textContent = "Number of Pages:"
    const inputNumberOfPages = document.createElement("input");
    inputNumberOfPages.type = "number";

    const labelRead = document.createElement("label");
    labelRead.textContent = "Have you read it?"
    const inputRead = document.createElement("input");
    inputRead.type = "checkbox";
    
    const inputSubmit = document.createElement("button");
    inputSubmit.type = "submit";
    inputSubmit.textContent = "Submit"

    const inputCancle = document.createElement("button")
    inputCancle.type = ""
    
    
    labelTitel.appendChild(inputTitle)
    newBookForm.appendChild(labelTitel)

    labelAuthor.appendChild(inputAuthor)
    newBookForm.appendChild(labelAuthor)


    labelPages.appendChild(inputNumberOfPages)
    newBookForm.appendChild(labelPages)

    labelRead.appendChild(inputRead)
    newBookForm.appendChild(labelRead)

    newBookForm.appendChild(inputSubmit)
    
    newBookDialog.appendChild(newBookForm);

    inputSubmit.addEventListener("click", (e)=> {
        e.preventDefault();
    
        const title = inputTitle.value;
        const author = inputAuthor.value;
        const numberOfPages = inputNumberOfPages.value;
        const read = inputRead.checked;

        const newBook = new Book(author, title, numberOfPages, read);

        addBookToLibrary(newBook);

        newBookForm.reset();
        displayBooks();
        newBookDialog.close();
    })
    
}


displayBooks();
