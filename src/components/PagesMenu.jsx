import { Link } from "react-router-dom";

const PagesMenu = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", padding: "20px" }}>
      {[...Array(100)].map((_, i) => (
        <Link key={i} to={`/page/${i + 1}`} style={{ textDecoration: "none", color: "#007bff" }}>
          Page {i + 1}
        </Link>
      ))}
    </div>
  );
};

export default PagesMenu;
