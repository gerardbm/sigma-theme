# Sigma theme for Jekyll

This theme is a subjective one focused on speed and SEO, taking care of a beautiful appearance.

- Golden proportion header.
- Modern and responsive design.
- Light/dark toggle button.
- Search using lunr.js.
- SEO friendly, fully optimized.
- Sticky menu + scroll up button.
- Sticky sidebar with sidenavs.
- Layouts with sidebar right/left.
- Set custom sidebar for every page.
- Code blocks syntax highlighting.
- LaTeX maths, Katex integrated.
- Loop posts in category pages.
- Links to next/previous posts (same category).
- Breadcrumbs with Schema.org.
- Schema.org for posts and categories.
- User interface multilanguage.
- Advertisements zones (content and sidebar).
- A lot of web services available.
	- Google Analytics
	- Open Graph
	- Twitter Cards
	- Sites verification

Check the [Sigma theme unit test](https://github.com/gerardbm/sigma-theme-unit-test) repository to test it.

## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "sigma-theme"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: sigma-theme
plugins:
  - jekyll-data
  - jekyll-feed
  - jekyll-sitemap
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install sigma-theme

## Usage

### Header config

Top bar links, in `_config.yml`:

- `twitter_username`: Your Twitter username.
- `facebook_username`: Your Facebook username.
- `linkedin_username`: Your LinkedIn username.
- `pinterest_username`: Your Pinterest username.
- `instagram_username`: Your Instagram username.
- `github_username`: Your Github username.
- `youtube_username`: Your Youtube username.
- `sitemap_link`: true or false to show the link pointing to the `sitemap.xml` generated by the plugin `jekyll-sitemap`.
- `search_url`: The path of your search page. Then you will `include search-lunr.html` in that page.
- `rss_feed`: Paste here your custom feed link. If not, it will link to the default `feed.xml` file.
- `color_toggle`: Toggle between light and dark color schemes.

Logotype, in `_config.yml`:

```yml
logo:
  path: relative path
  width: an integer value
  height: an integer value
```

Favicons, in `_config.yml`:

- `favicon_ico`: The relative path of your favicon.
- `favicon_16`: The relative path of a 16 pixels size icon.
- `favicon_32`: The relative path of a 32 pixels size icon.
- `apple_touch`: The relative path of your apple touch icon for Apple.
- `webmanifest`: The relative path of the webmanifest file for Android.
- `browserconfig`: The relative path of the browserconfig file for IE.
- `mask_icon`: The relative path of the SVG icon mask file for Safari.
- `mask_color`: An HEX color. The fill color needs to be defined.

This [script](https://github.com/gerardbm/dotfiles/blob/master/bin/.local/bin/faviconer) generates the favicons.

Theme color, in `_config.yml`:

- `theme_color`: An HEX color. The fill color needs to be defined.

Breadcrumbs, in `_config.yml`:

- `bc_sep`: The breadcrumbs separator.

Custom CSS directly in the head:

- `custom_css`: The relative path of the CSS file, that must be in `_includes` folder.

### Footer config

Bottom links, in `_config.yml`:

- Create the file `footer-links.yml` inside `_data` folder with the following structure:

```yml
docs:

- title:
  url:
```

Copyright information, in `_config.yml`:

- `first_year`: Type here an integer, it should be the first year of your site. For example: 2012, it will output "2012-2019" (current year), automatically. If it's the same year as the current year, it will output simply "2019".
- `copyright`: Type here your copyright text. For example: «All rights reserved».

### Sidebar config

First of all, in the post or page front matter:

```yml
sidebar: right / left / false
```

Sidebar structure:

1. Zone: sidebar top
2. Sidenav:
  - Categories list in category pages
  - Posts list in posts (same category)
  - Pages list in pages
3. Custom layout for specific pages
4. Zone: sidebar bottom

Display a navigation menu in the sidebar (**sidenav**). Navigate between posts in the same category (layout = `post`), navigate between other categories in the category pages (layout = `category`) and navigate between pages in the pages itself (layout = `page`). Use it in the post or page front matter:

```yml
sidenav:
  categories: true
  posts: true
  pages: true
```

Use a custom layout in the sidebar for specific pages:

```yml
sidebar_custom: my-custom-menu-for-this-awesome-category.html
```

### Advertisements zones: sidebar

You can display zones for advertisements in the top or the bottom of your sidebar.

Create html files into your `_includes` folder and use the filename as value in the post or page front matter:

```yaml
zone:
  sidebar_top: ads-sidebar-top.html
  sidebar_bottom: ads-sidebar-bottom.html
```

### Advertisements zones: content

You can also display zones for advertisements in the top or the bottom of your content.

Create html files into your `_includes` folder and use the filename as value in the post or page front matter:

```yaml
zone:
  content_top: ads-above-h1.html
  content_bottom: ads-below-content.html
```

For the sidebar, first it must be displayed.

### Web services

Google Analytics, in `_config.yml`:

- `google_analytics`: Type here your Analytics ID. Format:  UA-nnnnnnnn-n

Open Graph, in `_config.yml`:

- `fb_admins`: Your Facebook admin ID.
- `fb_app_id`: Your Facebook app ID.
- `og_locale`: The language locale. For example: en_US, es_CA, es_ES...

In the post or page front matter:

- `image`: Add the relative path of the post/page image.

Twitter Cards, in `_config.yml`:

- `twc_user`: Your Twitter username to use in the Twitter cards.

Sites verification, in `_config.yml`:

- `google_sv`: Your Google site verification.
- `bing_sv`: Your Bing site verification.
- `alexa_sv`: Your Alexa site verification.
- `adsense`: Verify your site for Google AdSense (format: `ca-pub-nnnnnnnnnnnnnnnn`).

### SEO:

- For the `title` tag, it will use the post/page title.
- For the canonical link, it will use the post/page link.

Meta tags, in post or page front matter:

- `robots`: Must be a robots setup: `index,follow`, `noindex,follow`...
- `metadesc`: A description of the page. Less than 160 characters is recommended.
- `kewyords`: A list of keywords. Google does not use them, though.

There is no prevision of using pagination in this theme at the moment, so `rel="prev"` and `rel="next"` are not included. This theme lists all posts of a category in the category page.

TODO: Make the pagination customizable.

Insert backlink to the copied text when someone decides to copy text:

- `linking`: true or false.

### Maths

Katex library, in post or page front matter:

- `latex`: true or false to use Katex.

### Misc

Tools for the content, in post or page front matter:

- `read_time`: true or false to show the read time of a page/post.
- `breadcrumbs`: true or false to show the breadcrumbs.
- `postmeta`: true or false to show the 'post meta' under the h1.
- `nextprev`: true or false to show links for the next/previous posts.
- `share`: true or false to show the share buttons.
- `sidebar`: right or left to show the sidebar.
- `sticky`: true or false to make the sidebar sticky on scroll.
- `rouge`: true to load the rouge CSS.
- `order`: customize the posts order in the loops.
- `cookies`: the html filename.
- `version`: any value, version number or date for CSS/JS files.
- `suffix`: true or false to add a suffix to the post/page: `" | MySite"` with the title site.

### Setting up default settings for all posts and pages, automatically

You can configure default settings for all posts or pages. If then you configure an option in the post/page front matter, this will be the option used, overriding the default setting. Example with random values:

```yaml
defaults:
  -
    scope:
      path: ""
      type: "posts"
    values:
      read_time: true
      breadcrumbs: true
      nextprev: true
      share: true
      latex: true
      sidebar: right
      sticky: true
      sidenav:
        posts: true
      zone:
        content_top: content-top.html
        content_bottom: content-bottom.html
        sidebar_top: ads-sidebar-top.html
        sidebar_bottom: ads-sidebar-bottom.html
  -
    scope:
      path: ""
      type: "pages"
    values:
      read_time: false
      breadcrumbs: true
      share: false
      sidebar: false
      sidenav:
        pages: true
        categories: true
      robots: noindex,nofollow
```

### Category pages

Create a markdown page in your root site, with this minimal front matter:

```yaml
---
layout: category
title: An awesome category and more things!
cat: Awesome category
h1: The Awesome Category
permalink: /awesome-category/
---
```

The `cat` must be the same of the `category` in posts: it will be used to show the total posts of a category.

Then include this line in the content:

```liquid
{% include loop-excerpt.html cat="Awesome category" %}
```

This will list all the posts of this category.

Use `excerpt:` in the front matter of posts to display posts description in the category page.

### Layouts

Define them in the front matter:

- `home`: Use it in your index.md, it's empty (only content included).
- `page`: Use it for your regular pages.
- `post`: Use if for your posts.
- `category`: Use it to create pages for categories.

### Tips

- `nextprev` will link to the next/prev posts within the same category. It will use the last category assigned, because it's the subcategory. For example: `categories: [vehicles, cars]` will only navigate between `cars`. Therefore, it's a good idea to have the same level of categories in a project.

### General front matter for posts

```
---
layout: post
title: A nice title for this post
h1: The heading of the post
author: An expert
last_modified_at: 2020-10-20
permalink: /the-post/
order: 55
category: "Awesome category"
metadesc: This is for the meta description
excerpt: >-
  This is the excerpt text of the post
image: images/whatever.jpg
sidebar_custom: original-sidebar.html
---
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/gerardbm/sigma-theme. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

