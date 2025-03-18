import Image from "next/image";
import { fetchDynamicProduct } from "../../actions/fetchDynamicData";

export default async function DynamicPage({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;
    const product = await fetchDynamicProduct(id);

    return (
        <main>
            <Image 
                src= {product.thumbnail} 
                width={300} 
                height={300} 
                alt={product.title} 
            />
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </main>
    )
}
