import React,{useState} from "react";
import Header from "../header/header";
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';


const ViewOrder = () => {
  const navigate=useNavigate()
const [isLoading, setIsLoading] = useState(false);
const orderNumber = localStorage.getItem('orderNumber');


  // const [orderNumber, setOrderNumber] = useState('Random');
  const [image, setImage] = useState(null);

  const handleSave = async () => {
    console.log("POST DATA   _------------ data", image,orderNumber)

    if (!image) {
      alert('Please select an image');
      return;
    }
    if (!orderNumber) {
      alert('Please select an orderNumber');
      return;
    }

    if(image!= null & orderNumber != null) {
      setIsLoading(true);
    

      try {
          const formDataToSend = new FormData();
          formDataToSend.append('image', image);
          formDataToSend.append('orderNumber', orderNumber);
          // Use Axios to send form data
          const response = await axios.post('http://localhost:5000/proofPayment', formDataToSend, {
            headers: {
              'Content-Type': 'multipart/form-data' 
            }
          
      
          });
      
      
          console.log("the post apis is->",response.data);
      
          if (response.status === 201) {
            navigate("/ListofProducts");
      
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
          gap: 35,
          lineHeight: "normal",
          letterSpacing: "normal",
        }}
      >
        <Header />
        <main
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "390px 20px",
            boxSizing: "border-box",
            position: "relative",
            backgroundImage: 'url("pending_16:8301")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
            maxWidth: "100%",
            textAlign: "left",
            fontSize: 28,
            color: "#000",
            fontFamily: '"Plus Jakarta Sans"',
          }}
        >
          <img
            style={{
              height: 1189,
              width: 1380,
              position: "relative",
              objectFit: "cover",
              display: "none",
              maxWidth: "100%",
              zIndex: 0,
            }}
            alt
            src="./public/background@2x.png"
          />
          <section
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              margin: "0 !important",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              backdropFilter: "blur(16px)",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              zIndex: 1,
            }}
          />
          <div
            style={{
              width: 464,
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
              gap: 40,
              maxWidth: "100%",
              zIndex: 2,
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: 64,
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
                  }}
                >
                  View my Orders
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "5px 0px 0px",
                  }}
                >
                  <img
                    style={{
                      width: 32,
                      height: 32,
                      position: "relative",
                      overflow: "hidden",
                      flexShrink: 0,
                    }}
                    loading="lazy"
                    alt
                    src="./public/close-1.svg"
                  />
                </div>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  borderRadius: 2,
                  backgroundColor: "rgba(0, 0, 0, 0.03)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: 12,
                  gap: 24,
                  fontSize: 16,
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
                  <div style={{ position: "relative", lineHeight: "150%" }}>
                    <span>Order number: </span>
                    <span style={{ fontWeight: 600 }}>GP200137</span>
                  </div>
                  <div
                    style={{
                      position: "relative",
                      lineHeight: "150%",
                      fontWeight: 600,
                      color: "#fc0149",
                    }}
                  >
                    Payment Pending
                  </div>
                </div>
                <button
                  style={{
                    cursor: "pointer",
                    border: "1px solid #fc0149",
                    padding: "10px 20px 12px 21px",
                    backgroundColor: "transparent",
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
                      width: 235,
                      position: "relative",
                      borderRadius: 3,
                      border: "1px solid #fc0149",
                      boxSizing: "border-box",
                      display: "none",
                    }}
                  />
                  <input
                    style={{
                      position: "relative",
                      fontSize: 16,
                      lineHeight: "150%",
                      fontWeight: 600,
                      fontFamily: '"Plus Jakarta Sans"',
                      color: "#fc0149",
                      textAlign: "left",
                      zIndex: 1,
                    }}
                    placeholder="Upload Proof of Payment"
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])} // Update image state with selected file
                    accept="image/*" // Specify accepted file types (images)
                    autoFocus
                  />
                    
                </button>
              </div>
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
                onClick={()=>{handleSave()}}
                disabled={isLoading}

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
                    minWidth: 110,
                  }}
                >
                  {isLoading ? 'Submitting...' : 'Save Changes'}
                  
                </div>
              </button>
              <button
                style={{
                  cursor: "pointer",
                  border: "1px solid #fc0149",
                  padding: "11px 23px",
                  backgroundColor: "transparent",
                  borderRadius: 3,
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
                    display: "inline-block",
                    minWidth: 55,
                  }}
                >
                  Cancel
                </div>
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default ViewOrder;
