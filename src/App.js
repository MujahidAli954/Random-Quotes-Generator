import './App.css';
import React,{useState} from 'react'

function App() {
  const [quotes, setQuotes] = useState('');
  const [author, setAuthor] = useState('');

  const getQuotes = () => {
    fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=100",{method:'GET'},)
    .then(res => res.json())
     .then((fetchdata)=>{
      let Quotes = fetchdata.quotes;
      let randomNum = Math.floor(Math.random() *  Quotes.length);
      let randomQuote = fetchdata.quotes[randomNum];
      setQuotes(randomQuote.text);
      setAuthor(randomQuote.author);
    })
  }

  return (
    <div className="result">
    <h4>{quotes}</h4>
    <h3>{author}</h3>
    <button onClick={getQuotes}>New Quote</button>
   </div>
  );
}

export default App;
