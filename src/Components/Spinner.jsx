const Spinner = () => {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
        <div
          className="w-12 h-12 rounded-full animate-spin border-8 border-solid border-app-color border-t-transparent shadow-md"
        ></div>
      </div>
    </>
  );
};

export default Spinner;
