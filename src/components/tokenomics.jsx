import React from "react";
import TokenDistribution from "../common/tokenDistribution";
import TokenInformation from "../common/tokenInformation";
import "../css/tokenomics.css";

const Tokenomics = () => {
  return (
    <div className="naya-tokenomics-section" id="tokenomics">
      <h3>NAYA Tokenomics</h3>
      <div className="d-lg-flex justify-content-between align-items-center">
        <div className=" text-center p-2 mr-auto">
          <h5>Token Distribution</h5>
          <TokenDistribution content="Development Team 10%" />
          <TokenDistribution content="Pre-Sale & ICO 20%" />
          <TokenDistribution content="Marketing 5%" />
          <TokenDistribution content="Locked Liquidity 70%" />
        </div>

        <div className="text-center p-2">
          <h5>Token Information</h5>
          <div className="row">
            <div className="col-sm-6">
              <TokenInformation content="NAYA TOKEN" heading="Token Name" />
            </div>
            <div className="col-sm-6">
              <TokenInformation content="NAYA" heading="Token Abbreviation" />
            </div>
            <div className="col-sm-6">
              <TokenInformation content="50 MILLION" heading="Total Supply" />
            </div>
            <div className="col-sm-6">
              <TokenInformation content="BSC (BEP20)" heading="Network" />
            </div>
            <div className="col-sm-6">
              <TokenInformation content="18" heading="Token Decimal" />
            </div>
            <div className="col-sm-6">
              <TokenInformation
                content="0xD21Db3F27C818920eFd48fD8BAAcA93CE6F989Fd"
                heading="Token address"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
