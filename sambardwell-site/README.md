 sambardwell.com

My personal site where I share blog posts, code experiments, and my resume. Built as a fully static site with Next.js.

## What's inside

- **Blog with MDX** - Write posts in Markdown, embed React components when needed
- **Filter & sort** - Browse posts by type or tech stack ("energy" tags)
- **Print-friendly resume** - Hit Ctrl+P for a clean PDF-ready layout
- **Pokemon card thumbnails** - Because why not
- **Fast & simple** - Static export, no server needed

## Tech Stack

- Next.js 15 (App Router, static export)
- TypeScript
- Tailwind CSS + @tailwindcss/typography
- MDX for blog content

## Project Structure

```
sambardwell-site/
├── src/
│   ├── app/              # Next.js app router pages
│   │   ├── blog/         # Blog listing and post pages
│   │   ├── resume/       # Resume page with print styles
│   │   └── globals.css   # Global styles and typography
│   ├── components/       # React components
│   │   ├── blog/         # Blog-specific components (cards, filters)
│   │   └── resume/       # Resume components (timeline, sidebar)
│   ├── content/
│   │   └── posts/        # MDX blog posts
│   └── lib/              # Utility functions and data fetching
└── public/               # Static assets (images, icons, cards)
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📝 Adding Blog Posts

Create a new `.mdx` file in `src/content/posts/`:

```mdx
export const metadata = {
  title: "Your Post Title",
  description: "Brief description",
  date: "2025-01-15",
  type: "Technical",
  energy: ["Next.js", "TypeScript"],
  thumbnail: "/cards/your-image.png",
  draft: false
};

Your content here...
```

## Resume Features

The resume page includes:
- **Screen-optimized layout** - Two-column grid with vertical timeline rails
- **Print-ready styles** - Professional formatting when printing/saving to PDF
- **Responsive design** - Mobile-friendly single-column layout
- **Print header** - Contact information displayed only in print mode

To print: Click "PDF / Print" button or use `Ctrl/Cmd + P`

## ☕ Support

If you find this site's code, design, or templates useful:

**[Buy me a coffee ☕](https://buymeacoffee.com/sambardwell)**

Donations help cover hosting costs, development tools, and give me focused time to:
- Write new blog posts and tutorials
- Build premium templates and components
- Maintain and improve this open-source project

Thank you for your support!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **Live Site:** [sambardwell.com](https://sambardwell.com)
- **GitHub:** [@sambardwell](https://github.com/sambardwell)
- **Buy Me a Coffee:** [buymeacoffee.com/sambardwell](https://buymeacoffee.com/sambardwell)

---

Sam Bardwell