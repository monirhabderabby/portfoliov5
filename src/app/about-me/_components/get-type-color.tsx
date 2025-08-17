export const getTypeColor = (type: string) => {
  const colors: Record<string, string> = {
    education:
      "bg-blue-500/10 text-blue-800 hover:bg-blue-500/20 hover:text-blue-800 border-blue-200/40",
    transition:
      "bg-orange-500/10 text-orange-800 hover:bg-orange-500/20 hover:text-orange-800 border-orange-200/40",
    learning:
      "bg-green-500/10 text-green-800 hover:bg-green-500/20 hover:text-green-800 border-green-200/40",
    experience:
      "bg-purple-500/10 text-purple-800 hover:bg-purple-500/20 hover:text-purple-800 border-purple-200/40",
    leadership:
      "bg-red-500/10 text-red-800 hover:bg-red-500/20 hover:text-red-800 border-red-200/40",
    recognition:
      "bg-yellow-500/10 text-yellow-800 hover:bg-yellow-500/20 hover:text-yellow-800 border-yellow-200/40",
    executive:
      "bg-indigo-500/10 text-indigo-800 hover:bg-indigo-500/20 hover:text-indigo-800 border-indigo-200/40",
  };
  return (
    colors[type] ||
    "bg-gray-500/10 text-gray-800 hover:bg-gray-500/20 hover:text-gray-800 border-gray-200/40"
  );
};
