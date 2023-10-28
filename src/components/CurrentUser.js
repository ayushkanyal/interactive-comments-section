import { useState } from "react";
import style from "./CurrentUser.module.css";
import image from "../../images/avatars/image-juliusomo.webp";

export default function CurrentUser(props) {
  const [enteredText, setEnteredText] = useState("");

  function handleChange(event) {
    setEnteredText(event.target.value);
    console.log(enteredText);
  }

  function handleClick(event) {
    event.preventDefault();
    props.addComment(enteredText);
    setEnteredText("");
  }

  return (
    <>
      <form className={style["comment_box"]}>
        <textarea
          placeholder="Add a comment..."
          id="new_comment"
          value={enteredText}
          onChange={handleChange}
        ></textarea>
        <div className={style["comment_footer"]}>
          <img src={image} alt={props.CurrentUserName}></img>
          <button onClick={handleClick}>
            Send
          </button>
        </div>
      </form>
    </>
  );
}
