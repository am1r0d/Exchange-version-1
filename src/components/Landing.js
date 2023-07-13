import React, { useEffect, useState } from "react";

import { getCoin } from "../services/api";
import Loader from "./Loader";

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
                        <p key={item.id}>{item.name}</p>
                    ))}
                </div>
            ) : (
                <Loader />
            )}
        </>
    );
};

export default Landing;
