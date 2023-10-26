'use client'
import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
//import { ethers } from 'ethers/lib/ethers';
import { config } from './wagmi';

const NFTPage = () => {
    const [nfts, setNfts] = useState<{ tokenId: any; tokenURI: any; }[]>([]);
    const contractAddress = '0x38f967da24773700234493693d7f85959e70090f';

  useEffect(() => {
    const fetchNFTs = async () => {
      const provider = new ethers.providers.Web3Provider(config.publicClient);
      const contract = new ethers.Contract(contractAddress, [
        'function balanceOf(address owner) external view returns (uint256)',
        'function tokenOfOwnerByIndex(address owner, uint256 index) external view returns (uint256)',
        'function tokenURI(uint256 tokenId) external view returns (string)',
      ], provider);

      const accounts = await provider.listAccounts();
      const balance = await contract.balanceOf(accounts[0]);

      const fetchedNfts = [];
      for (let i = 0; i < balance; i++) {
        const tokenId = await contract.tokenOfOwnerByIndex(accounts[0], i);
        const tokenURI = await contract.tokenURI(tokenId);
        fetchedNfts.push({ tokenId, tokenURI });
      }

      setNfts(fetchedNfts);
    };

    fetchNFTs();
  }, []);

  return (
    <div>
      {nfts.map(nft => (
        <div key={nft.tokenId}>
          <p>Token ID: {nft.tokenId}</p>
          <p>Token URI: {nft.tokenURI}</p>
        </div>
      ))}
    </div>
  );
};

export default NFTPage;