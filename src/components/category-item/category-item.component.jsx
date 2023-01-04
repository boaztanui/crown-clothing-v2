import "./category-item.styles.scss";

function CategoryItem({ category }) {
  const { imageUrl, title, size } = category;
  return (
    <div className={`category-container ${size}`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}

export default CategoryItem;
