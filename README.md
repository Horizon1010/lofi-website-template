
# Lofi Website Template

This project is a simple yet stylish lofi-themed website template. It includes HTML, CSS, and JavaScript. This README file explains how to set up, edit, and customize the website.

Preview: [Lofi-Website](https://hori-home.vercel.app/)

## Table of Contents

1. [File Structure](#file-structure)
2. [Installation](#installation)
3. [Editing Content](#editing-content)
4. [Styling Customization](#styling-customization)
5. [JavaScript Functionality](#javascript-functionality)
6. [Credits](#credits)

## File Structure

```
Horizon/
├── assets/
│   ├── img/
│   │   └── chillhop-white-oak.gif
│   │   └── favicon.ico
│   └── sound/
│       └── chill.mp3
├── index.html
├── styles.css
└── script.js
```

## Installation

1. **Download or Clone the Repository:**

   ```sh
   git clone https://github.com/yourusername/horizon-template.git
   ```

2. **Navigate to the Folder:**

   ```sh
   cd horizon-template
   ```

3. **Open `index.html` in your preferred browser:**

   ```sh
   open index.html
   ```

## Editing Content

### HTML

The main content file is `index.html`. Here you can edit the title, headings, texts, and links.

- **Change Title:** Edit the `<title>` tag in the `<head>` section.
- **Change Heading:** Edit the `<h1>` tag in the `<header>` section.
- **Change Subtitle:** Edit the `<p>` tag in the `<header>` section.
- **Edit Social Links:** Adjust the `<a>` tags within the `<div class="social-icons">` block.

### CSS

All styling definitions are located in the `styles.css` file. Here you can customize colors, fonts, and layouts.

- **Change Font:** Edit the `font-family` property in the `body` tag.
- **Change Colors:** Adjust the color values in the CSS classes (`header`, `h1`, `p`, `.social-icons a`, etc.).
- **Change Background Image:** Edit the path in the `.blurred-background` block.

### JavaScript

The JavaScript functionality is defined in the `script.js` file. Here you can adjust the behavior of the audio player and animations.

- **Change Audio Source:** Edit the `src` attribute value of the `<audio>` tag in `index.html`.
- **Adjust Loading Screen Duration:** Modify the `setTimeout` duration in the `window.addEventListener('load', ...)` block.

## Styling Customization

To further customize the style of your website, you can edit the following properties in `styles.css`:

- **Background Image:** `.blurred-background`
- **Colors and Font Sizes:** `h1`, `p`, `.social-icons a`
- **Animations:** `@keyframes wave-animation`, `@keyframes loading`

## JavaScript Functionality

The `script.js` file contains the basic JavaScript functions:

- **Audio Player Control:** Functions to play/pause the audio and adjust the volume.
- **Loading Screen:** A simple loading screen handling.
- **Text Animation:** An animated display of the header text.

### Example of Adding a New Social Link:

```html
<div class="social-icons">
    <a href="#" aria-label="Discord"><i class="fab fa-discord"></i></a>
    <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
    <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
    <!-- New Link -->
    <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
</div>
```

## Credits

- **Icons:** [Font Awesome](https://fontawesome.com)
- **Font:** [Google Fonts - Pacifico](https://fonts.google.com/specimen/Pacifico)
