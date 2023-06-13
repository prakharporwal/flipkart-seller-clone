import "./InfoTab.scss";

const InfoTab: React.FunctionComponent<any> = (props) => {
  return (
    <div className="info-tab">
      <ul>
        <li>
          <h2>Why Sell Online</h2>
        </li>
        <li>
          <h2>Why Flipkart?</h2>
        </li>
        <li>
          <h2>Why Shopsy?</h2>
        </li>
        <li>
          <h2>How To Be a Seller</h2>
        </li>
      </ul>
    </div>
  );
};

export default InfoTab;
