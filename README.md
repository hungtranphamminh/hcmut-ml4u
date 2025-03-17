# AITech Lab Website

This repository contains the source code for the AITech Lab website - a Next.js-based website for the research team at Ho Chi Minh City University of Technology (HCMUT).

## Getting Started

### Installation

1. Install Node.js dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Set up Python environment for citation management:

```bash
# Create and activate virtual environment
python -m venv venv
source venv/Scripts/activate  # Windows
# OR
source venv/bin/activate      # Unix/MacOS

# Install Python dependencies
pip install -r scripts/citations/requirements.txt
```

### Development Server

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Content Management

This website uses a content-based approach where research publications, projects, and team members are defined in structured files. Here's how to update the content:

### Updating Research Publications

Research publications are managed through the `_data/sources.yaml` file.

#### Adding a Publication:

1. Open `_data/sources.yaml`
2. Add a new entry with the following format:

```yaml
- id: doi:10.xxxx/xxxxx # DOI of the publication
  image: https://example.com/image.png # Image URL (optional)
  tags: [paper] # Tags for categorization
```

The system will automatically fetch citation details from the DOI using Manubot.

#### Publication Entry Syntax:

- `id`: Required. Use the DOI in the format `doi:10.xxxx/xxxxx`
- `image`: Optional. URL to an image representing the publication
- `tags`: Required. Array of tags, typically includes "paper"

After updating, run the citation generation script:

```bash
# Activate your Python environment if not already active
source venv/Scripts/activate  # Windows
# OR
source venv/bin/activate      # Unix/MacOS

# Set required environment variables
export MANUBOT_USE_DOCKER=false

# Run the citation script
python scripts/citations/cite.py
```

This script will process the entries in `sources.yaml` and generate the complete citations in `_data/citations.yaml`.

### Updating Projects

Projects are managed through Markdown files in the `content/projects/` directory.

#### Adding a New Project:

1. Create a new markdown file in `content/projects/`
2. Use the following frontmatter format:

```markdown
---
title: Project Title
author: Author Names
image: images/projects/your-project-image.png
links: project-link.com
github: github.com/username/repo
group: normal # or featured
tag:
  - resource
---

<!-- excerpt start -->

Short description of the project for previews.

<!-- excerpt end -->

Full description of the project with additional details.
```

#### Project Frontmatter Syntax:

- `title`: Required. The title of the project
- `author`: Required. Names of the project authors
- `image`: Optional. Path to the project image (relative to public folder)
- `links`: Optional. External link to the project
- `github`: Optional. GitHub repository link
- `group`: Required. Either `normal` or `featured` to determine display priority
- `tag`: Required. Array of tags for categorization

#### Project Content:

Use HTML comments `<!-- excerpt start -->` and `<!-- excerpt end -->` to mark the short description for previews.

#### Project Images:

Place project images in `public/images/projects/` folder with a descriptive name that matches the image reference in the frontmatter.

### Updating Team Members

Team members are managed through Markdown files in the `content/team/` directory.

#### Adding a New Team Member:

1. Create a new markdown file in `content/team/`
2. Use the following frontmatter format:

```markdown
---
name: Member Name
image: images/members/member-name.jpg
description: Short description of the member
role: undergrad # or pi, alumni
aliases:
  - Alternative Name
  - Another Name Format
affiliation: Ho Chi Minh City University of Technology (HCMUT)
links:
  email: example@email.com
  linkedin: linkedin-username
  github: github-username
  google-scholar: scholar-id
  orcid: 0000-0000-0000-0000
---

Detailed biography of the team member. This can include education, research interests,
and other relevant information.
```

#### Team Member Frontmatter Syntax:

- `name`: Required. Full name of the member
- `image`: Required. Path to the member's profile photo (relative to public folder)
- `description`: Optional. Short description or tagline
- `role`: Required. One of: `pi` (Principal Investigator), `undergrad` (Undergraduate student), or `alumni` (Former member)
- `aliases`: Optional. Array of name variations for publication search linking
- `affiliation`: Optional. Institution affiliation
- `links`: Optional. Social and professional links
  - Supported platforms: `email`, `linkedin`, `github`, `google-scholar`, `orcid`, `home-page`, `facebook`

#### Team Member Images:

Place member profile photos in `public/images/members/` folder with a descriptive name that matches the image reference in the frontmatter.

## Image Management Rules

- Member profile images must be stored in: `public/images/members/`
- Project images must be stored in: `public/images/projects/`
- All images should be optimized for web (compressed, appropriate dimensions)
- Recommended formats: JPEG, PNG, WebP
- For project images, maintain a consistent aspect ratio (16:9 or 4:3 recommended)
- When removing a project or team member, also remove the corresponding image

## Deploying to GitHub Pages

This website is configured to deploy to GitHub Pages via GitHub Actions. The workflow is defined in `.github/workflows/deploy.yml`.

To deploy:

1. Push your changes to the `build/github-page` branch
2. The GitHub Actions workflow will automatically build and deploy the site
3. Your site will be available at `https://<username>.github.io/<repository-name>`

## Additional Information

- The website uses TailwindCSS for styling
- React components are defined in `src/components/`
- Page templates are in `src/app/`
- Helper functions are in `src/lib/`

For more information, refer to the Next.js documentation at [https://nextjs.org/docs](https://nextjs.org/docs).
