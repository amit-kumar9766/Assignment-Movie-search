import React, { Component, useEffect } from 'react';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'


const Pagination=(props)=>{
      
    const pageLinks=[]

    for(var i=1;i<=props.noOfpages+1;i++){
         let active=props.page==i?'Active':'';

    pageLinks.push(<li className={`waves-effect ${active}`} key={i} 
    onClick={()=>props.nextPage(i)}> {i}  </li>)
    }

    return (
        <div className="container">
            <div className="row">
                {pageLinks}
            </div>

        </div>
    )
    
}

export default Pagination;



