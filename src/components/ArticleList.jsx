import Article from "./Article";
function ArticleList(props) {
  return (
    <div>
      <h2>Vores artikler</h2>
      <div className="grid">
        <Article articleheader={props.articles[0].header} articlecontent={props.articles[0].content} />
        <Article articleheader={props.articles[1].header} articlecontent={props.articles[1].content} />
        <Article articleheader={props.articles[2].header} articlecontent={props.articles[2].content} />
      </div>
    </div>
  );
}

export default ArticleList;
