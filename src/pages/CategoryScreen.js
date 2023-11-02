import { CategoryButton } from "../components/CategoryButton";
import { Link } from "react-router-dom";
import "../assets/styles/CategoryScreen.css";
import cats from "../services/data.json";
import { useEffect, useState } from "react";

const CategoryScreen = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setCategories(cats.trivia_categories);
    }, []);

return (
    <div>
        <div className="container-fluid text-center">
            <p className="heading">Welcome to Quizo</p>
            <p className="detailText">Select category to start quiz</p>
        </div>
        <div className="categoryContainer">
            {categories.map((category) => {
                return (
                    <CategoryButton label={category.name}/>
                )
            })}
        </div>
        <div className="d-flex justify-content-center">
        <Link to="/details" className="d-flex btn btn-dark">Continue</Link>
        </div>
    </div>
)
}

export default CategoryScreen;



