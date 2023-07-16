import ListItem from "./ListItem";

const Listings = ({ data }) => {
  return (
    <div className="flex justify-center w-full mt-[55px]">
      <div className="flex flex-col gap-9 w-[90%]">
        {data.map((list, index) => {
          return <ListItem key={index} list={list} />;
        })}
      </div>
    </div>
  );
};

export default Listings;
