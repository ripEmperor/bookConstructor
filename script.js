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
                                <button onclick=removeBook(${i})>Remove</button>
                                <button onclick=changeRead(${i})>Change Read Status</button>`
        }
    }
}

function updateEntry(id) {
    document.querySelector(`[data-index='${id}']`).innerHTML = `Title: ${myLibrary[i].title} <br> 
    Author: ${myLibrary[i].author} <br>
    Pages: ${myLibrary[i].pages} <br>
    Has been read?: ${myLibrary[i].read} <br>
    index: ${i} <br>
    <button onclick=removeBook(${i})>Remove</button>
    <button onclick=changeRead(${i})>Change Read Status</button>`
}

function changeRead(id) {
    if (myLibrary[id].read == false) {
        myLibrary[id].read = true;
    } else {
        myLibrary[id].read = false;
    }

    updateEntry(id)
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

    let categories = ['title', 'author', 'pages', 'read']
    htmlObject = {};

    for (i in categories) {
        i = categories[i] 

        htmlObject[`${i}F`] = document.createElement("div");
        formDiv.appendChild(htmlObject[`${i}F`])

        htmlObject.i = document.createElement("input");

        let inputType;

        if (i == 'read') {
            inputType = 'checkbox'
        } else {
            inputType = 'text'
        }

        htmlObject.i.setAttribute('type', inputType);
        htmlObject.i.setAttribute('id', i);

        htmlObject[`${i}L`] = document.createElement("label");
        htmlObject[`${i}L`].setAttribute('for', i);
        htmlObject[`${i}L`].innerHTML = i

        htmlObject[`${i}F`].appendChild(htmlObject.i)
        htmlObject[`${i}F`].appendChild(htmlObject[`${i}L`])
    }

    addBookBtn.remove()
}

function addBookClick() {
    let Title = document.getElementById('title')
    let Author = document.getElementById('author')
    let Pages = document.getElementById('pages')
    
    var checkedValue = null; 
    var inputElements = document.getElementById('read');
    checkedValue = inputElements.checked;

    addBookToLibrary(Title.value, Author.value, Pages.value, checkedValue)

    viewLibrary()
}

console.log(myLibrary)