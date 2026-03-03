import { useParams } from "react-router-dom";
import pagesData from "@/data/pagesData";

const PageTemplate = () => {
  const { pageId } = useParams();
  const page = pagesData[pageId];

  if (!page) {
    return <h2>Page Not Found</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{page.title}</h1>
      <p>{page.content}</p>
    </div>
  );
};

export default PageTemplate;
