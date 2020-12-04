import axios from 'axios'

export const getPublications = async () => {
    const url = 'http://localhost:4000/api/publication';

    axios.get(url)
        .then(res => {
            console.log("from data: ", res.data)
            return res;
        })
}