const { sendRequest, writeResponseLocally, saveCodeToFile } = require("../utils/google-foundation-models");
const params = {
  apiEndpoint: "us-central1-aiplatform.googleapis.com",
  projectId: "aipoc-396803",
  modelId: "code-bison@001",
  instances: [
    {
      prefix:
        "If I give you an smart contract code, can you add comment on every function",
    },
  ],
  parameters: { temperature: 0.2, maxOutputTokens: 2000, topP: 0.8, topK: 40 },
};
sendRequest(params)
  .then((response) => {
    console.log(response);
    writeResponseLocally(params, response);
    saveCodeToFile(params, response)
  })
  .catch((error) => {
    console.error(error);
  });
