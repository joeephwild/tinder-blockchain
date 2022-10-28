//SPDX-License-Identifier: UNLINCENSED

pragma solidity ^0.8.17;

import '@openzepplin/contracts/utils/Counters.sol';
import '@openzepplin/contracts/token/ERC721/extentions/ERC721URLStorage.sol';

contract TinderERC721 is ERC721URLStorage {
    
    uint256 TINDER_TOKEN_ID;

    constructor() ERC721("CleverNFT", "CN") {}

    function mintNft(address _userOne, address _userTwo, string memory, tokenURI) public {
        _mint(_userOne, TINDER_TOKEN_ID);
        _setTokenURI(TINDER_TOKEN_ID, tokenURI);
        TINDER_TOKEN_ID++;

        _mint(_userTwo, TINDER_TOKEN_ID);
        _setTokenURI(TINDER_TOKEN_ID, tokenURI);
        TINDER_TOKEN_ID++;
    }
}