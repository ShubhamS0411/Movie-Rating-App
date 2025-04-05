import express from 'express';
import cors from 'cors';
import axios from 'axios';
const app = express()
app.use(express.json())
app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/movieSearch', (req, res) => {
    const {movieName} = req.body
    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/search/movie?query=${movieName}&language=en-US&page=1`,
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDM0ZWVlYWYwZDk3YTQ1YTM4MDc2MGJjOGQ3YWZmNSIsIm5iZiI6MTc0MDcwMjE2Ny42NDMwMDAxLCJzdWIiOiI2N2MxMDFkNzlhZGNkMjU2MjUzNWFlZmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.8dxq5udQC6mw8B0dY0lVOH16K9FwqPRMWHkAtmsRiQg'
        }
      };
      
      axios
        .request(options)
        .then(response => res.status(200).json(response.data))
        .catch(err => console.error(err));

})

app.get('/movieReccomendations', (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MDM0ZWVlYWYwZDk3YTQ1YTM4MDc2MGJjOGQ3YWZmNSIsIm5iZiI6MTc0MDcwMjE2Ny42NDMwMDAxLCJzdWIiOiI2N2MxMDFkNzlhZGNkMjU2MjUzNWFlZmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.8dxq5udQC6mw8B0dY0lVOH16K9FwqPRMWHkAtmsRiQg'
    }
  };
  
  axios
    .request(options)
    .then(response => res.status(200).json(response.data.results))
    .catch(err => console.error(err));
})

app.listen(3000, () => {
    console.log('listening on port 3000!')
})