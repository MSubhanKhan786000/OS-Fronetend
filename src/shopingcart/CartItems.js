// In your React component file

import React, { useEffect, useState } from 'react';
import Loader from '../assets/loader.json';
import Lottie from 'react-lottie';
import './card.css';
import axios from 'axios';
import Header from '../header/header';
import Footer from '../footer/footer';
import loaderAnimation from '../assets/loader.json';
const Card = ({ image, name, rentPrice, buyPrice, description, checkStatus, status, userId, productId, onButtonClick }) => {
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
    <div className="card" style={{ width: '240px', height: '375px' }}>
      {loading ? <Lottie
        options={defaultOptions}
        height={40}
        width={40}
        style={{
          marginTop: 140
        }}
      /> : <div><img src={image}
        alt="Card" className="card-image" />
        <div className="card-content">
          <h3 className="card-title">{name}</h3>
          <p className='para'> {description.slice(0, 25)}...</p>
          <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>

            <button style={{ width: '100px', height: '40px', margin: '5px' }} className="card-button2" onClick={(e) => { }}>
              ${checkStatus} ${checkStatus == "For Buy" ? buyPrice : rentPrice || 0}
            </button>

            <button style={{ width: '100px', height: '40px', margin: '5px' }} className="card-button2" onClick={(e) => onButtonClick(productId, checkStatus)}>
              Remove
            </button>
          </div>
        </div></div>}

    </div>
  )
};


