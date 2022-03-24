let myLibrary = [];

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        if (read == true) {
            this.isRead = "has been read."
        } else {
            this.isRead = "has not been read."
        }
        return `${title} by ${author}, ${pages} pages, ${isRead}`
    }
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new book(title, author, pages, read));
}

function viewLibrary() {
    let library = document.getElementById('library')

    for (i in myLibrary) {
        const newDiv = document.createElement("div");

        library.appendChild(newDiv)

        library.classList.add('container')

        newDiv.classList.add('item')

        newDiv.innerHTML = `Title: ${myLibrary[i].title} <br> 
                            Author: ${myLibrary[i].author} <br>
                            Pages: ${myLibrary[i].pages} <br>
                            Has been read?: ${myLibrary[i].read} <br>`
    }
}

function addBook() {
    let addDiv = document.getElementById('library');
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false)

addBookToLibrary("The Hobbit1", "J.R.R. Tolkien", 295, false)

addBookToLibrary("The Hobbit2", "J.R.R. Tolkien", 295, false)

addBookToLibrary("The Hobbit3", "J.R.R. Tolkien", 295, false)



addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false)

addBookToLibrary("The Hobbit1", "J.R.R. Tolkien", 295, false)

addBookToLibrary("The Hobbit2", "J.R.R. Tolkien", 295, false)

addBookToLibrary("The Hobbit3", "J.R.R. Tolkien", 295, false)
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false)

addBookToLibrary("The Hobbit1", "J.R.R. Tolkien", 295, false)

addBookToLibrary("The Hobbit2", "J.R.R. Tolkien", 295, false)

addBookToLibrary("The Hobbit3", "J.R.R. Tolkien", 295, false)
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false)

addBookToLibrary("The Hobbit1", "J.R.R. Tolkien", 295, false)

addBookToLibrary("The Hobbit2", "J.R.R. Tolkien", 295, false)

addBookToLibrary("The Hobbit3", "J.R.R. Tolkien", 295, false)

viewLibrary()

console.log(myLibrary)