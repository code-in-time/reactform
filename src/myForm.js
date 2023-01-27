import React, { useState, useEffect } from 'react';

export default function MyForm() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [going, setGoing] = useState(true);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      // Update the document title using the browser API
      document.title = `You clicked ${count} times ${fname} ${lname}`;
      // Only change when fname runs 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fname]);

  return (
    <div>
      GOING: {going.toString()}

      <hr />
      {fname} <br />
      {lname} <br />
      <hr/>

      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <br /><br />
      {/* <form> */}
        <label htmlFor="fname">First name:</label><br />
        <input type="text" id="fname" name="fname" value={fname} onChange={event => setFname(event.target.value)}/><br />
        <label htmlFor="lname">Last name:</label><br />
          <input type="text" id="lname" name="lname" value={lname}  onChange={event => setLname(event.target.value)}/><br /><br />
          <input type="button" value="submit" onClick={() => console.log(`You clicked ${count} times ${fname} ${lname}`)}/>
          {/* // fix the checkbox */}
          <input type="checkbox" id="vehicle1" name="vehicle1" checked={going} onChange={event => console.log(event.target.checked)} onClick={() => setGoing(!going)} />
          <label htmlFor="vehicle1"> I have a bike</label><br/><br/>
      {/* </form> */}
    </div>
  );
}