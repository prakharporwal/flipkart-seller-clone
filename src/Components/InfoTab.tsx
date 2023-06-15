import "./InfoTab.scss";
import data from "../data.json";

const InfoTab: React.FunctionComponent<any> = (props) => {
  return (
    <div className="info-tab">
      <ul>
        {data.landingPage.howTo.map((item, idx) => (
          <TabItem key={idx} item={item} />
        ))}
      </ul>
    </div>
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

const TabItem: React.FunctionComponent<tabProps> = ({ item }) => {
  return (
    <li>
      <h2>{item.header}</h2>
      {item.video?.link && (
        <div className="embed-video-wrapper">
          <h3 className="">{item.video?.caption}</h3>
          <iframe
            className="embed-video"
            title="tab section video"
            src={item.video?.link}
          ></iframe>
        </div>
      )}
      <h2>{item.requisites?.caption}</h2>
      <div>
        {item.requisites?.list.map((i: any) => (
          <section className="item-requisite-list">
            <div className="img-wrapper">
              <img src={i.icon.url} alt={i.icon.alt} />
            </div>
            <div className="list-info">
              <h3 className="list-info-heading">{i.caption + " >"}</h3>
              <div>{i.text}</div>
            </div>
          </section>
        ))}
      </div>
    </li>
  );
};

const TabInfoListItem = () => {};

export default InfoTab;
