const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider({ gasLimit: 10000000 }));

const compiledFactory = require("../ethereum/build/CampaignFactory.json");
const compiledCampaign = require("../ethereum/build/Campaign.json");

let accounts;
let factory;
let campaignAddress;
let test;

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

  await factory.methods.createCampaign("100").send({
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

  it("set a target donation", async () => {
    const target = await campaign.methods
      .setTargetdonation(100)
      .send({ from: accounts[0], gas: 1000000 });
    assert(target);
  });

  it("set the info of organiser", async () => {
    const infosOrgnsr = await campaign.methods
      .setOrganiser(
        "Megat Heikal",
        "Myeg",
        "017-5342298",
        "Ipoh Perak",
        "nasi@gmail.com",
        "@mgaat.hkl"
      )
      .send({ from: accounts[0], gas: 1000000 });
    assert(infosOrgnsr);
  });

  it("set the info of reference", async () => {
    const infosReference = await campaign.methods
      .setReference(
        "Muhd Rizqin",
        "Tidur",
        "013-52901882",
        "power123@gmail.com",
        "@qin.kun"
      )
      .send({ from: accounts[0], gas: 1000000 });
    assert(infosReference);
  });

  it("set the detail of campaign", async () => {
    const detailCampgn = await campaign.methods
      .setDetail("Jalan-Jalan", "Hidup ini cuma sekali")
      .send({ from: accounts[0], gas: 1000000 });
    assert(detailCampgn);
  });

  it("get a target donation", async () => {
    const target = await campaign.methods.targetDonation().call();
    assert(target);
  });
  it("get the info of organiser", async () => {
    const infosOrgnsr = await campaign.methods.getOrganiser(accounts[0]).call();
    assert(infosOrgnsr);
  });

  it("get the info of reference", async () => {
    const infosReference = await campaign.methods
      .getReference(accounts[0])
      .call();
    assert(infosReference);
  });

  it("get the detail of campaign", async () => {
    const detailCampgn = await campaign.methods.getDetail(accounts[0]).call();
    assert(detailCampgn);
  });
  it("allows people to donate money to the campaign and mark them as approvers", async () => {
    await campaign.methods.donate().send({
      from: accounts[1],
      value: 200
    });

    const money = await campaign.methods.minimumDonation().call();
    assert(money);
    const isDonater = await campaign.methods.donater(accounts[1]).call();
    assert(isDonater);
  });

  it("requires a minimum donation", async () => {
    try {
      await campaign.methods
        .contribute()
        .send({ from: accounts[1], value: 20 });
      assert(false);
    } catch (e) {
      assert(e);
    }
  });

  it("allows manager to make payment requests", async () => {
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
