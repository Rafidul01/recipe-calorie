import Title from "./Title";
import Recipe from "./Recipe";
import Cart from "./Cart";
const Recipes = () =>{
    return(
        <div className="container mx-auto">
            <Title></Title>

            <div className="flex flex-col lg:flex-row justify-between gap-6 ">
                <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-6 w-full lg:w-2/3">
                    <Recipe></Recipe>
                    <Recipe></Recipe>
                    <Recipe></Recipe>
                </div>
                <div className="w-full lg:w-1/3 border border-[#28282826] py-[32px] rounded-2xl">
                    <Cart></Cart>
                </div>
            </div>
        </div>
    )
}
export default Recipes;