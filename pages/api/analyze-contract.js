const { sendRequest } = require("../../utils/google-foundation-models");

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { contractData } = req.body;

  const params = {
    apiEndpoint: "us-central1-aiplatform.googleapis.com",
    projectId: "aipoc-396803",
    modelId: "code-bison@001",
    instances: [
      {
        prefix: "If I give you a smart contract code, can you add a comment on every function",
        content: contractData // Assuming contractData is the smart contract content
      }
    ],
    parameters: { temperature: 0.2, maxOutputTokens: 2000, topP: 0.8, topK: 40 }
  };

  try {
    const response = await sendRequest(params);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
}
