import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = () => {
  return (
    <Helmet>
      <title>Crypto Guts - Web3 Content Creation & Design Services</title>
      <meta name="description" content="Bridging the gap between blockchain and people. Expert content creation, UI/UX design, and community building services for Web3 projects. Join 12,000+ followers in the blockchain revolution." />
      <meta name="keywords" content="crypto content creation, blockchain design, Web3 community building, DeFi content, NFT marketing, crypto consulting, blockchain education" />
      
      {/* Open Graph */}
      <meta property="og:title" content="Crypto Guts - Web3 Content Creation & Design Services" />
      <meta property="og:description" content="Expert content creation, UI/UX design, and community building services for Web3 projects. Join 12,000+ followers in the blockchain revolution." />
      <meta property="og:type" content="website" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Crypto Guts - Web3 Content Creation & Design Services" />
      <meta name="twitter:description" content="Expert content creation, UI/UX design, and community building services for Web3 projects. Join 12,000+ followers in the blockchain revolution." />
      
      {/* Additional Meta Tags */}
      <meta name="author" content="Crypto Guts" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://cryptoguts.com" />
    </Helmet>
  );
};

export default SEO;