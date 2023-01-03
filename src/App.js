import "./App.css";
import "./categories.styles.scss";

function App() {
  const categories = [
    {
      title: "Hats",
      id: 1,
    },
    {
      title: "Jackest",
      id: 2,
    },
    {
      title: "Sneakers",
      id: 3,
    },
    {
      title: "Womens",
      id: 4,
    },
    {
      title: "Mens",
      id: 5,
    },
  ];
  return (
    <div className="categories-container">
      {categories.map(({ title, id }) => (
        <div className="category-container" key={id}>
          <div className="background-image" />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
