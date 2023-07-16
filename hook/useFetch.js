//для извлечения информации
import { useState, useEffect } from "react"
import axios from "axios"

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [err, setErr] = useState(null)

  //API
  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': '9394ca46e9msh51c40c8569ea840p138e27jsnb879978648d8',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: { ...query },
  };

  //извлечение данных
  const fetchData = async () => {
    setIsLoading(true)
    try {
      //ожидание ответа
      const response = await axios.request (options)
      //при получении ответа
      setData(response.data.data)
      setIsLoading(false)
    } catch (err) {
      //при ошибке получения ответа
      setErr(err)
      alert('Ошибка при получении данных')
    } finally {
      setIsLoading(false)
    }
  }

  //использование извлеченных данных
  useEffect(() => {
    fetchData();
  }, [])

  //повторное извлечение данных
  const refetch = () => {
    setIsLoading(true)
    fetchData()
  }

  //возврат объекта
  return { data, isLoading, err, refetch }

}

export default useFetch