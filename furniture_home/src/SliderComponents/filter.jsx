import "./filter.css";
let filterProducts = (props)=>{
      function FilterValueChanged(e){
           props.filterValueSelected(e.target.value)
        }
        

return(
<div className="filterdiv">
          <select className="select" onChange={FilterValueChanged}>
            <option value="all">All Products</option>
            <option value="Sofa"> Sofa</option>
            <option value="Bed">Bed</option>
            <option value="Refrigerator">Refrigerator</option>
            <option value="Wardrobe">Wardrobe</option>
            <option value="Combo">Combo</option>
            <option value="Table">Table</option>
            <option value="Washing Machine">Washing Machine</option>
            <option value="Chair">Chair</option>
          </select>
          </div>
)
}
export default filterProducts;