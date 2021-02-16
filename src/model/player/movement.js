import store from "../../config/store";
import {SPRITE_SIZE} from "../../config/constans";

export default function handleMovement(player) {
    function getNewPosition(direction) {
        const oldPosition = store.getState().player.position
        switch (direction) {
            case "WEST":
                return [oldPosition[0] - SPRITE_SIZE, oldPosition[1]]
            case "EAST":
                return [oldPosition[0] + SPRITE_SIZE, oldPosition[1]]
            case "NORTH":
                return [oldPosition[0], oldPosition[1] - SPRITE_SIZE]
            case "SOUTH":
                return [oldPosition[0], oldPosition[1] + SPRITE_SIZE]
        }
    }

    function dispatchMove(direction) {
        store.dispatch({
            type: "MOVE_PLAYER",
            payload: {
                position: getNewPosition(direction)
            }
        })
    }

    function handleKeyDown(ev) {
        switch (ev.keyCode) {
            case 37: //left
                return dispatchMove("WEST")
            case 38: //up
                return dispatchMove("NORTH")
            case 39: //right
                return dispatchMove("EAST")
            case 40: //down
                return dispatchMove("SOUTH")
            default:
                return console.log(ev.keyCode)
        }
    }

    window.addEventListener("keydown", ev => {
        handleKeyDown(ev);
    })
    return player
}
