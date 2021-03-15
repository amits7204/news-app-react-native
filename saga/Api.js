import axios from 'axios'

const BASE_URL = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=8aee0fc813b64ea499183bd750d53d70'

export default function* getNews(){
    console.log("API")
    const option = {
        method: 'GET',
        url: BASE_URL,
    }
    const response = yield axios.request(option)
    .then(function(response){
        return response.data
    })
    .catch(function(err){
        console.log(err)
    });
    return response
}