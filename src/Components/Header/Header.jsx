import React from "react";
import { useSelector, useDispatch } from "react-redux";

// COMPONENT IMPORT
import logo from "../../Assets/Images/logo.jpeg";
import CustomSearchBox from "../Searchpage/SearchBox";

// import headerUp from '../../Assets/Images/headerUp.png';
import SelectPersona from "./Persona";
import {
  searchVisible,
  federatedSearchVisible,
} from "../../actions/visibility";
import { selectCustomer, nameCustomer } from "../../actions/selectCustomer";
import { getQuery } from "../../actions/getQuery";

const Header = () => {
  const federatedSearchVisibleSelector = useSelector(
    (state) => state.visibility.federatedSearchVisible
  );

  const dispatch = useDispatch();
  const homepageSelector = useSelector((state) => state.visibility.homepage);
  const searchVisibleSelector = useSelector(
    (state) => state.visibility.searchVisible
  );

  if (federatedSearchVisibleSelector) {
    document.body.classList.add("stop-scrolling");
  } else {
    document.body.classList.remove("stop-scrolling");
  }
  return (
    <header className="header">
      <div className="header-wrapper">
        <div
          className="list-img-wrapper"
          onClick={() => {
            // dispatch(federatedSearchVisible(false));
            dispatch(getQuery(""));
          }}
        >
          <img
            src="https://www.dawnfoods.com/Frontend-Assembly/Telerik.Sitefinity.Frontend.Navigation/assets/dist/images/logo.png?package=Dawn"
            alt="logo"
            className="logo"
            onClick={() => {
              dispatch(searchVisible(false));
              dispatch(federatedSearchVisible(false));
              dispatch(selectCustomer(""));
              dispatch(nameCustomer(""));
            }}
          />
          <ul>
            <li>HOME</li>
            <li>PRODUCTS</li>
            <li>CUSTOMER WE SERVE</li>
            <li>CAMPAIGN</li>
            <li>INSIGHTS</li>
            <li>ABOUT</li>
            <li>
              <SelectPersona />
            </li>
          </ul>
        </div>
        <div
          className="search-wrapper"
          onClick={(e) => {
            console.log(e);
            if (homepageSelector) {
              dispatch(federatedSearchVisible(true));
            }
            if (searchVisibleSelector) {
              dispatch(federatedSearchVisible(false));
            }
          }}
        >
          <CustomSearchBox />
        </div>
      </div>
    </header>
  );
};

export default Header;
