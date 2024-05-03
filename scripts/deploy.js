

async function main() {
  const [deployer] = ethers.getSigners();
  const token = await ethers.deployContract("Token");
  console.log("Token address : ", token.address);

}

main()
  .then(()=> process.exit(0))
  .catch((error)=>{
    console.log(error);
    process.exit(1);
  })


  1. provider URL - Ganache,hadhat