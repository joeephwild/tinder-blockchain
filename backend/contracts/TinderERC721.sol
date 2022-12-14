// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract TinderERC721 is ERC721URIStorage {
   uint256 TINDER_TOKEN_ID;

    constructor() ERC721("TinderERC721", "TND") {}

    function minNFT(address _userOne, address _userTwo, string memory _tokenURI) public {
        _mint(_userOne, TINDER_TOKEN_ID);
        _setTokenURI(TINDER_TOKEN_ID, _tokenURI);
        TINDER_TOKEN_ID++;

        _mint(_userTwo, TINDER_TOKEN_ID);
        _setTokenURI(TINDER_TOKEN_ID, _tokenURI);
        TINDER_TOKEN_ID++;
    }
}