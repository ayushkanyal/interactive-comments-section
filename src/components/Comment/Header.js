import style from "./Header.module.css";
import data from "../../../data.json";

export default function CommentHeader(props) {
  return (
    <>
      <div className={style["comment_header"]}>
        <img src={"https://picsum.photos/200"} alt={props.displayName}></img>
        <p className={style["username"]}>{props.displayName}</p>
        {props.displayName === String(data["currentUser"]["username"]) ? (
          <p className={style["currentUserTag"]}>you</p>
        ) : (
          ""
        )}
        <div className={style["last_posted"]}>{props.posted}</div>
      </div>
    </>
  );
}
