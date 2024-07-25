import './category-item.styles.scss';

const CategoryItem = ({category}) => {
    const { title, imageUrl } = category;
    return (
        <div className="category-container">
            <div className="category-body-container">
                <div className="background-image" style={{
                    backgroundImage: `url(${imageUrl})`
                }}/>
                <h2>
                    {title}
                </h2>
                <p>
                    Shop Meow
                </p>
            </div>
        </div>
    );
}
export default CategoryItem;