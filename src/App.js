import Comment from "./components/UI/Comment/Comment";
import RepliesList from "./components/UI/RepliesList";
import CurrentUser from "./components/UI/CurrentUser";
import data from "./data.json";
import { useState } from "react";
import "./App.css";

function App() {
  const [commentList, setCommentList] = useState(data["comments"]);
  function handleComment(text) {
    setCommentList((prevValue) => [
      ...prevValue,
      {
        id: prevValue.length + 1,
        content: [text],
        createdAt: "now",
        score: 1,
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
    console.log(commentList[commentList.length - 1]["currentUser"]);
  }

  return (
    <>
      {commentList.map((item) => {
        return (
          <div>
            <Comment
              key={item["id"]}
              displayPicture={item["user"]["image"]["png"]}
              name={item["user"]["username"]}
              timeAgo={item["createdAt"]}
              text={item["content"]}
              votes={item["score"]}
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
        addComment={handleComment}
      />
    </>
  );
}

export default App;
