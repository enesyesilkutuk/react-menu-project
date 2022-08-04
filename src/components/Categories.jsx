import "./Categories.css";

const Categories = ({ allCategories, filterItems }) => {
  
  return (
    <div className="btn-container">
      {allCategories.map((item, index) => {
        return (
         <button type="button" key={index} onClick={() => filterItems(item)}>{item}</button>
        )
      })}
    </div>
  )
}

export default Categories;