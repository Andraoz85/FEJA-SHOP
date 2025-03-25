import { useEffect, useState } from "react";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { fetchCategories } from "@/actions/fetchData";

interface FilterProps {
    onCategoryChange: (category: string | null) => void;
}

export default function Filter({ onCategoryChange }: FilterProps) {
    const [categories, setCategories] = useState<string[]>([]);

    useEffect(() => {
        const loadCategories = async () => {
            const data = await fetchCategories();
            setCategories(data);
        };
        loadCategories();
    }, []);

    function handleChange(value: string): void {
        onCategoryChange(value === "all" ? null : value);
    }

    return (
        <div>
            <Label htmlFor="filter">Filter:</Label>
            <Select onValueChange={handleChange}>
                <SelectTrigger id="filter" className="w-[180px]">
                    <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All categories</SelectItem>
                    {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}
