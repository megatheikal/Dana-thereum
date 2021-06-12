import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0xf0D56C17F5B2C75b042F886A0Bd757E45e0ced60"
);

export default instance;
