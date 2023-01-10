import "./_heroSearch.scss";
import "react-date-range/dist/theme/default.css";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

const HeroSearch = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openTribe, setOpenTribe] = useState(false);
  const [tribe, setTribe] = useState({
    adults: 1,
    children: 0,
    rooms: 1,
  });

  const handleClick = (name, operation) => {
    setTribe((prev) => {
      return {
        ...prev,
        [name]: operation === "increase" ? tribe[name] + 1 : tribe[name] - 1,
      };
    });
  };

  return (
    <article className="hero-search">
      <figure className="search-item">
        <span className="fa-solid fa-bed search-icon"></span>
        <input type="text" placeholder="Destination?..." />
      </figure>
      <figure className="search-item">
        <span className="fa-solid fa-calendar-days search-icon"></span>
        <figcaption onClick={() => setOpenDate(!openDate)}>{`${format(
          date[0].startDate,
          "MM/dd/yyyy"
        )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</figcaption>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="calendar"
          />
        )}
      </figure>
      <figure className="search-item" onClick={() => setOpenTribe(!openTribe)}>
        <span className="fa-solid fa-bed search-icon"></span>
        <figcaption>{`${tribe.adults} adults - ${tribe.children} children - ${tribe.rooms} rooms`}</figcaption>
        {openTribe && (
          <div className="tribe">
            <div className="tribe-item">
              <span className="tribe-text">Adults</span>
              <div className="tribe-counters">
                <button
                  className="counter-btn"
                  onClick={() => handleClick("adults", "decrease")}
                  disabled={tribe.adults <= 1}
                >
                  -
                </button>
                <span className="counter-num">{tribe.adults}</span>
                <button
                  className="counter-btn"
                  onClick={() => handleClick("adults", "increase")}
                >
                  +
                </button>
              </div>
            </div>
            <div className="tribe-item">
              <span className="tribe-text">Children</span>
              <div className="tribe-counters">
                <button
                  className="counter-btn"
                  onClick={() => handleClick("children", "decrease")}
                  disabled={tribe.children <= 0}
                >
                  -
                </button>
                <span className="counter-num">{tribe.children}</span>
                <button
                  className="counter-btn"
                  onClick={() => handleClick("children", "decrease")}
                >
                  +
                </button>
              </div>
            </div>
            <div className="tribe-item">
              <span className="tribe-text">Rooms</span>
              <div className="tribe-counters">
                <button
                  className="counter-btn"
                  onClick={() => handleClick("rooms", "decrease")}
                  disabled={tribe.rooms <= 1}
                >
                  -
                </button>
                <span className="counter-num">{tribe.rooms}</span>
                <button
                  className="counter-btn"
                  onClick={() => handleClick("rooms", "decrease")}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </figure>
      <button>Search</button>
    </article>
  );
};

export default HeroSearch;
