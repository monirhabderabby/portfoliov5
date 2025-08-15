export const getTypeColor = (type: string) => {
  const colors: Record<string, string> = {
    education: "bg-blue-500/10 text-blue-600 border-blue-200",
    transition: "bg-orange-500/10 text-orange-600 border-orange-200",
    learning: "bg-green-500/10 text-green-600 border-green-200",
    experience: "bg-purple-500/10 text-purple-600 border-purple-200",
    leadership: "bg-red-500/10 text-red-600 border-red-200",
    recognition: "bg-yellow-500/10 text-yellow-600 border-yellow-200",
    executive: "bg-indigo-500/10 text-indigo-600 border-indigo-200",
  };
  return colors[type] || "bg-gray-500/10 text-gray-600 border-gray-200";
};
