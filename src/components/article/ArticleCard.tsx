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
      className="block cursor-pointer text-slate-750 font-sans hover:underline my-2 rounded-lg shadow-md bg-slate-200 
      dark:text-white dark:bg-slate-900 ml-2"
      key={article.id}
    >
      <div className="flex">
        <div className="w-1/4  flex-col place-self-center">
          <div className="place-self-center">
            {
              <img
                src={article.mainImg}
                className="aspect-square max-h-48 m-2"
                alt="main image of  article"
              />
            }
          </div>
        </div>

        <div className="flex-col space-y-2 w-3/4 ml-4 xl:ml-2 2xl:ml-0">
          <div className="flex justify-between font-extralight antialiased">
            <div className="flex flex-col">
              <p className="">{article.category}</p>
              <p className="text-xs">{article.date}</p>
            </div>
            <p>By {article.user?.username}</p>
          </div>
          <div>
            <h1 className="font-bold text-xl">{article.title}</h1>
          </div>

          <div>
            <p className="font-l line-clamp-1 md:line-clamp-2 lg:line-clamp-3">
              {truncate(article.content, 24)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default articleCard;
