import { useState } from "react";
import style from "./VotesCounter.module.css";

export default function VotesCounter(props) {
  const [voteCount, setVoteCount] = useState(props.initialVotes);

  function addVote() {
    if (voteCount !== props.initialVotes + 1) {
      setVoteCount(voteCount + 1);
    }
  }

  function removeVote() {
    if (voteCount !== props.initialVotes - 1) {
      setVoteCount(voteCount - 1);
    }
  }

  return (
    <>
      <button className={style["votes_counter"]}>
        <div className={style["operator"]} onClick={addVote}>
          +
        </div>
        <div>{voteCount}</div>
        <div
          className={`${style["operator"]} ${style["minus"]}`}
          onClick={removeVote}
        >
          -
        </div>
      </button>
    </>
  );
}
