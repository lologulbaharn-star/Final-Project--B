const Skeleton = () => {
  return (
    <div className="bg-gray-200 animate-pulse rounded-lg h-80 w-full">
      <div className="bg-gray-300 h-48 w-full mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mx-4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2 mx-4"></div>
    </div>
  );
};

export default Skeleton;