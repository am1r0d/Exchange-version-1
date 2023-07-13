import React from "react";
import loader from "../gif/Loader.gif";

const Loader = () => {
    return (
        <div>
            <img src={loader} alt="Loading" />
            <h1>Loading...</h1>
        </div>
    );
};

export default Loader;
