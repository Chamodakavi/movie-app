/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "m.media-amazon.com",
      "upload.wikimedia.org",
      "th.bing.com",
      "image.tmdb.org", // Add more domains if needed
    ],
  },
};

module.exports = nextConfig;
