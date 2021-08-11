import React from "react";
import { useDispatch, useSelector } from "react-redux";
import algoliasearch from "algoliasearch/lite";
import { Configure, InstantSearch } from "react-instantsearch-dom";
import { CustomHitsModal } from "../Searchpage/Hits";

const CarouselHome = () => {
  const searchClient = algoliasearch(window.appID, window.key);
  const { customer } = useSelector((state) => state.selectCustomer);
  return (
    <InstantSearch indexName={window.index} searchClient={searchClient}>
      {customer ? (
        <div>
          <Configure
            filters={`"users":'${customer}'`}
            userToken={customer}
            hitsPerPage={8}
          />
          <CustomHitsModal />
        </div>
      ) : (
        <div>
          <Configure filters="'L1 - CATEGORY':'Bakery Mixes'" hitsPerPage={8} />
          <CustomHitsModal />
        </div>
      )}
    </InstantSearch>
  );
};

export default CarouselHome;
