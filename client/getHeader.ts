export const getHeader = () => {
  return import.meta.env.VITE_AUTHORISATION_HEADER || '';
};
