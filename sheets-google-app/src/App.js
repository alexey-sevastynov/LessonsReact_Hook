import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState(0);
  const [firstname, setFirstname] = useState(0);
  let [one, setOne] = useState(0);
  let [two, setTwo] = useState(0);
  let summ = +name + +firstname + +one + +two;



  // const [APIdata, setAPIdata] = useState([]);

  const onSubmit = (e) => {

    e.preventDefault();
    axios.post('https://sheet.best/api/sheets/1d84ed52-f934-4abc-a5f1-0bd4a3d2747a', {
      name, firstname, one, two, summ
    }).then(response => console.log(response));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, firstname, one, two);
  }
  // useEffect(() => {
  //   axios.get('https://sheet.best/api/sheets/1d84ed52-f934-4abc-a5f1-0bd4a3d2747a')
  //     .then((incominData) => {
  //       setAPIdata(incominData.data);
  //     })
  // }, []);


  return (
    <div className="App">
      <h1>Челюськіна 1 кв.12</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder='Name'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <label>Firstname</label>
          <input
            type="text"
            placeholder='Firstname'
            onChange={(e) => setFirstname(e.target.value)}
            value={firstname}
          />
        </div>
        <div>
          <label>1</label>
          <input
            type="text"
            placeholder='1'
            onChange={(e) => setOne(e.target.value)}
            value={one}
          />
        </div>
        <div>
          <label>2</label>
          <input
            type="text"
            placeholder='2'
            onChange={(e) => setTwo(e.target.value)}
            value={two}
          />
        </div>
        <button
          type='submit'
          onClick={onSubmit}
        >Submit</button>
      </form>
    </div>
  );
}

export default App;
