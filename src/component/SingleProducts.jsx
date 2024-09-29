import React, { useState } from "react";
import Header from "../header/header";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Include the default CSS styles

const SingleProducts = () => {
  const data = window.history.state;
  console.log("data props ==================>", data);
  const navigate = useNavigate();
  const [rentFromDate, setRentFromDate] = useState("");
  const [renttillDate, setRenttillDate] = useState("");

  const today = new Date().toISOString().split("T")[0];

  // State for managing the input values
  const [rentTillDate, setRentTillDate] = useState("");

  // Event handlers for input changes

  const handleRentTillDateChange = e => {
    setRentTillDate(e.target.value);
  };

  const handleRentFromDateChange = event => {
    setRentFromDate(event.target.value);
  };

  const handleRenttillDateChange = event => {
    setRenttillDate(event.target.value);
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
    console.log(
      "data === >",
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
    );

    if (userId == null) {
      navigate("/login-page");
    } else {
      if (rentFromDate === "" && renttillDate === "") {
        window.alert("Please enter the rent from date to till date:");
      } else {
        console.log(
          "data === >",
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
          formDataToSend.append("rentFromDate", rentFromDate);
          formDataToSend.append("renttillDate", renttillDate);
          console.log("formDataToSend === >", formDataToSend);

          const response = await axios.post(
            `http://localhost:5000/collectionsAddToCart/${JSON.stringify([
              productId,
              userId,
              name,
              description,
              buyPrice,
              rentPrice,
              status,
              selfStatus,
              rentFromDate,
              renttillDate,
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
            if (kind === "Rent") {
              await axios.put(
                `http://localhost:5000/collectionsAddToCart/rent/${productId}`,
                "null",
                {
                  headers: {
                    "Content-Type": "multipart/form-data",
                  },
                }
              );
            }
            if (kind === "Buy") {
              await axios.put(
                `http://localhost:5000/collectionsAddToCart/buy/${productId}`,
                "null",
                {
                  headers: {
                    "Content-Type": "multipart/form-data",
                  },
                }
              );
            }

            // Display the success toast message here
            toast.success("Item added to cart successfully!");
            navigate("/ListofProducts");
          } else {
            console.error("Failed to submit form");
            alert("There is some error in submitting the form");
          }
        } catch (error) {
          console.error("Error submitting form:", error);
          // Display error toast message
          toast.error("There was an error adding the item to the cart.");
        }
      }
    }
  };

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
          lineHeight: "normal",
          letterSpacing: "normal",
          textAlign: "left",
          fontSize: 14,
          color: "#fff",
          fontFamily: '"Plus Jakarta Sans"',
        }}
      >
        <section
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "0px 0px 80px",
            boxSizing: "border-box",
            maxWidth: "100%",
          }}
        >
          <div
            style={{
              flex: 1,
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "0px 0px 80px",
              boxSizing: "border-box",
              gap: 79,
              maxWidth: "100%",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                height: 1069,
                position: "relative",
                backgroundColor: "#fff",
                display: "none",
              }}
            />
            <Header />
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                // padding: "0px 20px",
                boxSizing: "border-box",
                // maxWidth: "100%",
              }}
            >
              <div
                style={{
                  marginTop: -50,
                  width: 1180,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  gap: 60,
                  maxWidth: "100%",
                }}
              >
                {/* Image Details Container */}
                <div>
                  <div>
                    <h1
                      style={{
                        fontSize: 30,
                        fontWeight: 600,
                        fontFamily: '"Plus Jakarta Sans"',
                        color: "#000",
                        marginBottom: "-6px",
                      }}
                    >
                      {data.name}
                    </h1>
                    <p
                      style={{
                        fontSize: 16,
                        fontFamily: '"Plus Jakarta Sans"',
                        color: "#666",
                        display: "inline-block",
                        textAlign: "center",
                      }}
                    >
                      {data.description}
                    </p>
                  </div>
                  <div
                    style={{
                      width: 525,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: 12,
                      maxWidth: "100%",
                    }}
                  ></div>

                  <div
                    style={{
                      alignSelf: "stretch",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: "8px",
                    }}
                  >
                    {/* Rent Price Section */}
                    <div
                      style={{
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                        fontSize: "18px",
                        lineHeight: "1.1",
                        textAlign: "left",
                        zIndex: 1,
                        backgroundColor: "#FFBF78",
                        color: "#FFF",
                        padding: "16px",
                        borderRadius: "8px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        width: "300px",
                        border: "2px solid transparent",
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.backgroundColor = "#FFF";
                        e.currentTarget.style.color = "#FFBF78";
                        e.currentTarget.style.border = "2px solid #FFBF78";
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.backgroundColor = "#FFBF78";
                        e.currentTarget.style.color = "#FFF";
                        e.currentTarget.style.border = "2px solid transparent";
                      }}
                    >
                      <div
                        style={{
                          fontWeight: 600,
                        }}
                      >
                        Rent Price: Rs. {data.rentPrice}/day
                      </div>
                    </div>

                    {/* Buy Price Section */}
                    <div
                      style={{
                        fontFamily: '"Plus Jakarta Sans", sans-serif',
                        fontSize: "18px",
                        lineHeight: "1.1",
                        textAlign: "left",
                        zIndex: 1,
                        backgroundColor: "#FF6F61", // Buy Price background color
                        color: "#FFF", // Buy Price text color
                        padding: "16px",
                        borderRadius: "8px",
                        cursor: "pointer",
                        transition: "all 0.3s ease", // Smooth transition for hover effects
                        width: "300px", // Fixed width for Buy Price
                        border: "2px solid transparent", // Initial transparent border
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.backgroundColor = "#FFF"; // Change background on hover
                        e.currentTarget.style.color = "#FF6F61"; // Change text color on hover
                        e.currentTarget.style.border = "2px solid #FF6F61"; // Apply border with background color
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.backgroundColor = "#FF6F61"; // Revert background
                        e.currentTarget.style.color = "#FFF"; // Revert text color
                        e.currentTarget.style.border = "2px solid transparent"; // Remove the border
                      }}
                    >
                      <div
                        style={{
                          fontWeight: 600,
                        }}
                      >
                        Buy Price: Rs. {data.buyPrice}
                      </div>
                    </div>

                    {/* Status Section */}
                    <div
                      style={{
                        alignSelf: "stretch",
                        position: "relative",
                        fontSize: "14px",
                        lineHeight: "150%",
                        textAlign: "left",
                        zIndex: 1,
                        marginTop: "16px",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Plus Jakarta Sans"',
                          color: "#666",
                        }}
                      >
                        Status of Availability:
                      </span>
                      <span
                        style={{
                          fontWeight: 600,
                          fontFamily: '"Plus Jakarta Sans"',
                          color: "#fc0149",
                          marginLeft: "8px",
                        }}
                      >
                        In-Stock
                      </span>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      marginTop: 20,
                      marginBottom: 20,
                    }}
                  >
                    {data.selfStatus.selfStatus === "Buy" ? (
                      <>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
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
                                zIndex: 1,
                              }}
                              type="radio"
                              name="radioGroup-1"
                            />
                          </div>
                          <div
                            style={{
                              position: "relative",
                              fontSize: 14,
                              lineHeight: "150%",
                              fontFamily: '"Plus Jakarta Sans"',
                              color: "#666",
                              textAlign: "left",
                              display: "inline-block",
                              minWidth: 91,
                              zIndex: 1,
                            }}
                          >
                            Buy this dress
                          </div>
                        </div>
                        {/* <button
                          style={{
                            cursor: "pointer",
                            border: "none",
                            padding: "12px 22px 14px 23px",
                            backgroundColor: "#fc0149",
                            borderRadius: 3,
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            gap: 10,
                            zIndex: 1,
                          }}
                          onClick={e => {
                            handleSubmit(
                              e,
                              data.name,
                              data.image,
                              data.rentPrice,
                              data.buyPrice,
                              data.description,
                              data.status,
                              data.userId,
                              data.productId,
                              data.rentOptions.kind,
                              data.selfStatus.selfStatus
                            );
                          }}
                        >
                          <div style={{ textAlign: "center" }}>Buy</div>
                        </button> */}
                        <button
                          style={{
                            marginTop: 20,
                            cursor: "pointer",
                            border: "none",
                            padding: "12px 50px 12px 50px",
                            background:
                              "linear-gradient(90deg, #fc0149 0%, #ff5757 100%)",
                            borderRadius: 50,
                            boxShadow: "0px 10px 20px rgba(252, 1, 73, 0.4)",
                            color: "#fff",
                            fontSize: 18,
                            fontWeight: 600,
                            fontFamily: '"Plus Jakarta Sans", sans-serif',
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            // gap: 20,
                            transition:
                              "transform 0.3s ease, box-shadow 0.3s ease",
                            marginLeft: 100,
                          }}
                          onClick={e => {
                            handleSubmit(
                              e,
                              data.name,
                              data.image,
                              data.rentPrice,
                              data.buyPrice,
                              data.description,
                              data.status,
                              data.userId,
                              data.productId,
                              data.rentOptions.kind,
                              data.selfStatus.selfStatus
                            );
                          }}
                          onMouseEnter={e => {
                            e.currentTarget.style.transform = "scale(1.05)";
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
                            Buy
                          </div>
                        </button>
                      </>
                    ) : (
                      <>
                        <div
                          style={{
                            // alignSelf: "stretch",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            gap: 16,
                            // maxWidth: "100%",
                          }}
                        >
                          <div
                            style={{
                              flex: 1,
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              // gap: 20,
                              // minWidth: 216,
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
                                // maxWidth: "100%",
                              }}
                            >
                              <div style={{ color: "#000" }}>Rent from</div>
                              <div
                                style={{
                                  alignSelf: "stretch",
                                  borderRadius: 2,
                                  backgroundColor: "rgba(0, 0, 0, 0.03)",
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  padding: "7px 10px 9px 14px",
                                  boxSizing: "border-box",
                                  maxWidth: "100%",
                                  gap: 20,
                                  zIndex: 1,
                                }}
                              >
                                <input
                                  style={{
                                    width: 104,
                                    border: "none",
                                    outline: "none",
                                    fontFamily: '"Plus Jakarta Sans"',
                                    fontSize: 16,
                                    backgroundColor: "transparent",
                                    height: 24,
                                    position: "relative",
                                    lineHeight: "150%",
                                    color: "rgba(0, 0, 0, 0.7)",
                                    textAlign: "left",
                                    display: "inline-block",
                                    padding: 0,
                                    zIndex: 2,
                                  }}
                                  type="date"
                                  min={new Date().toISOString().split("T")[0]}
                                  value={rentFromDate}
                                  onChange={handleRentFromDateChange}
                                  onKeyDown={e => e.preventDefault()}
                                  onFocus={e =>
                                    e.target.removeAttribute("readonly")
                                  }
                                  onBlur={e =>
                                    e.target.setAttribute(
                                      "readonly",
                                      "readonly"
                                    )
                                  }
                                />
                              </div>
                            </div>
                            return (
                            <div>
                              <button
                                style={{
                                  cursor: "pointer",
                                  border: "none",
                                  padding: "8px 12px",
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
                                onClick={e => {
                                  handleSubmit(
                                    e,
                                    data.name,
                                    data.image,
                                    data.rentPrice,
                                    data.buyPrice,
                                    data.description,
                                    data.status,
                                    data.userId,
                                    data.productId,
                                    data.rentOptions.kind,
                                    data.selfStatus.selfStatus
                                  );
                                }}
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
                                <IoCartOutline
                                  size={20}
                                  style={{ color: "white" }}
                                />
                                <div
                                  style={{
                                    fontSize: 16,
                                    lineHeight: "150%",
                                    fontWeight: 600,
                                    fontFamily: '"Plus Jakarta Sans"',
                                    color: "#fff",
                                    textAlign: "center",
                                    // minWidth: "30%",
                                  }}
                                >
                                  Add to Cart
                                </div>
                              </button>
                              <ToastContainer />
                            </div>
                            );
                          </div>
                          <div
                            style={{
                              flex: 1,
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "flex-start",
                              justifyContent: "flex-start",
                              gap: 6,
                              minWidth: 216,
                              maxWidth: "100%",
                            }}
                          >
                            <div style={{ color: "#000" }}>Rent till</div>
                            <div
                              style={{
                                alignSelf: "stretch",
                                borderRadius: 2,
                                backgroundColor: "rgba(0, 0, 0, 0.03)",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "space-between",
                                padding: "7px 10px 9px 14px",
                                boxSizing: "border-box",
                                maxWidth: "100%",
                                gap: 20,
                                zIndex: 1,
                              }}
                            >
                              <input
                                style={{
                                  width: 104,
                                  border: "none",
                                  outline: "none",
                                  fontFamily: '"Plus Jakarta Sans"',
                                  fontSize: 16,
                                  backgroundColor: "transparent",
                                  height: 24,
                                  position: "relative",
                                  lineHeight: "150%",
                                  color: "rgba(0, 0, 0, 0.7)",
                                  textAlign: "left",
                                  display: "inline-block",
                                  padding: 0,
                                  zIndex: 2,
                                }}
                                type="date"
                                min={
                                  rentFromDate ||
                                  new Date().toISOString().split("T")[0]
                                } // "Rent till" should be after "Rent from"
                                value={rentTillDate}
                                onChange={handleRentTillDateChange}
                                onKeyDown={e => e.preventDefault()}
                                onFocus={e =>
                                  e.target.removeAttribute("readonly")
                                }
                                onBlur={e =>
                                  e.target.setAttribute("readonly", "readonly")
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                {/* <SingleProductsContainer /> */}
                {/* Image Container */}
                <div
                  style={{
                    height: 548,
                    width: "40%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: 8,
                    maxWidth: "100%",
                  }}
                >
                  <img
                    style={{
                      alignSelf: "stretch",
                      flex: 1,
                      position: "relative",
                      borderRadius: 10,
                      maxWidth: "80%",
                      // overflow: "hidden",
                      maxHeight: "50%",
                      objectFit: "fill",
                      zIndex: 1,
                    }}
                    loading="lazy"
                    alt
                    src={data.image}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      gap: 8,
                      zIndex: 1,
                    }}
                  >
                    <img
                      style={{
                        height: 100,
                        width: 100,
                        position: "relative",
                        borderRadius: 10,
                        objectFit: "cover",
                        minHeight: 100,
                      }}
                      alt
                      src={data.image}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          style={{
            alignSelf: "stretch",
            // backgroundColor: "#ccfdff",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "80px 20px 80.3px",
            boxSizing: "border-box",
            rowGap: 20,
            maxWidth: "100%",
            zIndex: 1,
            textAlign: "left",
            fontSize: 24,
            color: "#fc0149",
            fontFamily: '"Plus Jakarta Sans"',
          }}
        >
          <div
            style={{
              height: 488,
              width: 1380,
              position: "relative",
              // backgroundColor: "#ccfdff",
              display: "none",
              maxWidth: "100%",
            }}
          />
          <div
            style={{
              width: 780,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "118px 0px 0px",
              boxSizing: "border-box",
              minWidth: 780,
              maxWidth: "100%",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: 8,
                maxWidth: "100%",
              }}
            >
              <h2
                style={{
                  margin: 0,
                  position: "relative",
                  fontSize: "inherit",
                  lineHeight: "130%",
                  fontWeight: 600,
                  fontFamily: "inherit",
                  display: "inline-block",
                  maxWidth: "100%",
                  zIndex: 1,
                }}
              >
                Enjoy free Shipping on orders over Rs. 10,000
              </h2>
              <h1
                style={{
                  margin: 0,
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: 40,
                  lineHeight: "130%",
                  fontWeight: 700,
                  fontFamily: "inherit",
                  color: "#141055",
                  zIndex: 1,
                }}
              >
                Free shipping across Pakistan
              </h1>
            </div>
          </div>
          <img
            style={{
              height: "327.7px",
              width: 400,
              position: "relative",
              maxWidth: "100%",
              zIndex: 1,
              borderRadius: 20,
            }}
            loading="lazy"
            alt
            src="https://st4.depositphotos.com/13193658/30137/i/450/depositphotos_301375510-stock-illustration-young-woman-holding-credit-card.jpg"
          />
        </section>
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
              <h2
                style={{
                  margin: 0,
                  position: "relative",
                  fontSize: "inherit",
                  lineHeight: "130%",
                  fontWeight: 600,
                  fontFamily: "inherit",
                  display: "inline-block",
                  minWidth: 81,
                  zIndex: 1,
                }}
              >
                Find us
              </h2>
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
              <h2
                style={{
                  margin: 0,
                  position: "relative",
                  fontSize: "inherit",
                  lineHeight: "130%",
                  fontWeight: 600,
                  fontFamily: "inherit",
                  display: "inline-block",
                  minWidth: 127,
                  zIndex: 1,
                }}
              >
                Contact us
              </h2>
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
            <h2
              style={{
                margin: 0,
                position: "relative",
                fontSize: "inherit",
                lineHeight: "130%",
                fontWeight: 600,
                fontFamily: "inherit",
                display: "inline-block",
                minWidth: 114,
                zIndex: 1,
              }}
            >
              Company
            </h2>
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
            <h2
              style={{
                margin: 0,
                position: "relative",
                fontSize: "inherit",
                lineHeight: "130%",
                fontWeight: 600,
                fontFamily: "inherit",
                zIndex: 1,
              }}
            >
              Our products
            </h2>
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
            <h2
              style={{
                margin: 0,
                position: "relative",
                fontSize: "inherit",
                lineHeight: "130%",
                fontWeight: 600,
                fontFamily: "inherit",
                zIndex: 1,
              }}
            >
              Social Media
            </h2>
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
                  zIndex: 1,
                }}
                loading="lazy"
                alt
                src="./public/frame1.svg"
              />
              <img
                style={{
                  height: 30,
                  width: 30,
                  position: "relative",
                  overflow: "hidden",
                  flexShrink: 0,
                  minHeight: 30,
                  zIndex: 1,
                }}
                alt
                src="./public/frame-11.svg"
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
          <div style={{ position: "relative", lineHeight: "150%", zIndex: 1 }}>
            Copyrights © 2024 Occasion Style. All rights have been reserved.
          </div>
        </div>
      </div>
    </>
  );
};
export default SingleProducts;
