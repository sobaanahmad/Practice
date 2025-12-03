import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export function SearchBar() {
  return (
    <div className="flex items-center space-x-1 w-75 max-w-md border border-black-500 rounded-md ml-64 mt-6">
      <SearchIcon className="h-5 w-5 ml-2"/>
      <Input
        type="text"
        placeholder="Search..."
        className="flex-1 border-none shadow-none"
      />
    </div>
  );
}
