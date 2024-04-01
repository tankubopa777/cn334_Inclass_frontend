import Link from 'next/link';


export default function Product() {
    let id_from_variable = 334;
    return (
        <Link href="/product/123">
         <button className='m-1 p-4 bg-blue-400 rounded-3xl'>Product 123</button>
        </Link>
        <Link href={`/product/${id_from_variable}`}>
        <button className='m-1 p-4 bg-blue-400 rounded-3xl'>Product {id_from_variable}</button> </Link>
    )
}
