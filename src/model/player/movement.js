import store from "../../config/store";
import {playerConfig} from "../../config/constans";

let shouldRun = store.getState().player.shouldRun;

export default function handleMovement(player) {
    window.addEventListener("keydown", ev => {
        handleKey(ev, "DOWN");
    })
    window.addEventListener("keyup", ev => {
        handleKey(ev, "UP");
    })

    setInterval(runIfShould, playerConfig.INTERVAL);
    return player

    function getNewPosition(direction) {
        const oldPosition = store.getState().player.position
        switch (direction) {
            case "WEST":
                return [oldPosition[0] - playerConfig.STEP_SIZE, oldPosition[1]]
            case "EAST":
                return [oldPosition[0] + playerConfig.STEP_SIZE, oldPosition[1]]
            default:
                return console.log("bad direction for get new position")
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

    function runIfShould() {
        if (shouldRun.east === true) {
            dispatchMove("EAST")
        } else if (shouldRun.west === true) {
            dispatchMove("WEST")
        }
    }

    function handleKey(ev, position) {
        switch (ev.keyCode) {
            case 37: //left
                shouldRun.west = setUpRunDirection(position)
                break;
            case 39: //right
                shouldRun.east = setUpRunDirection(position)
                break
            default:
                return console.log(ev.keyCode)
        }
    }

    function setUpRunDirection(position) {
        return position === "DOWN"
    }
}
