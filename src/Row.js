import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Row({title, fetchUrl}){

    const [movies,setMovies] = useState([]);

    useEffect(() => {
        
        async function fetchData(){
            let request = await axios.get(fetchUrl);
            // console.log(request);
            setMovies(request.data.results);
            return request;
        }
        
        fetchData();
    }, [fetchUrl]);

    return(
        <div>
            <h2>{title}</h2>
        </div>
    );
}
export default Row;