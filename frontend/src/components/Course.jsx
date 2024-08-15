import React, { useEffect, useState } from 'react'
// import list from '../../public/list.json'
import Cards from './Card';
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useSearch } from '../context/SearchFunction';

const Course = () => {
    const [book, setBook] = useState([]);
    const [searchValue, setSearchValue] = useSearch();
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() =>{
        const getBook = async() => {
            try {
                const res = await axios.get('http://localhost:4000/book');
                console.log(res.data)
                setBook(res.data);
                setFilteredData(res.data);
            } catch (error) {
                console.log(error);
            }
        }

        getBook();

    }, [])

    useEffect(() => {
        const searchedData = book.filter((item) => 
            item.title.toLowerCase().includes(searchValue.toLowerCase()));
        console.log(searchedData.length);

        if(searchedData.length > 0)
        setFilteredData(searchedData);
        

        // console.log(mycourseData)
    }, [searchValue]);

    // console.log(list);
  return (
    <>
        <div>
            <h1 className='text-center m-20 text-6xl text-pink-400'>We are delight to have you here :)</h1>
            <p className='text-center mb-10 font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro odit suscipit adipisci quasi corrupti in tempore quod, facilis accusantium sunt modi cupiditate molestiae iste minus neque animi nemo dignissimos tenetur repudiandae repellendus, facere voluptatum dolorum ab. Voluptatem, reprehenderit nobis veniam iure alias, eveniet aperiam labore minima natus mollitia possimus ipsam cum. Itaque ipsa cupiditate eius veritatis placeat, id aspernatur blanditiis culpa expedita vel odio sed, eaque dolores obcaecati. Dignissimos perspiciatis dicta officia sint. Vel, architecto eos odit tempore molestias iste eveniet praesentium perspiciatis officia vitae delectus, doloribus nam aut ab assumenda totam dignissimos minima cumque incidunt. Explicabo incidunt laudantium cupiditate!</p>

        </div>
        <div className='text-center m'>
            <Link to="/">
            <button className='btn bg-pink-500 py-5 px-10 font-bold text-center mb-10'>Back</button>
            </Link>

        </div>
        
        <div className='grid grid-cols-3'>
            {
                filteredData.map((item) => (
                    <Cards key={item.id} 
                        item={item}
                    />
                ))
            }
        </div>
    </>
  )
}

export default Course