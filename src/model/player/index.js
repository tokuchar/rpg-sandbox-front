import React from "react";
import {connect} from "react-redux"
import gameChar from './game_char.png'
import handleMovement from "./movement";

//TODO: dokończyć filmik https://www.youtube.com/watch?v=QZcNGfcn-oo
//TODO: next feature: gravity logic 🪂
/*TODO: tutaj jest fajny tutorial (dlaczego to nie działa płynnie 🤬)
*  https://www.w3schools.com/graphics/tryit.asp?filename=trygame_controllers_keys
* */
function Player(props) {
    console.log("player")
    return (
        <div
            style={{
                position: 'absolute',
                top: props.position[1],
                left: props.position[0],
                backgroundImage: `url('${gameChar}')`,
                backgroundPosition: '50 50',
                backgroundSize: 'cover',
                width: '80px',
                height: '80px',
            }}
        />
    )
}

function mapStateToProps(state) {
    console.log("foo")
    return {
        // ... -> get all  props from player
        ...state.player,
    }
}

export default connect(mapStateToProps)(handleMovement(Player))

