const s1 = "Hello";
console.log("s1 is of type " + typeof s1);

const s2 = new String("Hello");
console.log("s2 is of type " +  typeof s2);

console.log(window);
// alert(1);
console.log(navigator.appVersion);


const book1 = {
    title : "Book one",
    author : "John doe",
    year : "2013",
    getSumary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

console.log(book1.getSumary());

const book2 = {
    title : "Book two",
    author : "Jane doe",
    year : "2016",
    getSumary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
};

console.log(book2.getSumary())
console.log(Object.values(book2));
console.log(Object.keys(book2));

