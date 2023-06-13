import "./InfoTab.scss";
import data from "../data.json";

const InfoTab: React.FunctionComponent<any> = (props) => {
  return (
    <div className="info-tab" style={{ border: "2px solid red" }}>
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

const TabItem: React.FunctionComponent<tabProps> = ({ item }) => {
  return (
    <li>
      <h2>{item.header}</h2>
      <span>{item.requisites?.caption}</span>
      <div>
        {item.requisites?.list.map((i: any) => (
          <>
            <span>{i.caption}</span>
            <span>{i.text}</span>
          </>
        ))}
      </div>
    </li>
  );
};

export default InfoTab;
