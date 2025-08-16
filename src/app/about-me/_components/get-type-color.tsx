export const getTypeColor = (type: string) => {
  const colors: Record<string, string> = {
    education:
      "bg-blue-500/10 text-blue-600 hover:bg-blue-500/10 hover:text-blue-600 border-blue-200/20",
    transition:
      "bg-orange-500/10 text-orange-600 hover:bg-orange-500/10 hover:text-orange-600 border-orange-200/20",
    learning:
      "bg-green-500/10 text-green-600 hover:bg-green-500/10 hover:text-green-600 border-green-200/20",
    experience:
      "bg-purple-500/10 text-purple-600 hover:bg-purple-500/10 hover:text-purple-600 border-purple-200/20",
    leadership:
      "bg-red-500/10 text-red-600 hover:bg-red-500/10 hover:text-red-600 border-red-200/20",
    recognition:
      "bg-yellow-500/10 text-yellow-600 hover:bg-yellow-500/10 hover:text-yellow-600 border-yellow-200/20",
    executive:
      "bg-indigo-500/10 text-indigo-600 hover:bg-indigo-500/10 hover:text-indigo-600 border-indigo-200/20",
  };
  return (
    colors[type] ||
    "bg-gray-500/10 text-gray-600 hover:bg-gray-500/10 hover:text-gray-600 border-gray-200/20"
  );
};
