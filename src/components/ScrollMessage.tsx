interface ScrollMessageProps {
  searchQuery: string;
  isFetchingNextPage: boolean;
  hasNextPage: boolean;
}

const ScrollMessage: React.FC<ScrollMessageProps> = ({
  searchQuery,
  isFetchingNextPage,
  hasNextPage,
}) => {
  if (searchQuery !== "") return null;
  return (
    <div className="text-center text-slate-50">
      {isFetchingNextPage
        ? "Loading more movies..."
        : hasNextPage
          ? "Scroll down to load more movies"
          : "No more movies to load"}
    </div>
  );
};

export default ScrollMessage;
