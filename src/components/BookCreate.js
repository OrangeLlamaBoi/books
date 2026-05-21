import {useState} from 'react';

function BookCreate({ onCreate }) {

  const [title, setTitle] = useState('');

const handleChange = (event) => {
  setTitle(event.target.value); // Update the title state with the input value
}

const handleSubmit = () => {
  event.preventDefault(); // Prevent the default form submission behavior
  onCreate(title); // Call the onCreate function passed as a prop with the current title
}

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Book Title:</label>
        <input className="input" value={title} onChange={handleChange} />
      <button className="button">Create!</button>
      </form>
    </div>
  );
}

export default BookCreate;