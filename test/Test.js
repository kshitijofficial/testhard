const { expect } = require("chai");

describe("Test contract", function () {
  let contract;
  let owner;

  beforeEach(async function () {
    // Create the smart contract object to test from
    [owner] = await ethers.getSigners();
    const TestContract = await ethers.getContractFactory("Test");
    contract = await TestContract.deploy();
  });

  it("Addition should work", async function () {
    // Get output from functions
    const additionTest = await contract.add(6, 6);
    const subtractionTest = await contract.subtract(6, 6);
    expect(additionTest).to.equal(12);
    expect(subtractionTest).to.equal(0);
  });
});
