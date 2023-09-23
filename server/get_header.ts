import dotenv from 'dotenv';

dotenv.config();

export function getHeader() {
  return process.env.AUTHORISATION_HEADER ?? '';
}