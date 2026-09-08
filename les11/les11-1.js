class Book {
  static showMessage() {
    console.log("Це статичний метод класу Book");
  }
}

Book.showMessage();

//error
const book = new Book();

book.showMessage();

//
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  printInfo() {
    console.log(`${this.title}, ${this.author}, ${this.year}`)
  }

  static showClassInfo() {
    console.log(this.title)
  }
}
const book1 = new Book("Гаррі Поттер", "Джоан Роулінг", 1997)
book1.printInfo();
Book.showClassInfo(book1);