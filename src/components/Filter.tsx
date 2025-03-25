import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface FilterProps {
    onCategoryChange: (category: string) => void;
}

export default function Filter({ onCategoryChange }: FilterProps) {
    function handleChange(value: string): void {
        onCategoryChange(value);
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
