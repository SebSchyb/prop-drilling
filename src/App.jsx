import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticleList from "./components/ArticleList";
import ReactFlipCard from "@holbech/react-flip-card";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function App() {
  const data = {
    username: "mig",
    email: "mig@me.com",
    articles: [
      { header: "Hello World", content: "This is my first article" },
      { header: "Hello World 2", content: "This is my second article" },
      { header: "Hello World 3", content: "This is my third article" },
    ],
    contactInfo: {
      email: "stuff@kea.dk",
    },
  };
  return (
    <>
      <Header username={data.username} email={data.email} />
      <ArticleList articles={data.articles} />
      <Footer email={data.contactInfo.email} />

      <div style={{ "--width": "500px", "--height": "500px" }}>
        <ReactFlipCard>
          <p>Front</p>
          <p>Back</p>
        </ReactFlipCard>
      </div>
      <div>
        <ClimbingBoxLoader color="#36d7b7" />
        <ClimbingBoxLoader color="#36d7b7" />
        <ClimbingBoxLoader color="#36d7b7" />
        <ClimbingBoxLoader color="#36d7b7" />
        <ClimbingBoxLoader color="#36d7b7" />
      </div>
    </>
  );
}

export default App;
