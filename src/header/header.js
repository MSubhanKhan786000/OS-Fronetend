import React, { useState, useEffect } from 'react';
import './header.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { LuLogOut } from "react-icons/lu";
import { IoMdArrowDropdown } from 'react-icons/io';
import { BsCart } from 'react-icons/bs';
import { IoNavigateSharp, IoSearchOutline } from 'react-icons/io5';
import { IoPersonSharp } from 'react-icons/io5';
import logo from '../assets/logo.png';
import Modal from '../Modal/modal';
import axios from 'axios';
import { IoTrashOutline } from 'react-icons/io5';

import ResponsiveMenu from '../component/ResponsiveMenu';
import { RxCross1 } from 'react-icons/rx';


function Header() {
  const [hovered, setHovered] = useState(false);
  const [userName, setUserName] = useState('');
  const location = useLocation();
  const navigate = useNavigate()
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [typesForMen] = useState(['Sherwani', 'Three piece', 'Waist cot']);
  const [typesForWomen] = useState(['Engagement', 'Barat', 'Mehndi', 'Nikkah', 'walima', 'Lehnga Choli', 'Shirt with sharara', 'Shirt with Lehnga', 'Saris', 'Gowns']);
  const [menuData, setMenuData] = useState([]);
  const [logindata, setlogindata] = useState([]);
  const [callbacks, setCallbacks] = useState([]);

  const [Cartdata, setCartData] = useState([]);
  console.log('====================================');
  console.log("This is Card Data", Cartdata);
  console.log('====================================');
  const [totalRentPrice, settotalRentPrice] = useState([]);
  const [totalBuyPrice, settotalBuyPrice] = useState([]);
  const [totalSumPrice, settotalSumPrice] = useState([]);
  console.log('====================================');
  console.log("This is totalsum Price", totalSumPrice);
  console.log('====================================');
  const [show, setShow] = useState(false);
  const [showDiv, setShowDiv] = useState(false);

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 500);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 500);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  useEffect(() => {
    fetchMenu();
    fetchloginUser();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await axios.get('http://localhost:5000/getMenu');
      setMenuData(response.data);
      sortCategory(response.data);
      setCallbacks(response.data);
      console.log("callbacks are--->", response.data);
      console.log("data is Menu fetched--->", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const fetchloginUser = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/user/${userId}`);
      setlogindata(response.data);
      console.log("data login ]]]]]]]]]]--->", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const sortCategory = (data) => {
    console.log("==================>", data.data);

    data.data.forEach((item) => {
      if (item.category === 'Men') {
        if (!typesForMen.some(type => type === item.name)) {
          typesForMen.push(item.name);
        }
      } else if (item.category === 'Women') {
        if (!typesForWomen.some(type => type === item.name)) {
          typesForWomen.push(item.name);
        }
      }
    });

  }

  const openSearch = () => {
    setSearchOpen(true);
  };

  const closeSearch = () => {
    setSearchOpen(false);
  };

  const submitandnavigate = () => {
    navigate("/login-page")
  }
  const About = () => {
    navigate("/About")
  }

  const card = () => {
    navigate("/card")
  }
  const card2 = () => {
    navigate("/AddCartItems")
  }

  const submitearn = () => {
    navigate("/earn-with-us")
  }
  useEffect(() => {
    // Load user name from localStorage when component mounts
    const storedUserName = localStorage.getItem('location.state');
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, [location.state]);

  const clearUserData = () => {
    const keyToRemove = userName; // Change the key name if needed
    localStorage.removeItem(keyToRemove);
    console.log('data removed', keyToRemove);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/ListofProducts?search=${searchValue}`);
    window.location.reload();

  };

  const handleLogout = () => {

    clearUserData();
    window.location.href = '/';
  };

  const handleLogoutbutton = () => {
    // Clear user data from local storage
    localStorage.removeItem('userId');
    // Redirect the user to the homepage or login page
    window.location.href = '/';
  };
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };
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
      <style>{`
        .overlay {
          height: 100%;
          width: 100%;
          display: ${isSearchOpen ? 'none' : 'none'};
          position: fixed;
          z-index: 3;
          top: 0;
          left: 0;
          background-color: rgba(0,0,0, 0.9);
          float:clear;
        }

        .overlay-content {
          position: relative;
          top: 46%;
          width: 80%;
          text-align: center;
          margin-top: 30px;
          margin: auto;
        }

        .overlay .closebtn {
          position: absolute;
          top: 20px;
          right: 45px;
          font-size: 60px;
          cursor: pointer;
          color: white;
        }

        .overlay .closebtn:hover {
          color: #ccc;
        }

        .overlay input[type=text] {
          padding: 15px;
          font-size: 17px;
          border: none;
          float: left;
          width: 200%;
          background: white;
        }

        .overlay input[type=text]:hover {
          background: #f1f1f1;
        }

        .overlay button {
          float: left;
          width: 100%;
          padding: 15px;
          background: #ddd;
          font-size: 17px;
          border: none;
          cursor: pointer;
        }
        /* Add this CSS to your existing styles */

        .navbar__dropdown-content {
          display: none;
          position: absolute;
          background-color: #f9f9f9;
          min-width: 160px;
          box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2); /* Add shadow */
          z-index: 1;
        }
        

        
        .overlay button:hover {
          background: #bbb;
        }
        @media only screen and (max-width: 500px) {
          .responsive-container {
            display: block;
          }
        }
        @media only screen and (min-width: 501px) {
          .responsive-container {
            display: none;
          }
        }
      `}</style>

      {!isSmallScreen && (
        <nav className="navbar " >
          {/* {logindata && Object.keys(logindata).length > 0 ? (
          <div style={{textAlign:'center',textDecoration:"uppercase"}}>{logindata.fname}       
            


        </div>
        ) : (
          <></>
          
        )} */}
          <div className="navbar__container">
            <div className="navbar__header"></div>
            <ul className="navbar__menu">
              <img src={logo} className="logoimg" alt="Logo" />
              <li className="navbar__item">
                <a onClick={() => { navigate("/") }}>Home</a>
              </li>
              <li className="navbar__item navbar__dropdown">
                <a href="?category=Men" onClick={() => { navigate("/ListofProducts") }}>
                  Mens Collection<IoMdArrowDropdown />
                </a>
                <div className="navbar__dropdown-content">
                  {
                    typesForMen.map((type, index) => {
                      return (
                        <p key={index}>
                          <a href={`?type=${type}`} onClick={() => { navigate("/ListofProducts") }}>
                            {type}
                          </a>
                        </p>
                      );
                    })
                  }
                </div>
              </li>

              <li className="navbar__item navbar__dropdown">
                <a href="?category=Women" onClick={() => { navigate("/ListofProducts") }}>
                  Women's Collection<IoMdArrowDropdown />
                </a>
                <div className="navbar__dropdown-content">
                  {
                    typesForWomen.map((type, index) => {
                      return (
                        <p key={index}>
                          <a href={`?type=${type}`} onClick={() => { navigate("/ListofProducts") }}>
                            {type}
                          </a>
                        </p>
                      );
                    })
                  }
                  {/* <p><a href="?type=Barat" onClick={()=>{navigate("/productsType")}}>Barat</a></p>
                <p><a href="?type=Mehndi" onClick={()=>{navigate("/productsType")}}>Mehndi</a></p>
                <p><a href="?type=Nikkah" onClick={()=>{navigate("/productsType")}}>Nikkah</a></p>
                <p><a href="?type=walima" onClick={()=>{navigate("/productsType")}}>walima</a></p>
                <p><a href="?type=Lehnga Choli" onClick={()=>{navigate("/productsType")}}>Lehnga Choli</a></p>
                <p><a href="?type=Shirt with sharara Garara" onClick={()=>{navigate("/productsType")}}>Shirt with sharara Garara</a></p>
                <p><a href="?type=Shirt with Lehnga" onClick={()=>{navigate("/productsType")}}>Shirt with Lehnga</a></p>
                <p><a href="?type=Saris" onClick={()=>{navigate("/productsType")}}>Saris</a></p>
                <p><a href="?type=Gowns" onClick={()=>{navigate("/productsType")}}>Gowns</a></p> */}
                </div>
              </li>
              {/* <li className="navbar__item" onClick={()=>{navigate("/allProduct")}}>  
              <a href={`?sort=no`}>All Product</a>
            </li> */}

              <li className="navbar__item" onClick={() => { navigate("/ListofProducts") }}>
                <a href={`?sort=no`}>All Product</a>
              </li>

              <li className="navbar__item" onClick={About}>
                <a >About Us</a>
              </li>

              <li className="navbar__item">
                <button className="newbutton" onClick={submitearn}>Earn With Us</button>
              </li>

              <div className="newnavbar">
                <li className="navitem1">
                  <a onClick={openSearch}>
                    <IoSearchOutline />
                  </a>
                </li>
                <li className="navitem2">
                  <a >
                    <BsCart onClick={() => setShowDiv(!showDiv)} />
                  </a>
                </li>
                <li className="navitem3">
                  {logindata && Object.keys(logindata).length > 0 ? (
                    <div>

                      <a href="/#logout" onClick={handleLogoutbutton}><LuLogOut />

                      </a>

                    </div>
                  ) : (
                    <div onClick={submitandnavigate}>
                      <IoPersonSharp />
                    </div>


                  )}
                </li>
              </div>
            </ul>
          </div>
        </nav>
      )}
      <div className={`responsive-container ${isSmallScreen ? 'small-screen' : ''}`}>
        <div style={{ width: '100%', height: "5vh", backgroundColor: "white", position: 'relative', zIndex: 3 }}>
          {isSmallScreen && (
            show ? (
              <ResponsiveMenu show={show} setShow={setShow} />
            ) : (
              <button onClick={() => setShow(!show)} style={{ margin: 10, top: 0, left: 0 }}>Show icons</button>
            )
          )}
        </div>
      </div>

      <div id="myOverlay" className="overlay">
        <span className="closebtn" onClick={closeSearch} title="Close Overlay">×</span>
        <div className="overlay-content">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search.." name="search"
              value={searchValue}
              onChange={handleInputChange} />
            <button type="submit" >Search</button>
          </form>
        </div>
      </div>


      {/* card */}
      <div style={{ position: "fixed", top: 0, right: 0, width: isSmallScreen ? "100%" : "32%", height: showDiv ? "100vh" : "0", backgroundColor: "white", zIndex: 2, border: `0px solid red`, overflow: "hidden", transition: "border height 0.5s", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)", overflowY: "auto" }}>
        <p style={{ paddingLeft: "40px", fontSize: '20px', fontWeight: "bold", color: "black", textTransform: 'uppercase', }}>Cart Item</p>

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
        {/* </div> */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          {/* <div><h2 style={{color:"#fc0149",margin:"5vh"}}>Rental Product</h2></div> */}
          {Cartdata.map((item, index) => (
            item.rentStatus == "InCard" ?
              <div key={index} style={{ alignSelf: "stretch", borderRadius: 2, backgroundColor: "rgba(0, 0, 0, 0.03)", display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", padding: 12, position: "relative", gap: 12, margin: "10px", marginBottom: "0px", marginTop: "2vh" }}>
                <img style={{ height: 90, width: 90, position: "relative", borderRadius: 10, objectFit: "cover", minHeight: 90 }} loading="lazy" alt="" src={item.image} />
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
                <IoTrashOutline size={25} style={{ color: "red", height: 24, width: 24, position: "absolute", margin: "0 !important", top: "calc(50% - 12px)", right: 12, overflow: "hidden", flexShrink: 0 }} onClick={() => { handleSubmitCart(item._id, "For Rent") }} />
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
                    <div style={{ position: "relative", lineHeight: "150%", fontWeight: 600, color: 'black' }}>{item.name}</div>
                    <div style={{ position: "relative", lineHeight: "150%", display: "inline-block", minWidth: 114, color: 'gray' }}>Rs. {item.buyPrice}/buy</div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", gap: 7, color: "#ff0049" }}>
                    <div style={{ position: "relative", lineHeight: "150%", fontWeight: 600, display: "inline-block", minWidth: 31 }} onClick={() => { handleSubmitCart(item._id, "For Buy") }}>Edit</div>
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
            <button style={{ cursor: "pointer", border: "none", padding: "12px 43px 14px 44px", backgroundColor: "#fc0149", borderRadius: 3, display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start" }}>
              <div style={{ height: 50, width: 164, position: "relative", borderRadius: 3, backgroundColor: "#fc0149", display: "none" }} />
              <div style={{ position: "relative", fontSize: 16, lineHeight: "150%", fontWeight: 600, fontFamily: '"Plus Jakarta Sans"', color: "#fff", textAlign: "left", display: "inline-block", minWidth: 77, zIndex: 1 }} onClick={() => { navigate("/Checkout") }}>Checkout</div>
            </button>
          </div>
        </div>
      </div>


      {/* sideSearch */}
      <div style={{ position: "fixed", top: 0, right: 0, width: isSmallScreen ? "100%" : "32%", height: isSearchOpen ? "100vh" : "0", backgroundColor: "white", zIndex: 2, border: `0px solid red`, overflow: "hidden", transition: "border height 0.5s", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)", overflowY: "auto" }}>
        <p style={{ paddingLeft: "40px", fontSize: '20px', fontWeight: "bold", color: "black", textTransform: 'uppercase', }}>Search Our Site</p>
        <div style={{ borderRadius: "50%", backgroundColor: "black" }}>
          <button onClick={() => setSearchOpen(!isSearchOpen)} style={{ position: "absolute", top: 10, right: 10, border: "none", background: "transparent", color: "white", cursor: "pointer", fontSize: 18, marginLeft: 20, borderRadius: "50%", backgroundColor: "black" }}>x</button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search.." name="search"
              value={searchValue}
              onChange={handleInputChange}
              style={{ width: "350px" }}
            />
            <button type="submit" style={{ width: "100px" }}>Search</button>
          </form>
        </div>
      </div>

    </>

  );
}

export default Header;
