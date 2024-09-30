import Header from "../header/header";
import React, { useEffect, useState } from "react";
import Loader from "../assets/loader.json";
import Lottie from "react-lottie";
import "./card.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../footer/footer";
import loaderAnimation from "../assets/loader.json";
import { withRouter } from "react-router-dom";
import { IoNavigateSharp, IoSearchOutline } from "react-icons/io5";
import { IoTrashOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const Card = ({
  image,
  name,
  rentPrice,
  buyPrice,
  description,
  status,
  userId,
  productId,
  rentStatus,
  buyStatus,
  onButtonClick,
  showDiv,
  setShowDiv,
}) => {
  const navigate = useNavigate();

  const handleClick = (
    e,
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
  ) => {
    e.preventDefault();

    // Save the data to pass in the state object
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
      selfStatus,
    };

    // Navigate to the "/SingleProducts" screen and pass data in state
    window.history.pushState(data, "", "/SingleProducts");

    // Trigger a popstate event to ensure React Router responds to the state change
    const popStateEvent = new PopStateEvent("popstate", { state: data });
    window.dispatchEvent(popStateEvent);
  };

  const [loading, setLoading] = useState(true);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Loader,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // showing the loding time for the 3000
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  });

  return (
    <div className="card" style={{ width: "190px", height: "320px" }}>
      {loading ? (
        <Lottie
          options={defaultOptions}
          height={40}
          width={40}
          style={{
            marginTop: 140,
          }}
        />
      ) : (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <img
              style={{
                padding: "1px",
                borderRadius: "10px",
                width: "185px",
                height: "185px",
              }}
              src={image}
              alt="Card"
              className="card-image"
            />
          </div>
          <div className="card-content">
            <h3 className="card-title" style={{ color: "black" }}>
              {name}
            </h3>
            <h4
              className="card-title"
              style={{ fontWeight: "lighter", paddingTop: "10px" }}
            >
              Rs. {rentPrice}/day or
            </h4>
            <h4
              className="card-title"
              style={{
                fontSize: "15px",
                fontWeight: "lighter",
                paddingBottom: "10px",
              }}
            >
              Rs. {buyPrice}
            </h4>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              {status === "Buy" && (
                <>
                  <button
                    disabled={true}
                    style={{
                      width: "100px",
                      height: "40px",
                      margin: "5px",
                      backgroundColor: "#999999",
                      cursor: "default",
                    }}
                    className="card-button"
                  >
                    Rent it
                  </button>
                  {buyStatus !== "InCard" ? (
                    <button
                      style={{ width: "100px", height: "40px", margin: "5px" }}
                      className="card-button2"
                      onClick={e => {
                        handleClick(
                          e,
                          name,
                          image,
                          rentPrice,
                          buyPrice,
                          description,
                          status,
                          userId,
                          productId,
                          { kind: "Buy" },
                          { selfStatus: "Buy" }
                        );
                      }}
                    >
                      Buy it
                    </button>
                  ) : (
                    <button
                      style={{
                        width: "100px",
                        height: "40px",
                        margin: "5px",
                        border: "1px solid #82b53f",
                        color: "#82b53f",
                      }}
                      className="card-button2"
                      onMouseEnter={e => {
                        e.target.style.backgroundColor = "#82b53f";
                        e.target.style.color = "white";
                      }}
                      onMouseLeave={e => {
                        e.target.style.backgroundColor = "transparent";
                        e.target.style.color = "#82b53f";
                      }}
                      onClick={() => setShowDiv(!showDiv)}
                      //onClick={(e) => {navigate("/card")}}
                    >
                      In Cart
                    </button>
                  )}
                </>
              )}
              {status === "Rent" && (
                <>
                  {rentStatus !== "InCard" ? (
                    <button
                      style={{ width: "100px", height: "40px", margin: "5px" }}
                      className="card-button"
                      onClick={e => {
                        handleClick(
                          e,
                          name,
                          image,
                          rentPrice,
                          buyPrice,
                          description,
                          status,
                          userId,
                          productId,
                          { kind: "Rent" },
                          { selfStatus: "Rent" }
                        );
                      }}
                    >
                      Rent it
                    </button>
                  ) : (
                    <button
                      style={{
                        width: "100px",
                        height: "40px",
                        margin: "5px",
                        border: "1px solid #82b53f",
                        backgroundColor: "#82b53f",
                        color: "white",
                      }}
                      className="card-button2"
                      onMouseEnter={e => {
                        e.target.style.backgroundColor = "white";
                        e.target.style.color = "#82b53f";
                      }}
                      onMouseLeave={e => {
                        e.target.style.backgroundColor = "#82b53f";
                        e.target.style.color = "white";
                      }}
                      onClick={() => setShowDiv(!showDiv)}
                      //onClick={(e) => {navigate("/card")}}
                    >
                      In Cart
                    </button>
                  )}

                  <button
                    disabled={true}
                    style={{
                      width: "100px",
                      height: "40px",
                      margin: "5px",
                      border: "1px solid #999999",
                      color: "#999999",
                      cursor: "default",
                    }}
                    onMouseEnter={e =>
                      (e.target.style.backgroundColor = "white")
                    }
                    onMouseLeave={e =>
                      (e.target.style.backgroundColor = "transparent")
                    }
                    className="card-button2"
                  >
                    Buy it
                  </button>
                </>
              )}
              {status === "Both" && (
                <>
                  {rentStatus !== "InCard" ? (
                    <button
                      style={{ width: "100px", height: "40px", margin: "5px" }}
                      className="card-button"
                      onClick={e => {
                        handleClick(
                          e,
                          name,
                          image,
                          rentPrice,
                          buyPrice,
                          description,
                          status,
                          userId,
                          productId,
                          { kind: "Rent" },
                          { selfStatus: "Rent" }
                        );
                      }}
                    >
                      Rent it
                    </button>
                  ) : (
                    <button
                      style={{
                        width: "100px",
                        height: "40px",
                        margin: "5px",
                        border: "1px solid #82b53f",
                        backgroundColor: "#82b53f",
                        color: "white",
                      }}
                      className="card-button2"
                      onMouseEnter={e => {
                        e.target.style.backgroundColor = "white";
                        e.target.style.color = "#82b53f";
                      }}
                      onMouseLeave={e => {
                        e.target.style.backgroundColor = "#82b53f";
                        e.target.style.color = "white";
                      }}
                      onClick={() => setShowDiv(!showDiv)}

                      //onClick={(e) => {navigate("/card")}}
                    >
                      In Cart
                    </button>
                  )}

                  {buyStatus !== "InCard" ? (
                    <button
                      style={{ width: "100px", height: "40px", margin: "5px" }}
                      className="card-button2"
                      onClick={e => {
                        handleClick(
                          e,
                          name,
                          image,
                          rentPrice,
                          buyPrice,
                          description,
                          status,
                          userId,
                          productId,
                          { kind: "Buy" },
                          { selfStatus: "Buy" }
                        );
                      }}
                    >
                      Buy it
                    </button>
                  ) : (
                    <button
                      style={{
                        width: "100px",
                        height: "40px",
                        margin: "5px",
                        border: "1px solid #82b53f",
                        color: "#82b53f",
                      }}
                      className="card-button2"
                      onMouseEnter={e => {
                        e.target.style.backgroundColor = "#82b53f";
                        e.target.style.color = "white";
                      }}
                      onMouseLeave={e => {
                        e.target.style.backgroundColor = "transparent";
                        e.target.style.color = "#82b53f";
                      }}
                      onClick={() => setShowDiv(!showDiv)}
                      //onClick={(e) => {navigate("/card")}}
                    >
                      In Cart
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ListofProducts = () => {
  const [typesForMen] = useState(["Sherwani", "Three piece", "Waist cot"]);
  const [typesForWomen] = useState([
    "Engagement",
    "Barat",
    "Mehndi",
    "Nikkah",
    "walima",
    "Lehnga Choli",
    "Shirt with sharara Garara",
    "Shirt with Lehnga",
    "Saris",
    "Gowns",
  ]);
  const [searchValue, setSearchValue] = useState("");

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 500);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 500);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    fetchMenu();
  }, []);

  const handleInputChange = event => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = event => {
    event.preventDefault();
    navigate(`/ListofProducts?search=${searchValue}`);
    window.location.reload();
  };

  const fetchMenu = async () => {
    try {
      const response = await axios.get("http://localhost:5000/getMenu");
      sortCategory(response.data);
      console.log("callbacks are--->", response.data);
      console.log("data is Menu fetched--->", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const sortCategory = data => {
    console.log("==================>", data.data);

    data.data.forEach(item => {
      if (item.category === "Men") {
        if (!typesForMen.some(type => type === item.name)) {
          typesForMen.push(item.name);
        }
      } else if (item.category === "Women") {
        if (!typesForWomen.some(type => type === item.name)) {
          typesForWomen.push(item.name);
        }
      }
    });
  };
  const [showDiv, setShowDiv] = useState(false);

  const navigate = useNavigate();
  const [showContent, setShowContent] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [color, setColor] = React.useState("#ffffff");
  let [loading, setLoading] = React.useState(true);

  const [data, setData] = useState([]);
  const [callbacks, setCallbacks] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [itemsPerPage] = useState(16); // Number of items per page from the backend set to 8

  const itemsEachPage = 16; // Number of items to display per page
  //pagination
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const [Cartdata, setCartData] = useState([]);
  const [totalRentPrice, settotalRentPrice] = useState([]);
  const [totalBuyPrice, settotalBuyPrice] = useState([]);
  const [totalSumPrice, settotalSumPrice] = useState([]);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sort = queryParams.get("sort");

  const category = queryParams.get("category");
  const type = queryParams.get("type");
  const search = queryParams.get("search");

  console.log("category ------------>", category);
  console.log("type ------------>", type);
  console.log("sort ------------>", sort);
  console.log("search ------------>", search);
  const [selectedOption, setSelectedOption] = useState(sort);

  useEffect(() => {
    fetchDataCart();
    TotalRentPrice();
    TotalBuyPrice();
    TotalSumPrice();
  }, []);

  const fetchDataCart = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/getCollectionAddToCart/${userId}`
      );
      setCartData(response.data.data);
      console.log("callbacks are--->", response.data);
      console.log("data is fetched--->", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const TotalRentPrice = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/collectionsAddToCart/rent/bill/${userId}`
      );
      settotalRentPrice(response.data);
      console.log("totalRentPrice???????????????????", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const TotalBuyPrice = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/collectionsAddToCart/buy/bill/${userId}`
      );
      settotalBuyPrice(response.data);
      console.log("BUY???????????????????", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const TotalSumPrice = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/collectionsAddToCart/rentplusbuy/bill/${userId}`
      );
      settotalSumPrice(response.data);
      console.log("Sum ???????????????????", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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
          const response = await axios.put(
            `http://localhost:5000/collectionsAddToCart/rent/OutOfCard/${productId}`,
            "null"
          );
          if (response.status === 201) {
            console.log("Remove to Cart Item successfully");
            alert("Remove to Cart Item successfully");
          }

          const response2 = await axios.delete(
            `http://localhost:5000/collectionsAddToCart/rentonly/deleteItemfromCart/${productId}`
          );
          if (response2.status === 200) {
            console.log("Item deleted successfully");
          }

          window.location.reload();
        } catch (error) {
          console.error("Error:", error);
          window.location.reload();
        }
      }

      if (checkStatus === "For Buy") {
        const response = await axios.put(
          `http://localhost:5000/collectionsAddToCart/buy/OutOfCard/${productId}`,
          "null",
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        const response2 = await axios.delete(
          `http://localhost:5000/collectionsAddToCart/buyonly/deleteItemfromCart/${productId}`
        );
        if (response2.status === 200) {
          console.log("Item deleted successfully");
        }

        if (response.status === 201) {
          window.location.reload();
          console.log("Remove to Cart Item successfully");
          alert("Remove to Cart Item successfully");
        } else {
          window.location.reload();
          console.error("Failed to submit buy form");
        }
      }
      //   console.log("the post apis is->",response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleOptionChange = async event => {
    const option = event.target.value;
    setSelectedOption(option);
    if (option === "rentLowToHigh") {
      navigate(`/ListofProducts?sort=${option}`);
      window.location.reload();
    }
    if (option === "rentHighToLow") {
      navigate(`/ListofProducts?sort=${option}`);
      window.location.reload();
    }
    if (option === "buyLowToHigh") {
      navigate(`/ListofProducts?sort=${option}`);
      window.location.reload();
    }
    if (option === "buyHighToLow") {
      navigate(`/ListofProducts?sort=${option}`);
      window.location.reload();
    }
  };

  const handleSearchInputChange = event => {
    setSearchValue(event.target.value);
  };

  const indexOfLastItem = currentPageNumber * itemsEachPage;
  const indexOfFirstItem = indexOfLastItem - itemsEachPage;
  console.log("indexOfFirstItem >>>>>>>>>>>>>>>>>>>>>> ", indexOfFirstItem);
  console.log("indexOfLastItem >>>>>>>>>>>>>>>>>>>>>> ", indexOfLastItem);

  const currentItems = Array.isArray(data.data)
    ? data.data.slice(indexOfFirstItem, indexOfLastItem)
    : [];

  const userId = localStorage.getItem("userId");

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
      const cards = document.querySelectorAll(".card");
      cards.forEach(card => {
        if (isInViewport(card)) {
          card.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
      const cards = document.querySelectorAll(".card");
      cards.forEach(card => {
        if (isInViewport(card)) {
          card.classList.add("show");
        }
      });
      setShowContent(true);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isInViewport = element => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let response;

      //at end convert into switch

      if (sort === "no") {
        response = await axios.get(`http://localhost:5000/getCollection`);
      } else if (sort === "rentLowToHigh") {
        response = await axios.get(
          `http://localhost:5000/collections/filter/rent/lowtohigh`
        );
      } else if (sort === "rentHighToLow") {
        response = await axios.get(
          `http://localhost:5000/collections/filter/rent/highttolow`
        );
      } else if (sort === "buyLowToHigh") {
        response = await axios.get(
          `http://localhost:5000/collections/filter/buy/lowtohigh`
        );
      } else if (category == "Men" || category == "Women") {
        console.log("////////////////////find Category============", category);
        response = await axios.get(
          `http://localhost:5000/getCollection/cart/category/${category}`
        );
        console.log(
          "////////////////////find Category============responce",
          response
        );
      } else if (type) {
        response = await axios.get(
          `http://localhost:5000/getCollection/cart/type/${type}`
        );
      } else if (search) {
        response = await axios.get(
          `http://localhost:5000/getCollection/cart/search/${search}`
        );
      } else {
        response = await axios.get(
          `http://localhost:5000/collections/filter/buy/highttolow`
        );
      }

      setData(response.data);
      console.log("Data is fetched:", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Calculate total number of pages
  const totalNumberOfPages = data.data
    ? Math.ceil(data.data.length / itemsEachPage)
    : 0;

  // Calculate the index range of items to display for the current page
  const startItemIndex = (currentPageNumber - 1) * itemsEachPage;
  const endItemIndex = Math.min(
    startItemIndex + itemsEachPage,
    data.data?.length || 0
  );

  // Slice the current items to display only those for the current page
  const itemsToShow = data.data?.slice(startItemIndex, endItemIndex) || [];

  const handlePageChange = pageNumber => {
    setCurrentPageNumber(pageNumber);
  };

  const handleSubmit = async (
    e,
    name,
    image,
    rentPrice,
    buyPrice,
    description,
    status,
    userId,
    productId,
    kind,
    selfStatus
  ) => {
    e.preventDefault();
    if (userId == null) {
      navigate("/login-page");
    } else {
      console.log(
        "data === > ",
        productId,
        name,
        image,
        rentPrice,
        buyPrice,
        description,
        status,
        userId,
        kind.kind,
        selfStatus.selfStatus
      );
      try {
        const formDataToSend = new FormData();
        formDataToSend.append("name", name);
        formDataToSend.append("description", description);
        formDataToSend.append("buyPrice", buyPrice);
        formDataToSend.append("rentPrice", rentPrice);
        formDataToSend.append("status", status);
        formDataToSend.append("userId", userId);
        formDataToSend.append("image", image);
        console.log("formDataToSend === > ", formDataToSend);

        // Use Axios to send form data
        const response = await axios.post(
          `http://localhost:5000/collectionsAddToCart/${JSON.stringify([
            productId,
            userId,
            name,
            description,
            buyPrice,
            rentPrice,
            status,
            selfStatus.selfStatus,
          ])}`,
          "null",
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("the post apis is->", response.data);

        if (response.status === 201) {
          if (kind.kind == "Rent") {
            const response = await axios.put(
              `http://localhost:5000/collectionsAddToCart/rent/${productId}`,
              "null",
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            );
          }
          if (kind.kind == "Buy") {
            const response = await axios.put(
              `http://localhost:5000/collectionsAddToCart/buy/${productId}`,
              "null",
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            );
          }
          window.location.reload();
          console.log("Add to Cart Item successfully");
          alert("Add to Cart Item successfully");
        } else {
          console.error("Failed to submit form");
          alert("there is some error in sumbitting the form");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
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
        lineHeight: "normal",
        letterSpacing: "normal",
        textAlign: "left",
        fontSize: 14,
        color: "#fff",
        fontFamily: '"Plus Jakarta Sans"',
      }}
    >
      <main
        style={{
          alignSelf: "stretch",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          padding: "0px 0px 94px",
          boxSizing: "border-box",
          gap: 79,
          maxWidth: "100%",
          zIndex: 1,
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            height: 2236,
            position: "relative",
            backgroundColor: "#fff",
            display: "none",
          }}
        />
        <Header />
        <section
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "0px 20px",
            boxSizing: "border-box",
            maxWidth: "100%",
            textAlign: "left",
            fontSize: 40,
            color: "#666",
            fontFamily: '"Plus Jakarta Sans"',
          }}
        >
          <div
            style={{
              width: 1180,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "flex-start",
              gap: 40,
              maxWidth: "100%",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: 10,
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  borderRadius: 10,
                  backgroundColor: "#f4f2ff",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "30px 20px 30px 30px",
                  gap: 15,
                }}
              >
                <b
                  style={{
                    position: "relative",
                    lineHeight: "130%",
                    background: "#ff0049",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Dresses for Rent
                </b>
                <div
                  style={{
                    alignSelf: "stretch",
                    position: "relative",
                    fontSize: 16,
                    lineHeight: "150%",
                  }}
                >
                  <span>
                    Welcome to the ultimate destination for custom T-Shirts that
                    make a statement. Add some pizzazz to your wardrobe with
                    personalized T-Shirt designs that showcase your unique style
                    and personality.
                  </span>
                  <span style={{ fontWeight: 600, color: "#ff0049" }}>
                    See more
                  </span>
                </div>
              </div>
              {/* <div
                style={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: 14,
                  lineHeight: "150%",
                  zIndex: 1,
                }}
              >
                <span style={{ whiteSpace: "pre-wrap" }}>Home / Nikkah / </span>
                <span style={{ color: "#ff0049" }}>Women’s Collection</span>
              </div> */}
            </div>
            <div
              style={{
                margin: 0,
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0px 0px 24px",
                boxSizing: "border-box",
                gap: 20,
                maxWidth: "100%",
              }}
            >
              {!isSmallScreen && (
                <div
                  style={{
                    width: 280,
                    borderRadius: 10,
                    border: "1px solid #eee",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "10px 11px",
                    gap: 20,
                    zIndex: 1,
                  }}
                >
                  <div
                    style={{
                      alignSelf: "stretch",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      padding: "0px 0px 4px",
                    }}
                  >
                    <div
                      style={{
                        flex: 1,
                        borderRadius: 2,
                        backgroundColor: "#f7f7f7",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "10px 10px",
                        gap: 10,
                      }}
                    >
                      <input
                        style={{
                          width: "90%",
                          border: "none",
                          outline: "none",
                          fontFamily: '"Plus Jakarta Sans"',
                          fontSize: 14,
                          backgroundColor: "transparent",
                          height: "auto",
                          position: "relative",
                          lineHeight: "150%",
                          color: "#666",
                          textAlign: "left",
                          display: "inline-block",
                          padding: 0,
                        }}
                        placeholder="Search within this category"
                        type="text"
                        value={searchValue}
                        onChange={handleSearchInputChange}
                      />
                      <div
                        style={{
                          height: "auto",
                          width: 27,
                          position: "relative",
                        }}
                      >
                        <a onClick={handleSearchSubmit}>
                          <img
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: 27,
                              height: 17,
                              overflow: "hidden",
                            }}
                            alt
                            src="./public/search-1.svg"
                          />
                          <IoSearchOutline size="25" />
                        </a>
                        {/* <img style={{ position: "absolute", top: 0, left: 27, width: 0, height: 21, objectFit: "contain" }} alt src="./public/line.svg" /> */}
                      </div>
                      {/* <button onClick={handleSearchSubmit}>Search</button> */}
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      padding: "0px 0px 4px",
                    }}
                  >
                    <div
                      style={{
                        width: 251,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "0px 0px 0px 0px",
                        boxSizing: "border-box",
                        gap: 20,
                      }}
                    >
                      <div
                        style={{
                          alignSelf: "stretch",
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          gap: 24,
                        }}
                      >
                        <div
                          style={{
                            flex: 1,
                            position: "relative",
                            fontSize: 22,
                            lineHeight: "120%",
                            fontWeight: 600,
                            fontFamily: '"Plus Jakarta Sans"',
                            color: "#000",
                            textAlign: "left",
                          }}
                        >
                          Categories
                        </div>
                        <div
                          style={{ height: 2, width: 14, position: "relative" }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: 2,
                              left: 0,
                              borderRadius: 100,
                              backgroundColor: "#000",
                              width: 2,
                              height: 14,
                              // transform: "rotate(-90deg)",
                              // transformOrigin: "0 0",
                            }}
                          />
                          <div
                            style={{
                              position: "absolute",
                              top: "-5.8px",
                              left: "6.2px",
                              borderRadius: 100,
                              backgroundColor: "#000",
                              width: 2,
                              height: 14,
                              display: "none",
                            }}
                          />
                        </div>
                      </div>
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
                            position: "relative",
                            fontSize: 14,
                            lineHeight: "150%",
                            fontWeight: 600,
                            fontFamily: '"Plus Jakarta Sans"',
                            color: "#333",
                            textAlign: "left",
                            display: "inline-block",
                            minWidth: 44,
                          }}
                        >
                          Select
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            gap: 16,
                          }}
                        >
                          <div
                            style={{
                              width: 0,
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                            }}
                          >
                            <img
                              style={{
                                height: 50,
                                width: 0,
                                position: "relative",
                                objectFit: "contain",
                              }}
                              alt
                              src="./public/line-1.svg"
                            />
                            <img
                              style={{
                                height: 21,
                                width: 0,
                                position: "relative",
                                objectFit: "contain",
                              }}
                              alt
                              src="./public/line-2.svg"
                            />
                          </div>
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
                                position: "relative",
                                fontSize: 14,
                                lineHeight: "150%",
                                fontFamily: '"Plus Jakarta Sans"',
                                color: "#ff0049",
                                textAlign: "left",
                              }}
                            >
                              <a
                                href="?category=Men"
                                onClick={() => {
                                  navigate("/ListofProducts");
                                }}
                              >
                                Mens Collection
                              </a>
                            </div>
                            <div
                              style={{
                                position: "relative",
                                fontSize: 14,
                                lineHeight: "150%",
                                fontFamily: '"Plus Jakarta Sans"',
                                color: "#333",
                                textAlign: "left",
                                display: "inline-block",
                                minWidth: 111,
                              }}
                            >
                              <a
                                href="?category=Women"
                                onClick={() => {
                                  navigate("/ListofProducts");
                                }}
                              >
                                Women's Collection
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
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
                            position: "relative",
                            fontSize: 14,
                            lineHeight: "150%",
                            fontFamily: '"Plus Jakarta Sans"',
                            color: "#333",
                            textAlign: "left",
                            display: "inline-block",
                            minWidth: 87,
                          }}
                        >
                          {typesForMen.map((type, index) => {
                            return (
                              <p key={index}>
                                <a
                                  href={`?type=${type}`}
                                  style={{
                                    fontWeight: "lighter",
                                    color: "#333",
                                    fontFamily: "Plus Jakarta Sans",
                                    fontSize: 14,
                                  }}
                                  onClick={() => {
                                    navigate("/ListofProducts");
                                  }}
                                >
                                  {type}
                                </a>
                              </p>
                            );
                          })}
                        </div>

                        <div
                          style={{
                            position: "relative",
                            fontSize: 14,
                            lineHeight: "150%",
                            fontFamily: '"Plus Jakarta Sans"',
                            color: "#333",
                            textAlign: "left",
                            display: "inline-block",
                            minWidth: 49,
                          }}
                        >
                          {typesForWomen.map((type, index) => {
                            return (
                              <p key={index}>
                                <a
                                  href={`?type=${type}`}
                                  style={{
                                    fontWeight: "lighter",
                                    color: "#333",
                                    fontFamily: "Plus Jakarta Sans",
                                    fontSize: 14,
                                  }}
                                  onClick={() => {
                                    navigate("/ListofProducts");
                                  }}
                                >
                                  {type}
                                </a>
                              </p>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", padding: "0px 0px 3px" }}>
                  <div style={{ height: 1, flex: 1, position: "relative", borderTop: "1px solid #bbb", boxSizing: "border-box", opacity: "0.4" }} />
                </div>
                <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", padding: "0px 0px 4px" }}>
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", gap: 20 }}>
                    <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: 24 }}>
                      <div style={{ flex: 1, position: "relative", fontSize: 22, lineHeight: "120%", fontWeight: 600, fontFamily: '"Plus Jakarta Sans"', color: "#000", textAlign: "left" }}>Size</div>
                      <div style={{ height: 2, width: 14, position: "relative" }}>
                        <div style={{ position: "absolute", top: 2, left: 0, borderRadius: 100, backgroundColor: "#000", width: 2, height: 14, transform: "rotate(-90deg)", transformOrigin: "0 0" }} />
                        <div style={{ position: "absolute", top: "-5.8px", left: "6.2px", borderRadius: 100, backgroundColor: "#000", width: 2, height: 14, display: "none" }} />
                      </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", gap: 8 }}>
                      {[["XS", 18], ["S", 10], ["M", 12], ["L", 8], ["XL", 16]].map((size, index) => (
                        <div key={index} style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: 8 }}>
                          <input style={{ margin: 0, height: 17, width: 17, position: "relative" }} type="checkbox" />
                          <div style={{ position: "relative", fontSize: 14, lineHeight: "150%", fontFamily: '"Plus Jakarta Sans"', color: "#333", textAlign: "left", display: "inline-block", minWidth: size[1] }}>{size[0]}</div>
                        </div>
                      ))}
                      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start" }}>
                        <div style={{ position: "relative", fontSize: 14, lineHeight: "150%", fontWeight: 600, fontFamily: '"Plus Jakarta Sans"', color: "#ff0049", textAlign: "left", display: "inline-block", minWidth: 65 }}>See more</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", padding: "0px 0px 3px" }}>
                  <div style={{ height: 1, flex: 1, position: "relative", borderTop: "1px solid #bbb", boxSizing: "border-box", opacity: "0.4" }} />
                </div> */}

                  {/* <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", padding: "0px 0px 3px" }}>
                  <div style={{ height: 1, flex: 1, position: "relative", borderTop: "1px solid #bbb", boxSizing: "border-box", opacity: "0.4" }} />
                </div>
                <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", gap: 20 }}>
                  <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", gap: 24 }}>
                    <div style={{ flex: 1, position: "relative", fontSize: 22, lineHeight: "120%", fontWeight: 600, fontFamily: '"Plus Jakarta Sans"', color: "#000", textAlign: "left" }}>Price Range</div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", padding: "12px 0px 0px" }}>
                      <div style={{ width: 14, height: 2, position: "relative" }}>
                        <div style={{ position: "absolute", top: 2, left: 0, borderRadius: 100, backgroundColor: "#000", width: 2, height: 14, transform: "rotate(-90deg)", transformOrigin: "0 0" }} />
                        <div style={{ position: "absolute", top: "-5.8px", left: "6.2px", borderRadius: 100, backgroundColor: "#000", width: 2, height: 14, display: "none" }} />
                      </div>
                    </div>
                  </div>
                  <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", gap: 16 }}>
                    <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", gap: 10 }}>
                      {["Minimum", "Maximum"].map((label, index) => (
                        <div key={index} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", gap: 4 }}>
                          <div style={{ position: "relative", fontSize: 14, lineHeight: "150%", fontFamily: '"Plus Jakarta Sans"', color: "#000", textAlign: "left", display: "inline-block", minWidth: index === 0 ? 60 : 64 }}>{label}</div>
                          <div style={{ alignSelf: "stretch", borderRadius: 2, backgroundColor: "#f7f7f7", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", padding: "10px 12px" }}>
                            <div style={{ position: "relative", fontSize: 14, lineHeight: "150%", fontFamily: '"Plus Jakarta Sans"', color: "#000", textAlign: "left", display: "inline-block", minWidth: index === 0 ? 44 : 56, whiteSpace: "nowrap" }}>{index === 0 ? "$0.00" : "$265.46"}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div style={{ alignSelf: "stretch", height: 16, position: "relative", borderRadius: 100, backgroundColor: "#eee" }}>
                      <div style={{ position: "absolute", top: 3, left: 0, borderRadius: 100, backgroundColor: "#eee", width: 256, height: 10, display: "none" }} />
                      <div style={{ position: "absolute", top: 0, left: 0, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)", borderRadius: "50%", backgroundColor: "#ff0049", border: "0px solid #fff", boxSizing: "border-box", width: 16, height: 16, zIndex: 1 }} />
                    </div>
                  </div>
                </div> */}
                </div>
              )}

              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: 40,
                  maxWidth: "calc(100% - 300px)",
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    maxWidth: "100%",
                    gap: 20,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "10.1px",
                      maxWidth: "100%",
                    }}
                  >
                    {/* <div
                      style={{
                        borderRadius: 2,
                        border: "1px solid #eee",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "8px 11px",
                        gap: 10,
                        zIndex: 1,
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          fontSize: 14,
                          lineHeight: "150%",
                          fontFamily: '"Plus Jakarta Sans"',
                          color: "#666",
                          textAlign: "left",
                        }}
                      >
                        Women’s Collection
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          padding: "4.5px 0px 0px",
                        }}
                      >
                        <div
                          style={{
                            width: "12.1px",
                            height: 12,
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: "11.73px",
                              left: "-0.03px",
                              borderRadius: 100,
                              backgroundColor: "#ff0049",
                              width: "0.8px",
                              height: "16.2px",
                              transform: "rotate(-135deg)",
                              transformOrigin: "0 0",
                            }}
                          />
                          <div
                            style={{
                              position: "absolute",
                              top: "0.28px",
                              left: "-0.12px",
                              borderRadius: 100,
                              backgroundColor: "#ff0049",
                              width: "0.8px",
                              height: "16.2px",
                              transform: "rotate(-45deg)",
                              transformOrigin: "0 0",
                              zIndex: 1,
                            }}
                          />
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
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
                        padding: "10px 0px 0px",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          fontSize: 14,
                          lineHeight: "150%",
                          fontFamily: '"Plus Jakarta Sans"',
                          color: "#000",
                          textAlign: "left",
                          display: "inline-block",
                          minWidth: 48,
                          zIndex: 1,
                        }}
                      >
                        Sort by
                      </div>
                    </div>
                    <div
                      style={{
                        borderRadius: 2,
                        backgroundColor: "#f7f7f7",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "10px 12px",
                        gap: 10,
                        zIndex: 1,
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          fontSize: 14,
                          lineHeight: "150%",
                          fontFamily: '"Plus Jakarta Sans"',
                          color: "#000",
                          textAlign: "left",
                          display: "inline-block",
                          minWidth: 124,
                        }}
                      >
                        <select
                          id="options"
                          onChange={handleOptionChange}
                          value={selectedOption}
                          style={{
                            textDecoration: "none",
                            border: "none",
                            backgroundColor: "#f7f7f7",
                          }}
                        >
                          <option value=""> Select Price</option>
                          <option value="rentLowToHigh">Rent Low First</option>
                          <option value="rentHighToLow">Rent High First</option>
                          <option value="buyLowToHigh">Buy Low First</option>
                          <option value="buyHighToLow">Buy High First</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems: "flex-start",}}>
                  <div
                    style={{
                      overflowX: "auto",
                      flexShrink: 0,
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "40px 18.7px",
                      maxWidth: "100%",
                    }}
                  >


                    <div
                      style={{
                        margin: "0 !important",
                        marginTop:'300px',
                        position: "absolute",
                        boxShadow: "0px 3px 25px rgba(0, 0, 0, 0.05)",
                        borderRadius: 10,
                        backgroundColor: "#fff",
                        border: "1px solid #e4e4e4",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "1px 2px 14px",
                        gap: 19,
                      }}
                    >
                      <div
                        style={{
                          alignSelf: "stretch",
                          height: 350,
                          position: "relative",
                          boxShadow: "0px 3px 25px rgba(0, 0, 0, 0.05)",
                          borderRadius: 10,
                          backgroundColor: "#fff",
                          border: "1px solid #e4e4e4",
                          boxSizing: "border-box",
                          display: "none",
                        }}
                      />
                      <img
                        style={{
                          width: 199,
                          height: 199,
                          position: "relative",
                          borderRadius: 10,
                          objectFit: "cover",
                          zIndex: 1,
                        }}
                        loading="lazy"
                        alt
                        src="./public/image-32@2x.png"
                      />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "flex-start",
                          justifyContent: "flex-start",
                          padding: "0px 12px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            padding: "0px 1px 0px 0px",
                            gap: 13,
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
                                fontSize: 16,
                                lineHeight: "150%",
                                fontWeight: 600,
                                fontFamily: '"Plus Jakarta Sans"',
                                color: "#000",
                                textAlign: "left",
                                whiteSpace: "nowrap",
                                zIndex: 1,
                              }}
                            >
                              Sabyasachi (FR-287)
                            </div>
                            <div
                              style={{
                                width: "155.7px",
                                position: "relative",
                                fontSize: 14,
                                lineHeight: "150%",
                                fontFamily: '"Plus Jakarta Sans"',
                                color: "rgba(0, 0, 0, 0.7)",
                                textAlign: "left",
                                display: "inline-block",
                                zIndex: 1,
                              }}
                            >
                              <p style={{ margin: 0, whiteSpace: "pre-wrap" }}>
                                Rs. 40,000/day or
                              </p>
                              <p style={{ margin: 0 }}>Rs. 900,000</p>
                            </div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              gap: 10,
                            }}
                          >
                            <button
                              style={{
                                cursor: "pointer",
                                border: "none",
                                padding: "4px 13px 5px 14px",
                                backgroundColor: "#fc0149",
                                borderRadius: 3,
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                                whiteSpace: "nowrap",
                                zIndex: 1,
                              }}
                            >
                              <div
                                style={{
                                  height: 30,
                                  width: 70,
                                  position: "relative",
                                  borderRadius: 3,
                                  backgroundColor: "#fc0149",
                                  display: "none",
                                }}
                              />
                              <div
                                style={{
                                  position: "relative",
                                  fontSize: 14,
                                  lineHeight: "150%",
                                  fontWeight: 600,
                                  fontFamily: '"Plus Jakarta Sans"',
                                  color: "#fff",
                                  textAlign: "left",
                                  display: "inline-block",
                                  minWidth: 43,
                                  zIndex: 1,
                                }}
                              >
                                Rent it
                              </div>
                            </button>
                            <button
                              style={{
                                cursor: "pointer",
                                border: "1px solid #fc0149",
                                padding: "2px 16px 3px",
                                backgroundColor: "transparent",
                                borderRadius: 3,
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                                zIndex: 1,
                              }}
                            >
                              <div
                                style={{
                                  height: 30,
                                  width: 70,
                                  position: "relative",
                                  borderRadius: 3,
                                  border: "1px solid #fc0149",
                                  boxSizing: "border-box",
                                  display: "none",
                                }}
                              />
                              <div
                                style={{
                                  position: "relative",
                                  fontSize: 14,
                                  lineHeight: "150%",
                                  fontWeight: 600,
                                  fontFamily: '"Plus Jakarta Sans"',
                                  color: "#fc0149",
                                  textAlign: "left",
                                  display: "inline-block",
                                  minWidth: 38,
                                  zIndex: 1,
                                }}
                              >
                                Buy it
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>




                  </div>
                </div> */}

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    alignContent: "center",
                    backgroundColor: "",
                    width: isSmallScreen ? "700%" : "",
                  }}
                >
                  {sort === "no" ||
                  category === "Men" ||
                  category === "Women" ||
                  type ||
                  search ? (
                    itemsToShow.length > 0 ? (
                      itemsToShow.map((item, index) => (
                        <React.Fragment key={index}>
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
                    ) : (
                      <h1 style={{ textAlign: "center" }}>No Data Found</h1>
                    )
                  ) : data.length > 0 ? (
                    data.map((item, index) => (
                      <React.Fragment key={index}>
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
                  ) : (
                    <h1 style={{ textAlign: "center" }}>No Data Found</h1>
                  )}
                </div>
              </div>
            </div>

            <div
              style={{
                width: 880,
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "center",
                padding: "0px 20px",
                boxSizing: "border-box",
                maxWidth: "100%",
                textAlign: "center",
                fontSize: 14,
              }}
            >
              <div
                style={{
                  width: 240,
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
                    padding: "8px 0px 0px",
                  }}
                >
                  <img
                    style={{
                      width: 16,
                      height: 16,
                      position: "relative",
                      overflow: "hidden",
                      flexShrink: 0,
                      objectFit: "contain",
                      zIndex: 1,
                    }}
                    alt
                    src="./public/arrow-3@2x.png"
                  />
                </div>
                {Array.from({ length: totalNumberOfPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    style={{
                      margin: "5px",
                      border: "0px solid black",
                      backgroundColor:
                        index + 1 === currentPageNumber ? "#fc0149" : "white",
                      color:
                        index + 1 === currentPageNumber ? "white" : "black",
                      transition: "background-color 0.3s, color 0.3s", // Add transition for smoother color change
                      borderRadius: "3px",
                      width: "30px",
                      height: "30px",
                    }}
                    onMouseEnter={event => {
                      if (index + 1 !== currentPageNumber) {
                        // Change color on hover only if it's not the current page
                        event.target.style.backgroundColor = "lightblue";
                      }
                    }}
                    onMouseLeave={event => {
                      if (index + 1 !== currentPageNumber) {
                        // Change color back to original on mouse leave only if it's not the current page
                        event.target.style.backgroundColor = "white";
                      }
                    }}
                  >
                    {index + 1}
                  </button>
                ))}
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
                      width: 16,
                      height: 16,
                      position: "relative",
                      overflow: "hidden",
                      flexShrink: 0,
                      objectFit: "contain",
                      zIndex: 1,
                    }}
                    alt
                    src="./public/arrow-4@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer
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
          textAlign: "left",
          fontSize: 24,
          color: "#fff",
          fontFamily: '"Plus Jakarta Sans"',
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
            <div
              style={{
                position: "relative",
                lineHeight: "130%",
                fontWeight: 600,
                display: "inline-block",
                minWidth: 81,
                zIndex: 1,
              }}
            >
              Find us
            </div>
            <div
              style={{
                position: "relative",
                fontSize: 16,
                lineHeight: "175%",
                color: "rgba(255, 255, 255, 0.7)",
                zIndex: 1,
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
            <div
              style={{
                position: "relative",
                lineHeight: "130%",
                fontWeight: 600,
                display: "inline-block",
                minWidth: 127,
                zIndex: 1,
              }}
            >
              Contact us
            </div>
            <div
              style={{
                position: "relative",
                fontSize: 16,
                lineHeight: "175%",
                color: "rgba(255, 255, 255, 0.7)",
                zIndex: 1,
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
          <div
            style={{
              position: "relative",
              lineHeight: "130%",
              fontWeight: 600,
              display: "inline-block",
              minWidth: 114,
              zIndex: 1,
            }}
          >
            Company
          </div>
          <div
            style={{
              height: 192,
              position: "relative",
              fontSize: 16,
              lineHeight: "200%",
              color: "rgba(255, 255, 255, 0.7)",
              display: "inline-block",
              zIndex: 1,
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
          <div
            style={{
              position: "relative",
              lineHeight: "130%",
              fontWeight: 600,
              zIndex: 1,
            }}
          >
            Our products
          </div>
          <div
            style={{
              position: "relative",
              fontSize: 16,
              lineHeight: "200%",
              color: "rgba(255, 255, 255, 0.7)",
              zIndex: 1,
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
          <div
            style={{
              position: "relative",
              lineHeight: "130%",
              fontWeight: 600,
              zIndex: 1,
            }}
          >
            Social Media
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: 10,
            }}
          >
            <FaFacebook
              onClick={() => {
                navigate("/About");
              }}
            />{" "}
            <FaInstagramSquare
              onClick={() => {
                navigate("/About");
              }}
            />
          </div>
        </div>
      </footer>
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
      </div>

      {/* card */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: isSmallScreen ? "100%" : "32%",
          height: showDiv ? "100vh" : "0",
          backgroundColor: "white",
          zIndex: 2,
          border: `0px solid red`,
          overflow: "hidden",
          transition: "border height 0.5s",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
          overflowY: "auto",
        }}
      >
        <p
          style={{
            paddingLeft: "40px",
            fontSize: "20px",
            fontWeight: "bold",
            color: "black",
            textTransform: "uppercase",
          }}
        >
          Cart Item
        </p>
        <div style={{ borderRadius: "50%", backgroundColor: "black" }}>
          <button
            onClick={() => setShowDiv(!showDiv)}
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              border: "none",
              background: "transparent",
              color: "white",
              cursor: "pointer",
              fontSize: 18,
              marginLeft: 20,
              borderRadius: "50%",
              backgroundColor: "black",
            }}
          >
            x
          </button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <div><h2 style={{color:"#fc0149",margin:"5vh"}}>Rental Product</h2></div> */}
          {Cartdata.map((item, index) =>
            item.rentStatus == "InCard" ? (
              <div
                key={index}
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
                  margin: "10px",
                  marginBottom: "0px",
                  marginTop: "2vh",
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
                  alt=""
                  src={item.image}
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
                      gap: 4,
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "150%",
                        fontWeight: 600,
                        color: "black",
                      }}
                    >
                      {item.name}
                    </div>
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "150%",
                        display: "inline-block",
                        minWidth: 114,
                        color: "gray",
                      }}
                    >
                      Rs. {item.rentPrice}/day
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
                        alt=""
                        src="./public/arrow-42@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <IoTrashOutline
                  size={25}
                  style={{
                    color: "red",
                    height: 24,
                    width: 24,
                    position: "absolute",
                    margin: "0 !important",
                    top: "calc(50% - 12px)",
                    right: 12,
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                  onClick={() => {
                    handleSubmitCart(item._id, "For Rent");
                  }}
                />
              </div>
            ) : (
              <></>
            )
          )}
          {/* <div><h2 style={{color:"#fc0149",margin:"5vh"}}>Buying Product</h2></div> */}

          {Cartdata.map((item, index) =>
            item.buyStatus === "InCard" ? (
              <div
                key={index}
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
                  margin: "10px",
                  marginBottom: "0px",
                  marginTop: "2vh",
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
                  alt=""
                  src={item.image}
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
                      gap: 4,
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "150%",
                        fontWeight: 600,
                        color: "black",
                      }}
                    >
                      {item.name}
                    </div>
                    <div
                      style={{
                        position: "relative",
                        lineHeight: "150%",
                        display: "inline-block",
                        minWidth: 114,
                        color: "gray",
                      }}
                    >
                      Rs. {item.buyPrice}/buy
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
                      onClick={() => {
                        handleSubmitCart(item._id, "For Buy");
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
                        alt=""
                        src="./public/arrow-42@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <IoTrashOutline
                  size={25}
                  style={{
                    color: "red",
                    height: 24,
                    width: 24,
                    position: "absolute",
                    margin: "0 !important",
                    top: "calc(50% - 12px)",
                    right: 12,
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                  onClick={() => {
                    handleSubmitCart(item._id, "For Buy");
                  }}
                />
              </div>
            ) : (
              <></>
            )
          )}

          <div
            style={{
              alignSelf: "stretch",
              height: 1,
              position: "relative",
              borderTop: "1px solid #e7e7e7",
              boxSizing: "border-box",
              margin: "20px",
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
              margin: "20px",
            }}
          >
            <div
              style={{
                position: "relative",
                lineHeight: "150%",
                display: "inline-block",
                minWidth: 128,
                color: "black",
              }}
            >
              Enter coupon code
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
            </div>
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
          <div
            style={{
              alignSelf: "stretch",
              height: 1,
              position: "relative",
              borderTop: "1px solid #e7e7e7",
              boxSizing: "border-box",
              margin: "20px",
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
              margin: "20px",
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
                  color: "black",
                }}
              >
                Subtotal
              </h2>
              <div
                style={{
                  position: "relative",
                  lineHeight: "150%",
                  fontWeight: 600,
                  color: "black",
                }}
              >
                Rs. {totalSumPrice}
              </div>
            </div>
            <div
              style={{
                alignSelf: "stretch",
                position: "relative",
                fontSize: 16,
                lineHeight: "150%",
                color: "rgba(0, 0, 0, 0.7)",
                color: "black",
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
              margin: "20px",
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
                onClick={() => {
                  navigate("/Checkout");
                }}
              >
                Checkout
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListofProducts;
