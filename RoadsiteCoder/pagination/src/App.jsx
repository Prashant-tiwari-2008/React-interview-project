import { useEffect, useState } from 'react';
import './App.css'
import { fetchProduct } from './helper/apicall'
import UserList from './components/UserList';
import Pagination from './components/pagination';

function App() {
  const [data, setData] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    getproduct();
  }, [pageNumber])

  const getproduct = async () => {
    let value = await fetchProduct(pageNumber)
    setData(value);
  }

  return (
    <>
      {data &&
        <>
          <UserList productList={data} />
          <Pagination totalCount={data.total} setPageNumber={setPageNumber} pageNumber={pageNumber} />
        </>
      }
    </>
  )
}

export default App
