interface Props {
  isLoading: boolean;
}

const LoadingText = (props: Props) => {
  if (!props.isLoading) return null;
  return (
    <div className="flex items-center gap-2 text-center text-2xl leading-[80vh]">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-400 border-t-black bg-transparent"></div>
      <span>Loading...</span>
    </div>
  );
};

export default LoadingText;
