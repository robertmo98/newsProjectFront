import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import NewsContext from "../../contexts/NewsContext";
import { FaEdit } from "react-icons/fa";
import CommentsSection from "../comments/CommentsSection";
import AuthContext from "../../contexts/AuthContsxt";

const Article = () => {
  const { id } = useParams();

  const { articles } = useContext(NewsContext);

  //todo: update the role in the context and get it from there.
  const { isAdmin } = useContext(AuthContext);

  console.log(articles.length);

  //if(posts.length === 0){
  //fetch from the api with react query
  //}

  const article = articles.find((articles) => articles.id?.toString() == id);
  if (article)
    return (
      <div className="flex pt-6 text-center font-sans	">
        <div className="flex-none lg:w-14 "></div>

        <div className="grow">
          <div className="flex justify-between">
            <p className="text-left">{article.category}</p>
            <p className="text-left">{article.user?.username}</p>

            {isAdmin && (
              <Link
                to={`/news/${article.id}/edit`}
                className="block cursor-pointer text-green-600 hover:text-fuchsia-500 rounded shadow-sm "
                key={article.id}
              >
                <FaEdit size={32} />
              </Link>
            )}
          </div>
          <h1 className="text-center text-4xl">{article.title}</h1>
          <h3 className="text-xl">{article.secondaryTitle}</h3>
          <p>{article.date}</p>
          <div className="text-sm text-left">
            <img src={article.mainImg} className="w-3/4 h-72" />
            <p>{article.mainImgCredit}</p>
            <p>{article.mainImgDescription}</p>
          </div>

          <p>{article.content}</p>

          <div>
            <img src={article.secondImg} />
            <p>{article.secondImgCredit}</p>
            <p>{article.secondImgDescription}</p>
          </div>
          <div className="h-14"></div>
          <CommentsSection />
        </div>

        <div className="flex-none lg:w-14"></div>
      </div>
    );
  return <div>Not Found</div>;
};

export default Article;
