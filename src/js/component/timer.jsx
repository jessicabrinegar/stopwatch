import React from "react";

export default function Timer(props){
    return (
        <div className="timer text-bg-dark">
          <span className="digits">
            {/* Slice the # so it displays as two digits */}
            {/* There are 60,000 ms in a minute. The slice is to make it into two digits */}
            {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
          </span>
          <span className="digits">
            {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}
          </span>
        </div>
      );
}
// <FontAwesomeIcon icon="fa-solid fa-stopwatch" />