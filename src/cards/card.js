// In your React component file

import React, { useEffect, useState } from 'react';
import Loader from '../assets/loader.json';
import Lottie from 'react-lottie';
import './card.css';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoCartOutline, IoNavigateSharp, IoSearchOutline } from 'react-icons/io5';
import { MdDelete } from "react-icons/md";
import { IoTrashOutline } from 'react-icons/io5';

import loaderAnimation from '../assets/loader.json';
import { RxCross1 } from 'react-icons/rx';
const Card = ({ image, name, rentPrice, buyPrice, description, status, userId, productId, rentStatus, buyStatus, onButtonClick, showDiv, setShowDiv }) => {
  const navigate = useNavigate()

  const handleClick = (e, name, image, rentPrice, buyPrice, description, status, userId, productId, rentOptions, selfStatus) => {
    e.preventDefault();

    const data = {
      name,
      image,
      rentPrice,
      buyPrice,
      description,
      status,
      userId,
      productId,
      rentOptions,
      selfStatus
    };

    const data1 = window.history.state;
    console.log('====================================');
    console.log("This is data 1", data1);
    console.log('====================================');
    window.history.pushState(data, "", "/SingleProducts");

    const popStateEvent = new PopStateEvent("popstate", { state: data });
    window.dispatchEvent(popStateEvent);
  };


  const [loading, setLoading] = useState(true);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Loader,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    },
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);

  })




  return (
    <div className="card" style={{ width: '245px', height: '390px' }}>
      {loading ? <Lottie
        options={defaultOptions}
        height={40}
        width={40}
        style={{
          marginTop: 140
        }}
      /> : <div><div style={{ display: "flex", justifyContent: 'center', alignContent: 'center', alignItems: 'center', alignSelf: 'center' }}><img style={{ padding: '1px', borderRadius: '10px', width: '240px', height: "240px" }} src={image} alt="Card" className="card-image" /></div>
        <div className="card-content">
          <h3 className="card-title" style={{ color: "black" }}>{name}</h3>
          <h4 className="card-title" style={{ fontWeight: 'lighter', paddingTop: '10px' }}>Rent Price: {rentPrice}/day or</h4>
          <h4 className="card-title" style={{ fontSize: '15px', fontWeight: 'lighter', paddingBottom: "10px" }}>Buy Price {buyPrice}</h4>
          <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>
            {
              status === "Buy" &&
              <>
                <button disabled={true} style={{ width: '100px', height: '40px', margin: '5px', backgroundColor: '#999999', cursor: 'default' }} className="card-button" >
                  Rent it
                </button>
                {buyStatus !== "InCard" ?
                  <button style={{ width: '100px', height: '40px', margin: '5px' }} className="card-button2" onClick={(e) => { handleClick(e, name, image, rentPrice, buyPrice, description, status, userId, productId, { kind: "Buy" }, { selfStatus: 'Buy' }) }} >
                    Buy it
                  </button>
                  :
                  <button style={{ width: '100px', height: '40px', margin: '5px', border: '1px solid #82b53f', color: '#82b53f' }} className="card-button2"
                    onMouseEnter={(e) => { e.target.style.backgroundColor = '#82b53f'; e.target.style.color = 'white'; }}
                    onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#82b53f'; }}

                    onClick={() => setShowDiv(!showDiv)}
                  >
                    In Cart
                  </button>
                }


              </>
            }
            {
              status === "Rent" &&
              <>
                {rentStatus !== "InCard" ?
                  <button style={{ width: '100px', height: '40px', margin: '5px' }} className="card-button" onClick={(e) => { handleClick(e, name, image, rentPrice, buyPrice, description, status, userId, productId, { kind: "Rent" }, { selfStatus: 'Rent' }) }} >
                    Rent it
                  </button>
                  :
                  <button style={{ width: '100px', height: '40px', margin: '5px', border: '1px solid #82b53f', backgroundColor: '#82b53f', color: 'white' }} className="card-button2"
                    onMouseEnter={(e) => { e.target.style.backgroundColor = 'white'; e.target.style.color = '#82b53f'; }}
                    onMouseLeave={(e) => { e.target.style.backgroundColor = '#82b53f'; e.target.style.color = 'white'; }}

                    onClick={() => setShowDiv(!showDiv)}
                  >
                    In Cart
                  </button>
                }


                <button disabled={true} style={{ width: '100px', height: '40px', margin: '5px', border: '1px solid #999999', color: '#999999', cursor: 'default' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'white'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                  className="card-button2" >
                  Buy it
                </button>
              </>
            }
            {
              status === "Both" &&
              <>
                {rentStatus !== "InCard" ?
                  <button style={{ width: '100px', height: '40px', margin: '5px' }} className="card-button" onClick={(e) => { handleClick(e, name, image, rentPrice, buyPrice, description, status, userId, productId, { kind: "Rent" }, { selfStatus: 'Rent' }) }} >
                    Rent it
                  </button>
                  :
                  <button style={{ width: '100px', height: '40px', margin: '5px', border: '1px solid #82b53f', backgroundColor: '#82b53f', color: 'white' }} className="card-button2"
                    onMouseEnter={(e) => { e.target.style.backgroundColor = 'white'; e.target.style.color = '#82b53f'; }}
                    onMouseLeave={(e) => { e.target.style.backgroundColor = '#82b53f'; e.target.style.color = 'white'; }}
                    onClick={() => setShowDiv(!showDiv)}

                  >
                    In Cart 1
                  </button>
                }


                {buyStatus !== "InCard" ?
                  <button style={{ width: '100px', height: '40px', margin: '5px' }} className="card-button2" onClick={(e) => { handleClick(e, name, image, rentPrice, buyPrice, description, status, userId, productId, { kind: "Buy" }, { selfStatus: 'Buy' }) }} >
                    Buy it
                  </button>
                  :
                  <button style={{ width: '100px', height: '40px', margin: '5px', border: '1px solid #82b53f', color: '#82b53f' }} className="card-button2"
                    onMouseEnter={(e) => { e.target.style.backgroundColor = '#82b53f'; e.target.style.color = 'white'; }}
                    onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = '#82b53f'; }}
                    onClick={() => setShowDiv(!showDiv)}
                  >
                    In Cart
                  </button>
                }


              </>
            }

          </div>
        </div></div>}


    </div>
  )
};


