import React from "react";
import {SidebarData} from "./Data";
import {FaFolder} from "react-icons/fa";

export default function Sidebar(props) {
  return (
    <>
      <div className="S-fixed">
        <div className="d-flex flex-column mt-3">
          <span className="mb-2 align-center">
            <FaFolder />
            <h6 className="ms-2 uppercase">Categories</h6>
          </span>
          <a className="fs-14 px-4 py-1" href="http://localhost:3000/">
            All
          </a>
          {SidebarData.map((i) => {
            const {name} = i;
            return (
              <a className="fs-14 px-4 py-1" href="http://localhost:3000/">
                {name}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
