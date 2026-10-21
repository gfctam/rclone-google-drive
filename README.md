# Rclone Google Drive

Public home page and privacy policy for a personal [rclone](https://rclone.org/) Google Drive OAuth client. Google’s consent screen asks for both URLs before **Publish app** is available. See [Making your own client_id](https://rclone.org/drive/#making-your-own-client-id).

The pages state that Chi Hou Tam operates the client, which Google data it requests, and that Drive files stay on the operator’s account and computers. Edit `index.html` and `privacy.html` if any of that does not match how you use rclone. Do not put the OAuth client secret or refresh token in this repository. The site is meant to be public.

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:4731](http://127.0.0.1:4731). The privacy policy is at [http://127.0.0.1:4731/privacy.html](http://127.0.0.1:4731/privacy.html).

## Publish on GitHub Pages

GitHub Pages has to be a public repository on github.com. Use the `github.io` URL in Google Cloud, not the `github.com` repository URL. Google reports a missing `github.com` domain when the branding links point at the repository instead of the Pages site.

1. Create a public GitHub repository. Naming it `USERNAME.github.io` (your GitHub username) gives the shortest URL. Any other public name, such as `rclone-drive`, also works.
2. Push this project to the default branch `main`. If that repository already has a site, add these files without overwriting it blindly.
3. In the repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**. Set the branch to `main` and the folder to `/ (root)`, then save.
4. Wait until the Pages site is live. Open the home page and `privacy.html` and confirm both load, including the privacy-policy link on the home page.

User site (`USERNAME.github.io` repository):

| Google Cloud field | Value |
| --- | --- |
| Application name | Rclone Google Drive |
| Application home page | `https://USERNAME.github.io/` |
| Application privacy policy link | `https://USERNAME.github.io/privacy.html` |
| Authorized domains | `USERNAME.github.io` |

Project site (any other repository name):

| Google Cloud field | Value |
| --- | --- |
| Application name | Rclone Google Drive |
| Application home page | `https://USERNAME.github.io/REPO/` |
| Application privacy policy link | `https://USERNAME.github.io/REPO/privacy.html` |
| Authorized domains | `USERNAME.github.io` |

`USERNAME` is the GitHub account that owns the repository. The authorized domain has no `https://` and no path. Enter the home page and privacy policy, add `USERNAME.github.io` if Google does not add it from those URLs, then save. Return to **Audience** and use **Publish app**.

Use the same application name in the consent screen and on the site. User support email and the privacy-policy contact can both be the Gmail address already on these pages.

Publishing avoids the 7-day refresh-token expiry of Testing mode. For a personal client, rclone’s docs say you can leave the app unverified and continue past the warning during `rclone config`. You do not need to submit the app for brand verification unless Google refuses to save the branding fields.

If Save says the domain must be verified, add the Pages URL as a URL-prefix property in [Google Search Console](https://search.google.com/search-console) and verify it with the HTML file Google gives you. Commit that file to the root of this repository. Verification with a DNS TXT record is not available on `github.io`. If that check still fails, a domain you control (a `CNAME` on this repository, plus the domain under Authorized domains) is the reliable fix. Until a public URL is accepted, **Testing** plus your own account as a test user still works, and the grant expires after seven days.
