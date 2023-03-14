
import { Web3Storage } from "web3.storage";


function GetAccessToken() {
  
  const a=process.env.NEXT_PUBLIC_MINTNFT
  console.log("--->>>>",a)
  return a.toString();
}

function MakeStorageClient() {
   console.log("--->token", GetAccessToken() as string);
  
    return new Web3Storage({ token: GetAccessToken() as string });
    
}

export const StoreData = async (files : any) => {

  const client = MakeStorageClient();
  const cid = await client.put([files]);

  return cid;
};