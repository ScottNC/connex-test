import dotenv from 'dotenv';

dotenv.config();

function getHeader() {
  return process.env.AUTHORISATION_HEADER ?? '';
}

const secretHeader = process.env.AUTHORISATION_HEADER;

export default getHeader;