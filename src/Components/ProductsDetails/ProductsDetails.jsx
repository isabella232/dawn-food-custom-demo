import React from "react";
import { useDispatch, useSelector } from "react-redux";

import algoliasearch from "algoliasearch/lite";
import { Configure, InstantSearch } from "react-instantsearch-dom";

// IMPORT COMPONENTS
import { CustomHitsModal } from "../Searchpage/Hits";

// IMPORT ASSETS
import pdp from "../../Assets/Images/pdp.png";
import { showModalPDP } from "../../actions/productDetail";

const ProductDetails = () => {
  const searchClient = algoliasearch(window.appID, window.key);
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.productDetail);
  const { customer } = useSelector((state) => state.selectCustomer);

  if (product) {
    return (
      <div className="modal-inner-wrapper">
        <p
          className="close-modal"
          onClick={() => {
            dispatch(showModalPDP(false));
          }}
        >
          X
        </p>
        <div className="modal-detail">
          <div className="product-side">
            <div className="modal-images">
              <img
                src="https://www.supermarketperimeter.com/ext/resources/images/2020/4/Dawn_Donuts.jpg?t=1586184282&width=1080"
                alt=""
              />
            </div>
          </div>
          <div className="fake-filters">
            <div className="modal-infos">
              <h3>{product.[ 'SELLING NAME' ]}</h3>
              {/* <p>${product.price}</p> */}
              {Object.values(product.prices).map((el) => {
                      if (el.userId === parseInt(customer)) {
                        return <p style={{ fontSize: '2em' }}>${el.salesPrice}</p>;
                      }
                    })}
              {customer ? ('') : ( <p style={{ fontSize: '2em' }}>
                      $
                      {
                        Object.values(product.prices)[
                          Object.values(product.prices).length - 1
                        ].salesPrice
                      }
                    </p>)}
                    {/* {Object.values(hit.prices).map((el) => {
                    if (el.userId === parseInt(customer)) {
                      return <p>${el.salesPrice}</p>;
                    }
                  })} */}
              <p>{product.description}</p>
            </div>
            <img src={pdp} alt="" />
          </div>
        </div>
        <div className="recommand-side">
          <div>
            <h3>Recommandations</h3>
          </div>
          <div className="modal-hits">
                  {customer ? (<InstantSearch
              indexName={window.index}
              searchClient={searchClient}
            >
            {customer ? (
              <Configure
                filters={`"users":'${customer}'`}
                userToken={customer}
                hitsPerPage={21}
              />
            ) : (
              <Configure hitsPerPage={8} />
            )}
              <CustomHitsModal />
            </InstantSearch>) : (<InstantSearch
              indexName={window.index_desc}
              searchClient={searchClient}
            >
            {customer ? (
              <Configure
                filters={`"users":'${customer}'`}
                userToken={customer}
                hitsPerPage={21}
              />
            ) : (
              <Configure hitsPerPage={8} />
            )}
              <CustomHitsModal />
            </InstantSearch>)}
          </div>
          <div>
            <h3>Bought together</h3>
          </div>
          <div className="modal-hits">
          {customer ? (<InstantSearch
              indexName={window.index}
              searchClient={searchClient}
            >
            {customer ? (
              <Configure
                filters={`"users":'${customer}'`}
                userToken={customer}
                hitsPerPage={21}
              />
            ) : (
              <Configure hitsPerPage={8} />
            )}
              <CustomHitsModal />
            </InstantSearch>) : (<InstantSearch
              indexName={window.index_desc}
              searchClient={searchClient}
            >
            {customer ? (
              <Configure
                filters={`"users":'${customer}'`}
                userToken={customer}
                hitsPerPage={21}
              />
            ) : (
              <Configure hitsPerPage={8} />
            )}
              <CustomHitsModal />
            </InstantSearch>)}
          </div>
        </div>
      </div>
    );
  }
};

export default ProductDetails;
