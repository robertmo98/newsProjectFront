import { JwtPayload } from "jwt-decode";

export interface ArticleProps {
  id?: number;
  user?: {
    username: string;
    profilePic: string;
  };
  category: string;
  title: string;
  date?: string;
  content: string;
  mainImg?: string;
  mainImgDescription?: string;
  mainImgCredit?: string;
  secondaryTitle?: string;
  secondImg?: string;
  secondImgDescription?: string;
  secondImgCredit?: string;
}

export interface CommentProps {
  id: number;
  content: string;
  date: any;
  user: {
    username: string;
    profilePic: string;
  };

  refresh: () => void;
}

export interface CommentPostProps {
  content: string;
}

export interface PagintaionProps {
  pageCount: number;
  changePage: (event: any) => void;
}

export interface CustomJwtPayload extends JwtPayload {
  role?: string;
  profilePic?: string;
}

export interface UserInfo {
  username?: string;
  profilePic?: string;
  deleteProfile?: () => void;
}

export interface PostCommentProps {
  refresh: () => void;
}

export interface CategoryHeaderProps {
  subject: string;
}

