import { Link } from "react-router-dom";
import { ArticleProps } from "../../@Types";

const articleCard = (article: ArticleProps) => {
  const truncate = (str: string, no_words: number) => {
    if (str.length > 100) {
      return str.split(" ").splice(0, no_words).join(" ");
    }
    return str;
  };

  return (
    <Link
      to={`/news/${article.id}`}
      className="block cursor-pointer text-slate-750 font-sans hover:underline my-2 rounded-lg shadow-md p-2 w-2/3  bg-slate-200 
      dark:text-white dark:bg-slate-900 ml-2
      "
      key={article.id}
    >
      <div className="flex">
        <div className="w-1/4">
          {
            <img
              src={article.mainImg}
              className="aspect-square max-h-48  m-2"
            />
          }
        </div>

        <div className="flex-col space-y-4 w-3/4 ">
          <div className="flex justify-between font-extralight antialiased">
            <p>{article.category}</p>
            <p>By {article.user?.username}</p>
          </div>
          <div>
            <h1 className="font-bold text-xl">{article.title}</h1>
          </div>

          <div>
            <p className="font-l">{truncate(article.content, 12)}</p>
          </div>
          <div>
            <p></p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default articleCard;
