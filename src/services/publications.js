import axios from 'axios'

export const getPublications = async () => {
    try {

        const url = "http://localhost:3500/api/publication";
        const res = await axios.get(url);
        if (res.status === 200) {
            return res.data.data
        }
        
    }catch (e){
        console.log(e)
    }
}