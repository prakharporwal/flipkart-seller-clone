import { useState } from "react";
import data from "../data.json";
import "./NavTabs.scss";

const NavTabs: React.FunctionComponent<any> = (props) => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      <div className="tab-heading-wrapper">
        {data.landingPage.howTo.map((item, idx) => (
          <div key={idx}>
            <span
              className="tab-heading"
              onClick={() => {
                setTabIndex(idx);
              }}
            >
              {item.header}
              {idx == tabIndex ? (
                <div className="active-tab-underline"></div>
              ) : (
                <div className="inactive-tab-underline"></div>
              )}
            </span>
          </div>
        ))}
      </div>
      <div className="tab-item">
        <TabItem item={data.landingPage.howTo[tabIndex]} />
      </div>
    </>
  );
};

type howToItem = {
  header: string;
  snoopyTag: string;
  tabId: string;
  learnMore?:
    | {
        path: string;
        view_id: string;
      }
    | undefined;
  steps?:
    | {
        StepTitle: string;
        content: string;
        listPoints: string[];
      }[]
    | undefined;
  video?: any;
  cta?: any;
  ctaText?: any;
  requisites?: any;
};

interface tabProps {
  item: howToItem;
}

// {
//     "header": "HOW TO BE A SELLER",
//     "snoopyTag": "How to Register",
//     "tabId": "section-4",
//     "video": {
//       "caption": "3 steps to register as a Flipkart Seller",
//       "link": "https://www.youtube.com/embed/NzP3vmABTD0",
//       "desc": "You need just 3 things to become a Flipkart Seller, your basic details & GSTIN, Pick-up address, and 1 unique product to sell. Yes! this is all that you require to register as a seller on Flipkart."
//     },
//     "cta": "REGISTER",
//     "ctaText": "Register Now",
//     "requisites": {
//       "caption": "You need just 3 things to become a Flipkart Seller.",
//       "list": [
//         {
//           "caption": "At least 1 product to sell",
//           "snoopyTag": "One Product",
//           "text": "All you need is a minimum of 1 unique product to start selling on Flipkart.",
//           "icon": {
//             "url": "https://static-assets-web.flixcart.com/fk-sp-static/images/ProductIcon.svg",
//             "alt": "Product Icon"
//           },
//           "contentId": {
//             "path": "listings/how-upload-one-listing-flipkart",
//             "view_id": "185"
//           }
//         },
//         {
//           "caption": "GSTIN details",
//           "snoopyTag": "GSTIN",
//           "text": "You are required to furnish the details of your GSTIN to sell products online.",
//           "icon": {
//             "url": "https://static-assets-web.flixcart.com/fk-sp-static/images/GSTINIcon.svg",
//             "alt": "GSTIN Icon"
//           },
//           "contentId": {
//             "path": "onboarding/how-enroll-gstin",
//             "view_id": "218"
//           }
//         },
//         {
//           "caption": "Pick-up Address",
//           "snoopyTag": "Bank Account",
//           "text": "Sharing your pickup address and pincode will help us pick your products to sell.",
//           "icon": {
//             "url": "https://static-assets-web.flixcart.com/fk-sp-static/images/map-location-computer-1.png",
//             "alt": "pick up Address Icon"
//           }
//         }
//       ]
//     }
//   }

// {
//     "StepTitle": "Growth in the online retail market",
//     "content": "Witnessing tremendous growth for the past 5 years, retailers are moving towards online selling.",
//     "listPoints": [
//       "Avoid huge investments.",
//       "Large customer base to sell online anywhere."
//     ]
//   },

const TabItem: React.FunctionComponent<tabProps> = ({ item }) => {
  return (
    <>
      {item.video?.link && (
        <div className="embed-video-wrapper">
          <h3>{item.video?.caption}</h3>
          <iframe
            className="embed-video"
            title="tab section video"
            src={item.video?.link}
          ></iframe>
        </div>
      )}

      {item.steps && (
        <div className="sell-steps-list">
          {item.steps.map((step, idx) => (
            <div key={idx} className="sell-steps-list-item">
              <div className="list-index-header-wrapper">
                <div className="list-index-header">{idx + 1}</div>
              </div>
              <h2>{step.StepTitle}</h2>
              <h3 className="list-step-content">{step.content}</h3>
              <ul>
                {step.listPoints.map((point, idx) => (
                  <div
                    key={idx}
                    style={{ display: "flex", gap: "12px", margin: "8px" }}
                  >
                    <div style={{ width: "1rem" }}>
                      <img
                        width={"100%"}
                        src="check.png"
                        alt="list-bullet-icon"
                      />
                    </div>
                    <li
                      className="list-step-point"
                      style={{ display: "inline" }}
                    >
                      <h4>{point}</h4>
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
      {item.requisites && (
        <div className="tab-info">
          <h3>{item.requisites?.caption}</h3>
          <div className="tab-info-list">
            {item.requisites?.list.map((i: any) => (
              <section className="item-requisite-list">
                <div className="img-wrapper">
                  <img src={i.icon.url} alt={i.icon.alt} />
                </div>
                <div className="list-info">
                  <h3>
                    {i.caption}
                    {" >"}
                  </h3>
                  <div>{i.text}</div>
                </div>
              </section>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default NavTabs;
