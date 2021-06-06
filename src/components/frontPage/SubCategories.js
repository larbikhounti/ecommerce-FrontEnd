import {Button} from "react-bootstrap";

  function SubCategories(props) {
    let {categories,category} = props
    console.log(props)
    if(category){
      return (<div>
        {categories.map((cat,index)=>{
          return (
            <Button key={index}  onClick={()=>props.getBysubCategory(category,cat.name)}  variant="white" className="ml-1 border ">
            {cat.name}
            </Button>
          )
        })}
      </div>)
          
    }
  }
  export default SubCategories;