const CardItems = () => {
  const [showContent, setShowContent] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [color, setColor] = React.useState("#ffffff");
  let [loading, setLoading] = React.useState(true);
  const [showDiv, setShowDiv] = useState(false);

  const [data, setData] = useState([]);
  const [totalRentPrice, settotalRentPrice] = useState([]);
  const [totalBuyPrice, settotalBuyPrice] = useState([]);
  const [totalSumPrice, settotalSumPrice] = useState([]);
  const [callbacks, setCallbacks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(15); // Number of items per page from the backend set to 8

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Array.isArray(data.data) ? data.data.slice(indexOfFirstItem, indexOfLastItem) : [];

  const userId = localStorage.getItem('userId');


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
    TotalRentPrice();
    TotalBuyPrice();
    TotalSumPrice();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/getCollectionAddToCart/${userId}`);
      setData(response.data)
      setCallbacks(response.data);
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


  const handleSubmit = async (productId, checkStatus) => {
    console.log("data === > ", productId, checkStatus);
    try {
      // Use Axios to send form data
      //   const response = await axios.delete(`http://localhost:5000//collectionsAddToCart/delete/${productId}`,'null', {
      //     headers: {
      //       'Content-Type': 'multipart/form-data' 
      //     }
      //   });
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


  return (
    <>
      <Header />


      <div className='card-container' style={{ backgroundColor: 'white' }}>
        {
          currentItems.map((item, index) => (
            <React.Fragment key={index}>
              {
                item.rentStatus == "InCard" ?

                  <Card
                    image={item.image}
                    name={item.name}
                    rentPrice={item.rentPrice}
                    buyPrice={item.buyPrice}
                    description={item.description}
                    status={item.status}
                    userId={userId}
                    productId={item._id}
                    checkStatus={"For Rent"}
                    buyStatus={item.buyStatus}
                    onButtonClick={handleSubmit}
                  />
                  :
                  <></>
              }
              {
                item.buyStatus === "InCard" ?
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
                    checkStatus={"For Buy"}
                    onButtonClick={handleSubmit}
                  />
                  :
                  <></>
              }
            </React.Fragment>
          ))
        }
        <div style={{
          position: "fixed",
          top: "0",
          right: "0",
          width: "32%",
          height: showDiv ? "100vh" : "0", // Change height based on showDiv state
          backgroundColor: "white",
          zIndex: 2,
          border: showDiv ? "0px solid red" : "0px solid red",
          overflow: "hidden", // Hide overflow when height is 0
          transition: "border height 0.5s", // Add transition effect,
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)',
          overflowY: "auto",

        }}>
          <div style={{
            borderRadius: '50%',
            backgroundColor: 'black'
          }}>
            <button onClick={() => setShowDiv(!showDiv)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                border: 'none',
                background: 'transparent',
                color: 'white',
                cursor: 'pointer',
                fontSize: '18px',
                marginLeft: "20px",
                borderRadius: '50%',
                backgroundColor: 'black'
              }}
            >x</button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", alignContent: 'center' }}>

            <div
              style={{
                alignSelf: "stretch",
                borderRadius: 2,
                backgroundColor: "rgba(0, 0, 0, 0.03)",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: 12,
                position: "relative",
                gap: 12,
                margin: '10px',
                marginBottom: "0px"
              }}
            >
              <img
                style={{
                  height: 90,
                  width: 90,
                  position: "relative",
                  borderRadius: 10,
                  objectFit: "cover",
                  minHeight: 90,
                }}
                loading="lazy"
                alt
                src="./public/image-29@2x.png"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "1px 0px 0px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: 4,
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "150%",
                        fontWeight: 600,
                      }}
                    >
                      Saba Asad (BR-248)
                    </div>
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "150%",
                        display: "inline-block",
                        minWidth: 114,
                      }}
                    >
                      Rs. 16,500/day
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: 7,
                      color: "#ff0049",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "150%",
                        fontWeight: 600,
                        display: "inline-block",
                        minWidth: 31,
                      }}
                    >
                      Edit
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "8px 0px 0px",
                      }}
                    >
                      <img
                        style={{
                          width: 10,
                          height: 10,
                          position: "relative",
                          overflow: "hidden",
                          flexShrink: 0,
                          objectFit: "contain",
                        }}
                        alt
                        src="./public/arrow-42@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <img
                style={{
                  height: 24,
                  width: 24,
                  position: "absolute",
                  margin: "0 !important",
                  top: "calc(50% - 12px)",
                  right: 12,
                  overflow: "hidden",
                  flexShrink: 0,
                }}
                alt
                src="./public/bin-1.svg"
              />
            </div>
            <div
              style={{
                alignSelf: "stretch",
                borderRadius: 2,
                backgroundColor: "rgba(0, 0, 0, 0.03)",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: 12,
                position: "relative",
                gap: 12,
                margin: '10px',
                marginBottom: "0px"
              }}
            >
              <img
                style={{
                  height: 90,
                  width: 90,
                  position: "relative",
                  borderRadius: 10,
                  objectFit: "cover",
                  minHeight: 90,
                }}
                loading="lazy"
                alt
                src="./public/image-29@2x.png"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "1px 0px 0px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: 4,
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "150%",
                        fontWeight: 600,
                      }}
                    >
                      Saba Asad (BR-248)
                    </div>
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "150%",
                        display: "inline-block",
                        minWidth: 114,
                      }}
                    >
                      Rs. 16,500/day
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: 7,
                      color: "#ff0049",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "150%",
                        fontWeight: 600,
                        display: "inline-block",
                        minWidth: 31,
                      }}
                    >
                      Edit
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "8px 0px 0px",
                      }}
                    >
                      <img
                        style={{
                          width: 10,
                          height: 10,
                          position: "relative",
                          overflow: "hidden",
                          flexShrink: 0,
                          objectFit: "contain",
                        }}
                        alt
                        src="./public/arrow-42@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <img
                style={{
                  height: 24,
                  width: 24,
                  position: "absolute",
                  margin: "0 !important",
                  top: "calc(50% - 12px)",
                  right: 12,
                  overflow: "hidden",
                  flexShrink: 0,
                }}
                alt
                src="./public/bin-1.svg"
              />
            </div>


            <div
              style={{
                alignSelf: "stretch",
                height: 1,
                position: "relative",
                borderTop: "1px solid #e7e7e7",
                boxSizing: "border-box",
                margin: '20px'
              }}
            />

            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: 6,
                fontSize: 14,
                margin: '20px',

              }}
            >
              <div
                style={{
                  position: "relative",
                  lineHeight: "150%",
                  display: "inline-block",
                  minWidth: 128,
                }}
              >
                Enter coupon code ok
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: 8,
                }}
              >
                <input
                  style={{
                    width: "100%",
                    border: "none",
                    outline: "none",
                    backgroundColor: "rgba(0, 0, 0, 0.03)",
                    height: 40,
                    flex: 1,
                    borderRadius: 2,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "7px 13.5px 9px",
                    boxSizing: "border-box",
                    fontFamily: '"Plus Jakarta Sans"',
                    fontSize: 16,
                    color: "rgba(0, 0, 0, 0.7)",
                    minWidth: 148,
                  }}
                  placeholder="AZD56"
                  type="text"
                />
                <button
                  style={{
                    cursor: "pointer",
                    border: "none",
                    padding: "7px 26px 9px 27px",
                    backgroundColor: "#fc0149",
                    borderRadius: 3,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    whiteSpace: "nowrap",
                  }}
                >
                  <div
                    style={{
                      height: 40,
                      width: 164,
                      position: "relative",
                      borderRadius: 3,
                      backgroundColor: "#fc0149",
                      display: "none",
                    }}
                  />
                  <div
                    style={{
                      position: "relative",
                      fontSize: 16,
                      lineHeight: "150%",
                      fontWeight: 600,
                      fontFamily: '"Plus Jakarta Sans"',
                      color: "#fff",
                      textAlign: "left",
                      display: "inline-block",
                      minWidth: 111,
                      zIndex: 1,
                    }}
                  >
                    Apply Coupon
                  </div>
                </button>
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                height: 1,
                position: "relative",
                borderTop: "1px solid #e7e7e7",
                boxSizing: "border-box",
                margin: '20px',

              }}
            />


            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: 16,
                margin: '20px',

              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: 20,
                }}
              >
                <h2
                  style={{
                    margin: 0,
                    position: "relative",
                    fontSize: "inherit",
                    lineHeight: "150%",
                    fontWeight: 600,
                    fontFamily: "inherit",
                    display: "inline-block",
                    minWidth: 117,
                  }}
                >
                  Subtotal
                </h2>
                <div
                  style={{
                    position: "relative",
                    lineHeight: "150%",
                    fontWeight: 600,
                  }}
                >
                  Rs. 186,000
                </div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: 16,
                  lineHeight: "150%",
                  color: "rgba(0, 0, 0, 0.7)",
                }}
              >
                Taxes, shipping and discounts codes calculated at checkout
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "center",
                margin: '20px',

              }}
            >
              <button
                style={{
                  cursor: "pointer",
                  border: "none",
                  padding: "12px 43px 14px 44px",
                  backgroundColor: "#fc0149",
                  borderRadius: 3,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
              >
                <div
                  style={{
                    height: 50,
                    width: 164,
                    position: "relative",
                    borderRadius: 3,
                    backgroundColor: "#fc0149",
                    display: "none",
                  }}
                />
                <div
                  style={{
                    position: "relative",
                    fontSize: 16,
                    lineHeight: "150%",
                    fontWeight: 600,
                    fontFamily: '"Plus Jakarta Sans"',
                    color: "#fff",
                    textAlign: "left",
                    display: "inline-block",
                    minWidth: 77,
                    zIndex: 1,
                  }}
                >
                  Checkout
                </div>
              </button>
            </div>
            {/* <div style={{marginTop:'60px',margin:"10px",backgroundColor:'',color:"#d6204e",height:"25vh",borderRadius:'5px',display:'flex',flexDirection:'column',justifyContent:'center',alignContent:'center',boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)'}}><b style={{textAlign:"center",margin:"10px"}}>Total Rent Price </b><b style={{textAlign:"center"}}>${totalRentPrice || 0}</b></div>
               <div style={{marginTop:'40px',margin:"10px",backgroundColor:'',color:"#d6204e",height:"25vh",borderRadius:'5px',display:'flex',flexDirection:'column',justifyContent:'center',alignContent:'center',boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)'}}><b style={{textAlign:"center",margin:"10px"}}>Total Buy Price </b><b style={{textAlign:"center"}}>${totalBuyPrice || 0}</b></div>
               <div style={{marginTop:'40px',margin:"10px",backgroundColor:'#d6204e',color:"white",height:"25vh",borderRadius:'5px',display:'flex',flexDirection:'column',justifyContent:'center',alignContent:'center',boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)'}}><b style={{textAlign:"center",margin:"10px"}}>Total Sum Price </b><b style={{textAlign:"center"}}>${totalSumPrice || 0}</b></div> */}

          </div>
        </div>
        <div className='lastbutton-container' >
          <div >
            <button
              onMouseEnter={(event) => { event.target.style.backgroundColor = '#d6204e'; event.target.style.color = 'white' }}
              onMouseLeave={(event) => { event.target.style.backgroundColor = 'white'; event.target.style.color = '#d6204e' }}
              className='lastbutton' onClick={() => setShowDiv(!showDiv)} style={{ textAlign: 'center', backgroundColor: 'white' }}>View Total Bill</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CardItems;
