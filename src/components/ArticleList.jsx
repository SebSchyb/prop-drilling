import Article from "./Article";
function ArticleList(props) {
  return (
    <div>
      <h2>Vores artikler</h2>
      <div className="grid">
        {props.articles.map((art) => {
          return <Article {...art} />;
        })}
      </div>
    </div>
  );
}

export default ArticleList;
