const getTheTitles = function(books) {
    var f=[];
    books.forEach(book => f.push(book.title));
    return f;
    //one-liner. See Array.map
    //return books.map(book => book.title);
}

module.exports = getTheTitles;
