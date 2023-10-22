import style from "./RepliesList.module.css";
import Comment from "./Comment";

export default function RepliesList(props) {
  return (
    <div className={style["replies_list"]}>
      {props.list.map((reply) => {
        return (
          <Comment
            key={reply["id"]}
            taggedUser={"@" + reply["replyingTo"]}
            displayPicture="https://picsum.photos/200/300"
            name={reply["user"]["username"]}
            timeAgo={reply["createdAt"]}
            text={reply["content"]}
            votes={reply["score"]}
          />
        );
      })}
    </div>
  );
}
