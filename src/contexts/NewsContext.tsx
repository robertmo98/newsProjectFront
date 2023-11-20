import { ReactNode, createContext, useState } from "react";
import { ArticleProps } from "../@Types"

interface NewsContextState {
    articles: ArticleProps[];
    setArticles: (articles: ArticleProps[]) => void;
}

const initialState : NewsContextState = {
    articles: [],
    setArticles: () => {},
};

//create context
const NewsContext = createContext<NewsContextState>(initialState);

//wrapper component:
export const NewsContextProvider = ({children} : {children: ReactNode}) => {
    const [articles, setArticles] = useState<ArticleProps[]>([]);

    return (
        <NewsContext.Provider value={{articles, setArticles}}>
            {children}
        </NewsContext.Provider>
    )
};

export default NewsContext;