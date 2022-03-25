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
    let viewed = Array.from(document.querySelectorAll('[data-index]'));

    for (i in myLibrary) {
        if (!(i in viewed)) {
            const newDiv = document.createElement("div");

            library.appendChild(newDiv)

            library.classList.add('container')

            newDiv.classList.add('item')
            newDiv.setAttribute('data-index', i);

            newDiv.innerHTML = `Title: ${myLibrary[i].title} <br> 
                                Author: ${myLibrary[i].author} <br>
                                Pages: ${myLibrary[i].pages} <br>
                                Has been read?: ${myLibrary[i].read} <br>
                                index: ${i} <br>
                                <button onclick=removeBook(${i})>Remove</button>`
        }
    }
}

function removeBook(id) {
    document.querySelector(`[data-index='${id}']`).remove()
}

function addBook() {
    let addBookBtn = document.getElementById('add')
    let addDiv = document.getElementById('addForm');
    let addBookBtnCont = document.getElementById('btnCont')

    const formDiv = document.createElement("div");
    addDiv.appendChild(formDiv)
    formDiv.classList.add('form')

    const submitButton = document.createElement('button');

    submitButton.setAttribute('id', 'submitButton');
    submitButton.setAttribute('onclick', 'addBookClick()');

    formDiv.appendChild(submitButton);

    const formTitle = document.createElement("div");
    formDiv.appendChild(formTitle);

    const formAuthor = document.createElement("div");
    formDiv.appendChild(formAuthor);

    const formPages = document.createElement("div");
    formDiv.appendChild(formPages);

    const formRead = document.createElement("div");
    formDiv.appendChild(formRead);

    const bookTitleL = document.createElement("label");
    bookTitleL.setAttribute('for', 'title');
    bookTitleL.innerHTML = "Title"

    const bookTitle = document.createElement("input");
    bookTitle.setAttribute('type', 'text');
    bookTitle.setAttribute('id', 'title');

    const bookAuthorL = document.createElement("label");
    bookAuthorL.setAttribute('for', 'author');
    bookAuthorL.innerHTML = "Author"

    const bookAuthor = document.createElement("input");
    bookAuthor.setAttribute('type', 'text');
    bookAuthor.setAttribute('id', 'author');

    const bookPagesL = document.createElement("label");
    bookPagesL.setAttribute('for', 'pages');
    bookPagesL.innerHTML = "Pages"

    const bookPages = document.createElement("input");
    bookPages.setAttribute('type', 'text');
    bookPages.setAttribute('id', 'pages');

    const bookReadL = document.createElement("label");
    bookReadL.setAttribute('for', 'read');
    bookReadL.innerHTML = "Read? "

    const bookRead = document.createElement("input");
    bookRead.setAttribute('type', 'checkbox');
    bookRead.setAttribute('id', 'pages');
    bookRead.setAttribute('class', 'read');

    formTitle.appendChild(bookTitleL);
    formTitle.appendChild(bookTitle);
    formAuthor.appendChild(bookAuthorL);
    formAuthor.appendChild(bookAuthor);
    formPages.appendChild(bookPagesL);
    formPages.appendChild(bookPages);
    formRead.appendChild(bookReadL);
    formRead.appendChild(bookRead);

    addBookBtn.remove()
}

function addBookClick() {
    let Title = document.getElementById('title')
    let Author = document.getElementById('author')
    let Pages = document.getElementById('pages')
    
    var checkedValue = null; 
    var inputElements = document.getElementsByClassName('read');
    for(var i=0; inputElements[i]; ++i){
        if(inputElements[i].checked){
            checkedValue = inputElements[i].value;
            break;
        }
    }

    if (checkedValue == 'on') {
        checkedValue = true;
    } else {
        checkedValue = false;
    }

    addBookToLibrary(Title.value, Author.value, Pages.value, checkedValue)

    viewLibrary()
}

console.log(myLibrary)