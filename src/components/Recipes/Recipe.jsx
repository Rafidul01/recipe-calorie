/* eslint-disable react/prop-types */
import { MdOutlineWatchLater } from "react-icons/md";
import { RiFireLine } from "react-icons/ri";
const Recipe = ({card, handleWantToCook}) =>{
  // eslint-disable-next-line react/prop-types
  const{recipe_name, short_description, ingredients, preparing_time, calories, recipe_image} = card;
    return(
      <div className="card lg:w-96 bg-base-100 shadow-xl border border-[#2828281A]">
  <figure className="p-6">
    <img src={recipe_image} alt="Shoes" className="rounded-xl h-[200px] w-full" />
  </figure>
  <div className="card-body pt-0 space-y-4">
    <h2 className="card-title text-[#282828] font-bold text-[20px] lexend ">{recipe_name}</h2>
    <p className="text-[#878787] font-normal text-base fira-sans">{short_description}</p>
    <hr className="border-[#2828281A]" />
    <div>
      <h1 className="lexend text-[#282828] text-lg font-medium mb-4">Ingredients: {ingredients.length}</h1>
      <ul className="list-disc fira-sans text-[#878787] text-lg ml-6 font-normal">
        {
          ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)
        }
    </ul>
    </div>
    <hr className="border-[#2828281A]" />
    <div className="flex justify-between text-[#282828CC] fira-sans font-normal">
      <p className="flex items-center gap-4"><MdOutlineWatchLater /> {preparing_time} minutes</p>
      <p className="flex items-center gap-4"><RiFireLine /> {calories} calories</p>
    </div>
    <div className="card-actions">
      <button onClick={()=>handleWantToCook(card)} className="btn bg-[#0be58a] rounded-[50px] text-[#150B2B] font-medium text-lg">Want to Cook</button>
    </div>
  </div>
</div>
    )
}
export default Recipe;