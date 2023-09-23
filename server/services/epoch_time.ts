export const epochTime = () => {
  const current = new Date();
  const epoch = Math.round(current.getTime() / 1000);
  return { epoch };
}