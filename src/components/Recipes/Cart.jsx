/* eslint-disable react/prop-types */
import WantToCook from "./WantToCook";
import CurrentlyCooking from "./CurrentlyCooking";
const Cart = ({carts, handelCurrentlyCooking, currentlyCooking, time, cal}) => {
   return(
    <div>
        <WantToCook key={carts.id} carts={carts}
         handelCurrentlyCooking={handelCurrentlyCooking}
         ></WantToCook >
        <CurrentlyCooking 
        currentlyCooking={currentlyCooking}
        time={time}
        cal={cal}
        ></CurrentlyCooking>
    </div>
   )
}
export default Cart;
