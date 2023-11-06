import Image from 'next/image'
import Link from 'next/link'

const CartButton = () => {
    return (
        <Link href='/'><Image src='/header/shoppingCart.svg' alt='logo' width={24} height={24} /></Link>
    )
}

export default CartButton