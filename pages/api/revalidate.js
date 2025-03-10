export default async function handler(req, res) {
  let inboundRevalToken = req.headers["x-vercel-reval-key"];

  if (!inboundRevalToken) {
    return res
      .status(401)
      .json({ message: "x-vercel-reval-key header not defined" });
  } else if (inboundRevalToken !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    let slug = req.body?.fields?.slug?.["en-US"];

    slug && (await res.revalidate(`/project/${slug}`));
    await res.revalidate("/");

    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send("Error revalidating`");
  }
}
