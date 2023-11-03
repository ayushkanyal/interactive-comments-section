import style from "./CommentActions.module.css";
import VotesCounter from "./VotesCounter";
import data from "../../../data.json";
import deleteIcon from "../../../images/icon-delete.svg";
import editIcon from "../../../images/icon-edit.svg";

export default function CommentActions(props) {
  function handleDelete() {
    props.onDelete(props.id);
  }

  return (
    <>
      <div className={style["comment_actions"]}>
        <VotesCounter initialVotes={props.initialVotes} />
        {props.userName === String(data["currentUser"]["username"]) ? (
          <div className={style["currentUser_actions"]}>
            <button
              onClick={handleDelete}
              className={`${style["change_on_hover"]} ${style["delete_button"]}`}
            >
              <img src={deleteIcon} alt="Delete Icon"></img>
              Delete
            </button>
            <button
              className={`${style["change_on_hover"]} ${style["edit_button"]}`}
            >
              <img src={editIcon} alt="Edit Icon"></img>
              Edit
            </button>
          </div>
        ) : (
          <button
            className={`${style["change_on_hover"]} ${style["reply_button"]}`}
          >
            <svg
              className={style["reply_icon"]}
              width="14"
              height="13"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" />
            </svg>
            <p className={style["reply_button_text"]}>Reply</p>
          </button>
        )}
      </div>
    </>
  );
}