const CardList = () => {
  const navigate = useNavigate()

  const [showContent, setShowContent] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [color, setColor] = React.useState("#ffffff");
  let [loading, setLoading] = React.useState(true);
  const [Cartdata, setCartData] = useState([]);
  const [totalRentPrice, settotalRentPrice] = useState([]);
  const [totalBuyPrice, settotalBuyPrice] = useState([]);
  const [totalSumPrice, settotalSumPrice] = useState([]);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 500);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 500);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const [data, setData] = useState([]);
  const [callbacks, setCallbacks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(15);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Array.isArray(data.data) ? data.data.slice(indexOfFirstItem, indexOfLastItem) : [];

  const userId = localStorage.getItem('userId');


  useEffect(() => {
    fetchDataCart();
    TotalRentPrice();
    TotalBuyPrice();
    TotalSumPrice();
  }, []);

  const fetchDataCart = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/getCollectionAddToCart/${userId}`);
      setCartData(response.data.data)
      console.log("callbacks are--->", response.data);
      console.log("data is fetched--->", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const TotalRentPrice = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/collectionsAddToCart/rent/bill/${userId}`);
      settotalRentPrice(response.data)
      console.log("totalRentPrice???????????????????", response.data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const TotalBuyPrice = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/collectionsAddToCart/buy/bill/${userId}`);
      settotalBuyPrice(response.data)
      console.log("BUY???????????????????", response.data)

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  const TotalSumPrice = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/collectionsAddToCart/rentplusbuy/bill/${userId}`);
      settotalSumPrice(response.data)
      console.log("Sum ???????????????????", response.data)

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const handleSubmitCart = async (productId, checkStatus) => {
    console.log("data === > ", productId, checkStatus);
    try {
      if (checkStatus === "For Rent") {
        try {
          const response = await axios.put(`http://localhost:5000/collectionsAddToCart/rent/OutOfCard/${productId}`, 'null');
          if (response.status === 201) {
            console.log('Remove to Cart Item successfully');
            alert('Remove to Cart Item successfully');
          }

          const response2 = await axios.delete(`http://localhost:5000/collectionsAddToCart/rentonly/deleteItemfromCart/${productId}`);
          if (response2.status === 200) {
            console.log('Item deleted successfully');
          }

          window.location.reload();
        } catch (error) {
          console.error('Error:', error);
          window.location.reload();
        }
      }

      if (checkStatus === "For Buy") {
        const response = await axios.put(`http://localhost:5000/collectionsAddToCart/buy/OutOfCard/${productId}`, 'null', {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        const response2 = await axios.delete(`http://localhost:5000/collectionsAddToCart/buyonly/deleteItemfromCart/${productId}`);
        if (response2.status === 200) {
          console.log('Item deleted successfully');
        }

        if (response.status === 201) {

          window.location.reload();
          console.log('Remove to Cart Item successfully');
          alert('Remove to Cart Item successfully')
        } else {
          window.location.reload();
          console.error('Failed to submit buy form');
        }
      }
      //   console.log("the post apis is->",response.data);

    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

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
      const response = await axios.get('http://localhost:5000/getCollection');
      setData(response.data)
      setCallbacks(response.data);
      console.log("callbacks are--->", response.data);
      console.log("data is fetched--->", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const [showDiv, setShowDiv] = useState(false);
  const [hovered, setHovered] = useState(false);


  //pagination
  const itemsEachPage = 8; // Number of items to display per page
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  // Calculate total number of pages
  const totalNumberOfPages = Math.ceil(currentItems.length / itemsEachPage);

  // Calculate the index range of items to display for the current page
  const startItemIndex = (currentPageNumber - 1) * itemsEachPage;
  const endItemIndex = Math.min(startItemIndex + itemsEachPage, currentItems.length);

  // Slice the current items to display only those for the current page
  const itemsToShow = currentItems.slice(startItemIndex, endItemIndex);
  console.log("This is Items to Shows +++++++++++++++++", itemsToShow);

  const handlePageChange = (pageNumber) => {
    setCurrentPageNumber(pageNumber);
  };

  const handleSubmit = async (e, name, image, rentPrice, buyPrice, description, status, userId, productId, kind, selfStatus) => {
    e.preventDefault();
    if (userId == null) {
      navigate('/login-page')
    } else {
      console.log("data === > ", productId, name, image, rentPrice, buyPrice, description, status, userId, kind.kind, selfStatus.selfStatus);
      try {
        const formDataToSend = new FormData();
        formDataToSend.append('name', name);
        formDataToSend.append('description', description);
        formDataToSend.append('buyPrice', buyPrice);
        formDataToSend.append('rentPrice', rentPrice);
        formDataToSend.append('status', status);
        formDataToSend.append('userId', userId);
        formDataToSend.append('image', image);
        console.log("formDataToSend === > ", formDataToSend);

        // Use Axios to send form data
        const response = await axios.post(`http://localhost:5000/collectionsAddToCart/${JSON.stringify([productId, userId, name, description, buyPrice, rentPrice, status, selfStatus.selfStatus])}`, 'null', {
          headers: {
            'Content-Type': 'multipart/form-data'
          }


        });
        console.log("the post apis is->", response.data);

        if (response.status === 201) {
          if (kind.kind == "Rent") {
            const response = await axios.put(`http://localhost:5000/collectionsAddToCart/rent/${productId}`, 'null', {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            });
          }
          if (kind.kind == "Buy") {
            const response = await axios.put(`http://localhost:5000/collectionsAddToCart/buy/${productId}`, 'null', {
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

    <div className='card-container'>
      <p className='head'>Contemporary Pakistani Wedding dresses meticulously handicrafted with tradational embellesmensts and embriodery techniques inspired by the subcontinent's heritage.Each carefully crafted dress is designed to compliment brides look on her wedding day </p>
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
                showDiv={showDiv}
                setShowDiv={setShowDiv}
              />
            </React.Fragment>
          ))
          :
          <h1 style={{ textAlign: 'center' }}>No Data Found</h1>
      }

      <div className='lastbutton-container'>
        <div> <button className='lastbutton' onClick={() => { navigate("/ListofProducts?sort=no") }}>View All Products</button></div>
      </div>



      {/* card */}
      <div style={{ position: "fixed", top: 0, right: 0, width: isSmallScreen ? "100%" : "32%", height: showDiv ? "100vh" : "0", backgroundColor: "white", zIndex: 2, border: `0px solid red`, overflow: "hidden", transition: "border height 0.5s", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)", overflowY: "auto" }}>
        <p style={{ paddingLeft: "40px", fontSize: '20px', fontWeight: "bold", color: "black", textTransform: 'uppercase', }}>Cart Item</p>
        <div style={{ borderRadius: "50%", backgroundColor: "black" }}>
          {/* <button onClick={() => setShowDiv(!showDiv)} style={{ position: "absolute", top: 10, right: 10, border: "none", background: "transparent", color: "white", cursor: "pointer", fontSize: 18, marginLeft: 20, borderRadius: "50%", backgroundColor: "black" }}>x</button> */}

          <RxCross1
            size={30}
            color={hovered ? 'red' : 'black'}
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
              cursor: 'pointer',
              transition: 'color 0.3s ease',
              transform: hovered ? 'scale(1.1)' : 'scale(1)',
            }}
            onMouseEnter={() => setHovered(true)} // Set hovered to true
            onMouseLeave={() => setHovered(false)} // Set hovered to false
            onClick={() => setShowDiv(!showDiv)}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

          {Cartdata.map((item, index) => (
            item.rentStatus == "InCard" ?
              <div key={index} style={{ alignSelf: "stretch", borderRadius: 20, backgroundColor: "rgba(0, 0, 0, 0.03)", display: "flex", flexDirection: "row", padding: 12, position: "relative", gap: 12, margin: "2vh", border: "2px solid #fc0149" }}>
                <img style={{ height: 90, width: 90, position: "relative", borderRadius: 10, objectFit: "cover", minHeight: 90 }} alt="" src={item.image} />
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", padding: "1px 0px 0px" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", gap: 4 }}>
                    <div style={{ position: "relative", lineHeight: "150%", fontWeight: 600, color: 'black' }}>{item.name}</div>
                    <div style={{ position: "relative", lineHeight: "150%", display: "inline-block", minWidth: 114, color: 'gray' }}>Rs. {item.rentPrice}/day</div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", gap: 7, color: "#ff0049" }}>

                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", padding: "8px 0px 0px" }}>
                      <img style={{ width: 10, height: 10, position: "relative", overflow: "hidden", flexShrink: 0, objectFit: "contain" }} alt="" src="./public/arrow-42@2x.png" />
                    </div>
                  </div>
                </div>
                <>
                  <>
                    <>
                      <MdDelete
                        size={25}
                        style={{
                          color: "red",
                          height: 24,
                          width: 24,
                          position: "absolute",
                          margin: "0",
                          top: "calc(50% - 12px)",
                          right: 12,
                          cursor: "pointer",
                          borderRadius: "50%", // Circular shape
                          backgroundColor: "transparent", // Transparent background
                        }}
                        className="trash-icon"
                        onClick={() => {
                          handleSubmitCart(item._id, "For Rent");
                        }}
                      />


                    </>

                  </>

                </>

              </div>
              :
              <></>
          ))}
          {Cartdata.map((item, index) => (
            item.buyStatus === "InCard" ?
              <div key={index} style={{ alignSelf: "stretch", borderRadius: 2, backgroundColor: "rgba(0, 0, 0, 0.03)", display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", padding: 12, position: "relative", gap: 12, margin: "10px", marginBottom: "0px", marginTop: "2vh" }}>
                <img style={{ height: 90, width: 90, position: "relative", borderRadius: 10, objectFit: "cover", minHeight: 90 }} loading="lazy" alt="" src={item.image} />
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", padding: "1px 0px 0px" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", gap: 4 }}>
                    <div style={{ position: "relative", lineHeight: "150%", fontWeight: 600, color: 'black' }}>sldjffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff{item.name}</div>
                    <div style={{ position: "relative", lineHeight: "150%", display: "inline-block", minWidth: 114, color: 'gray' }}>Buy Price: Rs. {item.buyPrice}/buy</div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", gap: 7, color: "#ff0049" }}>
                    <div style={{ position: "relative", lineHeight: "150%", fontWeight: 600, display: "inline-block", minWidth: 31, }} onClick={() => { handleSubmitCart(item._id, "For Buy") }}>Edit</div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", padding: "8px 0px 0px" }}>
                      <img style={{ width: 10, height: 10, position: "relative", overflow: "hidden", flexShrink: 0, objectFit: "contain" }} alt="" src="./public/arrow-42@2x.png" />
                    </div>
                  </div>
                </div>
                <IoTrashOutline size={25} style={{ color: "red", height: 24, width: 24, position: "absolute", margin: "0 !important", top: "calc(50% - 12px)", right: 12, overflow: "hidden", flexShrink: 0 }} onClick={() => { handleSubmitCart(item._id, "For Buy") }} />
              </div>
              :
              <></>
          ))}



          <div style={{ alignSelf: "stretch", height: 1, position: "relative", borderTop: "1px solid #e7e7e7", boxSizing: "border-box", margin: "20px" }} />
          <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", gap: 16, margin: "20px" }}>
            <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", gap: 20 }}>
              <h2 style={{ margin: 0, position: "relative", fontSize: "inherit", lineHeight: "150%", fontWeight: 600, fontFamily: "inherit", display: "inline-block", minWidth: 117, color: 'black' }}>Subtotal</h2>
              <div style={{ position: "relative", lineHeight: "150%", fontWeight: 600, color: "black" }}>Rs. {totalSumPrice}</div>
            </div>
            <div style={{ alignSelf: "stretch", position: "relative", fontSize: 16, lineHeight: "150%", color: "rgba(0, 0, 0, 0.7)", color: 'black' }}>Taxes, shipping and discounts codes calculated at checkout</div>
          </div>
          <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "center", margin: "20px" }}>
            {/* <button style={{ cursor: "pointer", border: "none", padding: "12px 43px 14px 44px", backgroundColor: "#fc0149", borderRadius: 3, display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start" }}>
              <div style={{ height: 50, width: 164, position: "relative", borderRadius: 3, backgroundColor: "#fc0149", display: "none" }} />
              <div style={{ position: "relative", fontSize: 16, lineHeight: "150%", fontWeight: 600, fontFamily: '"Plus Jakarta Sans"', color: "#fff", textAlign: "left", display: "inline-block", minWidth: 77, zIndex: 1 }} onClick={() => { navigate("/Checkout") }}>Checkout1</div>
            </button> */}
            <button
              style={{
                cursor: "pointer",
                border: "none",
                padding: "12px 25px 12px 25px",
                background:
                  "linear-gradient(90deg, #fc0149 0%, #ff5757 100%)",
                borderRadius: 50,
                boxShadow:
                  "0px 10px 20px rgba(252, 1, 73, 0.4)",
                color: "#fff",
                fontSize: 18,
                fontWeight: 600,
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 20,
                transition:
                  "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onClick={() => { navigate("/Checkout") }}
              onMouseEnter={e => {
                e.currentTarget.style.transform =
                  "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0px 12px 25px rgba(252, 1, 73, 0.6)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0px 10px 20px rgba(252, 1, 73, 0.4)";
              }}
            >

              <div
                style={{
                  fontSize: 16,
                  lineHeight: "150%",
                  fontWeight: 600,
                  fontFamily: '"Plus Jakarta Sans"',
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                Add to Cart
              </div>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CardList;
