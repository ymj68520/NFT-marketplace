/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NFT_MARKET_CONTRACT_ADDRESS: "0xd0cc702353d0de83acc565176194c527b37167f0",
    NFT_CONTRACT_ADDRESS: "0x293599167F3a92B367FDbfa4623e1891229B54Dd",
    CHAIN_ID: 11155111
  },
  reactStrictMode: true,
  images: {
    domains: ['ipfs.infura.io'],
  },
}

module.exports = nextConfig
