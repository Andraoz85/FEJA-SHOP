import { DynamicProductData } from "./interfaces";

export async function fetchDynamicProduct(id: string): Promise<DynamicProductData> {
    const url = `https://dummyjson.com/products/${id}`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP status: ${response.status} | ${response.statusText}`);
    }
    const data: DynamicProductData = await response.json();

    return data;
}
