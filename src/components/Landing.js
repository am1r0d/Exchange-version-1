import React, { useEffect, useState } from "react";

// Api
import { getCoin } from "../services/api";

// Components
import Loader from "./Loader";
import Coin from "./Coin";

// Styles
import styles from "./Landing.module.css";

const Landing = () => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchApi = async () => {
            const data = await getCoin();
            console.log(data);
            setCoins(data);
        };
        fetchApi();
    }, []);

    const searchHandler = (e) => {
        setSearch(e.target.value);
    };

    const searchedCoins = coins.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <input
                className={styles.input}
                type="text"
                placeholder="Search"
                value={search}
                onChange={searchHandler}
            />
            {coins.length ? (
                <div className={styles.coinContainer}>
                    {searchedCoins.map((item) => (
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
