import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import NewsContext from "../contexts/NewsContext";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import CommentsSection from "../components/comments/CommentsSection";
import AuthContext from "../contexts/AuthContsxt";
import Swal from "sweetalert2";
import articlesService from "../services/articles-service";

const Article = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const { articles } = useContext(NewsContext);
  const { isAdmin } = useContext(AuthContext);

  const article = articles.find((articles) => articles.id?.toString() == id);

  if (article)
    return (
      <div className="flex-col font-sans lg:pl-24 lg:pr-24 dark:text-white whitespace-pre-line">
        <div className="flex justify-between">
          <p className="text-left text-sky-600">{article.category}</p>

          {isAdmin && (
            <div className="flex gap-8 items-center">
              <Link
                to={`/news/${article.id}/edit`}
                className="block cursor-pointer text-yellow-500 hover:text-yello-400 rounded shadow-sm dark:text-yellow-400 dark:hover:text-red-500 "
                key={article.id}
              >
                <FaEdit size={32} />
              </Link>

              <MdOutlineDeleteForever
                onClick={() =>
                  Swal.fire({
                    title:
                      "Are you sure you want to delete the article? (please be sure this article belongs to you!)",
                    showDenyButton: true,
                    showCancelButton: false,
                    confirmButtonText: "Cancel",
                    denyButtonText: "Yes, delete the article",
                  }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                      Swal.fire("Deletion is canceled", "", "info");
                    } else if (result.isDenied) {
                      articlesService
                        .deleteArticle(id)
                        .then(() => {
                          Swal.fire("Article has been deleted!", "", "success");
                          setTimeout(() => {
                            nav("/home");
                            window.location.reload();
                          }, 2000);
                        })
                        .catch((e) => {
                          Swal.fire("Something went wrong", "", "error");
                        })
                        .finally(() => {});
                    }
                  })
                }
                size={38}
                className="text-red-600"
              />

              {/* <MdOutlineDeleteForever size={38} /> */}
            </div>
          )}
        </div>

        <h1 className="text-left text-4xl">{article.title}</h1>

        <h3 className="text-left text-xl mt-2">{article.secondaryTitle}</h3>

        <div className="flex mt-2 gap-3 items-center">
          <img
            src={article.user?.profilePic}
            className="rounded-full w-8"
            alt="author's user profile picture"
          />
          <p>
            {article.user?.username} | {article.date}
          </p>
        </div>
        <div className="mx-4 mt-2 l:mx-64 ">
          <div>
            <img
              src={article.mainImg}
              className="saspect-video"
              alt="main image of the article"
            />
          </div>
          <div className="text-sm tracking-tight leading-3">
            <p className="">{article.mainImgCredit}</p>
            <p>{article.mainImgDescription}</p>
          </div>
        </div>

        <div className="mt-12">
          <p className="">{article.content}</p>
        </div>

        <div className="text-sm tracking-tight leading-3">
          <img src={article.secondImg} alt="secondary image of the article" />
          <p>{article.secondImgCredit}</p>
          <p>{article.secondImgDescription}</p>
        </div>
        <div className="h-14"></div>
        <CommentsSection />
      </div>
    );
  return <div>Not Found</div>;
};

export default Article;
