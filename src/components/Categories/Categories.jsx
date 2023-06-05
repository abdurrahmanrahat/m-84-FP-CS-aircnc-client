import CategoryBox from "./CategoryBox";
import { categories } from "./categoriesData";

const Categories = () => {
    return (
        <div>
            <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
                {
                    categories.map((item, index) => <CategoryBox
                        key={index}
                        label={item.label}
                        icon={item.icon}
                    ></CategoryBox>)
                }
            </div>
        </div>
    );
};

export default Categories;