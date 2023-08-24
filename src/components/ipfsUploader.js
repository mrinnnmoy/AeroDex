import axios from "axios";

//Paste Your API's Key and Secret here
const pinataApiKey = "d4b945d99b361609295a";
const pinataApiSecret = "81926e50d7152e1b3019efffd4e66ac9d2bb927ed64e2b6e7019f68ebdd846b0";

const pinataApiUrl = "https://api.pinata.cloud/pinning/pinFileToIPFS";

const pinataHeaders = {
  headers: {
    "Content-Type": "multipart/form-data",
    pinata_api_key: pinataApiKey,
    pinata_secret_api_key: pinataApiSecret,
  },
};

export async function uploadToIPFS(file) {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post(pinataApiUrl, formData, pinataHeaders);
    const ipfsHash = response.data.IpfsHash;
    return `https://gateway.pinata.cloud/ipfs/${ipfsHash}`;
  } catch (error) {
    console.error("Error uploading file to Pinata:", error);
    throw error;
  }
}