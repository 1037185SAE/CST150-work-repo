// JavaScript code​​​​​​‌‌‌‌‌‌​​‌‌​‌‌​​​‌‌‌‌‌‌​‌‌ below
// Change these boolean values to control whether you see
// the expected answer and/or hints.
const showExpectedResult = false;
const showHints = false;

const bookData = {
    title: 'Pride and Prejudice',
    author: 'Emily Bronté',
    quantity: 3,
    edition: 4
}

const comicBookData = {
    title: 'Spiderman',
    author: 'Stan Lee',
    quantity: 3,
    graphicArtist: 'Todd McFarlane'
}

// Your code goes here

function Book(title, author, quantity, edition) {
    this.title = title;
    this.author = author;
    this.quantity = quantity;
    this.edition = edition;
}

function ComicBook(title, author, quantity, graphic_artist) {
    let cbook = {
        title: title,
        author: author,
        quantity: quantity
    };

    let out = Object.create(cbook);

    out.graphicArtist = graphic_artist;

    return out;
}

/*
 * Also done with this:
 * Object.defineProperty(Book, "setEdition", {
 *     set: function(newEdition) {
 *         this.edition = newEdition;
 *     }
 * });
*/

Object.defineProperty(Book, 'setEdition', function(newEdition) {
    this.edition = newEdition;
});

Book.prototype.sell = function() {
    if (this.quantity) {
        this.quantity--;
    }
}

/*
 * Wat
 *
 * ComicBook.prototype = Object.create(Book.prototype, {
 *     constructor: {
 *         value: ComicBook
 *     }
 * });
 *
 * I fucking hate JavaScript
*/
