import React, { Fragment } from "react";

const Todolist = ({ todolist }) => {
  return todolist.map((item) => {
    return (
      <Fragment>
        <div className="todo">
          <h3>{item}</h3>
          <div className="radio">
            <div></div>
          </div>
        </div>
      </Fragment>
    );
  });
};

export default Todolist;