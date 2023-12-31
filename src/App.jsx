import { useEffect } from 'react'
import { helperApi } from './helpers/api'
import { getAxios,  putAxios, deleteAxios, postAxios} from './useThenCatch'
import './App.css'



function App() {

  const url = 'https://jsonplaceholder.typicode.com/posts/'

  const dataPost = {
      userId: 101,
      title: 'foo',
      body: 'bar',
  }

  const dataPut = {
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }



  // const { data } =  getAxios(url)
  // const { data } = postAxios(url, dataPost)
  // const { data } = putAxios(url, 1, dataPut)
  const { data } = deleteAxios(url, 1)
  console.log(data)

  // const { methodGet, methodPost, methodPut, methodDel } = helperApi()


  // useEffect(() => {
  //     methodGet(url)
  //       .then((res) => console.log('leyendo...', res))
  //       // eslint-disable-next-line no-unused-vars
  //       .catch(err => console.log('leyendo error'))

  // },[])





  // // Create Data => POST METHOD
  // const createDate = (data) => {
  //   methodPost(url, { body:data })
  //     .then(res => console.log('Leyendo POST', res))
  // }

  // createDate(dataPost, "DESDE POST")


  // //Update Data => PUT METHOD
  // const updateDate = (data) => {
  //   let endopoint = `${url}${data.id}`
  //   console.log(endopoint)
  //   methodPut(endopoint, { body:data })
  //     .then(res => console.log('Leyendo PUT', res))
  // }
  // console.log('Data put', dataPut)
  // updateDate(dataPut, "DESDE PUT")

  // //Delete Data => Delete METHOD
  // const deleteDate = (id) => {
  //   let endopoint = `${url}${id}`
  //   methodDel(endopoint)
  //     .then(res => console.log('Leyendo DELETE', res))
  // }

  // deleteDate(1, "DESDE DELETE")



  return (
    <div className='container'>
      <h2>Week 19</h2>
      <h1>Servicio de Datos II</h1>
      <h3>Eva María Mera Vivar</h3>
      <h4>Learning Facilitator | 06/2023| Emeritus | MiT</h4>
    </div>
  )
}

export default App
