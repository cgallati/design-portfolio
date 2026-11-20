/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    // Old Aerolink WIP page now lives as a full case study.
    return [{ source: "/current", destination: "/project/aerolink", permanent: true }];
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
