import {
    CategoryContainer,
    CategoryBackgroundImage,
    CategoryBodyContainer,
    CategoryTitle,
    CategorySubtitle
} from './category-item.styles';

const CategoryItem = ({category}) => {
    const { title, imageUrl, route } = category;

    return (
        <CategoryContainer to={route}>
            <CategoryBackgroundImage imageUrl={imageUrl}/>
            <CategoryBodyContainer>
                <CategoryTitle>{title}</CategoryTitle>
                <CategorySubtitle>Shop Now</CategorySubtitle>
            </CategoryBodyContainer> 
        </CategoryContainer>
    );
}
export default CategoryItem;