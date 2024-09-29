import { useLocation, useNavigate } from 'react-router-dom';

import axios from 'axios';
import React, { useEffect, useState } from 'react';


const ResponsiveMenu = ({show,setShow}) => {
    const navigate=useNavigate()

    const [typesForMen] = useState(['Sherwani', 'Three piece', 'Waist cot']);
    const [typesForWomen] = useState(['Engagement', 'Barat', 'Mehndi', 'Nikkah', 'walima', 'Lehnga Choli', 'Shirt with sharara Garara', 'Shirt with Lehnga', 'Saris', 'Gowns']);
    const [searchValue, setSearchValue] = useState('');
    
    const handleSearchSubmit = (event) => {
        event.preventDefault();
        navigate(`/ListofProducts?search=${searchValue}`);
        window.location.reload();
    
      };
      useEffect(() => {
        fetchMenu();
      }, []);

      const fetchMenu = async () => {
        try {
          const response = await axios.get('http://localhost:5000/getMenu');
          sortCategory(response.data);
          console.log("callbacks are--->", response.data);
          console.log("data is Menu fetched--->", response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

      const sortCategory = (data) => {
        console.log("==================>",data.data);
      
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

      const handleSearchInputChange = (event) => {
        setSearchValue(event.target.value);
      };

    return (
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
          zIndex:6,
          backgroundColor:'white'
        }}
      >
        <button onClick={ ()=>{setShow(!show)} }>Show icons</button>
        
        <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", padding: "0px 0px 4px" }}>
          <div style={{ flex: 1, borderRadius: 2, backgroundColor: "#f7f7f7", display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", padding: "10px 10px", gap: 10 }}>

            <input style={{ width: "90%", border: "none", outline: "none", fontFamily: '"Plus Jakarta Sans"', fontSize: 14, backgroundColor: "transparent", height: "auto", position: "relative", lineHeight: "150%", color: "#666", textAlign: "left", display: "inline-block", padding: 0 }} placeholder="Search within this category" type="text" value={searchValue}  onChange={handleSearchInputChange} />
            <div style={{ height: 'auto', width: 27, position: "relative" }}>
              <a onClick={handleSearchSubmit}><img style={{ position: "absolute", top: 0, left: 0, width: 27, height: 17, overflow: "hidden" }} alt src="./public/search-1.svg" />a</a>
              {/* <img style={{ position: "absolute", top: 0, left: 27, width: 0, height: 21, objectFit: "contain" }} alt src="./public/line.svg" /> */}
            </div>
            {/* <button onClick={handleSearchSubmit}>Search</button> */}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", padding: "0px 0px 4px" }}>
          <div style={{ width: 251, display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", padding: "0px 0px 0px 0px", boxSizing: "border-box", gap: 20 }}>
            <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: 24 }}>
              <div style={{ flex: 1, position: "relative", fontSize: 22, lineHeight: "120%", fontWeight: 600, fontFamily: '"Plus Jakarta Sans"', color: "#000", textAlign: "left" }}>Categories</div>
              <div style={{ height: 2, width: 14, position: "relative" }}>
                <div style={{ position: "absolute", top: 2, left: 0, borderRadius: 100, backgroundColor: "#000", width: 2, height: 14, transform: "rotate(-90deg)", transformOrigin: "0 0" }} />
                <div style={{ position: "absolute", top: "-5.8px", left: "6.2px", borderRadius: 100, backgroundColor: "#000", width: 2, height: 14, display: "none" }} />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", gap: 12 }}>
              <div style={{ position: "relative", fontSize: 14, lineHeight: "150%", fontWeight: 600, fontFamily: '"Plus Jakarta Sans"', color: "#333", textAlign: "left", display: "inline-block", minWidth: 44 }}>Select</div>
              <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", gap: 16 }}>
                <div style={{ width: 0, display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start" }}>
                  <img style={{ height: 50, width: 0, position: "relative", objectFit: "contain" }} alt src="./public/line-1.svg" />
                  <img style={{ height: 21, width: 0, position: "relative", objectFit: "contain" }} alt src="./public/line-2.svg" />
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", gap: 8 }}>
                  <div style={{ position: "relative", fontSize: 14, lineHeight: "150%", fontFamily: '"Plus Jakarta Sans"', color: "#ff0049", textAlign: "left" }}>
                  <a href="?category=Men" onClick={()=>{navigate("/ListofProducts")}}>
                    Mens Collection
                  </a>
                    </div>
                  <div style={{ position: "relative", fontSize: 14, lineHeight: "150%", fontFamily: '"Plus Jakarta Sans"', color: "#333", textAlign: "left", display: "inline-block", minWidth: 111 }}>
                  <a href="?category=Women" onClick={()=>{navigate("/ListofProducts")}}>
                    Women's Collection
                  </a>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-start", gap: 8 }}>
              <div style={{ position: "relative", fontSize: 14, lineHeight: "150%", fontFamily: '"Plus Jakarta Sans"', color: "#333", textAlign: "left", display: "inline-block", minWidth: 87 }}>
              {
                  typesForMen.map((type, index) => {
                    return (
                      <p key={index}>
                        <a href={`?type=${type}`} style={{fontWeight:'lighter',color:'#333',fontFamily: 'Plus Jakarta Sans',fontSize: 14}}  onClick={() => { navigate("/ListofProducts") }}>
                          {type}
                        </a>
                      </p>
                    );
                  })  
                }
              </div>

              <div style={{ position: "relative", fontSize: 14, lineHeight: "150%", fontFamily: '"Plus Jakarta Sans"', color: "#333", textAlign: "left", display: "inline-block", minWidth: 49 }}>
                {
                  typesForWomen.map((type, index) => {
                    return (
                      <p key={index} >
                        <a href={`?type=${type}`} style={{fontWeight:'lighter',color:'#333',fontFamily: 'Plus Jakarta Sans',fontSize: 14}} onClick={() => { navigate("/ListofProducts") }}>
                          {type}
                        </a>
                      </p>
                    );
                  })  
                }
              </div>

            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", padding: "0px 0px 3px" }}>
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
        </div>

        <div style={{ alignSelf: "stretch", display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start", padding: "0px 0px 3px" }}>
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
        </div>


      </div>
    )
}


export default ResponsiveMenu;