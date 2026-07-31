class Book {
  constructor(title) {
    this.title = title;
  }

  static printTitle() {
    console.log(this.title);
  }
}

const book = new Book("Гаррі Поттер");

Book.printTitle();

const book1 = new Book("Гаррі Поттер");
const book2 = new Book("Володар перснів");



////
class Book {
  constructor(title, year) {
    this.title = title;
    this.year = year;
  }

  static compareByYear(book1, book2) {
    if (book1.year < book2.year) {
      console.log(`${book1.title} була видана раніше`);
    } else if (book1.year > book2.year) {
      console.log(`${book2.title} була видана раніше`);
    } else {
      console.log("Книги були видані в одному році");
    }
  }
}

const book1 = new Book("Гаррі Поттер", 1997);
const book2 = new Book("Володар перснів", 1954);

Book.compareByYear(book1, book2);