import { ReactComponent as Dot } from "./images/dot.svg";

const ListItem = ({ list }) => {
  return (
    <div
      className={`bg-[white] rounded-md shadow-sm border-l-[5px] font-default ${
        list.new && list.featured ? "border-borderRight" : "border-none"
      } `}
    >
      <div className="relative flex flex-col sm:flex-row sm:items-center justify-between p-4">
        <div className="flex flex-col sm:flex-row sm:items-center">
          <div className="absolute sm:relative translate-y-[-80%] sm:translate-y-0 sm:mr-5">
            <img
              className="h-[48px] w-[48px] sm:h-[90px] sm:w-[90px]"
              src={require(`${list.logo}`)}
              alt=""
            />
          </div>
          <div>
            <div className="flex mt-5 sm:mt-0">
              <div className="mr-5">{list.company}</div>
              {list.new ? <div className="mr-3">NEW</div> : ""}
              {list.featured ? <div>FEATURED</div> : ""}
            </div>
            <div>{list.position}</div>
            <ul className="flex items-center justify-between w-[60%] min-w-[205px] max-w-[258px]">
              <li>{list.postedAt}</li>
              <li>
                <Dot />
              </li>
              <li>{list.contract}</li>
              <li>
                <Dot />
              </li>
              <li>{list.location}</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-2 border-t-[1px] sm:border-none border-borderTopTags pt-2">
          {list.languages.map((language, index) => {
            return (
              <button
                className="bg-lgcFilterTabs p-2 text-15 font-extrabold rounded-sm"
                key={index}
              >
                {language}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListItem;
