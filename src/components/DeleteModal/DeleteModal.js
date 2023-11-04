import style from "./DeleteModal.module.css";

export default function DeleteModal(props) {
  function handleClick(event) {
    props.onClick(event.target.value);
  }

  return (
    <>
      <div className={style["overlay"]}></div>
      <div className={style["actions_box"]}>
        <h1>Delete Comment</h1>
        <p>
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </p>
        <div className={style["actions"]}>
          <button
            onClick={handleClick}
            value="cancel"
            className={style["cancel_button"]}
          >
            No, cancel
          </button>
          <button
            onClick={handleClick}
            value="delete"
            className={style["delete_button"]}
          >
            Yes, delete
          </button>
        </div>
      </div>
    </>
  );
}
