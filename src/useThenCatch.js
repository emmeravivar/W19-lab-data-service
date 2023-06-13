import axios from "axios"
import { useEffect, useState } from "react"

// GET METHODS
export const getAxios = (url) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [ data, setData] = useState(null)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
            axios.get(url)
                .then(res => setData(res.data))
                .catch(error => console.log(error))
    },[])

    return {data}

}

// POST METHODS
export const postAxios = (url, dataPost) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [ data, setData] = useState(null)

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        axios.post(url, dataPost)
            .then(res =>setData(res.data))
            .catch(error =>console.log(error))
                
        },[])

    return { data }
    
}

// PUT METHODS
export const putAxios = (url, id, dataPut) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [ data, setData] = useState(null)

    let endopoint = `${url}${id}`

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        axios.put(endopoint, dataPut)
            .then(res => setData(data))
            .catch(error => console.log(error))
    },[])

    return { data }
    
}


// DELETE METHODS
export const deleteAxios = (url, id) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [ data, setData] = useState(null)

    let endopoint = `${url}${id}`

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        axios.delete(endopoint)
            .then( res => setData(res.data) )
            .catch (error => console.log(error))    
    },[])

    return { data }
    
}

