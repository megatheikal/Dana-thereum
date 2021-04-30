import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0xe2659D0cC8276F99094e9Ae4F880849A62886ecf"
);

export default instance;
