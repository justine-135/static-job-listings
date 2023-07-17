import ListItem from "./ListItem";
import Tags from "./Tags";
import { useState } from "react";

const Listings = ({ data }) => {
  const [filterTags, setFilterTags] = useState([]);

  return (
    <main className="flex flex-col items-center w-full my-[55px] sm:my-[75px]">
      {filterTags.length !== 0 ? (
        <Tags filterTags={filterTags} setFilterTags={setFilterTags} />
      ) : (
        ""
      )}
      <section className="flex flex-col gap-9 w-[90%] max-w-[1000px]">
        {data.map((list, index) => {
          if (filterTags.length == 0) {
            return (
              <ListItem
                key={index}
                list={list}
                filterTags={filterTags}
                setFilterTags={setFilterTags}
              />
            );
          }
          if (filterTags.every((tags) => list.languages.indexOf(tags) >= 0)) {
            return (
              <ListItem
                key={index}
                list={list}
                filterTags={filterTags}
                setFilterTags={setFilterTags}
              />
            );
          }
        })}
      </section>
    </main>
  );
};

export default Listings;
