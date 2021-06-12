
// SPDX-License-Identifier: MIT
pragma solidity >=0.8.3 ;

/**
 * @title Contract
 * @dev Implements a new to donate money to the campaign
 */
contract CampaignFactory {
    address[] public deployedCampaigns;
    address public lastDeployedCampaign;

 function createCampaign(uint256  minimumn, string memory orgName, string memory orgPhone, string memory orgAddress, string memory orgEmail, string memory orgLink,  string memory campName, string memory campSummary) public {
     address newCampaign = address (new Campaign(minimumn, msg.sender, orgName, orgPhone, orgAddress, orgEmail, orgLink,  campName,  campSummary));
     deployedCampaigns.push(newCampaign);
     lastDeployedCampaign = newCampaign;
 }

    function getDeployedCampaigns() public view returns (address[] memory) {
        return deployedCampaigns;
    }

    function getLastDeployedCampaign() public view returns(address){
        return lastDeployedCampaign;
    }
}


contract Campaign {

   address public organiser;
   mapping (address => bool) public donater;
   uint256 public minimumDonation;
   uint256 public donaterCount;
   mapping (address => Infoorganiser) public infoOrganiser;
   mapping (address => Detail) public detailCampaign;


   //Detail of organiser
   struct Infoorganiser{
       string name;
       string phoneNumbers;
       string addr;
       string email;
       string linkSocialmedia;
   }


   //detail of campaign
   struct Detail{
       string campaignName;
       string summaryCampaign;
   }


    struct Request{
        string description;
        uint value;
        address payable recipient;
        bool complete;
        uint approvalCount; //we only want to know yes
        mapping(address => bool)  approvers;
    }

    mapping (uint => Request) public requests;
    uint  public requestCount=0 ;


   modifier restricted(){
       require(msg.sender == organiser);
       _;
   }


 constructor (uint256  minimum, address  creator,string memory orgName, string memory orgPhone, string memory orgAddress, string memory orgEmail, string memory orgLink, string memory campName, string memory campSummary) {
    organiser = creator;
    minimumDonation=minimum;
    infoOrganiser[creator]=Infoorganiser(orgName, orgPhone, orgAddress, orgEmail, orgLink);
    detailCampaign[creator] = Detail(campName,campSummary);
}




   function donate() public payable{
       require(msg.value >=minimumDonation);
       if(!donater[msg.sender]) {
   donaterCount++;
}
       donater[msg.sender] = true;

   }


   function getOrganiser(address addr) public view returns(string memory, string memory , string memory , string memory , string memory ){
       Infoorganiser memory info = infoOrganiser[addr];
        return (info.name, info.phoneNumbers,info.addr,info.email, info.linkSocialmedia);
   }




    function getDetail(address addr) public view returns(string memory, string memory){
      Detail memory info = detailCampaign[addr];
        return (info.campaignName, info.summaryCampaign);
   }

    function createRequest(string memory description, uint value, address payable recipient) payable public restricted {
        require(value <= address(this).balance);
        Request storage newRequestInStorage = requests[requestCount];
        newRequestInStorage.description = description;
        newRequestInStorage.value = value;
        newRequestInStorage.recipient = recipient;
        newRequestInStorage.complete = false;
        newRequestInStorage.approvalCount = 0;
        requestCount++;
    }

    function approvalRequest(uint index) public{
        Request storage request = requests[index];
        require(donater[msg.sender]);
        require(!requests[index].approvers[msg.sender]);
        request.approvers[msg.sender];
        request.approvalCount++;
    }

    function finaliseRequest(uint index) public
    payable
    restricted{
        Request storage request = requests[index];
        require(request.approvalCount > (donaterCount /2));
        require(!request.complete);
        request.recipient.transfer(msg.value);
        request.complete = true;
    }

      function getSummary() public view returns (
      uint, uint, uint, address
      ){
        return (
          minimumDonation,
          address(this).balance,
          donaterCount,
          organiser
          );
      }

}
