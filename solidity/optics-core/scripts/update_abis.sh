cat artifacts/contracts/Replica.sol/Replica.json| jq .abi > ../../abis/Replica.abi.json && \
cat artifacts/contracts/Home.sol/Home.json| jq .abi > ../../abis/Home.abi.json
