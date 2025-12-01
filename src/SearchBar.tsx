import { Input } from "@/components/ui/input";

export function SearchBar() {
  return (
    <div className="flex items-center space-x-2 w-75 max-w-md border border-black-500 rounded-md ml-64 mt-6">
      <Input
        type="text"
        placeholder="      Search..."
        className="flex-1 border-none"
      />
      <img
        src="/searchicon.png"
        alt="search-icon"
        className="w-3.5 h-3.5 absolute ml-3"
      />
    </div>
  );
}
