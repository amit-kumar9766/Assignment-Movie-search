import React,{useEffect, useState} from 'react';
import { Select } from '@material-ui/core';
import { NativeSelect } from '@material-ui/core';
import Card from './Card';
import './Dropdown.css';

const Drpdown=(props)=>{
    const {loading} =props
  
    const [value,setValue]=useState(0);

    const handleChange=(e)=>{
       setValue(e.target.value)
    }
    
    var {data,nodata}=props;
   // console.log(data)
    if (data!==undefined ){
    if (value==='1'){
        console.log('inside 1')
        data=data.filter(el => el.Type==='movie')
    }
    else if (value==='2'){
        data=data.filter(el => el.Type==='series')
    }
    else if (value==='3'){
        data=data.filter(el => el.Type==='episodes')
    }
   }
  

    useEffect(()=>{

    },[value])

   if ( nodata ){
     return (
        <h5 style={{padding:'30px'}}>No Data Found...Please search Again!!</h5>
    )
   }

   else if (!loading ){
        return (<>  loading...   </>)
    }
    
    
    return(
        
    <>
       <div className="select__area">
        <NativeSelect id="select" onChange={handleChange}>
            <option value="0" >All</option>
            <option value="1" >Movies</option>
            <option value="2" >Series</option>
            <option value="3">Episodes</option>

        </NativeSelect>
     </div>
      
      <div className="home__section">
        
     
    
      {data && data.map((dt,i)=>{return(
            <>
           <Card
              src={dt.Poster}
              movieId={dt.imdbID}
              movieName={dt.Title}
              type={dt.Type}
              year={dt.Year}
          />
            </>
        )})
        
  
        }
        </div>
    </>

    )

}

export default Drpdown;