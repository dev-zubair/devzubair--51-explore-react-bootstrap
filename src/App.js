import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import News from './components/News/News.js';

function App() {
  const [news, setNews] = useState([])
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-27&sortBy=publishedAt&apiKey=23c4afd7630244f99d7047e6370e2d1f')
      .then(res => res.json())
      .then(data => setNews(data.articles));
  }, [])

  return (
    <div className="App">

      {news.length === 0 ?
        <Spinner animation="border" />
        :
        <Row xs={1} md={3} className="g-4">
          {
            news.map(nw => <News news={nw}></News>)
          }
        </Row>
      }

    </div>
  );
}

export default App;
