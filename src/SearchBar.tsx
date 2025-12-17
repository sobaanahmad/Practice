import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export function SearchBar() {
  return (
    <div
      className="flex items-center space-x-1 w-75 max-w-md ml-66 mt-6
                border border-gray-300 rounded-md
                focus-within:ring-2 focus-within:ring-gray-300
                focus-within:border-gray-300"
    >
      <SearchIcon className="h-5 w-5 ml-2 text-gray-500" />
      <Input
        type="text"
        placeholder="Search..."
        className="flex-1 border-none shadow-none focus-visible:ring-0"
      />
    </div>
  );
}
