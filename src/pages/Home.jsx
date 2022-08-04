import Categories from "../components/Categories";
import Header from "../components/Header";
import Menus from "../components/Menus";
import data from "../data";
import { useState } from "react";

const Home = () => {

  const allCategories = ["all", ...new Set(data.map((item) => item.category))];
  const [menuItems, setMenuItems] = useState(data);
  
  const filterItems = (category) => {
      if (category === "all") setMenuItems(data);
      else {
        const filtered = data.filter((item) => item.category === category);
        setMenuItems(filtered);
      }
  }
  return (
    <div>
        <Header />
        <Categories allCategories={allCategories} filterItems={filterItems} />
        <Menus menuItems={menuItems} />
    </div>
  )
}

export default Home