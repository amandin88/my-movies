import Categories from "../constants/Categories";
import Category from "../models/Category";

const CategoriesList = [
  new Category(1, Categories.ACTION),
  new Category(2, Categories.COMEDY),
  new Category(3, Categories.DRAMA),
  new Category(4, Categories.FANTASY),
  new Category(5, Categories.HORROR),
  new Category(6, Categories.MYSTERY),
  new Category(7, Categories.ROMANCE),
  new Category(8, Categories.THRILLER),
];

export default CategoriesList;
