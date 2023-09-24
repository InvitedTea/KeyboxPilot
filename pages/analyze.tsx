// pages/analyze.tsx
import Link from 'next/link';
import { useRouter } from 'next/router';
import AppPreviewContract from "../components/AppPreviewContract";


export default function Analyze() {
  const router = useRouter();
  const { result } = router.query;

  // Ensure result is a valid JSON string before parsing
  let parsedResult = {};
  try {
    parsedResult = JSON.parse(result as string);
  } catch (error) {
    console.error("Failed to parse result:", error);
  }

  // Split the stringified JSON by newline characters
  //const lines = JSON.stringify(parsedResult, null, 2).split('\n');
  const content = parsedResult.predictions?.[0]?.content;

  return (
    <div>
      <h1>Analyze Smart Contract</h1>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div style={{ flex: 1, maxWidth: '48%', marginRight: '2%' }}>
          <AppPreviewContract />
        </div>
        <div style={{ flex: 1, maxWidth: '48%', marginLeft: '2%' }}>
          <h2>Analysis Result:</h2>
          <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', overflowWrap: 'break-word' }}><code>{content}</code></pre>
        </div>
      </div>


      <Link href="/">Go back to home</Link>
    </div>
);

}
