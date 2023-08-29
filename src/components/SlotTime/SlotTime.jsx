import React, { useState } from "react";
import "./SlotTime.css";
import Toggle from "./Toggle";

const weekDays = [
  {
    id: 1,
    day: "Sun",
    available: true,
  },
  {
    id: 2,
    day: "Mon",
    available: true,
  },
  {
    id: 3,
    day: "Tue",
    available: true,
  },
  {
    id: 4,
    day: "Wed",
    available: false,
  },
  {
    id: 5,
    day: "Thur",
    available: false,
  },
  {
    id: 6,
    day: "Fri",
    available: true,
  },
  {
    id: 7,
    day: "Sat",
    available: true,
  },
];

const SlotTime = () => {
  const [timePickers, setTimePickers] = useState([{ id: 1 }]);
  const [newDivCount, setNewDivCount] = useState(0);
  const [addedDivs, setAddedDivs] = useState({});

  const addTimePicker = () => {
    setTimePickers([...timePickers, { id: timePickers.length + 1 }]);
  };

  const removeTimePicker = (day, id) => {
    const dayDivCount = addedDivs[day] || 0;
    setAddedDivs({
      ...addedDivs,
      [day]: dayDivCount - 1,
    });
    setTimePickers(timePickers.filter((picker) => picker.id !== id));
  };

  const addNewDiv = () => {
    setNewDivCount(newDivCount + 1);
  };

  const handleAddNewDiv = (day) => {
    addNewDiv();
    setAddedDivs({
      ...addedDivs,
      [day]: (addedDivs[day] || 0) + 1,
    });
  };

  return (
    <>
      {/* <!-- slot setting show --> */}
      <div class="maindiv_day">
        <div class="day-name">Sun</div>
        <div class="time-picker">
          <div class="start-time">
            <input type="time" class="time-day" />
            <i class="fas fa-chevron-down drop-icon"></i>
          </div>
          <p>-</p>
          <div class="start-time">
            <input type="time" class="time-day" />
            <i class="fas fa-chevron-down drop-icon"></i>
          </div>
        </div>
      </div>
      <hr />
      <div class="maindiv_day">
        <div class="day-name">Mon</div>
        <div class="time-picker">
          <div class="start-time">
            <input type="time" class="time-day" />
            <i class="fas fa-chevron-down drop-icon"></i>
          </div>
          <p>-</p>
          <div class="start-time">
            <input type="time" class="time-day" />
            <i class="fas fa-chevron-down drop-icon"></i>
          </div>
        </div>
      </div>
      <div class="maindiv_day">
        <div class="day-name">Tue</div>
        <div class="time-picker">
          <div class="start-time">
            <input type="time" class="time-day" />
            <i class="fas fa-chevron-down drop-icon"></i>
          </div>
          <p>-</p>
          <div class="start-time">
            <input type="time" class="time-day" />
            <i class="fas fa-chevron-down drop-icon"></i>
          </div>
        </div>
      </div>
      <div class="maindiv_day">
        <div class="day-name">Wed</div>
        <div class="">
          <p class="un-available">Unavailable</p>
        </div>
      </div>
      <div class="maindiv_day">
        <div class="day-name">Thur</div>
        <div class="">
          <p class="un-available">Unavailable</p>
        </div>
      </div>
      <div class="maindiv_day">
        <div class="day-name">Fri</div>
        <div class="">
          <p class="un-available">Unavailable</p>
        </div>
      </div>
      <div class="maindiv_day">
        <div class="day-name">Sat</div>
        <div class="">
          <p class="un-available">Unavailable</p>
        </div>
      </div>
      {/* <!-- end --> */}
      {/* <!-- slot edit start --> */}
      <div class="edit-slot-div">
        <div class="emergency-calls">
          <input
            type="checkbox"
            style={{
              width: "24px",
              height: "24px",
              border: "1px solid #9393aa",
            }}
          />
          <label class="eme_label">Emergency calls</label>
        </div>
        {/* {weekDays.map((val) => {
          return (
            <div className="edit_time_slot_main">
              <div className="map_main_div">
                {timePickers.map((picker, index) => (
                  <div className="time-picker" key={picker.id}>
                    {index == 0 ? <Toggle label={val.day} /> : <div></div>}
                    {index !== 0 && (
                      <i
                        class="fa-regular fa-circle-xmark"
                        onClick={() => removeTimePicker(picker.id)}
                      ></i>
                    )}
                    <div className="start-time">
                      <input type="time" className="time-day" />
                      <i className="fas fa-chevron-down drop-icon"></i>
                    </div>
                    <p>-</p>
                    <div className="start-time">
                      <input type="time" className="time-day" />
                      <i className="fas fa-chevron-down drop-icon"></i>
                    </div>

                    {index === timePickers.length - 1 && (
                      <div className="">
                        <i
                          className="fa-solid fa-plus"
                          style={{ color: "#3093BB", fontSize: "22px" }}
                          onClick={addTimePicker}
                        ></i>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })} */}
        {weekDays.map((val) => {
          const dayDivCount = addedDivs[val.day] || 0;

          return (
            <div className="edit_time_slot_main" key={val.id}>
              <div className="map_main_div">
                {Array.from(Array(dayDivCount + 1), (_, index) => index).map(
                  (divIndex) => {
                    const pickerId = divIndex + 1;

                    return (
                      <div className="time-picker" key={pickerId}>
                        {divIndex === 0 ? (
                          <Toggle label={val.day} />
                        ) : (
                          <div></div>
                        )}
                        {divIndex !== 0 && (
                          <i
                            className="fa-regular fa-circle-xmark"
                            onClick={() => removeTimePicker(val.day, pickerId)}
                          ></i>
                        )}

                        {val.available == true ? (
                          <>
                            <div className="start-time">
                              <input type="time" className="time-day" />
                              <i className="fas fa-chevron-down drop-icon"></i>
                            </div>
                            <p>-</p>
                            <div className="start-time">
                              <input type="time" className="time-day" />
                              <i className="fas fa-chevron-down drop-icon"></i>
                            </div>
                          </>
                        ) : (
                          ""
                        )}

                        {divIndex === dayDivCount && (
                          <div className="">
                            <i
                              className="fa-solid fa-plus"
                              style={{ color: "#3093BB", fontSize: "22px" }}
                              onClick={() => handleAddNewDiv(val.day)}
                            ></i>
                          </div>
                        )}
                        {/* Remove button for each time-picker */}
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          );
        })}
      </div>
      {/* <!-- end --> */}
    </>
  );
};

export default SlotTime;
