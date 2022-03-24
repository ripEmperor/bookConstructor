function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function() {
        if (read == true) {
            isRead = "has been read."
        } else {
            isRead = "has not been read."
        }
        return `${title} by ${author}, ${pages} pages, ${isRead}`
    }
}

const theHobbit = new book("The Hobbit", "J.R.R. Tolkien", 295, false)
console.log(theHobbit.info())