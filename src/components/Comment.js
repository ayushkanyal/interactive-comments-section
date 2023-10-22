import style from "./Comment.module.css";
import reply from "../images/icon-reply.svg";

export default function Comment(props) {
  return (
    <>
      <div className={style["comment_box"]}>
        <div className={style["comment_header"]}>
          <img src="../images/avatars/image-maxblagun.png" alt={props.name}></img>
          <p className={style["username"]}>{props.name}</p>
          <div className={style["last_posted"]}>{props.timeAgo}</div>
        </div>
        <p className={style["comment_text"]}>
          <span className={style["reply_tag"]}>{props.taggedUser}</span> {props.text}
        </p>
        <div className={style["comment_actions"]}>
          <button className={style["votes_counter"]}>
            <div className={style["operator"]}>+</div>
            <div>{props.votes}</div>
            <div className={`${style["operator"]} ${style["minus"]}`}>-</div>
          </button>
          <button className={style["reply_button"]}>
            <img src={reply} alt="reply action"></img>
            <p>Reply</p>
          </button>
        </div>
      </div>
    </>
  );
}
