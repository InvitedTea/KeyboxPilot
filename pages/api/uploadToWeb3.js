import { Web3Storage, File } from 'web3.storage';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const token = process.env.WEB3STORAGE_TOKEN;
  if (!token) {
    return res.status(500).send('A token is needed. You can create one on https://web3.storage');
  }

  const storage = new Web3Storage({ token });
  
  // Convert the content into a File object provided by web3.storage
  const file = new File([req.body.content], 'report.txt', { type: 'text/plain' });

  try {
    const cid = await storage.put([file]);
    return res.status(200).json({ 
      cid: cid.toString(), 
      url: `https://${cid}.ipfs.dweb.link`
    });
  } catch (error) {
    console.error("Web3.Storage upload error:", error.message);
    return res.status(500).json({ error: 'Failed to upload to Web3.Storage' });
  }
}
