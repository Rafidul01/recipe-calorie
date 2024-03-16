import Title from "./Title";
import Recipe from "./Recipe";
import Cart from "./Cart";
import { useEffect, useState } from "react";
const Recipes = () =>{
    const[recipes,setRecipes] = useState([]);
    useEffect(()=>{
        fetch('/recipes.json')
        .then((res) => res.json())
        .then(data => setRecipes(data));
    },[])
    const[carts,setCarts] = useState([]);
    const handleWantToCook = addRecipe =>{
        setCarts([...carts, addRecipe])
        console.log(carts);
        console.log(carts.length);
    }
    return(
        <div className="container mx-auto">
            <Title></Title>
            <div className="flex flex-col lg:flex-row justify-between gap-6 ">
                <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto gap-6 w-full lg:w-2/3">
                    {
                        recipes.map(card => <Recipe 
                            key={card.recipe_id} 
                            card={card}
                            handleWantToCook={handleWantToCook}
                            ></Recipe>)
                    }   
                </div>
                <div className="w-full lg:w-1/3 border border-[#28282826] py-[32px] rounded-2xl">
                    <Cart key={carts.id} carts={carts} ></Cart>
                </div>
            </div>
        </div>
    )
}
export default Recipes;