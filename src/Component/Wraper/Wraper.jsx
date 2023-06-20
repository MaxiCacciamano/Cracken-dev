import React from "react";
import {Home} from '../Home/Home.jsx'
import "./Wraper.scss";

export function Wraper() {
    const letters = [];
    for (let x = 0; x < 500; x++) {
        letters.push(<div className={`letter letter-${x}`} />);
    }
    return <div className="wrapper">{letters}</div>;
}
export const Wraperr = () => {
    return (
        <div className="wraper">
            <Wraper />
        </div>
    );
};

export default Wraper;
