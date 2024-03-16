
/* eslint-disable react/prop-types */
const WantToCook = ({carts, handelCurrentlyCooking}) => {
  // const [recipe_name] = carts;
  // console.log(carts)
  return (
    <div>
      <h1 className="text-center text-[#282828] text-2xl font-semibold lexend">Want to cook: {carts.length}</h1>
      <hr className="max-w-[350px] mx-auto mt-4 mb-6"/>
      <div className="overflow-x-auto fira-sans">
        <table className="table">
          {/* head */}
          <thead className="text-[#878787] font-medium">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="text-[#282828B2] text-base font-normal  bg-slate-100">
            {/* row 1 */}
            {
              
              carts.map((newCart,inx) => <tr key={newCart.recipe_id} className="hover ">
              <th>{inx+1}</th>
              <td>{newCart.recipe_name}</td>
              <td>{newCart.preparing_time} minutes </td>
              <td>{newCart.calories} calories</td>
              <td><button onClick={()=> handelCurrentlyCooking(newCart)} className="btn bg-[#0BE58A] rounded-[24px] lg:font-medium font-thin w-[60px] lg:w-auto text-xs lg:text-base">Preparing</button></td>
            </tr> )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default WantToCook;
