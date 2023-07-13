import React, { useEffect, useState } from "react";

import { getCoin } from "../services/api";
import Loader from "./Loader";
import Coin from "./Coin";

const Landing = () => {
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const data = await getCoin();
            console.log(data);
            setCoins(data);
        };
        fetchApi();
    }, []);
    return (
        <>
            <input type="text" placeholder="Search" />
            {coins.length ? (
                <div>
                    {coins.map((item) => (
                        <Coin
                            key={item.id}
                            name={item.name}
                            image={item.image}
                            symbol={item.symbol}
                            price={item.current_price}
                            marketCap={item.market_cap}
                            priceChange={item.price_change_percentage_24h}
                        />
                    ))}
                </div>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default Landing;
