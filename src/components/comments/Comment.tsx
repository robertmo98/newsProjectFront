import commentsService from "../../services/comments-service";
import { CommentProps } from "../../@Types";
import { BsTrash3Fill } from "react-icons/bs";
import Swal from "sweetalert2";
import { useContext } from "react";
import AuthContext from "../../contexts/AuthContsxt";

const Comment = (comment: CommentProps) => {
  const { isAdmin } = useContext(AuthContext);

  return (
    <div className="bg-gray-100 mt-4" >
      <div className="flex justify-between">
        <div className="flex pl-4 mt-2">
          <img src={comment.user.profilePic} className="rounded-full w-8" />
          <h3 className="text-left pl-6 font-bold">{comment.user.username}</h3>
        </div>
        {isAdmin && (
          <div className="pr-4 pt-1 cursor-pointer">
            {isAdmin && (
              <BsTrash3Fill
                onClick={() =>
                  Swal.fire({
                    title: "Are you sure you want do delete the comment?",
                    showDenyButton: true,
                    showCancelButton: false,
                    confirmButtonText: "Cancel",
                    denyButtonText: "Yes, delete the comment",
                  }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                      Swal.fire("Deletion is canceled", "", "info");
                    } else if (result.isDenied) {
                      commentsService
                        .deleteComment(comment.id)
                        .then(() => {
                          Swal.fire("Comment has been deleted!", "", "success");
                        })
                        .catch((e) => {
                          console.log(e.response.data);
                          Swal.fire("Something went wrong", "", "error");
                        })
                        .finally(() => {
                          comment.refresh();
                        });
                    }
                  })
                }
                size={28}
                className="text-red-600"
              />
            )}
          </div>
        )}
      </div>
      <p className="text-left pl-6">{comment.content}</p>
      <p className="text-right pr-10">{comment.date}</p>
    </div>
  );
};

export default Comment;
