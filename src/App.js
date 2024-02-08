import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import { useEffect, useState } from 'react';
import House from './components/House';
import SearchFilter from './components/SearchFilter';
import SearchResults from './components/SearchResults';
import SearchHouse from './components/SearchHouse';
import {Routes,Route} from 'react-router-dom'
import Login from './components/Login';
import SignUp from './components/SignUp';
import PageNotFound from './components/PageNotFound';
import axios from 'axios';
import Enquiries from './components/Enquiries';



function App() {
  let [houseData,setHouseData] = useState([]);
  useEffect(()=>{
    
    let fetchData = async() =>{
    // USING LOCAL FILE
    // let response = await fetch("/houses.json");
    //console.log(response);
    //let data = await response.json();
      //console.log(data);

      // USING BACK END Server
     console.log("env=="+process.env.REACT_APP_BACKEND_URL);
     let response = await axios.get(process.env.REACT_APP_BACKEND_URL+"houses");
     console.log(response);
     setHouseData(response.data);
    }
    fetchData();
  },[])
  return (
    <div>
      <Header />
    <SearchFilter allHouses={houseData}/>
    <Routes>
      <Route path='/' element={<House houseInfo={houseData[1]}/>}/>
      <Route path='/searchresult/:county' element={<SearchResults allhouses={houseData}/>}/>
      <Route path='/searchhouse/:id' element={<SearchHouse allhouses={houseData}/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/enquiries' element={<Enquiries/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
    <Footer />
    </div>
  );
}

export default App;
