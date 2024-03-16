import Title from "./Title";
import Recipe from "./Recipe";
const Recipes = () =>{
    return(
        <div className="container mx-auto">
            <Title></Title>

            <div>
                <div className="grid grid-cols-3 mx-auto">
                    <Recipe></Recipe>
                    <Recipe></Recipe>
                    <Recipe></Recipe>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}
export default Recipes;