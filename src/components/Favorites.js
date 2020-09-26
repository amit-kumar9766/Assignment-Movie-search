import { Divider } from '@material-ui/core';
import React, { useEffect,useState } from 'react';
import './common.css'

const Favorites=(props)=>{
    const [data,setData]=useState([]);

    useEffect(()=>{
        const x= localStorage.getItem('id')
        var arr=JSON.parse(x)||[];
        setData(arr)
    },[])

    const renderCards = data.map((favorite, index) => {


        return <tr key={index}>
                 
                 <td>{favorite.movieId}</td>
                <td>{favorite.movieName}</td>
               
                 <td>{favorite.type} </td>
         
                 </tr>
    })
  
    console.log(data)
    return (
    <>
        
         {/* {data!==[] && data.map((x,i)=>{return ( */}
                <div style={{}} className="fvrt-section">
                <h3 style={{padding:'30px'}}>Favourite Movies </h3>
                   <table>
                    <thead>
                        <tr>
                            <th><h5>MovieID</h5></th>
                            <th style={{paddingRight:'50px'}}><h5>MovieTitle</h5></th>
                            <th><h5>Type</h5></th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {renderCards}
                    </tbody>
                </table>
                </div>
           
    </>
    )

}

export default Favorites;