import React from "react";
import Map from "../map";
import Player from "../player";

function World(props) {
    return (
        <div
            style={{
                position: "relative",
                width: "800px",
                height: "300px",
                margin: "10px auto",
            }}
        >
            <Map/>
            <Player/>
        </div>
    )
}

export default World;
