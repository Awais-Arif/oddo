import React from "react";

import {BiSearch} from "react-icons/bi";
import {GiProgression} from "react-icons/gi";
import {FiClock} from "react-icons/fi";
import {BsChatDots, BsFillGridFill, BsFillGrid3X3GapFill} from "react-icons/bs";
import {RiAdminLine} from "react-icons/ri";
import {AiFillStar} from "react-icons/ai";
import {MdFilterListAlt} from "react-icons/md";
import {FaBars, FaListUl} from "react-icons/fa";
import {IoIosArrowForward, IoIosArrowBack} from "react-icons/io";

export default function Navbar() {
  return (
    <>
      <div className="P-fixed">
        <div className="row gx-0 align-center py-3">
          <div
            className="col-sm-4 col-md-3 col-lg-2 ps-3 align-center"
            id="C-nav"
          >
            <a href="/">
              <BsFillGrid3X3GapFill />
            </a>
            <a href="/" className="mx-4">
              Apps
            </a>

            <div class="btn-group ">
              <a data-bs-toggle="dropdown" aria-expanded="false">
                Apps
                <span class="visually-hidden">Toggle Dropdown</span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item fs-14">Main Apps</a>
                </li>
                <li>
                  <a class="dropdown-item  fs-14">Theme Store</a>
                </li>
                <li>
                  <a class="dropdown-item  fs-14">Third-Party Apps</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-8 col-md-9 col-lg-10 px-3">
            <div
              className="align-end justify-content-end mt-2 mt-sm-0"
              id="C-nav"
            >
              <a href="/">
                <BsChatDots />
              </a>
              <a href="/" className="mx-3">
                <GiProgression />
              </a>

              <a href="/">
                <FiClock />
              </a>

              <div class="btn-group ">
                <a
                  className="ms-3 align-center"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <RiAdminLine />
                  <h6 className="ms-2">Administrator</h6>

                  <span class="visually-hidden">Toggle Dropdown</span>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item fs-14">Documentation</a>
                  </li>
                  <li>
                    <a class="dropdown-item  fs-14">Support</a>
                  </li>
                  <li>
                    <a class="dropdown-item  fs-14">Shortcuts</a>
                  </li>
                  <li>
                    <a class="dropdown-item  fs-14">My profile</a>
                  </li>
                  <li>
                    <a class="dropdown-item  fs-14">My Odoo.com Account</a>
                  </li>
                  <li>
                    <a class="dropdown-item  fs-14">Log Out</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-0 align-center py-2" id="nav2">
          <div className="col-12 col-sm-5 col-md-3 col-lg-4 px-3">
            <input
              className="search-input"
              type="text"
              placeholder="Search..."
              name="search"
            />
            <button className="search-btn">
              <BiSearch />
            </button>
          </div>
          <div
            className="col-12 col-sm-7 col-md-5 col-lg-4 ps-sm-3 ps-0 pe-3 pe-md-0 align-center justify-content-end mt-sm-1 mt-3"
            id="C-nav"
          >
            <div className="align-center">
              <div class="btn-group ">
                <a data-bs-toggle="dropdown" aria-expanded="false">
                  <MdFilterListAlt />
                  <h6 className="ms-2 mb-1">Filters</h6>

                  <span class="visually-hidden">Toggle Dropdown</span>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item fs-14">Apps</a>
                  </li>
                  <li>
                    <a class="dropdown-item  fs-14">Extra</a>
                  </li>
                  <li>
                    <a class="dropdown-item fs-14">Installed</a>
                  </li>
                  <li>
                    <a class="dropdown-item  fs-14">Not Installed</a>
                  </li>
                  <li>
                    <a class="dropdown-item  fs-14">Add Custom Filter</a>
                  </li>
                </ul>
              </div>

              <div class="btn-group ">
                <a
                  className="mx-4"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FaBars />
                  <h6 className="ms-2 mb-1"> Group By</h6>

                  <span class="visually-hidden">Toggle Dropdown</span>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item fs-14">Author</a>
                  </li>
                  <li>
                    <a class="dropdown-item  fs-14">Category</a>
                  </li>
                  <li>
                    <a class="dropdown-item fs-14">State</a>
                  </li>
                  <li>
                    <a class="dropdown-item  fs-14">Add Custom Group</a>
                  </li>
                </ul>
              </div>

              <div class="btn-group ">
                <a data-bs-toggle="dropdown" aria-expanded="false">
                  <AiFillStar />
                  <h6 className="ms-2 mb-1">Favorites</h6>

                  <span class="visually-hidden">Toggle Dropdown</span>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item fs-14">Save current search</a>
                  </li>
                  <li>
                    <a class="dropdown-item  fs-14">Add to my dashboard</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-sm-12 col-md-4 px-3 my-3 my-md-0 align-center justify-content-end"
            id="C-nav"
          >
            <h5 className="fs-14 C-nav">1-80/833</h5>
            <span className="mx-3 align-center">
              <a href="/">
                <IoIosArrowBack />
              </a>
              <a href="/" className="ms-2">
                <IoIosArrowForward />
              </a>
            </span>
            <span className="ms-3 align-center ">
              <a href="/">
                <BsFillGridFill />
              </a>
              <a href="/" className="ms-3">
                <FaListUl />
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
