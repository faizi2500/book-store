const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';

const initialState = [];

export const addBook = (payload) => async (dispatch) => {
  const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/krOfFB5rsX7O5l4Wb8eB/books', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: payload.id,
      title: payload.title,
      category: payload.author,
    }),
  });
  if (response) {
    dispatch({
      type: ADD_BOOK,
      payload,
    });
  }
  return alert;
};

export const getAll = () => async (dispatch) => {
  const respone = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/krOfFB5rsX7O5l4Wb8eB/books/');
  const data = await respone.json();
  const bookList = [];
  Object.keys(data).forEach((key) => {
    bookList.push({ ...data[key][0], id: key });
  });
  if (bookList) {
    dispatch({
      type: GET_BOOKS,
      payload: bookList,
    });
  }
};

export const removeBook = (payload) => async (dispatch) => {
  const response = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/krOfFB5rsX7O5l4Wb8eB/books/${payload}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: payload.id,
    }),
  });
  if (response) {
    dispatch({
      type: REMOVE_BOOK,
      payload,
    });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.id !== action.payload)];
    case GET_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
