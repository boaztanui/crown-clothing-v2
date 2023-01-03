import "./App.css";
import "./categories.styles.scss";

function App() {
  const categories = [
    {
      title: "Hats",
      id: 1,
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
      title: "Jackest",
      id: 2,
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
      title: "Sneakers",
      id: 3,
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
      title: "Womens",
      id: 4,
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
      title: "Mens",
      id: 5,
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    },
  ];
  return (
    <div className="categories-container">
      {categories.map(({ title, id, imageUrl }) => (
        <div className="category-container" key={id}>
          <div
            className="background-image"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
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
