import style from "./Comment.module.css";
import replyIcon from "../../../images/icon-reply.svg";
import Header from "./Header";
import VotesCounter from "./VotesCounter";
import data from "../../../data.json";
import deleteIcon from "../../../images/icon-delete.svg";
import editIcon from "../../../images/icon-edit.svg";

export default function Comment(props) {
  return (
    <>
      <div className={style["comment_box"]}>
        <Header
          image={props.displayPicture}
          displayName={props.name}
          posted={props.timeAgo}
          newComment={props.currentUser}
        />
        <p className={style["comment_text"]}>
          <span className={style["reply_tag"]}>{props.taggedUser}</span>{" "}
          {props.text}
        </p>
        <div className={style["comment_actions"]}>
          <VotesCounter initialVotes={props.votes} />

          {props.name === String(data["currentUser"]["username"]) ? (
            <div className={style["currentUser_actions"]}>
              <button className={style["delete_button"]}>
                <img src={deleteIcon} alt="Delete Icon"></img>
                Delete
              </button>
              <button className={style["edit_button"]}>
                <img src={editIcon} alt="Edit Icon"></img>
                Edit
              </button>
            </div>
          ) : (
            <button className={style["reply_button"]}>
              <img src={replyIcon} alt="reply action" className={style["replyIcon"]}></img>
              <p>Reply</p>
            </button>
          )}
        </div>
      </div>
    </>
  );
}
