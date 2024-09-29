// In your React component file

import React, { useEffect, useState } from 'react';
import Loader from '../assets/loader.json';
import Lottie from 'react-lottie';
import './card.css';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';
import loaderAnimation from '../assets/loader.json'; 
const Card = ({ image, name,rentPrice,buyPrice,description, status,userId,productId,rentStatus,buyStatus,onButtonClick }) => {
  const navigate=useNavigate()
 

  const [loading, setLoading] = useState(true);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Loader,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    },
  };

  // showing the loding time for the 3000 
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);

  })

  return (
    <div className="card" style={{width:'240px',height:'375px'}}>
      {loading ? <Lottie
        options={defaultOptions}
        height={40}
        width={40}
        style={{
          marginTop:140
        }}
      /> : <div><img style={{padding:'3',borderRadius:'15px',borderBottomLeftRadius:'0px',borderBottomRightRadius:'0px'}} src={image} alt="Card" className="card-image" />
        <div className="card-content">
          <h3 className="card-title">{name}</h3>
          <p className='para'> {description.slice(0,25)}...</p>
          <div style={{display:"flex",justifyContent:'center',alignItems:'center',alignContent:'center'}}>
          {
            status === "Buy" && 
            <>
              <button  disabled={true} style={{width:'100px', height:'40px', margin:'5px',backgroundColor:'#999999',cursor: 'default'}} className="card-button" >
                Rent ${rentPrice || 0}
              </button>
              {buyStatus !== "InCard" ? 
                <button style={{width:'100px', height:'40px', margin:'5px'}} className="card-button2" onClick={(e) => onButtonClick(e,name, image, rentPrice, buyPrice, description, status,userId,productId,{kind:"Buy"},{selfStatus:'Buy'})}>
                  Buy ${buyPrice || 0}
                </button>
               :
               <button style={{width:'100px', height:'40px', margin:'5px',border:'1px solid green',color:'green'}} className="card-button2" 
                 onMouseEnter={(e) => {e.target.style.backgroundColor = 'green'; e.target.style.color = 'white';}}
                  onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent';e.target.style.color = 'green';}}

                onClick={(e) => {navigate("/card")}}>
                View Cart ${buyPrice || 0}
                </button>
              }

              
            </>
          }
          {
            status === "Rent" &&
            <>
            {rentStatus !== "InCard" ?  
              <button style={{width:'100px', height:'40px', margin:'5px'}} className="card-button" onClick={(e) => onButtonClick(e,name, image, rentPrice, buyPrice, description, status,userId,productId,{kind:"Rent"},{selfStatus:'Rent'})}>
                Rent ${rentPrice || 0}
              </button>
            :
            <button style={{width:'100px', height:'40px', margin:'5px',border:'1px solid green',backgroundColor:'green',color:'white'}} className="card-button2" 
              onMouseEnter={(e) => {e.target.style.backgroundColor = 'white'; e.target.style.color = 'green';}}
              onMouseLeave={(e) => {e.target.style.backgroundColor = 'green';e.target.style.color = 'white';}}

              onClick={(e) => {navigate("/card")}}>
              View Cart ${buyPrice || 0}
            </button>
             }


              <button disabled={true} style={{width:'100px', height:'40px', margin:'5px',border:'1px solid #999999',color:'#999999',cursor: 'default'}} 
                onMouseEnter={(e) => e.target.style.backgroundColor = 'white'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                className="card-button2" >
                Buy ${buyPrice || 0}
              </button>
            </>
          }
          {
            status === "Both" &&
            <>
	          {rentStatus !== "InCard" ?  
              <button style={{width:'100px', height:'40px', margin:'5px'}} className="card-button" onClick={(e) => onButtonClick(e,name, image, rentPrice, buyPrice, description, status,userId,productId,{kind:"Rent"},{selfStatus:'Rent'})}>
                Rent ${rentPrice || 0}
              </button>
            :
            <button style={{width:'100px', height:'40px', margin:'5px',border:'1px solid green',backgroundColor:'green',color:'white'}} className="card-button2" 
              onMouseEnter={(e) => {e.target.style.backgroundColor = 'white'; e.target.style.color = 'green';}}
              onMouseLeave={(e) => {e.target.style.backgroundColor = 'green';e.target.style.color = 'white';}}

              onClick={(e) => {navigate("/card")}}>
              View Cart ${buyPrice || 0}
            </button>
             }


		        {buyStatus !== "InCard" ? 
                <button style={{width:'100px', height:'40px', margin:'5px'}} className="card-button2" onClick={(e) => onButtonClick(e,name, image, rentPrice, buyPrice, description, status,userId,productId,{kind:"Buy"},{selfStatus:'Buy'})}>
                  Buy ${buyPrice || 0}
                </button>
               :
               <button style={{width:'100px', height:'40px', margin:'5px',border:'1px solid green',color:'green'}} className="card-button2" 
                 onMouseEnter={(e) => {e.target.style.backgroundColor = 'green'; e.target.style.color = 'white';}}
                  onMouseLeave={(e) => {e.target.style.backgroundColor = 'transparent';e.target.style.color = 'green';}}

                onClick={(e) => {navigate("/card")}}>
                View Cart ${buyPrice || 0}
                </button>
              }


            </>
          }

          </div>
        </div></div>}

    </div>
  )
};


