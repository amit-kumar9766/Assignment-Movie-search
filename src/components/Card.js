import React,{useEffect, useState} from 'react';
import './Card.css'
// import { Route, Switch ,Link} from "react-router-dom";
//import Card from 'react-bootstrap/Card'
import {Button} from '@material-ui/core';

function Card(props) {
    const {src,movieId,movieName,year,type}=props;
    
    const [favourite,setFavourite]=useState(false)
    const [ids,setIds]=useState([])

    
    
    const onClickFavorite=(e)=>{
        
        e.preventDefault()
        setFavourite(!favourite)
       
        //setIds([...ids,movieId])
       // console.log(movieId)
        let fav=localStorage.getItem('id')
        
        let fav1=JSON.parse(fav)||[]
        
        let mapped=fav1.map(ele => ele.movieId)
        console.log(mapped)
        if(mapped.includes( movieId)){
              console.log('favbefore',fav1)
              fav1=fav1.filter( el => el.movieId!= movieId )
            //   const index=fav1.findIndex(id => id === {movieId,movieName,type} )
            //   console.log('index',index)
            //   fav1.splice(index,1)
              console.log('favourate',fav1)
        }
        //})
        else
        {fav1.push({movieId,movieName,type})}
        
    
        
        localStorage.setItem('id',JSON.stringify(fav1))

        
    }


    useEffect(()=>{
       const x= localStorage.getItem('id')
       const arr=JSON.parse(x)||[]
       arr.map((x,i)=>{
           if(x.movieId===movieId){
               setFavourite(true)
           }
       })
    
    },[])
    
    return (
       
        
    
        <div className='card'>
            <img src={src} alt="No image found"  />
            <div className="card__info">

                {/* <h3>{movieId}</h3>  */}
                <h3>{movieName}</h3>
                <h2>{year}</h2>
                <h4>{type}</h4>
                <form >
                <Button variant="contained" className="btn__fav" onClick={(e)=>onClickFavorite(e)} > {!favourite ? "Add to Favorite" : "Not Favorite"} </Button>
                </form>
            </div>
        </div>
    )
}

export default Card;