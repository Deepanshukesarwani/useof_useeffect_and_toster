// import { computeHeadingLevel } from "@testing-library/react";
import './filter.css'
const Filter = (props) => {
    let filterdata=props.Filter;
    // let category=props.category;
    let setcategory=props.setcategory;
    function clickHandler(button)
    {
        // (button.target.textContent/)
        setcategory(button.target.textContent);
    }
  return (
    <div className='filterwrapper'>  
        <div id="grid_container">
        {
            filterdata.map((item)=>{
                return(
                    <div id="button_grid">
                        <button onClick={clickHandler}>{item.title}</button>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default Filter
