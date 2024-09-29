import Header from "../header/header";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

import { BsCart } from 'react-icons/bs';

const Checkout = () => {
  const navigate=useNavigate()

  // const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 500);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsSmallScreen(window.innerWidth < 500);
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  
  const [Cartdata, setCartData] = useState([]);
  const [totalRentPrice, settotalRentPrice] = useState([]);
  const [totalBuyPrice, settotalBuyPrice] = useState([]);
  const [totalSumPrice, settotalSumPrice] = useState([]);

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
const [email, setEmail] = useState('');
const [pnumber, setPnumber] = useState('');
const [address, setAddress] = useState('');
const [city, setCity] = useState('');

const [isLoading, setIsLoading] = useState(false);

const [shippingMethod, setShippingMethod] = useState('Standard');
const [paymetMethod, setpaymetMethod] = useState('');
const [orderNumber, setOrderNumber] = useState('');

const handlePaymentChange = (event) => {
  setpaymetMethod(event.target.value);
};


const handlePaynow = async () => {
  console.log("POST DATA   _------------ data", fname,lname,email,pnumber,address,city,shippingMethod,paymetMethod)
  if (!fname) {
    alert('Please select an first name');
    return;
  }
  if (!lname) {
    alert('Please select an last name');
    return;
  }
  if (!email) {
    alert('Please select an email');
    return;
  }
  if (!pnumber) {
    alert('Please select an phone number');
    return;
  }
  if (!address) {
    alert('Please select an address');
    return;
  }
  if (!city) {
    alert('Please select an city');
    return;
  }

  if (!shippingMethod) {
    alert('Please select an shippingMethod');
    return;
  }
  if (!paymetMethod) {
    alert('Please select an paymetMethod');
    return;
  }
  if (!orderNumber) {
    alert('Please select an orderNumber');
    return;
  }


  if(fname!= null & lname != null & email !=null & pnumber !=null & address !=null & city !=null & shippingMethod !=null & paymetMethod !=null & orderNumber!= null) {
    setIsLoading(true);
  
  
  try {
    const formDataToSend = new FormData();
    formDataToSend.append('fname', fname);
    formDataToSend.append('lname', lname);
    formDataToSend.append('email', email);
    formDataToSend.append('pnumber', pnumber);
    formDataToSend.append('address', address);
    formDataToSend.append('city', city);
    formDataToSend.append('shippingMethod', shippingMethod);
    formDataToSend.append('paymetMethod', paymetMethod);
    formDataToSend.append('orderNumber', orderNumber);
    // Use Axios to send form data
    const response = await axios.post(`http://localhost:5000/checkout/${JSON.stringify([fname,lname,pnumber,email,address,city,shippingMethod,paymetMethod,orderNumber])}`, formDataToSend, {
      headers: {
        'Content-Type': 'multipart/form-data' 
      }
    

    });


    console.log("the post apis is->",response.data);

    if (response.status === 201) {
      console.log("200-------------------->",orderNumber)
      navigate("/CheckoutNext",{ state: { orderNumber: orderNumber } });
      localStorage.setItem('orderNumber',orderNumber);
      console.log('Form submitted successfully');
      alert('Form Submitted Successfully')
    } else {
      console.error('Failed to submit form');
      alert("there is some error in sumbitting the form")
    }
  } catch (error) {
      console.error('Error submitting form:', error);
  } finally {
    setIsLoading(false); // Set loading state to false when request completes
  }
}

};

const handleOptionChange = (event) => {
  setShippingMethod(event.target.value);
};
  console.log("fname===========>",fname);

  const userId = localStorage.getItem('userId');

  useEffect(() => {
    fetchDataCart();
    TotalRentPrice();
    TotalBuyPrice();
    TotalSumPrice();
    generateRandomString();
  }, []);


  function generateRandomString() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    setOrderNumber(result);
  }
  console.log("------------------------>",orderNumber)
  
  const handleSubmitCart = async (productId,checkStatus) => {
    console.log("data === > ", productId,checkStatus);
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
    
      if(checkStatus === "For Buy"){
        const response = await axios.put(`http://localhost:5000/collectionsAddToCart/buy/OutOfCard/${productId}`,'null', {
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
  const fetchDataCart = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/getCollectionAddToCart/${userId}`);
      setCartData(response.data.data)
      console.log("callbacks are--->",response.data);
      console.log("data is fetched--->", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const TotalRentPrice = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/collectionsAddToCart/rent/bill/${userId}`);
      settotalRentPrice(response.data)
      console.log("totalRentPrice???????????????????",response.data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const TotalBuyPrice = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/collectionsAddToCart/buy/bill/${userId}`);
      settotalBuyPrice(response.data)
      console.log("BUY???????????????????",response.data)

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  const TotalSumPrice = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/collectionsAddToCart/rentplusbuy/bill/${userId}`);
      settotalSumPrice(response.data)
      console.log("Sum ???????????????????",response.data)

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }


  return (
    <>
      <div
        style={{
          width: "100%",
          position: "relative",
          boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.08)",
          backgroundColor: "#fff",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "35px 0px 0px",
          boxSizing: "border-box",
          lineHeight: "normal",
          letterSpacing: "normal",
        }}
      >
        <Header />
        <section
          style={{
            alignSelf: "stretch",
            backgroundColor: "rgba(0, 0, 0, 0.03)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "80px 20px",
            boxSizing: "border-box",
            gap: 48,
            maxWidth: "100%",
            textAlign: "left",
            fontSize: 40,
            color: "#000",
            fontFamily: '"Plus Jakarta Sans"',
          }}
        >
          <h1
            style={{
              margin: 0,
              width: 1180,
              position: "relative",
              fontSize: "inherit",
              lineHeight: "130%",
              fontWeight: 700,
              fontFamily: "inherit",
              display: "inline-block",
              maxWidth: "100%",
            }}
          >
            Checkout
          </h1>
          <div
            style={{
              width: 1180,
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: 16,
              maxWidth: "100%",
              fontSize: 28,
            }}
          >
            <div
              style={{
                flex: 1,
                boxShadow: "0px 3px 25px rgba(0, 0, 0, 0.05)",
                borderRadius: 10,
                backgroundColor: "#fff",
                border: "1px solid #e7e7e7",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "30px 31px",
                gap: 23,
                minWidth: 455,
                maxWidth: "100%",
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
                  minWidth: 112,
                }}
              >
                Contact
              </h2>
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: 24,
                  fontSize: 14,
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 154,
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    position: "relative",
                    gap: "20px 16px",
                  }}
                >
                  <div
                    style={{
                      width: 308,
                      margin: "0 !important",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: 6,
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "150%",
                        display: "inline-block",
                        minWidth: 78,
                      }}
                    >
                      First Name*
                    </div>
                    <input
                      style={{
                        width: "100%",
                        border: "none",
                        outline: "none",
                        backgroundColor: "rgba(0, 0, 0, 0.03)",
                        alignSelf: "stretch",
                        height: 40,
                        borderRadius: 2,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "7px 14px 9px",
                        boxSizing: "border-box",
                        fontFamily: '"Plus Jakarta Sans"',
                        fontSize: 16,
                        color: "rgba(0, 0, 0, 0.7)",
                        minWidth: 185,
                      }}
                      placeholder="Adnan"
                      type="text"
                      value={fname} 
                      onChange={(event)=>{setFname(event.target.value);}}
                    />
                  </div>
                  <div
                    style={{
                      width: 308,
                      margin: "0 !important",
                      position: "absolute",
                      top: 0,
                      left: 328,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: 6,
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "150%",
                        display: "inline-block",
                        minWidth: 77,
                      }}
                    >
                      Last Name*
                    </div>
                    <input
                      style={{
                        width: "100%",
                        border: "none",
                        outline: "none",
                        backgroundColor: "rgba(0, 0, 0, 0.03)",
                        alignSelf: "stretch",
                        height: 40,
                        borderRadius: 2,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "7px 14px 9px",
                        boxSizing: "border-box",
                        fontFamily: '"Plus Jakarta Sans"',
                        fontSize: 16,
                        color: "rgba(0, 0, 0, 0.7)",
                        minWidth: 185,
                      }}
                      placeholder="Safdar"
                      type="text"
                      value={lname} 
                      onChange={(event)=>{setLname(event.target.value);}}
                    />
                  </div>
                  <div
                    style={{
                      width: 308,
                      margin: "0 !important",
                      position: "absolute",
                      top: 87,
                      left: 0,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: 6,
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "150%",
                        display: "inline-block",
                        minWidth: 93,
                      }}
                    >
                      Email address
                    </div>
                    <input
                      style={{
                        width: "100%",
                        border: "none",
                        outline: "none",
                        backgroundColor: "rgba(0, 0, 0, 0.03)",
                        alignSelf: "stretch",
                        height: 40,
                        borderRadius: 2,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "7px 14px 9px",
                        boxSizing: "border-box",
                        fontFamily: '"Plus Jakarta Sans"',
                        fontSize: 16,
                        color: "rgba(0, 0, 0, 0.7)",
                        minWidth: 185,
                      }}
                      placeholder="adnan@gmail.com"
                      type="text"
                      value={email} 
                      onChange={(event)=>{setEmail(event.target.value);}}
                    />
                  </div>
                  <div
                    style={{
                      width: 308,
                      margin: "0 !important",
                      position: "absolute",
                      top: 87,
                      left: 328,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: 6,
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "150%",
                        display: "inline-block",
                        minWidth: 99,
                      }}
                    >
                      Phone Number
                    </div>
                    <input
                      style={{
                        width: "100%",
                        border: "none",
                        outline: "none",
                        backgroundColor: "rgba(0, 0, 0, 0.03)",
                        alignSelf: "stretch",
                        height: 40,
                        borderRadius: 2,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "7px 14px 9px",
                        boxSizing: "border-box",
                        fontFamily: '"Plus Jakarta Sans"',
                        fontSize: 16,
                        color: "rgba(0, 0, 0, 0.7)",
                        minWidth: 185,
                      }}
                      placeholder={"03218861070"}
                      type="text"
                      value={pnumber} 
                      onChange={(event)=>{setPnumber(event.target.value);}}
                    />
                  </div>
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 1,
                    position: "relative",
                    borderTop: "1px solid #e7e7e7",
                    boxSizing: "border-box",
                  }}
                />
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 0px 17px",
                  boxSizing: "border-box",
                  gap: 24,
                  maxWidth: "100%",
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
                  }}
                >
                  Delivery Address
                </h2>
                <div
                  style={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    maxWidth: "100%",
                    fontSize: 14,
                  }}
                >
                <div
                  style={{
                    width: 636,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: 5,
                    maxWidth: "100%",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      lineHeight: "150%",
                      display: "inline-block",
                      minWidth: 56,
                    }}
                  >
                    Address

                    <input
                        style={{
                          width: "100%",
                          border: "none",
                          outline: "none",
                          backgroundColor: "rgba(0, 0, 0, 0.03)",
                          alignSelf: "stretch",
                          height: 40,
                          borderRadius: 2,
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          padding: "7px 14px 9px",
                          boxSizing: "border-box",
                          fontFamily: '"Plus Jakarta Sans"',
                          fontSize: 16,
                          color: "rgba(0, 0, 0, 0.7)",
                        }}

                        placeholder="398-A Shershah Colony, Link Raiwind Road"
                        type="text"
                        value={address} 
                        onChange={(event)=>{setAddress(event.target.value)}}
                      />
                  </div>

                </div>
                  <div
                    style={{
                      width: 355,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      padding: "86px 0px 0px",
                      boxSizing: "border-box",
                      maxWidth: "100%",
                      marginLeft: "-636px",
                    }}
                  >
                    <div
                      style={{
                        alignSelf: "stretch",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: 6,
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          lineHeight: "150%",
                          display: "inline-block",
                          minWidth: 28,
                        }}
                      >
                        City
                      </div>
                      <input
                        style={{
                          width: "100%",
                          border: "none",
                          outline: "none",
                          backgroundColor: "rgba(0, 0, 0, 0.03)",
                          alignSelf: "stretch",
                          height: 40,
                          borderRadius: 2,
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          padding: "7px 14px 9px",
                          boxSizing: "border-box",
                          fontFamily: '"Plus Jakarta Sans"',
                          fontSize: 16,
                          color: "rgba(0, 0, 0, 0.7)",
                          minWidth: 213,
                        }}
                        placeholder="Lahore"
                        type="text"
                        value={city} 
                        onChange={(event)=>{setCity(event.target.value);}}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: 24,
                  fontSize: 14,
                  color: "#666",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: 8,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: 8,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "3px 0px 0px",
                      }}
                    >
                      <img
                        style={{ width: 16, height: 16, position: "relative" }}
                        alt
                        src="./public/radio.svg"
                      />
                    </div>
                    <div style={{ position: "relative", lineHeight: "150%" }}>
                      Same as Shipping Address
                    </div>
                  </div>
                  <div
                    style={{
                      width: 179,
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: 8,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "3px 0px 0px",
                      }}
                    >
                      <img
                        style={{ width: 16, height: 16, position: "relative" }}
                        alt
                        src="./public/radio-1.svg"
                      />
                    </div>
                    <input
                      style={{
                        width: "calc(100% - 16px)",
                        border: "none",
                        outline: "none",
                        fontFamily: '"Plus Jakarta Sans"',
                        fontSize: 14,
                        backgroundColor: "transparent",
                        height: 21,
                        flex: 1,
                        position: "relative",
                        lineHeight: "150%",
                        color: "#666",
                        textAlign: "left",
                        display: "inline-block",
                        minWidth: 93,
                        padding: 0,
                      }}
                      placeholder="Use a different Address"
                      type="text"
                    />
                  </div>
                </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 1,
                    position: "relative",
                    borderTop: "1px solid #e7e7e7",
                    boxSizing: "border-box",
                  }}
                />
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: 24,
                  maxWidth: "100%",
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
                  }}
                >
                  Shipping Method
                </h2>
                <div
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: 8,
        maxWidth: "100%",
        fontSize: 14,
        color: "#666",
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: 8,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "3px 0px 0px",
            }}
          >
            <input
              style={{
                cursor: "pointer",
                margin: 0,
                width: 16,
                height: 16,
                position: "relative",
              }}
              type="radio"
              name="deliveryOption"
              value="Standard"
              checked={shippingMethod === 'Standard'}
              onChange={handleOptionChange}
            />
          </div>
          <div style={{ position: "relative", lineHeight: "150%" }}>
            Standard (4-7 days)
          </div>
        </div>
        <div
          style={{
            position: "relative",
            lineHeight: "150%",
            display: "inline-block",
            minWidth: 30,
          }}
        >
          Free
        </div>
      </div>
      <div
        style={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: 8,
          maxWidth: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "3px 0px 0px",
          }}
        >
          <input
            style={{
              cursor: "pointer",
              margin: 0,
              width: 16,
              height: 16,
              position: "relative",
            }}
            type="radio"
            name="deliveryOption"
            value="Urgent"
            checked={shippingMethod === 'Urgent'}
            onChange={handleOptionChange}
          />
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "0px 20px 0px 0px",
            boxSizing: "border-box",
            minWidth: 350,
            maxWidth: "100%",
          }}
        >
          <div style={{ position: "relative", lineHeight: "150%" }}>
            Urgent Delivery (1-2 days)
          </div>
        </div>
        <div
          style={{
            position: "relative",
            lineHeight: "150%",
            display: "inline-block",
            minWidth: 66,
          }}
        >
          Rs. 2,000
        </div>
      </div>
    </div>
                <div
                  style={{
                    alignSelf: "stretch",
                    height: 1,
                    position: "relative",
                    borderTop: "1px solid #e7e7e7",
                    boxSizing: "border-box",
                  }}
                />
              </div>
              <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        gap: 8,
        fontSize: 14,
        color: "#666",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: 8,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "3px 0px 0px",
          }}
        >
          <input
            style={{
              cursor: "pointer",
              margin: 0,
              width: 16,
              height: 16,
              position: "relative",
            }}
            type="radio"
            name="paymentOption"
            value="Card and Online Transfer"
            checked={paymetMethod === 'Card and Online Transfer'}
            onChange={handlePaymentChange}
          />
        </div>
        <div style={{ position: "relative", lineHeight: "150%" }}>
          Card and Online Transfer
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: 8,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "3px 0px 0px",
          }}
        >
          <input
            style={{
              cursor: "pointer",
              margin: 0,
              width: 16,
              height: 16,
              position: "relative",
            }}
            type="radio"
            name="paymentOption"
            value="Cash on Delivery"
            checked={paymetMethod === 'Cash on Delivery'}
            onChange={handlePaymentChange}
          />
        </div>
        <div
          style={{
            position: "relative",
            lineHeight: "150%",
            display: "inline-block",
            minWidth: 110,
          }}
        >
          Cash on Delivery
        </div>
      </div>
    </div>
              <button
                style={{
                  cursor: "pointer",
                  border: "none",
                  padding: "13px 24px",
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
                    position: "relative",
                    fontSize: 16,
                    lineHeight: "150%",
                    fontWeight: 600,
                    fontFamily: '"Plus Jakarta Sans"',
                    color: "#fff",
                    textAlign: "left",
                    display: "inline-block",
                    minWidth: 65,
                  }}
                  onClick={()=>{handlePaynow()}}
                  disabled={isLoading}
                >
                  {isLoading ? 'Submitting...' : 'Pay now'}
                  
                  
                </div>
              </button>
            </div>

