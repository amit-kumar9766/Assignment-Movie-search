import React ,{useState,useEffect} from 'react';
import SearchIcon from "@material-ui/icons/Search";
import Drpdown from './Dropdown';
import Favorites from './Favorites';
import './common.css'
import './LandingPage.css'
import { Button,Form,Container,Row,Col } from 'react-bootstrap';



const LandingPage=()=>{
    const [data,setData]=useState('')
    const [nodata, setNodata] = useState(false);
    const [loading,setLoading]=useState(true)
    const [searchTerm,setSearchTerm]=useState('')
    const [error,setError]=useState(false);
    const [page,setPage]=useState(1)
   
    const endpoint=`https://cors-anywhere.herokuapp.com/http://www.omdbapi.com/?apikey=e0df3e16&s=${searchTerm}&page=${page}`

    const fetchMovies = (endpoint) => {
         setLoading(false)

        fetch(endpoint)
            .then(result => result.json())
            .then(result => {
                
               
                if(result.Response === "False"){
                    setNodata(true)
                    return;
                }
                setData(result);
                setNodata(false)
                setLoading(true)
            })

            .catch(error => {
                console.log('Error:', error)
                setError(true)
               setLoading(true)
            }
            )
    }
    const handleChange=(e)=>{
        setSearchTerm(e.target.value)
     
    }
    
   
    const handleSubmit=(e)=>{  
    
    e.preventDefault();
    setSearchTerm('');
    const loadData =  () => {
        const newMovies = fetchMovies(endpoint);
        
        };
    loadData();
    

    }

    console.log(data)
    

     if (error){
        return (<div style={{marginTop:'100px'}}>There is an error</div>)
    }
    
    return (
    <>
    <section className="search-area">
    <Container>
  
  <Row>
    <Col xs={12} md={12}>
     
    <form  className="header__search"  onSubmit={handleSubmit} style={{border:'0.1px solid black'
     ,height:'40px',width:'300px',marginRight:'auto',marginLeft:'auto',borderRadius:'5px'}}>
        <input className="header__searchInput" style={{margin:'20px'}}type="text" onChange={handleChange} 
        search={searchTerm} value ={searchTerm} placeholder="Search movies,serials here" />
       
        <SearchIcon className="header__searchIcon" style={{backgroundColor:'#cd9042',height:'38px',width:'30px'}}
        onClick={handleSubmit}/>
        
</form>
    </Col>
    
  </Row>

  <Drpdown data={data.Search}  nodata={nodata} loading={loading}/>    

</Container>


     
     
    </section>
   
     
    
    </>
    )
     

}

export default LandingPage