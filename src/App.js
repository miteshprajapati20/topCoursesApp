import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { apiUrl, filterData } from './data';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import Spinner from './components/Spinner.js'

const App = () => {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [catagory, setCatagory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
      // console.log(output.data)
    } catch (error) {
      console.log(error);
      toast.error('Network error');
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='min-h-screen flex flex-col bg-slate-800'>
      <div>
        <Navbar />
      </div>

      <div>
        <Filter filterData={filterData} 
        catagory={catagory} setCatagory={setCatagory  }/>
      </div>

      <div className='w-11/12 max-w-[1200px] mx-auto flex justify-center flex-wrap items-center min-h-[50vh]'>
       { loading ? (<Spinner />) : (<Cards courses={courses} catagory={catagory}/>) }
      </div>
    </div>
  );
};

export default App;
