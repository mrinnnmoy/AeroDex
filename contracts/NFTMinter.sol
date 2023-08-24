// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3; 
 
//The ERC721.sol file contains the implementation of the ERC721 standard, which is used for non-fungible tokens (NFTs). 
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
//It adds functionality for storing and retrieving token metadata URIs.
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol"; 
//provides a library for managing counters.
import "@openzeppelin/contracts/utils/Counters.sol"; 

contract NFTMinter is ERC721URIStorage { 
    //This line defines a new contract called NFTMinter
    using Counters for Counters.Counter; 
    //Counters library to create a counter variable called _tokenIds
    Counters.Counter private _tokenIds;

    constructor() ERC721("Polygon Mumbai NFTMinter", "MNFT") {} 
    //constructor function of the NFTMinter contract. It is executed only once when the contract is deployed. 

    function mintNFT(address recipient, string memory tokenURI) public returns (uint256) {
    // recipient, which is the address that will receive the NFT, and tokenURI, which is the URI of the NFT's metadata. 

        _tokenIds.increment();
    //increments the _tokenIds counter, generating a new ID for the NFT.
        uint256 newItemId = _tokenIds.current();
    //mints a new NFT and assigns it to the recipient address with the newItemId
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);
    //sets the tokenURI of the newly minted NFT.
        return newItemId;
    }
}

// NFTMinter deployed to: 0xe49A000a36Ddc0e5a0AbD398c7a7f679378dB5D3