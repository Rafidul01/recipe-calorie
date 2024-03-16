
/* eslint-disable react/prop-types */
const CurrentlyCooking = ({currentlyCooking, time , cal}) => {
   return(
    <div>
      <h1 className="text-center text-[#282828] text-2xl font-semibold lexend mt-8">Currently cooking: {currentlyCooking.length}</h1>
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
            </tr>
          </thead>
          <tbody className="text-[#282828B2] text-base font-normal bg-gray-100">
            {/* row 1 */}
            {
              
              currentlyCooking.map((newCart,inx) => <tr key={newCart.recipe_id} className="hover ">
              <th>{inx+1}</th>
              <td>{newCart.recipe_name}</td>
              <td>{newCart.preparing_time} minutes </td>
              <td>{newCart.calories} calories</td>
            </tr> )
            }
            {/* result */}
            <tr className="hover text-[#282828CC] font-medium">
              <th></th>
              <td></td>
              <td>Total Time = {time} minutes</td>
              <td >Total Calories = {cal} calories</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
        
   )
}
export default CurrentlyCooking;
