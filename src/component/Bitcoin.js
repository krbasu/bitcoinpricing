import React, { useState, useEffect } from "react";
import axios from "axios";

const Bitcoin = () => {
  const [button, setbutton] = useState(true);
  const [api, setapi] = useState([]);
  const [currentprice, setcurrentprice] = useState("");
  const [display, setdisplay] = useState("none");
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=btc&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true&precision=full"
      )
      .then((res) => {
        setapi(res.data.bitcoin);
      });
  }, []);

  const clickbutton = () => {
    setbutton(false);
    setcurrentprice(currentprice.btc_market_cap);
    setdisplay("block");
  };
  const curr_price = () => {
    setcurrentprice(currentprice.btc_market_cap);
  };

  return (
    <div>
      <button style={{ display: `${display}` }}>{currentprice}</button>
      {button ? (
        <button style={{ backgroundColor: "blue" }} onClick={clickbutton}>
          GET BITCOIN
        </button>
      ) : (
        <button onClick={curr_price} style={{ backgroundColor: "purple" }}>
          REFRESH BITCOIN
        </button>
      )}
    </div>
  );
};

export default Bitcoin;
