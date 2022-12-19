// import { Routes, Route, Link } from "react-router-dom";

function Home({mainCounter, setMainCounter}) {

  const newCount = () => {
    let newCount = mainCounter + 1; 
    setMainCounter(newCount); 
    console.log();
  }

  return (
    <div className="Home">
      Home maincounter = {mainCounter}
      <br /><br />
      <button type="button" className="btn btn-primary" onClick={() => newCount()}>add button</button>
    </div>
  );
}

export default Home;
