YOUR MINIMALIST PORTFOLIO — QUICK START

FILES
- index.html: website content and sections
- style.css: colors, typography, spacing, responsive layout
- script.js: mobile navigation and current footer year

BEFORE PUBLISHING
1. Open index.html and replace every instance of "Your Name" / "YOUR NAME".
2. Replace you@example.com with your real public contact email.
3. Replace the LinkedIn, Vimeo, Instagram, and film links (currently #).
4. Edit the sample job titles, dates, project descriptions, and education.
5. Replace the image placeholders with your own images. For the large hero image, add an image file to this folder (for example hero.jpg), then in index.html change:
   <div class="hero-image" ...>
   to:
   <img class="hero-image" src="hero.jpg" alt="Describe your image">
   If you use an img, add "object-fit: cover; width: 100%;" to the .hero-image rule in style.css.
6. For film thumbnails, you can replace each film-placeholder div with an img element and use your own stills.

PUBLISH WITH GITHUB + CLOUDFLARE PAGES
1. In GitHub, create a new repository. A simple name is "my-portfolio".
2. Upload index.html, style.css, and script.js (README.txt is optional) to the repository's root.
3. In Cloudflare, open Workers & Pages, choose Create, then Pages, then Connect to Git.
4. Select your GitHub account and the my-portfolio repository.
5. For a plain HTML website, use these settings:
   - Framework preset: None
   - Build command: leave blank
   - Build output directory: /
6. Deploy. Cloudflare will give you a public *.pages.dev address.
7. Later, edit files in GitHub and commit the changes. Cloudflare will automatically redeploy.

TIP
You can use a free Cloudflare Pages address to start. A custom domain is optional and costs extra.
