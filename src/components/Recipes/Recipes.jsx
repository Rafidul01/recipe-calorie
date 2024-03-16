import Title from "./Title";
import Recipe from "./Recipe";
import Cart from "./Cart";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
const Recipes = () =>{
    const[recipes,setRecipes] = useState([]);
    useEffect(()=>{
        fetch('/recipes.json')
        .then((res) => res.json())
        .then(data => setRecipes(data));
    },[])
    const[carts,setCarts] = useState([]);
    const handleWantToCook = addRecipe =>{
        const exist = carts.find(x => x.recipe_id === addRecipe.recipe_id);
        if(!exist){
            setCarts([...carts, addRecipe]);
            toast.success("Added Successfully !");
        } 
        else{
            toast.error("Recipe already exits !");
        }
        // console.log(carts);
        // console.log(carts.length);
    }
    const[currentlyCooking,setCurrentlyCooking] = useState([]);
    const[time, setTime] = useState(0);
    const[cal, setCal] = useState(0);
    const handelCurrentlyCooking = Recipe => {
        const exist = currentlyCooking.find(x => x.recipe_id === Recipe.recipe_id);
        const newCart = carts.filter(x => x.recipe_id !== Recipe.recipe_id)
        setCarts(newCart);
        if(exist){
            toast.warn("Already Cooking !");
        }
        else{
        setTime(time+parseInt(Recipe.preparing_time));
        setCal(cal+parseInt(Recipe.calories));
        setCurrentlyCooking([...currentlyCooking, Recipe]);
        toast.success("Cooking Started Successfully !");
        }
        // console.log(time, cal);
    }
    return(
        <div className="container mx-auto">
            <Title></Title>
            <div className="flex flex-col lg:flex-row justify-between gap-6  items-start">
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
                    <Cart
                     key={carts.id} 
                     carts={carts}
                     handelCurrentlyCooking={handelCurrentlyCooking} 
                     currentlyCooking={currentlyCooking}
                     time={time}
                     cal={cal}
                     ></Cart>
                </div>
            </div>
        </div>
    )
}
export default Recipes;