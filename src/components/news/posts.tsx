import classes from "./posts.module.css";
import { Post } from "../../types";

function Posts(props) {
  const { posts } = props;

  return (
    <div className={classes.main}>
      <p className={classes.title}>News</p>
      <hr className={classes.class1} />
      <ol className={classes.list}>
        {posts?.map((post, index) => (
          <li key={index} className={classes.post}>
            <div>
              <p>{post.title}</p>
            </div>
            <div>
              <button className={classes.button}>
                <a href={post.link}>Read More...</a>
              </button>
            </div>
            {index != posts.length - 1 ? (
              <hr className={classes.class2} />
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Posts;
