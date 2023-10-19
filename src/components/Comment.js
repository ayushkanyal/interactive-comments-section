import style from "./Comment.module.css";

export default function Comment() {
  return (
    <>
      <img alt="Profile"></img>
      <h1 className={style["username"]}>
        Name <span className={style["last_posted"]}> __ ago</span>
      </h1>
      <p className="comment_text">Comment Text</p>
      <div className="comment_actions">
        <button className="votes_counter"></button>
        <button>
          <img alt="reply action"></img>Reply
        </button>
      </div>
    </>
  );
}
