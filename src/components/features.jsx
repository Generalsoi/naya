import React from "react";
import FeatureCard from "../common/featureCard";
import RealTimeTrading from "../images/realtimetrading.png";
import CustomizableNfts from "../images/customizablenfts.png";
import CharitySupport from "../images/charitysupport.png";
import StartUpCrowdFunding from "../images/startupcrowdfunding.png";
import CreatorPayment from "../images/creatorpayments.png";
import PassiveIncome from "../images/earnpassiveincome.png";

const Features = () => {
  const featureStyles = {
    textAlign: "center",
    padding: "2% 5% 7%",
    background: "#261E35",
    color: "#fff",
  };

  return (
    <div style={featureStyles} id="features">
      <h3
        style={{
          fontSize: "2.375rem",
          marginBottom: "4rem",
          fontFamily: "poppins",
        }}
      >
        Features
      </h3>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col-sm-4" >
          <FeatureCard
            cardImg={RealTimeTrading}
            featureTitle="Real Time Trading"
            featureDesc="Buy, sell & trade NAYA on Pancakeswap and other Exchanges"
          />
        </div>
        <div className="col-sm-4">
          <FeatureCard
            cardImg={CustomizableNfts}
            featureTitle="Customizable NFTs"
            featureDesc="An NFT marketplace where you can create, mint and sell your own NFTs directly "
          />
        </div>
        <div className="col-sm-4">
          <FeatureCard
            cardImg={CharitySupport}
            featureTitle="Charity Support"
            featureDesc="Donate directly to vetted charities and non-profits making a dfference on the African continent"
          />
        </div>
        <div className="col-sm-4">
          <FeatureCard
            cardImg={StartUpCrowdFunding}
            featureTitle="Startup Crowdfunding"
            featureDesc="Want to get your idea funded? Use our amazing platform to get pre-seed funding from investors worldwide."
          />
        </div>
        <div className="col-sm-4">
          <FeatureCard
            cardImg={CreatorPayment}
            featureTitle="Creator Payment"
            featureDesc="Host live or virtual events, receive donations, tips and set ticket prices with the NAYA token on
            Raven Livestream"
          />
        </div>
        <div className="col-sm-4">
          <FeatureCard
            cardImg={PassiveIncome}
            featureTitle="Earn Passive income"
            featureDesc="Get paid in NAYA for completing ad tasks on Ad100.xyz; Stake NAYA to earn more"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
