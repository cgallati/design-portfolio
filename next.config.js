/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    // Old Aerolink WIP page. Point at /project/aerolink once that entry is published.
    return [{ source: "/current", destination: "/", permanent: false }];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
    ],
  },
};
