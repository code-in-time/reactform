import React, { useState, useEffect } from 'react';

export default function MyForm() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      // Update the document title using the browser API
      document.title = `You clicked ${count} times ${fname} ${lname}`;
      // Only change when fname runs 
    }, [fname]);

  return (
    <div>

      <hr />
      {fname} <br />
      {lname} <br />
      <hr/>

      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>

      <form action="/action_page.php">
        <label for="fname">First name:</label><br />
        <input type="text" id="fname" name="fname" value={fname} onChange={event => setFname(event.target.value)}/><br />
        <label for="lname">Last name:</label><br />
          <input type="text" id="lname" name="lname" value={lname}  onChange={event => setLname(event.target.value)}/><br /><br />
          <input type="submit" value="Submit" />
      </form>
    </div>
  );
}