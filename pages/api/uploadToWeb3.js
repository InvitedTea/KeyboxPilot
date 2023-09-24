// pages/api/uploadToWeb3.js

import { Web3Storage } from 'web3.storage';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const token = process.env.WEB3STORAGE_TOKEN;
  const storage = new Web3Storage({ token });
  const fileContent = req.body.content;

  try {
    const files = [{ content: new TextEncoder().encode(fileContent), name: 'report.txt' }];
    const cid = await storage.put(files);
    res.status(200).json({ cid: cid.toString() });
  } catch (error) {
    res.status(500).json({ error: 'Failed to upload to Web3.Storage' });
  }
}
