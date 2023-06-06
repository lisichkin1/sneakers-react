import AppContext from "../context"
import { useContext } from "react"
export const useCart = () => {
    const {cartSneakersItems, setCartSetSneakersItems} = useContext(AppContext)
    const totalPrice = cartSneakersItems.reduce((sum, obj) => obj.price + sum, 0)
    return {cartSneakersItems, setCartSetSneakersItems, totalPrice}
}