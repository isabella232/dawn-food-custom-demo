import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  connectSearchBox,
  createVoiceSearchHelper,
} from "react-instantsearch-dom";

// COMPONENT IMPORT
import logo from "../../Assets/Images/logo.jpeg";
import CustomSearchBox from "../Searchpage/SearchBox";

// import headerUp from '../../Assets/Images/headerUp.png';
import SelectPersona from "./Persona";
import {
  searchVisible,
  federatedSearchVisible,
  ourProducts,
} from "../../actions/visibility";
import { selectCustomer, nameCustomer } from "../../actions/selectCustomer";
import { getQuery } from "../../actions/getQuery";

const Header = () => {
  const federatedSearchVisibleSelector = useSelector(
    (state) => state.visibility.federatedSearchVisible
  );

  const ourProductsMethod = useSelector(
    (state) => state.visibility.ourProducts
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
              dispatch(ourProducts(false));
              dispatch(selectCustomer(""));
              dispatch(nameCustomer(""));
            }}
          />
          <ul>
            <li
              onClick={() => {
                dispatch(searchVisible(true));
                dispatch(federatedSearchVisible(false));
                dispatch(ourProducts(true));
                dispatch(selectCustomer(""));
                dispatch(nameCustomer(""));
              }}
            >
              OUR DAWN PRODUCTS
            </li>
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
            if (homepageSelector) {
              dispatch(federatedSearchVisible(true));
            }
            if (searchVisibleSelector) {
              dispatch(federatedSearchVisible(false));
            }
          }}
        >
          <CustomSearchBox />
          <CustomVoiceSearch />
        </div>
      </div>
    </header>
  );
};

class VoiceSearch extends React.Component {
  componentDidMount() {
    const { refine } = this.props;
    this.voiceSearchHelper = createVoiceSearchHelper({
      searchAsYouSpeak: false,
      onQueryChange: (query) => refine(query),
      onStateChange: () => {
        this.setState(this.voiceSearchHelper.getState());
      },
    });
    this.setState(this.voiceSearchHelper.getState());
  }

  componentWillUnmount() {
    if (this.voiceSearchHelper) {
      this.voiceSearchHelper.dispose();
    }
  }

  render() {
    if (!this.voiceSearchHelper) {
      return null;
    }

    const { status, transcript, isSpeechFinal, errorCode } = this.state;
    const {
      isBrowserSupported,
      isListening,
      toggleListening,
    } = this.voiceSearchHelper;

    return (
      <div>
        <button
          type="button"
          title="Voice Search"
          onClick={toggleListening}
          disabled={!isBrowserSupported()}
        >
          {isListening() ? "Stop" : "Start"}
        </button>
        <div>
          {/* <p>status: {status}</p> */}
          <p>transcript: {transcript}</p>
          {/*<p>isSpeechFinal: {isSpeechFinal ? "true" : "false"}</p>
          <p>errorCode: {errorCode}</p>
          <p>isListening: {isListening() ? "true" : "false"}</p>
          <p>isBrowserSupported: {isBrowserSupported() ? "true" : "false"}</p> */}
        </div>
      </div>
    );
  }
}
const CustomVoiceSearch = connectSearchBox(VoiceSearch);

export default Header;
