// Entry point for Contentful's "Open preview" button.
// /api/preview?secret=...&slug=<project-slug>  -> draft view of /project/<slug>
// /api/preview?secret=...                      -> draft view of the home page
export default function preview(req, res) {
  const { secret, slug } = req.query;

  if (!process.env.CONTENTFUL_PREVIEW_SECRET || secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return res.status(401).json({ message: "Invalid token" });
  }

  // Only allow plain slugs so this can't be used as an open redirect.
  if (slug && !/^[a-z0-9-]+$/.test(slug)) {
    return res.status(400).json({ message: "Invalid slug" });
  }

  // Short-lived preview session (1 hour).
  res.setPreviewData({}, { maxAge: 60 * 60 });
  res.redirect(307, slug ? `/project/${slug}` : "/");
}
