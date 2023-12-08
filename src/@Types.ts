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

export interface ArticleUpdateProps {
  id?: number;
  user?: {
    username: string;
    profilePic: string;
  };
  category: string;

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

export interface AddProps {
  img?: string;
  header?: string;
  paragraph?: string;
}

export interface AddSZoneProps {
  img1?: string;
  img2?: string;
  img3?: string;
  header1: string;
  header2: string;
  header3: string;
  paragraph1?: string;
  paragraph2?: string;
  paragraph3?: string;
}
