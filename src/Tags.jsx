import { ReactComponent as X } from "./images/x.svg";

const Tags = ({ filterTags, setFilterTags }) => {
  const handleTagRemove = (e) => {
    setFilterTags(
      filterTags.filter((tag) => {
        return tag !== e.target.value;
      })
    );
  };
  const handleClearTags = () => {
    setFilterTags([]);
  };
  return (
    <section className="flex items-center justify-between font-default px-4 py-4 sm:px-10 mt-[-80px] sm:mt-[-110px] mb-[50px] min-h-[73px] w-[90%] max-w-[1000px] rounded-md shadow-md bg-[white] z-10">
      <div className="flex items-center flex-wrap gap-5 ">
        {filterTags.map((tag, index) => {
          return (
            <div
              className="flex gap-1 rounded-md bg-lgcFilterTabs text-textCyan "
              key={index}
            >
              <div className="px-2 pt-[3px] font-extrabold text-15">{tag}</div>
              <button
                type="input"
                value={tag}
                className="p-2 bg-textCyan  rounded-tr-md rounded-br-md hover:bg-vdg"
                onClick={(e) => {
                  handleTagRemove(e);
                }}
              >
                <X
                  className="pointer-events-none"
                  stroke="white"
                  fill="white"
                />
              </button>
            </div>
          );
        })}
      </div>
      <button
        className="p-2 text-15 font-bold text-dg hover:text-textCyan hover:underline hover:underline-offset-2"
        onClick={handleClearTags}
      >
        Clear
      </button>
    </section>
  );
};

export default Tags;
