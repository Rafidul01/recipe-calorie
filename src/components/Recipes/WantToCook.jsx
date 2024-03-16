const WantToCook = () => {
  return (
    <div>
      <h1 className="text-center text-[#282828] text-2xl font-semibold lexend">Want to cook: 01</h1>
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
            <tr className="hover ">
              <th>1</th>
              <td>Chicken Caesar Salad</td>
              <td>20 minutes</td>
              <td className="flex flex-col lg:flex-row items-center ">400 calories <button className="btn bg-[#0BE58A] rounded-[24px] lg:font-medium font-thin w-[60px] lg:w-auto text-xs lg:text-base">Preparing</button></td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>1</th>
              <td>Chicken Caesar Salad</td>
              <td>20 minutes</td>
              <td className="flex flex-col lg:flex-row items-center ">100 calories <button className="btn bg-[#0BE58A] rounded-[24px] lg:font-medium font-thin w-[60px] lg:w-auto text-xs lg:text-base">Preparing</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default WantToCook;
