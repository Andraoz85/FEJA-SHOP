import { fetchDynamicProduct } from "../../../actions";

export default async function DynamicPage({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id;
    const product = await fetchDynamicProduct(id);

    return (
        <main>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
        </main>
    )
}
