export function formatDistance(miles: string | undefined) {
  if (!miles) return;
  return `${Math.round(parseFloat(miles) * 1.60934)} km`;
}