const SearchProduct = () => {
  const navigate=useNavigate()
  const [showContent, setShowContent] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [color, setColor] = React.useState("#ffffff");
  let [loading, setLoading] = React.useState(true);

  const [data, setData] = useState([]);
  const [callbacks, setCallbacks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(15); // Number of items per page from the backend set to 8

  const [selectedOption, setSelectedOption] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleOptionChange = (event) => {
    const option = event.target.value;
    setSelectedOption(option);
    if (option !== '') {
      setShowInput(true);
    } else {
      setShowInput(false);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Array.isArray(data.data) ? data.data.slice(indexOfFirstItem, indexOfLastItem) : [];

  const userId = localStorage.getItem('userId');



  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('category');

  console.log("category ------------>",category);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clear the timeout when component unmounts to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
        if (isInViewport(card)) {
          card.classList.add('show');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
        if (isInViewport(card)) {
          card.classList.add('show');
        }
      });
      setShowContent(true);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/getCollection/cart/category/${category}`);
      setData(response.data)
      setCallbacks(response.data);
      console.log("callbacks are--->",response.data);
      console.log("data is fetched--->", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  //pagination
  const itemsEachPage = 12; // Number of items to display per page
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  // Calculate total number of pages
  const totalNumberOfPages = Math.ceil(currentItems.length / itemsEachPage);

  // Calculate the index range of items to display for the current page
  const startItemIndex = (currentPageNumber - 1) * itemsEachPage;
  const endItemIndex = Math.min(startItemIndex + itemsEachPage, currentItems.length);

  // Slice the current items to display only those for the current page
  const itemsToShow = currentItems.slice(startItemIndex, endItemIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPageNumber(pageNumber);
  };


  const handleSubmit = async (e,name,image, rentPrice, buyPrice, description, status,userId,productId,kind,selfStatus) => {
     e.preventDefault();
    if(userId == null){
      navigate('/login-page')
    }else{
      console.log("data === > ", productId,name,image, rentPrice, buyPrice, description, status,userId,kind.kind,selfStatus.selfStatus);
      try {
        const formDataToSend = new FormData();
        formDataToSend.append('name', name);
        formDataToSend.append('description', description);
        formDataToSend.append('buyPrice', buyPrice);
        formDataToSend.append('rentPrice', rentPrice);
        formDataToSend.append('status', status);
        formDataToSend.append('userId', userId);
        formDataToSend.append('image', image);
        console.log("formDataToSend === > ",formDataToSend);

        // Use Axios to send form data
        const response = await axios.post(`http://localhost:5000/collectionsAddToCart/${JSON.stringify([productId,userId,name, description,buyPrice,rentPrice,status,selfStatus.selfStatus])}`,'null', {
          headers: {
            'Content-Type': 'multipart/form-data' 
          }
        

        });
        console.log("the post apis is->",response.data);

        if (response.status === 201) {
          if(kind.kind == "Rent"){
            const response = await axios.put(`http://localhost:5000/collectionsAddToCart/rent/${productId}`,'null', {
              headers: {
                'Content-Type': 'multipart/form-data' 
              }
          });
          }
          if(kind.kind == "Buy"){
            const response = await axios.put(`http://localhost:5000/collectionsAddToCart/buy/${productId}`,'null', {
              headers: {
                'Content-Type': 'multipart/form-data' 
              }
          });
          }
          window.location.reload();
          console.log('Add to Cart Item successfully');
          alert('Add to Cart Item successfully')
        } else {
          console.error('Failed to submit form');
          alert("there is some error in sumbitting the form")
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  };


  return (
    <>
     <Header/>
    <div className='card-container' style={{backgroundColor:'white'}}>
      <div style={{backgroundColor:"#F4F4FF",width:'90%',height:"30vh",borderRadius:10,margin:50,marginTop:100}}>
        <h1 style={{paddingLeft:'20px',paddingRight:'20px',color:"#fc0149"}}>DRESSES FOR RENT</h1>
        <h4 style={{paddingTop:'5px',paddingLeft:'20px',paddingRight:'20px',color:"gray",fontWeight:'lighter'}}>Discover a world of stunning dresses for every occasion. Whether you're attending a wedding, prom, or special event, we have the perfect dress for you. Browse our collection and rent your dream dress today!</h4>
      </div>

      {/* <div style={{width:"100%",display:'flex',justifyContent:'flex-end',alignContent:'center'}}>
        <label htmlFor="options" style={{alignSelf:'center'}}>Sort By : </label>
        <select id="options" onChange={handleOptionChange} value={selectedOption} style={{width:"166px",height:'41px',marginRight:'160px',backgroundColor:'#f7f7f7',borderRadius:"2px",border:"0px solid gray"}}>
          <option value=""> Select Price</option>
          <option value="option1">Rent Low First</option>
          <option value="option2">Rent High First</option>
          <option value="option3">Buy Low First</option>
          <option value="option3">Buy High First</option>
        </select>
      </div> */}

      <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignContent:'center',width:"90%",flexWrap:'wrap'}}>
      {
        itemsToShow.length > 0 ?
          itemsToShow.map((item, index) => (
            <React.Fragment key={index} >
              <Card
                image={item.image}
                name={item.name}
                rentPrice={item.rentPrice}
                buyPrice={item.buyPrice}
                description={item.description}
                status={item.status}
                userId={userId}
                productId={item._id}
                rentStatus={item.rentStatus}
                buyStatus={item.buyStatus}
                onButtonClick={handleSubmit}
              />
            </React.Fragment>
          ))
          :
          <h1 style={{textAlign:'center'}}>No Data Found</h1>
        }
      </div>

      <div className='lastbutton-container'>
        {Array.from({ length: totalNumberOfPages }, (_, index) => (
          <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          style={{
            margin: '5px',
            border: '0px solid black',
            padding: '10px',
            backgroundColor: index + 1 === currentPageNumber ? '#fc0149' : 'white',
            color: index + 1 === currentPageNumber ? 'white' : 'black',
            transition: 'background-color 0.3s, color 0.3s', // Add transition for smoother color change
          }}
          onMouseEnter={(event) => {
            if (index + 1 !== currentPageNumber) {
              // Change color on hover only if it's not the current page
              event.target.style.backgroundColor = 'lightblue';
            }
          }}
          onMouseLeave={(event) => {
            if (index + 1 !== currentPageNumber) {
              // Change color back to original on mouse leave only if it's not the current page
              event.target.style.backgroundColor = 'white';
            }
          }}
        >
          {index + 1}
        </button>
      ))}  
      </div>
    </div>
    <Footer/>
    </>

  );
};

export default SearchProduct;
