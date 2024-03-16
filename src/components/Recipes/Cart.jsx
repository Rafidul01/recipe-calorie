import WantToCook from "./WantToCook";
import CurrentlyCooking from "./CurrentlyCooking";
const Cart = ({carts}) => {
   return(
    <div>
        <WantToCook key={carts.id} carts={carts}></WantToCook>
        <CurrentlyCooking></CurrentlyCooking>
    </div>
   )
}
export default Cart;
