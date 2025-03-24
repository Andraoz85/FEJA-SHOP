import { useRouter } from "next/navigation";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export default function Filter() {
    const router = useRouter();

    function handleChange(value: string): void {
        router.push(`/products/category/${value}`)
        console.log(value);
    }

    return (
        <div>
            <Label htmlFor="filter">Filter:</Label>
            <Select onValueChange={handleChange}>
                <SelectTrigger id="filter" className="w-[180px]">
                    <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                    {/* TODO: change to dynamic categories */}
                    <SelectItem value="beauty">Beauty</SelectItem>
                    <SelectItem value="fragrances">Fragrances</SelectItem>
                    <SelectItem value="furniture">Furniture</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}
