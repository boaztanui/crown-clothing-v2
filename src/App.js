import "./App.css";

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
    <div className="categories- container">
      {categories.map(({ title, id }) => (
        <div className="category-container" key={id}>
          {/**img/ */}
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      ))}
    </div>
  );
}

export default App;