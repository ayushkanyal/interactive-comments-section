import style from "./DeleteModal.module.css";

export default function DeleteModal() {
  return (
    <div>
      <div className={style["overlay"]}></div>
      <h1>Delete Comment</h1>
      <p>
        Are you sure you want to delete this comment? This will remove the
        comment and can't be undone.
      </p>
      <div>
        <button>No, cancel</button>
        <button>Yes, delete</button>
      </div>
    </div>
  );
}
