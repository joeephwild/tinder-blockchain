const { ethers } = require('hardhat')

const main = async () => {
  const tinderFactory = await ethers.getContractFactory('TinderERC721')
  const tinderContract = await tinderFactory.deploy()

  console.log('TINDER CONTRACT ADDRESS:', tinderContract.address)
}
main()
.then(() => process.exit(0))
.catch(error => {
console.log('error in depolying contract >>', error);
process.exit(1);
})