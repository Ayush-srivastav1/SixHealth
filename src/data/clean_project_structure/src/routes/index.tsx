import { Route } from "react-router-dom";
import ArticlePage from "../pages/articles/ArticlePage";

export const routes = (
  <>
    <Route path="/:category/:articleId" element={<ArticlePage />} />
  </>
);
