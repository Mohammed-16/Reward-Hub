import {
	PublicKey,
	LAMPORTS_PER_SOL,
} from '@solana/web3.js'
import { CreateNftOutput, Metaplex, MetaplexFile, Nft } from '@metaplex-foundation/js'
import * as IPFS from 'ipfs-core';


async function airdropSol(wallet, connection) {
	const airdropSignature = await connection.requestAirdrop(
		wallet.publicKey,
		LAMPORTS_PER_SOL
	)
	const rx = await connection.confirmTransaction(airdropSignature)
	console.log('sols airdropped', rx)
}
function getAccessToken() {
    return process.env.WEB3STORAGE_TOKEN_APIKEY;
  }

async function uploadImage(dataSrc) {
		const ipfs = await IPFS.create();
		const result = await ipfs.add(dataSrc);
		const cid = result.cid
		const gateway = 'https://ipfs.io/ipfs/'
		const Link = gateway+cid;
    	console.log("Link ",Link);
	return Link;

}	

async function collabNftMetadata(name: string, description: string, github:string ,ipfsImage: MetaplexFile, metaplex: Metaplex, contributionPower: number) {
	try {
		const { uri } = await metaplex.nfts().uploadMetadata({
			name: name,
			description: description,
			image: ipfsImage,
			"attributes": [
				{
					"trait_type": "Contribution-Power",
					"value": contributionPower.toString(),
				},
				{
					"trait_type": "GitHub URL",
					"value": github.toString(),
				}
				
			],
		}).run();
		console.log('metadata uploaded', uri)
		return { uri }
	} catch (error) {
		console.error('Metadata upload error ', error)
	}
}

function sleep(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms));
 }

async function creteNfts(metadata: any, title: string, cps: number, git: string ,metaplex: Metaplex, members) {	
	const transactions = [];
	const tx = metaplex.nfts().create({
		uri: metadata,
		name: title,
		sellerFeeBasisPoints: 0,
	});	
	transactions.push(tx)
	console.log("==> ",members);
	for(let i = 0;i<members.length;i++)
	{
		console.log(members[i].memberAddress);
		const address = new PublicKey(members[i].memberAddress);
		const tx= metaplex.nfts().create({
			uri: metadata,
			tokenOwner: address, 
			name: title,
			sellerFeeBasisPoints: 0,
		});
		transactions.push(tx);
		await tx.run();
	}
}

export {
	uploadImage,
	collabNftMetadata,
	creteNfts,
	airdropSol,
}
