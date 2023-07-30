export const getSignature = async (folder) => {
  const response = await fetch('/api/signature', { method: "POST", body: JSON.stringify({ folder: folder }) });
  const data = await response.json();
  const { signature, timestamp } = data;
  return { signature, timestamp, folder };
}