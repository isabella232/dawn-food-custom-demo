import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Highlight, SortBy, Stats, connectHits, Index } from "react-instantsearch-dom";
import { showModalPDP, productDetail } from "../../actions/productDetail";
import {
  federatedSearchVisible,
  searchVisible,
} from "../../actions/visibility";
import ProductDetails from "../ProductsDetails/ProductsDetails";

import { motion, AnimateSharedLayout } from "framer-motion";

// MAIN SEARCH RESULT PAGE + FEDERATED
const Hits = ({ hits }) => {
  // Redux
  const { customer } = useSelector((state) => state.selectCustomer);
  const dispatch = useDispatch();
  const listItem = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
      },
    },
  };
  return (
    <AnimateSharedLayout>
      <div className="hits-wrapper">
        <ul className="hits-list">
          {hits.map((hit) => {
            {
              /* console.log("HITS", Object.keys(hit.prices)); */
            }
            if (hit.prices) {
              {
                /* console.log("HITS", hit.prices); */
              }
              {
                /* let hitsArray = {
                id: Object.keys(hit.prices),
                price: hit.prices.Object.keys(hit.prices).salesPrice,
              };
              console.log("HITS ARRAY", hitsArray); */
              }

              {
                /* console.log(
                "HIT",
                Object.values(hit.prices)[Object.values(hit.prices).length - 1]
                  .salesPrice
              ); */
              }

              {/* CustomerIds array */}
              let custIdArray = []
              console.log("HIT", hit.users)
              return (
                <Index indexName={window.usersId}>
                  <motion.li
                    key={hit.objectID}
                    variants={listItem}
                    initial="hidden"
                    animate="show"
                    className="hit-list"
                    onClick={() => {
                      dispatch(productDetail(hit));
                      dispatch(showModalPDP(true));
                      dispatch(federatedSearchVisible(false));
                      dispatch(searchVisible(true));
                    }}
                  >
                    <div className="image-wrapper">
                      <img src={hit.image_link} alt="" />
                    </div>
                    <div className="infos">
                      <h3>
                        <Highlight hit={hit} attribute="SELLING NAME" />
                      </h3>
                      {/* {hitsArray.map((id) => {
                      console.log("ID", id, customer);
                      if (id === customer) {
                        console.log("EGAL");
                        return (
                          <p>
                            $
                            {
                              Object.values(hit.prices)[
                                Object.values(hit.prices).length - 1
                              ].salesPrice
                            }
                          </p>
                        );
                      } else {
                        {
                          Object.values(hit.prices)[
                            Object.values(hit.prices).length - 1
                          ].salesPrice;
                        }
                      }
                    })} */}
                    </div>
                  </motion.li>
                </Index>
              );
            } else {
              return "";
            }
          })}
        </ul>
        <ModalProduct />
      </div>
    </AnimateSharedLayout>
  );
};

// PDP
const HitsModal = ({ hits }) => {
  const dispatch = useDispatch();

  return (
    <div className="hits-wrapper">
      <ul className="hits-list hits-list-modal">
        {hits.map((hit) => (
          <li
            key={hit.objectID}
            className="hit-list"
            onClick={() => {
              dispatch(productDetail(hit));
              dispatch(showModalPDP(true));
              dispatch(federatedSearchVisible(false));
              dispatch(searchVisible(true));
            }}
          >
            <div className="image-wrapper">
              <img src={hit.image_link} alt="" />
            </div>
            <div className="infos">
              <h3>
                <Highlight hit={hit} attribute="SELLING NAME" />
              </h3>
              <p>
                ${" "}
                {
                  Object.values(hit.prices)[
                    Object.values(hit.prices).length - 1
                  ].salesPrice
                }
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ModalProduct = () => {
  const dispatch = useDispatch();
  const { showModal } = useSelector((state) => state.productDetail);
  return (
    <div>
      {showModal ? (
        <div
          className="modal-bg"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              dispatch(showModalPDP(false));
            }
          }}
        >
          <motion.div className="modal-wrapper fadeModal">
            <ProductDetails />
          </motion.div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

const CustomHits = connectHits(Hits);
const CustomHitsModal = connectHits(HitsModal);

export { CustomHits, CustomHitsModal };
