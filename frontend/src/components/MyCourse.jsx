import React, { useEffect, useState } from 'react'
import axios from "axios";
import Cards from './Card';
import { useSearch } from '../context/SearchFunction';


const MyCourse = () => {
    const [mycourseData, setMycourseData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchValue , setSearchValue] = useSearch();
    // console.log(searchValue);

    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await axios.get("http://localhost:4000/book");
                // console.log(res.data);
                setMycourseData(res.data);
                setFilteredData(res.data);
                
            } catch (error) {
                console.log(error);
            }

        }
        getBook();
    },[])

    useEffect(() => {
        const searchedData = mycourseData.filter((item) => 
            item.title.toLowerCase().includes(searchValue.toLowerCase()));
        console.log(searchedData.length);

        if(searchedData.length > 0)
        setFilteredData(searchedData);
        

        // console.log(mycourseData)
    }, [searchValue]);

  return (
    <>
        <div
            className='grid grid-cols-3'
        >

        {
            filteredData.map((item)=>(
                <div
                >

                    <div
                    key={item.id}
                    >
                        <Cards
                        item={item}
                        />
                    </div>
                </div>
            ))
        }
        </div>
    </>
  )
}

export default MyCourse