const books = [
  { id: 1, name: "Clean Code", price: 200 },
  { id: 2, name: "DSA for Beginners", price: 500 },
  { id: 3, name: "Algorithms", price: 800 },
];

class BookCtrl {
  get(req, res) {
    res.status(200);
    res.json(books);
  }
}

module.exports = new BookCtrl();
