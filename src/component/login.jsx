import React from "react";
const Login = () => {
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
        <header
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
            fontSize: 16,
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
              gap: 42,
              maxWidth: "100%",
            }}
          >
            <img
              style={{
                alignSelf: "stretch",
                width: "166.2px",
                position: "relative",
                maxHeight: "100%",
                minHeight: 50,
              }}
              loading="lazy"
              alt
              src="./public/logo2.svg"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: 32,
                maxWidth: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "13px 0px 0px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    lineHeight: "150%",
                    display: "inline-block",
                    minWidth: 47,
                  }}
                >
                  Home
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "13px 0px 0px",
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
                      position: "relative",
                      lineHeight: "150%",
                      display: "inline-block",
                      minWidth: 127,
                      whiteSpace: "nowrap",
                    }}
                  >
                    Men’s Collection
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
                        width: 8,
                        height: 8,
                        position: "relative",
                        overflow: "hidden",
                        flexShrink: 0,
                      }}
                      alt
                      src="./public/arrow.svg"
                    />
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "13px 0px 0px",
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
                      position: "relative",
                      lineHeight: "150%",
                      whiteSpace: "nowrap",
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
                      padding: "8px 0px 0px",
                    }}
                  >
                    <img
                      style={{
                        width: 8,
                        height: 8,
                        position: "relative",
                        overflow: "hidden",
                        flexShrink: 0,
                      }}
                      alt
                      src="./public/arrow-12.svg"
                    />
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "13px 0px 0px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    lineHeight: "150%",
                    display: "inline-block",
                    minWidth: 70,
                    whiteSpace: "nowrap",
                  }}
                >
                  About Us
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "13px 10px 0px 0px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    lineHeight: "150%",
                    display: "inline-block",
                    minWidth: 86,
                    whiteSpace: "nowrap",
                  }}
                >
                  Contact Us
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 10px 0px 0px",
                }}
              >
                <button
                  style={{
                    cursor: "pointer",
                    border: "1px solid #fc0149",
                    padding: "10px 25.2px 12px",
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
                      width: 142,
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
                      fontSize: 16,
                      lineHeight: "150%",
                      fontWeight: 600,
                      fontFamily: '"Plus Jakarta Sans"',
                      color: "#fc0149",
                      textAlign: "left",
                      display: "inline-block",
                      minWidth: 91,
                      whiteSpace: "nowrap",
                      zIndex: 1,
                    }}
                  >
                    Earn with us
                  </div>
                </button>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "13px 0px 0px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: 16,
                  }}
                >
                  <img
                    style={{
                      height: 24,
                      width: 24,
                      position: "relative",
                      overflow: "hidden",
                      flexShrink: 0,
                      minHeight: 24,
                    }}
                    loading="lazy"
                    alt
                    src="./public/search2.svg"
                  />
                  <img
                    style={{
                      height: 24,
                      width: 24,
                      position: "relative",
                      overflow: "hidden",
                      flexShrink: 0,
                      minHeight: 24,
                    }}
                    loading="lazy"
                    alt
                    src="./public/shoppingcart2.svg"
                  />
                  <img
                    style={{
                      height: 24,
                      width: 24,
                      position: "relative",
                      overflow: "hidden",
                      flexShrink: 0,
                      minHeight: 24,
                    }}
                    loading="lazy"
                    alt
                    src="./public/user2.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>
        <main
          style={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "328px 20px 328px 21px",
            boxSizing: "border-box",
            position: "relative",
            backgroundImage: 'url("pending_16:6609")',
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
              width: 419,
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
                  display: "inline-block",
                  minWidth: 76,
                }}
              >
                Login
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
                  src="./public/close-11.svg"
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
                gap: 20,
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
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  padding: "0px 0px 20px",
                  boxSizing: "border-box",
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
                    minWidth: 43,
                  }}
                >
                  Login
                </div>
              </button>
            </form>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: 8,
                maxWidth: "100%",
                fontSize: 16,
              }}
            >
              <div style={{ position: "relative", lineHeight: "150%" }}>
                <span>New customer?</span>
                <span
                  style={{
                    textDecoration: "underline",
                    fontWeight: 600,
                    color: "#fc0149",
                  }}
                >
                  Create your account
                </span>
              </div>
              <div style={{ position: "relative", lineHeight: "150%" }}>
                <span>Forgot your password?</span>
                <span
                  style={{
                    textDecoration: "underline",
                    fontWeight: 600,
                    color: "#fc0149",
                  }}
                >
                  Reset your password
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default Login;
