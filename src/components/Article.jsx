import Button from "./Button";
function Article(props) {
  return (
    <article>
      <h3>{props.articleheader}</h3>
      <p>{props.articlecontent}</p>
      <Button />
    </article>
  );
}

export default Article;
