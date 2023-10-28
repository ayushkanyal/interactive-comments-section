import style from "./Comment.module.css";
import Header from "./Header";
import CommentActions from "./CommentActions/CommentActions";

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
        <CommentActions id={(Math.random() * 10)} initialVotes={props.votes} userName={props.name} />
      </div>
    </>
  );
}
