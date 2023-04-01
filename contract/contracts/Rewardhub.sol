// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract RewardHub is ERC721 {
    uint256 private _tokenIdTracker;
    mapping(uint256 => string) private _tokenURIs;

    constructor() ERC721("ImageNFT", "INFT") {}

    // Address of the Project Owner to be passed with the TokenURI
    function mint(address to, string memory tokenURI) public returns (uint256) {
        uint256 newTokenId = _tokenIdTracker;
        _safeMint(to, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        _tokenIdTracker++;
        return newTokenId;
    }

    function _setTokenURI(uint256 tokenId, string memory uri) internal virtual {
        require(_exists(tokenId), "ERC721Metadata: URI set of nonexistent token");
        _tokenURIs[tokenId] = uri;
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        return _tokenURIs[tokenId];
    }

    // Address of the Contributor to be passed with TokenID
    function transferNFT(address _to, uint256 _tokenId) public {
        require(ownerOf(_tokenId) == msg.sender, "ImageNFT: You do not own this NFT.");
        safeTransferFrom(msg.sender, _to, _tokenId);
    }
}