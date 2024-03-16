import { MdOutlineWatchLater } from "react-icons/md";
import { RiFireLine } from "react-icons/ri";
const Recipe = () =>{
    return(
      <div className="card lg:w-96 bg-base-100 shadow-xl border border-[#2828281A]">
  <figure className="p-6">
    <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body pt-0 space-y-4">
    <h2 className="card-title text-[#282828] font-bold text-[20px] lexend ">Shoes!</h2>
    <p className="text-[#878787] font-normal text-base fira-sans">If a dog chews shoes whose shoes does he choose?</p>
    <hr className="border-[#2828281A]" />
    <div>
      <h1 className="lexend text-[#282828] text-lg font-medium mb-4">Ingredients: 6</h1>
      <ul className="list-disc fira-sans text-[#878787] text-lg ml-6 font-normal">
      <li>500g ground beef</li>
      <li>500g ground beef</li>
      <li>500g ground beef</li>
    </ul>
    </div>
    <hr className="border-[#2828281A]" />
    <div className="flex justify-between text-[#282828CC] fira-sans font-normal">
      <p className="flex items-center gap-4"><MdOutlineWatchLater /> 30 minutes</p>
      <p className="flex items-center gap-4"><RiFireLine /> 600 calories</p>
    </div>
    <div className="card-actions">
      <button className="btn bg-[#0be58a] rounded-[50px] text-[#150B2B] font-medium text-lg">Want to Cook</button>
    </div>
  </div>
</div>
    )
}
export default Recipe;