import React from 'react';

const Books = (props) => {
  const list = props;
  return (
    <div>
      <h2>Books List</h2>
      <section className="bookSection">
        {list.bookList.map((book) => {
          const name = book.title;
          return (
            <div key={book.id} className="bookRow">
              <div className="bookDisplay">
                <h3>{name}</h3>
                <p>{book.completed}</p>
              </div>
              <button type="submit" className="removeBtn">Remove</button>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Books;
