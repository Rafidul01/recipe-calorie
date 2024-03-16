const CurrentlyCooking = () => {
   return(
    <div>
      <h1 className="text-center text-[#282828] text-2xl font-semibold lexend mt-8">Currently cooking: 01</h1>
      <hr className="max-w-[350px] mx-auto mt-4 mb-6"/>
      <div className="fira-sans">
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
          <tbody className="text-[#282828B2] text-base font-normal">
            {/* row 1 */}
            <tr className="hover">
              <th>1</th>
              <td>Chicken Caesar Salad</td>
              <td>20 minutes</td>
              <td >400 calories </td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>2</th>
              <td>Chicken Caesar Salad</td>
              <td>20 minutes</td>
              <td >400 calories </td>
            </tr>
            {/* result */}
            <tr className="hover text-[#282828CC] font-medium">
              <th></th>
              <td></td>
              <td>Total Time = 45 minutes</td>
              <td >Total Calories = 1050 calories</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
        
   )
}
export default CurrentlyCooking;
