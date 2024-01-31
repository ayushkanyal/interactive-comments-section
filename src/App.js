import Comment from "./components/Comment/Comment";
import RepliesList from "./components/RepliesList/RepliesList";
import CurrentUser from "./components/CurrentUser/CurrentUser";
import data from "./data.json";
import DeleteModal from "./components/DeleteModal/DeleteModal";
import { useState } from "react";
import "./App.css";

function App() {
  const [commentList, setCommentList] = useState(data["comments"]);
  const [activeModal, setActiveModal] = useState(false);
  const [deleteMode, setDeleteMode] = useState(true);

  function addComment(text) {
    setCommentList((prevValue) => [
      ...prevValue,
      {
        id: prevValue.length + 1,
        content: [text],
        createdAt: "now",
        score: 0,
        user: {
          image: {
            png: "./images/avatars/image-juliusomo.png",
            webp: "./images/avatars/image-juliusomo.webp",
          },
          username: "juliusomo",
        },
        replies: [],
      },
    ]);
  }

  function deleteComment(deletedId, action) {
    console.log(action);
    if (action === "delete") {
      setActiveModal(true);
      console.log(deletedId);
      if (deleteMode) {
        setCommentList(commentList.toSpliced(deletedId - 1, 1));
      }
    } else {
      console.log("edit was clicked")
    }
  }

  function handleModal(seletedButton) {
    if (seletedButton === "delete") {
      console.log(seletedButton);
      setDeleteMode(true);
    } else {
      setDeleteMode(false);
    }
    setActiveModal(false);
  }

  return (
    <>
      {activeModal ? <DeleteModal onClick={handleModal} /> : ""}
      {commentList.map((item) => {
        return (
          <div key={item["id"]}>
            <Comment
              id={item["id"]}
              displayPicture={item["user"]["image"]["png"]}
              name={item["user"]["username"]}
              timeAgo={item["createdAt"]}
              text={item["content"]}
              votes={item["score"]}
              onAction={deleteComment}
              currentUser={
                String(item["user"]["username"]) ===
                String(data["currentUser"]["username"])
                  ? true
                  : false
              }
            />
            {<RepliesList key={Math.random()} list={item["replies"]} />}
          </div>
        );
      })}
      <CurrentUser
        currentUserImage={data["currentUser"]["image"]["png"]}
        currentUserName={data["currentUser"]["username"]}
        addComment={addComment}
      />
    </>
  );
}

export default App;
