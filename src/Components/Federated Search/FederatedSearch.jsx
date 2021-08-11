import React from "react";

// ALGOLIA IMPORT
import { Configure, Index, QueryRuleCustomData } from "react-instantsearch-dom";

// COMPONENT IMPORT
import { CustomHits } from "../Searchpage/Hits";
import CustomSuggestions from "../Searchpage/Suggestions";

const FederatedSearch = () => {
  return (
    <div className="federatedSearch">
      <div className="federatedSearch-wrapper">
        <div className="federatedSearch-suggestions">
          <div className="suggestions-content">
            <h3>Suggestions</h3>
            <Index indexName={window.indexSugg} indexId="suggestions">
              <Configure hitsPerPage={6} />
              <CustomSuggestions />
            </Index>
            <QueryRuleCustomData>
              {({ items }) => {
                return items.map(
                  ({ injected, button, image, target, title }) => {
                    if (injected) {
                      return (
                        <div>
                          <div className="separator"></div>
                          <div className="injected-content-wrapper">
                            <img src={image} alt={title} />
                            <h3>{title}</h3>
                            <a href={target}>{button}</a>
                          </div>
                        </div>
                      );
                    }
                  }
                );
              }}
            </QueryRuleCustomData>
          </div>
        </div>
        <div className="federatedSearch-products">
          <div className="product-federated-header">
            <h3 className="federated-title">Products</h3>
          </div>
          <Configure hitsPerPage={6} />
          <CustomHits />
        </div>
      </div>
    </div>
  );
};

export default FederatedSearch;
