# Statically Generated Design Portfolio

Designed by and featuring Steven Vasil.
## Tech
- Next.js
- Contentful
- Emotion

## Features

### Home hero

The home headline is the Contentful `homePage` entry: `title` is the first (black) line and `introduction` the second (italic grey) line. The badge rows under it (label + logo) are the `HERO_BADGES` constant in `components/IntroSection/hero-badges.tsx`; logo art lives in `public/assets/logos/`.

### Open-to-work line

`OPEN_TO_WORK` in `lib/constants.ts` controls the job-hunt line shown under the home badges and on the About page. Flip `enabled` to hide it.

### Experience / LinkedIn

The About page experience rows (logo, role, org, description) are the `EXPERIENCE` array at the top of `pages/about.tsx`. The LinkedIn URL (footer link) is `LINKEDIN_URL` in `lib/constants.ts`.

### Redirects

`/current` (the old Aerolink WIP page) permanently redirects to `/project/aerolink` via `next.config.js`.

### Draft preview

Draft (unpublished) Contentful content can be reviewed on the real site before publishing.

- Env vars (Vercel, Production + Preview): `CONTENTFUL_PREVIEW_ACCESS_TOKEN` (Contentful → Settings → API keys → Content Preview API token) and `CONTENTFUL_PREVIEW_SECRET` (any random string).
- Contentful → Settings → Content preview has a platform whose URLs point at `/api/preview?secret=<secret>&slug={entry.fields.slug}` (Project) and `/api/preview?secret=<secret>` (Home Page). Each entry then has an "Open preview" button.
- `/api/preview` sets a 1-hour Next.js preview cookie and redirects to the page; a "Previewing drafts · Exit preview" pill shows while it's active (`/api/exit-preview` clears it).

### TODO
#### Setup Preview Mode:

In your Contentful space, go to **Settings > Content preview** and add a new content preview for development.

The **Name** field may be anything, like `Development`. Then, under **Content preview URLs**, check **Post** and set its value to:

```
http://localhost:3000/api/preview?secret=<CONTENTFUL_PREVIEW_SECRET>&slug={entry.fields.slug}
```

Replace `<CONTENTFUL_PREVIEW_SECRET>` with its respective value in `.env.local`.

![Content preview setup](./docs/content-preview-setup.png)

Once saved, go to one of the posts you've created and:

- **Update the title**. For example, you can add `[Draft]` in front of the title.
- The state of the post will switch to **CHANGED** automatically. **Do not** publish it. By doing this, the post will be in draft state.
- In the sidebar, you will see the **Open preview** button. Click on it!

![Content entry overview](./docs/content-entry-preview.png)

You will now be able to see the updated title. To exit preview mode, you can click on **Click here to exit preview mode** at the top of the page.

#### Enable On-Demand Revalidation

In your Contentful space, go to **Settings > Webhooks** and add a new webhook:

- **Give the webhook a name**
- **Activate:** Check the activate checkbox to ensure the webhook is marked as active
- **Specify the POST URL:** Using the URL from your Vercel deployment in step 8, add the path `/api/revalidate` at the end, so it would look something like:

  ```
  https://<YOUR_VERCEL_DEPLOYMENT_URL>/api/revalidate
  ```

  Replace `<YOUR_VERCEL_DEPLOYMENT_URL>` with your own deployment URL as noted in the Vercel dashboard.

- **Specify Triggers:** You can choose to trigger for all events or specific events only, such as the Publishing and Unpublishing of Entries and Assets, as shown below.

  ![Content webhook url](./docs/content-webhook-url.png)

- **Specify Secret Header:** Add a secret header named `x-vercel-reval-key` and enter the value of the
  `CONTENTFUL_REVALIDATE_SECRET` from before.

  ![Content secret header](./docs/content-secret-header.png)

- **Set Content type:** Set content type to `application/json` in the dropdown.

  ![Content publish changes](./docs/content-content-type.png)

- **Edit post:** Now, try editing the title of one of your blog posts in Contentful and click Publish. You should see the changed reflected in the website you just deployed, all without triggering a build! Behind the scenes a call was made to the revalidate api that triggers a revalidation of both the landing page and the specific post that was changed.

  ![Content publish changes](./docs/content-publish-changes.png)

- **Verify:** You can verify if your request was made successfully by checking the webhook request log on Contentful and checking for a successful 200 status code, or by having your functions tab open on Vercel when committing the change (log drains may also be used). If you are experiencing issues with the api call, ensure you have correctly entered in the value for environment variable `CONTENTFUL_REVALIDATE_SECRET` within your Vercel deployment.

  ![Content successful request](./docs/content-successful-request.png)
