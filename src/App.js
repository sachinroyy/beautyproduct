
 
import logo from './logo.svg';
import './App.css';
import HomePage from './cat';
import Proitem from './proitem';
import { useEffect, useState } from 'react';
import axios from 'axios';
import APP from './apps';

function App() {
  let [finalcategory, setfinalcategory] = useState([]);
  let [finalpro, setfinalproduct] = useState([]);
  let [catName, setcatname] = useState('');

  let getcatogory = () => {
    axios
      .get('https://dummyjson.com/products/category-list')
      .then((res) => res.data)
      .then((finaLRes) => {
        setfinalcategory(finaLRes);
      });
  };

  let getproduct = () => {
    axios
      .get('https://dummyjson.com/products')
      .then((proRes) => proRes.data)
      .then((finaLRes) => {
        setfinalproduct(finaLRes.products);
      });
  };

  useEffect(() => {
    getcatogory();
    getproduct();
  }, []);

  useEffect(() => {
    if (catName !== '') {
      axios
        .get(`https://dummyjson.com/products/category/${catName}`)
        .then((proRes) => proRes.data)
        .then((finaLRes) => {
          setfinalproduct(finaLRes.products);
        });
    }
  }, [catName]);

  let piteam = finalpro.map((products, index) => {
    return <Proitem key={index} pdata={products} />;
  });

  return (
    <>
      <APP />
      <div className='text-center font-bold text-4xl uppercase p-4'>Our Product</div>

      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row gap-8'>
          <div className='w-full md:w-1/4'>
            <HomePage finalcategory={finalcategory} setcatname={setcatname} />
          </div>
          <div className='w-full md:w-3/4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
              {piteam}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

