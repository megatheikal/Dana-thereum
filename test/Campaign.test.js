const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider({ gasLimit: 10000000 }));

const compiledFactory = require("../ethereum/build/CampaignFactory.json");
const compiledCampaign = require("../ethereum/build/Campaign.json");

let accounts = [];
let factory = null;
let campaignAddress = null;
let test = null;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  factory = await new web3.eth.Contract(compiledFactory.abi)
    .deploy({
      data: compiledFactory.evm.bytecode.object
    })
    .send({
      from: accounts[0],
      gas: "10000000"
    });

  await factory.methods
    .createCampaign(
      "200",
      "Megat Heikal",
      "027434233",
      "Kuala Lumpur",
      "asdqw@gmail.com",
      "www.facebook.com",
      "Sedekah la",
      "naik kereta pergi ke kedai, kedai tutup hehehe"
    )
    .send({
      from: accounts[0],
      gas: "10000000"
    });

  [campaignAddress] = await factory.methods.getDeployedCampaigns().call();

  test = await factory.methods.getLastDeployedCampaign.call();

  campaign = await new web3.eth.Contract(compiledCampaign.abi, campaignAddress);
});

describe("Campaigns", () => {
  it("deploy a factory and campaign", () => {
    assert.ok(factory.options.address);
    assert.ok(campaign.options.address);
    assert.ok(test);
  });

  it("factory calling address is same as organiser", async () => {
    const organiser = await campaign.methods.organiser().call();
    assert.equal(accounts[0], organiser);
  });

  it("get the info of organiser", async () => {
    const infosOrgnsr = await campaign.methods.getOrganiser(accounts[0]).call();
    assert(infosOrgnsr);
  });

  it("get the detail of campaign", async () => {
    const detailCampgn = await campaign.methods.getDetail(accounts[0]).call();
    assert(detailCampgn);
  });
  it("allows people to donate money to the campaign and mark them as approvers", async () => {
    await campaign.methods.donate().send({
      from: accounts[1],
      value: 400
    });

    const money = await campaign.methods.minimumDonation().call();
    assert(money);
    const isDonater = await campaign.methods.donater(accounts[1]).call();
    assert(isDonater);
  });

  it("requires a minimum donation", async () => {
    try {
      await campaign.methods.donate().send({ from: accounts[1], value: 20 });
      assert(false);
    } catch (e) {
      assert(e);
    }
  });
  it("allows manager to make payment requests", async () => {
    await campaign.methods.donate().send({
      from: accounts[1],
      value: 400
    });
    await campaign.methods.createRequest("Samosa", 100, accounts[1]).send({
      from: accounts[0],
      gas: 1000000
    });
    const request = await campaign.methods.requests(0).call();
    assert.equal("Samosa", request.description);
  });

  it("allows to finalizeRequest", async () => {
    await campaign.methods.donate().send({
      from: accounts[0],
      value: web3.utils.toWei("10", "ether")
    });

    await campaign.methods.createRequest("Samosa", 100, accounts[1]).send({
      from: accounts[0],
      gas: 1000000
    });
    await campaign.methods.approvalRequest(0).send({
      from: accounts[0],
      gas: 1000000
    });
    await campaign.methods.finaliseRequest(0).send({
      from: accounts[0],
      gas: 1000000
    });
    let request = await campaign.methods.requests(0).call();
    assert.ok(request.complete);
  });
});
