import React from "react";
import Header from "../header/header";
const AccountDetails = () => {
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
            padding: "258px 20px",
            boxSizing: "border-box",
            position: "relative",
            backgroundImage: 'url("pending_16:8205")',
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
              width: 794,
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
              gap: 64,
              maxWidth: "100%",
              zIndex: 2,
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
                Edit Account Details
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
                  src="./public/close-12.svg"
                />
              </div>
            </div>
            <form
              style={{
                margin: 0,
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: 40,
                maxWidth: "100%",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  height: 414,
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  position: "relative",
                  gap: "20px 16px",
                  maxWidth: "100%",
                }}
              >
                <div
                  style={{
                    width: 355,
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
                      fontSize: 14,
                      lineHeight: "150%",
                      fontFamily: '"Plus Jakarta Sans"',
                      color: "#000",
                      textAlign: "left",
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
                      minWidth: 213,
                    }}
                    placeholder="Adnan"
                    type="text"
                  />
                </div>
                <div
                  style={{
                    width: 355,
                    margin: "0 !important",
                    position: "absolute",
                    top: 0,
                    left: 375,
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
                      fontSize: 14,
                      lineHeight: "150%",
                      fontFamily: '"Plus Jakarta Sans"',
                      color: "#000",
                      textAlign: "left",
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
                      minWidth: 213,
                    }}
                    placeholder="Safdar"
                    type="text"
                  />
                </div>
                <div
                  style={{
                    width: 355,
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
                      fontSize: 14,
                      lineHeight: "150%",
                      fontFamily: '"Plus Jakarta Sans"',
                      color: "#000",
                      textAlign: "left",
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
                      minWidth: 213,
                    }}
                    placeholder="adnan@gmail.com"
                    type="text"
                  />
                </div>
                <div
                  style={{
                    width: 355,
                    margin: "0 !important",
                    position: "absolute",
                    top: 87,
                    left: 375,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: 6,
                    maxWidth: "100%",
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
                      minWidth: 65,
                    }}
                  >
                    Password
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
                      padding: "7px 14px 9px",
                      boxSizing: "border-box",
                      maxWidth: "100%",
                    }}
                  >
                    <div
                      style={{
                        height: 40,
                        width: 355,
                        position: "relative",
                        borderRadius: 2,
                        backgroundColor: "rgba(0, 0, 0, 0.03)",
                        display: "none",
                        maxWidth: "100%",
                      }}
                    />
                    <div
                      style={{
                        position: "relative",
                        fontSize: 16,
                        lineHeight: "150%",
                        fontFamily: '"Plus Jakarta Sans"',
                        color: "rgba(0, 0, 0, 0.7)",
                        textAlign: "left",
                        display: "inline-block",
                        minWidth: 85,
                        zIndex: 1,
                      }}
                    >
                      ***********
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: 355,
                    margin: "0 !important",
                    position: "absolute",
                    top: 174,
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
                      fontSize: 14,
                      lineHeight: "150%",
                      fontFamily: '"Plus Jakarta Sans"',
                      color: "#000",
                      textAlign: "left",
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
                      minWidth: 213,
                    }}
                    placeholder={"03218861070"}
                    type="text"
                  />
                </div>
                <div
                  style={{
                    width: "100%",
                    margin: "0 !important",
                    position: "absolute",
                    top: 261,
                    left: 0,
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
                      fontSize: 14,
                      lineHeight: "150%",
                      fontFamily: '"Plus Jakarta Sans"',
                      color: "#000",
                      textAlign: "left",
                      display: "inline-block",
                      minWidth: 56,
                    }}
                  >
                    Address
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
                      padding: "8px 14px",
                      boxSizing: "border-box",
                      fontFamily: '"Plus Jakarta Sans"',
                      fontSize: 16,
                      color: "rgba(0, 0, 0, 0.7)",
                      minWidth: 250,
                    }}
                    placeholder="398-A Shershah Colony, Link Raiwind Road"
                    type="text"
                  />
                </div>
                <div
                  style={{
                    width: 355,
                    margin: "0 !important",
                    position: "absolute",
                    top: 347,
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
                      fontSize: 14,
                      lineHeight: "150%",
                      fontFamily: '"Plus Jakarta Sans"',
                      color: "#000",
                      textAlign: "left",
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
                  />
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
                    Save Changes
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
            </form>
          </div>
        </main>
      </div>
    </>
  );
};
export default AccountDetails;
