export const getTypeColor = (type: string) => {
  const colors: Record<string, string> = {
    education:
      "bg-blue-500/10 text-blue-900 hover:bg-blue-500/20 hover:text-blue-900 border-blue-200/40",
    transition:
      "bg-orange-500/10 text-orange-900 hover:bg-orange-500/20 hover:text-orange-900 border-orange-200/40",
    learning:
      "bg-green-500/10 text-green-900 hover:bg-green-500/20 hover:text-green-900 border-green-200/40",
    experience:
      "bg-purple-500/10 text-purple-900 hover:bg-purple-500/20 hover:text-purple-900 border-purple-200/40",
    leadership:
      "bg-red-500/10 text-red-900 hover:bg-red-500/20 hover:text-red-900 border-red-200/40",
    recognition:
      "bg-yellow-500/10 text-yellow-900 hover:bg-yellow-500/20 hover:text-yellow-900 border-yellow-200/40",
    executive:
      "bg-indigo-500/10 text-indigo-900 hover:bg-indigo-500/20 hover:text-indigo-900 border-indigo-200/40",
  };
  return (
    colors[type] ||
    "bg-gray-500/10 text-gray-900 hover:bg-gray-500/20 hover:text-gray-900 border-gray-200/40"
  );
};
