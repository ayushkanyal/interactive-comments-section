import Comment from "./components/Comment";
import RepliesList from "./components/RepliesList";
import CurrentUser from "./components/CurrentUser";
import data from "./data.json";
import "./App.css";

function App() {
  const commentList = data["comments"];

  let image = "https://picsum.photos/200/300";

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
            />
            {<RepliesList key={Math.random()} list={item["replies"]} />}
          </div>
        );
      })}
      <CurrentUser />
    </>
  );
}

export default App;
