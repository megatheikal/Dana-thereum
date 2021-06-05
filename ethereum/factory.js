import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0xE836376d2897b10DF9201CB1d05Bec6Ec9b142d6"
);

export default instance;
