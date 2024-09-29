import React,{useState,useEffect} from "react";
import Header from "../header/header";
import { useLocation, useNavigate } from 'react-router-dom';

const CheckoutNext = () => {
  const navigate=useNavigate()

  // const [orderNumber, setOrderNumber] = useState('');

  // const location = useLocation();

  // useEffect(() => {
  //   const orderNum = location?.state?.orderNumber;
  //   if (orderNum) {
  //     setOrderNumber(orderNum);
  //   }
  // }, [location]);
  // console.log("next================>",orderNumber);

  
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
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "80px 100px",
            boxSizing: "border-box",
            gap: 24,
            maxWidth: "100%",
            textAlign: "left",
            fontSize: 40,
            color: "#000",
            fontFamily: '"Plus Jakarta Sans"',
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "0px 0px 8px",
              boxSizing: "border-box",
              maxWidth: "100%",
            }}
          >
            <h1
              style={{
                margin: 0,
                position: "relative",
                fontSize: "inherit",
                lineHeight: "130%",
                fontWeight: 700,
                fontFamily: "inherit",
              }}
            >
              Order completed
            </h1>
          </div>
          <button
            style={{
              cursor: "pointer",
              border: "none",
              padding: 24,
              backgroundColor: "#fff",
              boxShadow: "0px 3px 25px rgba(0, 0, 0, 0.05)",
              borderRadius: 8,
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              boxSizing: "border-box",
              whiteSpace: "nowrap",
              maxWidth: "100%",
            }}
          >
            <div
              style={{
                position: "relative",
                fontSize: 16,
                lineHeight: "150%",
                textAlign: "left",
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontFamily: '"Plus Jakarta Sans"',
                  color: "#333",
                }}
              >
                Your order has successfully been submitted.
              </p>
              <p style={{ margin: 0 }}>
                <span
                  style={{ fontFamily: '"Plus Jakarta Sans"', color: "#333" }}
                >
                  Your order number is
                </span>
                <span
                  style={{
                    fontWeight: 600,
                    fontFamily: '"Plus Jakarta Sans"',
                    color: "#fc0149",
                  }}
                >
                  GP200137
                </span>
              </p>
            </div>
          </button>
          <div
            style={{
              width: 980,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: 32,
              maxWidth: "100%",
            }}
          >
            <h1
              style={{
                margin: 0,
                position: "relative",
                fontSize: "inherit",
                lineHeight: "130%",
                fontWeight: 700,
                fontFamily: "inherit",
                display: "inline-block",
                maxWidth: "100%",
              }}
            >
              Payment instructions
            </h1>
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: 48,
                fontSize: 16,
                color: "#333",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  position: "relative",
                  lineHeight: "150%",
                }}
              >
                Congratulations on your purchase GP200137. You have chosen to
                pay for your order by Card and Online Transfer. Your order will
                be processed as soon as your Card/Online Transfer for Rs.
                190,000 has cleared into our bank account. These are the details
                needed for you to make the bank transfer into our account:
              </div>
              <div
                style={{
                  border: "none",
                  backgroundColor: "#fff",
                  height: 144,
                  width: 291,
                  outline: "none",
                  boxShadow: "0px 3px 25px rgba(0, 0, 0, 0.05)",
                  borderRadius: 8,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: 24,
                  boxSizing: "border-box",
                  fontFamily: '"Plus Jakarta Sans"',
                  fontSize: 16,
                  color: "#333",
                }}
               
              >
                Bank Name: Faysal Bank Limited
                Account Name: Occassion Style
                Account Number: 1092-7128
                Amount: Rs. 190,000
                </div>

              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: 24,
                }}
              >
                <div
                  style={{
                    alignSelf: "stretch",
                    position: "relative",
                    lineHeight: "150%",
                  }}
                >
                  You must send us a receipt or proof of the transaction by
                  logging in to our website and clicking on the “My Account”
                  link at the top of the screen, then on “View my Orders”.
                  <button
                  style={{
                    cursor: "pointer",
                    border: "1px solid #fc0149",
                    padding: "10px 31px 12px",
                    backgroundColor: "#fc0149",
                    borderRadius: 2,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}

                  onClick={()=>{navigate("/ViewOrder")}}
                >
                  <div
                    style={{
                      position: "relative",
                      fontSize: 16,
                      lineHeight: "150%",
                      fontWeight: 600,
                      fontFamily: '"Plus Jakarta Sans"',
                      color: "white",
                      textAlign: "left",
                    }}
                  >
                    View my Order
                  </div>
                </button>
                </div>

                <button
                  style={{
                    cursor: "pointer",
                    border: "1px solid #fc0149",
                    padding: "10px 31px 12px",
                    backgroundColor: "transparent",
                    borderRadius: 2,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      fontSize: 16,
                      lineHeight: "150%",
                      fontWeight: 600,
                      fontFamily: '"Plus Jakarta Sans"',
                      color: "#fc0149",
                      textAlign: "left",
                    }}
                  >
                    Continue Shopping
                  </div>
                </button>
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
                  src="./public/frame.svg"
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
                  src="./public/frame-1.svg"
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
export default CheckoutNext;
