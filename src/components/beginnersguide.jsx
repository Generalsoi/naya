import React from "react";
import DownloadCard from "../common/downloadcard";
import DownloadInfo from "../common/downloadinfo";
import TrustWallet from "../images/trustwallet.png";
import MetaMask from "../images/metamask.png";
import "../css/beginnersguide.css";

const BeginnersGuide = () => {
  return (
    <div className="beginnersguidesection">
      <h3 className="beginnersGuideHeading">Beginners Guide</h3>
      <p className="beginnersGuideSupportHeading">
        Here are a few ways beginners who want to get the NAYA token can do so
        and store safely.
      </p>
      <div className="d-lg-flex justify-content-between align-items-center beginnersGuideContent">
        <div className="beginnersGuideContentOne">
          <DownloadInfo
            downloadTitle="Download the Trust Wallet App"
            downloadbody="Trust Wallet is the official crypto wallet of Binance. You can send, receive and store cryptocurrencies and digital assets like NAYA safely. "
          />
        </div>
        <div>
          <DownloadCard cardImg={TrustWallet} />
        </div>
      </div>

      <div className="d-lg-flex justify-content-between align-items-center beginnersGuideContent">
        <div>
          <DownloadCard cardImg={MetaMask} />
        </div>
        <div className="beginnersGuideContentOne">
          <DownloadInfo
            downloadTitle="Download the Metamask App"
            downloadbody="MetaMask is a cryptocurrency wallet that allows users to access their Ethereum wallet through a browser extension or mobile app, which can then be used to interact with decentralized applications "
          />
        </div>
      </div>
    </div>
  );
};

export default BeginnersGuide;
