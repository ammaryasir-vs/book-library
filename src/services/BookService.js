/* eslint-disable class-methods-use-this */

import BOOKS from '../_mocks_/books';

/* eslint-disable prettier/prettier */
class BookService {
  async getBooks(searchText, sort) {
    console.log(searchText, sort);
    await new Promise((res) => setTimeout(res, 600));
    const filteredDataa = BOOKS.filter((single) =>
      single.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return sort.price === 'asc' ? filteredDataa.sort() : filteredDataa.reverse();
  }
}

export default new BookService();
