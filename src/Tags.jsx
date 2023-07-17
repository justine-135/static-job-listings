import { ReactComponent as X } from "./images/x.svg";

const Tags = ({ filterTags, setFilterTags }) => {
  const handleTagRemove = (e) => {
    console.log(e.target);
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
    <section className="relative flex items-center justify-between font-default px-10 mt-[-80px] sm:mt-[-110px] mb-[50px] min-h-[73px] w-[90%] max-w-[1000px] rounded-md shadow-md bg-[white] z-10">
      <div className="flex items-center gap-5">
        {filterTags.map((tag, index) => {
          return (
            <div className="flex gap-1 bg-[lightcyan] rounded-sm" key={index}>
              <div className="px-2 pt-[3px]">{tag}</div>
              <button
                type="input"
                value={tag}
                className="p-2 bg-[lightcoral] rounded-tr-sm rounded-br-sm"
                onClick={(e) => {
                  handleTagRemove(e);
                }}
              >
                <X className="pointer-events-none" />
              </button>
            </div>
          );
        })}
      </div>
      <button className="p-2" onClick={handleClearTags}>
        Clear
      </button>
    </section>
  );
};

export default Tags;