<div style={{ width: 464, boxShadow: "0px 3px 25px rgba(0, 0, 0, 0.05)", borderRadius: 10, backgroundColor: "#fff", border: "1px solid #e7e7e7", boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", padding: "30px 31px", gap: "23.7px", minWidth: 464, maxWidth: "100%", fontSize: 16 }}>
  <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", gap: 20, fontSize: 28 }}>
    <h2 style={{ margin: 0, position: "relative", fontSize: "inherit", lineHeight: "150%", fontWeight: 600, fontFamily: "inherit", display: "inline-block", minWidth: 121 }}>Your cart</h2>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", padding: "5px 0px 0px" }}>
      <BsCart style={{ width: 32, height: 32, position: "relative", overflow: "hidden", flexShrink: 0 }} />
    </div>
  </div>
  <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", gap: 8 }}>
    {Cartdata.map((item, index) => (
      item.rentStatus == "InCard"?
      <div key={index} style={{ alignSelf: "stretch", borderRadius: 2, backgroundColor: "rgba(0, 0, 0, 0.03)", display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", padding: 12, gap: 20 }}>
        <div style={{ width: 258, display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", gap: 12 }}>
          <img style={{ height: 90, width: 90, position: "relative", borderRadius: 10, objectFit: "cover", minHeight: 90 }} loading="lazy" alt="" src={item.image} />
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", padding: "1px 0px 0px" }}>
            <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", gap: 12 }}>
              <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", gap: 4 }}>
                <div style={{ position: "relative", lineHeight: "150%", fontWeight: 600 }}>{item.name}</div>
                <div style={{ position: "relative", lineHeight: "150%", display: "inline-block", minWidth: 114 }}>Rs. {item.rentPrice}/day</div>
              </div>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", gap: 7, color: "#ff0049" }}>
                <div style={{ position: "relative", lineHeight: "150%", fontWeight: 600, display: "inline-block", minWidth: 31 }} onClick={()=>{handleSubmitCart(item._id,"For Rent")}}>Delete</div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", padding: "8px 0px 0px" }}>
                  {/* <img style={{ width: 10, height: 10, position: "relative", overflow: "hidden", flexShrink: 0, objectFit: "contain" }} alt="" src={`./public/arrow-${index + 1}@2x.png`} /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        :
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", padding: "33px 0px 0px" }}>
          {/* <img style={{ width: 24, height: 24, position: "relative", overflow: "hidden", flexShrink: 0 }} alt="" src={`./public/bin-1-${index}@2.svg`} /> */}
        </div>
      </div>
      :
      <></>
    ))}
        {Cartdata.map((item, index) => (
      item.buyStatus == "InCard"?
      <div key={index} style={{ alignSelf: "stretch", borderRadius: 2, backgroundColor: "rgba(0, 0, 0, 0.03)", display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", padding: 12, gap: 20 }}>
        <div style={{ width: 258, display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", gap: 12 }}>
          <img style={{ height: 90, width: 90, position: "relative", borderRadius: 10, objectFit: "cover", minHeight: 90 }} loading="lazy" alt="" src={item.image} />
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", padding: "1px 0px 0px" }}>
            <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", gap: 12 }}>
              <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", gap: 4 }}>
                <div style={{ position: "relative", lineHeight: "150%", fontWeight: 600 }}>{item.name}</div>
                <div style={{ position: "relative", lineHeight: "150%", display: "inline-block", minWidth: 114 }}>Rs. {item.buyPrice}/buy</div>
              </div>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", gap: 7, color: "#ff0049" }}>
                <div style={{ position: "relative", lineHeight: "150%", fontWeight: 600, display: "inline-block", minWidth: 31 }} onClick={()=>{handleSubmitCart(item._id,"For Buy")}}>Delete</div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", padding: "8px 0px 0px" }}>
                  <img style={{ width: 10, height: 10, position: "relative", overflow: "hidden", flexShrink: 0, objectFit: "contain" }} alt="" src={`./public/arrow-${index + 1}@2x.png`} />
                </div>
              </div>
            </div>
          </div>
        </div>
        :
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", padding: "33px 0px 0px" }}>
          <img style={{ width: 24, height: 24, position: "relative", overflow: "hidden", flexShrink: 0 }} alt="" src={`./public/bin-1-${index}@2.svg`} />
        </div>
      </div>
      :
      <></>
    ))}
  </div>
  <div style={{ alignSelf: "stretch", height: 1, position: "relative", borderTop: "1px solid #e7e7e7", boxSizing: "border-box" }} />
  <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", gap: 16, color: "rgba(0, 0, 0, 0.7)" }}>
    <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", gap: 20 }}>
      <div style={{ position: "relative", lineHeight: "150%", display: "inline-block", minWidth: 66 }}>Subtotal</div>
      <div style={{ position: "relative", lineHeight: "150%", display: "inline-block", minWidth: 91 }}>Rs. {totalSumPrice}</div>
    </div>
    <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", gap: 20 }}>
      <div style={{ position: "relative", lineHeight: "150%", display: "inline-block", minWidth: 68 }}>Shipping</div>
      <div style={{ position: "relative", lineHeight: "150%", display: "inline-block", minWidth: 75 }}>Rs. {shippingMethod == 'Urgent' ? "2000" : '0'}</div>
    </div>
    <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", gap: 20 }}>
      <div style={{ position: "relative", lineHeight: "150%", display: "inline-block", minWidth: 102 }}>16% Tax (GST)</div>
      <div style={{ position: "relative", lineHeight: "150%", display: "inline-block", minWidth: 75 }}>Rs. {0}</div>
    </div>
    <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", gap: 20, fontSize: 28, color: "#000" }}>
      <h2 style={{ margin: 0, position: "relative", fontSize: "inherit", lineHeight: "150%", fontWeight: 600, fontFamily: "inherit", display: "inline-block", minWidth: 66 }}>Total</h2>
      <div style={{ position: "relative", lineHeight: "150%", fontWeight: 600 }}>Rs. { shippingMethod== "Urgent" ? totalSumPrice + 2000 : totalSumPrice}</div>
    </div>
  </div>
</div>



          </div>
        </section>
        <footer
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            maxWidth: "100%",
            textAlign: "left",
            fontSize: 24,
            color: "#fff",
            fontFamily: '"Plus Jakarta Sans"',
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              backgroundColor: "#141055",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "80px 100px",
              boxSizing: "border-box",
              gap: 93,
              maxWidth: "100%",
              zIndex: 1,
            }}
          >
            <div
              style={{
                height: 450,
                width: 1380,
                position: "relative",
                backgroundColor: "#141055",
                display: "none",
                maxWidth: "100%",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: 56,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: 16,
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    position: "relative",
                    fontSize: "inherit",
                    lineHeight: "130%",
                    fontWeight: 600,
                    fontFamily: "inherit",
                    display: "inline-block",
                    minWidth: 81,
                    zIndex: 2,
                  }}
                >
                  Find us
                </h3>
                <div
                  style={{
                    position: "relative",
                    fontSize: 16,
                    lineHeight: "175%",
                    color: "rgba(255, 255, 255, 0.7)",
                    zIndex: 2,
                  }}
                >
                  <p style={{ margin: 0 }}>398-A Shershah Colony</p>
                  <p style={{ margin: 0 }}>Link Raiwind Road</p>
                  <p style={{ margin: 0 }}>Lahore, Pakistan</p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: 16,
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    position: "relative",
                    fontSize: "inherit",
                    lineHeight: "130%",
                    fontWeight: 600,
                    fontFamily: "inherit",
                    display: "inline-block",
                    minWidth: 127,
                    zIndex: 2,
                  }}
                >
                  Contact us
                </h3>
                <div
                  style={{
                    position: "relative",
                    fontSize: 16,
                    lineHeight: "175%",
                    color: "rgba(255, 255, 255, 0.7)",
                    zIndex: 2,
                  }}
                >
                  <p style={{ margin: 0 }}>03014717085</p>
                  <p style={{ margin: 0 }}>sales@occasionstyle.com</p>
                </div>
              </div>
            </div>
            <div
              style={{
                width: 227,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0px 20px 0px 0px",
                boxSizing: "border-box",
                gap: 16,
              }}
            >
              <h3
                style={{
                  margin: 0,
                  position: "relative",
                  fontSize: "inherit",
                  lineHeight: "130%",
                  fontWeight: 600,
                  fontFamily: "inherit",
                  display: "inline-block",
                  minWidth: 114,
                  zIndex: 2,
                }}
              >
                Company
              </h3>
              <div
                style={{
                  height: 192,
                  position: "relative",
                  fontSize: 16,
                  lineHeight: "200%",
                  color: "rgba(255, 255, 255, 0.7)",
                  display: "inline-block",
                  zIndex: 2,
                }}
              >
                <p style={{ margin: 0 }}>About Us Contact Us Privacy Policy</p>
                <p style={{ margin: 0 }}>Terms &amp; Conditions</p>
                <p style={{ margin: 0 }}>Return &amp; Refund Policy</p>
                <p style={{ margin: 0 }}>Shipping &amp; Delivery Policy</p>
              </div>
            </div>
            <div
              style={{
                width: 227,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0px 20px 0px 0px",
                boxSizing: "border-box",
                gap: 16,
              }}
            >
              <h3
                style={{
                  margin: 0,
                  position: "relative",
                  fontSize: "inherit",
                  lineHeight: "130%",
                  fontWeight: 600,
                  fontFamily: "inherit",
                  zIndex: 2,
                }}
              >
                Our products
              </h3>
              <div
                style={{
                  position: "relative",
                  fontSize: 16,
                  lineHeight: "200%",
                  color: "rgba(255, 255, 255, 0.7)",
                  zIndex: 2,
                }}
              >
                <p style={{ margin: 0 }}>Women’s Lehnga</p>
                <p style={{ margin: 0 }}>Women’s Maxi</p>
                <p style={{ margin: 0 }}>Women’s Traditional Dress</p>
                <p style={{ margin: 0 }}>Men’s Sherwani</p>
                <p style={{ margin: 0 }}>Men’s Three-Piece</p>
                <p style={{ margin: 0 }}>Men’s Kurta Pajama</p>
                <p style={{ margin: 0 }}>Men’s Shalwar Qameez</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: 16,
              }}
            >
              <h3
                style={{
                  margin: 0,
                  position: "relative",
                  fontSize: "inherit",
                  lineHeight: "130%",
                  fontWeight: 600,
                  fontFamily: "inherit",
                  zIndex: 2,
                }}
              >
                Social Media
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: 10,
                }}
              >
                <img
                  style={{
                    height: 30,
                    width: 30,
                    position: "relative",
                    overflow: "hidden",
                    flexShrink: 0,
                    minHeight: 30,
                    zIndex: 2,
                  }}
                  loading="lazy"
                  alt
                  src="./public/frame2.svg"
                />
                <img
                  style={{
                    height: 30,
                    width: 30,
                    position: "relative",
                    overflow: "hidden",
                    flexShrink: 0,
                    minHeight: 30,
                    zIndex: 2,
                  }}
                  alt
                  src="./public/frame-12.svg"
                />
              </div>
            </div>
          </div>
          <div
            style={{
              alignSelf: "stretch",
              backgroundColor: "#fc0149",
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "24px 100px 23px",
              boxSizing: "border-box",
              maxWidth: "100%",
              zIndex: 2,
              fontSize: 14,
            }}
          >
            <div
              style={{
                height: 68,
                width: 1380,
                position: "relative",
                backgroundColor: "#fc0149",
                display: "none",
                maxWidth: "100%",
              }}
            />
            <div
              style={{ position: "relative", lineHeight: "150%", zIndex: 1 }}
            >
              Copyrights © 2024 Occasion Style. All rights have been reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
export default Checkout;
