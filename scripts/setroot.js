const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");
const { whitelist } = require("../assets/whitelist.js");

const main = async () => {
  
  const nftFactory = await hre.ethers.getContractFactory("JAWS");
  const nftContract = await nftFactory.attach('0x7A090717287e29563aA5d37fbb2D2f492910F15A');

  const leafNodes = whitelist.map((addr) => keccak256(addr));
  const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });
  const root = merkleTree.getRoot();

  await nftContract.setWhitelistRoot(root);

  console.log("Whitelist Merkel Root Set");

};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });