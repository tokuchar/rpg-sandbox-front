import React from "react";
import {connect} from "react-redux"
import gameChar from './game_char.png'
import handleMovement from "./movement";

//TODO: dokończyć filmik https://www.youtube.com/watch?v=QZcNGfcn-oo
//TODO: next feature: gravity logic 🪂
function Player(props) {
    return (
        <div
            style={{
                position: 'absolute',
                top: props.position[1],
                left: props.position[0],
                backgroundImage: `url('${gameChar}')`,
                backgroundPosition: '50 0',
                backgroundSize: 'cover',
                width: '80px',
                height: '80px',
            }}
        />

    )
}

function mapStateToProps(state) {
    return {
        // ... -> get all  props from player
        ...state.player,
    }
}

export default connect(mapStateToProps)(handleMovement(Player))

