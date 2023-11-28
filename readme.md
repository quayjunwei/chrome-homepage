# Custom Chrome Homepage

Customisable homepage for Google Chrome, designed to provide quick access to frequently used websites and features a Google search bar for convenience.

---
## Features

- Easy access to my frequently visited sites (GitHub, in4sit, Outlook, xSite, SQL 50, and PD 30)
- Google search bar integrated into the homepage
- Responsive design that adapts to different screen sizes
- Customisable shortcut icons for your favorite websites
- A clean and intuitive user interface

## Getting started

To set this page as your homepage in Chrome, follow these steps:

1. Pull this repo
2. Open Chrome and click on the `three dots`in the upper-right corner of the browser window to open the Chrome menu
3. Navigate to the `Extensions` menu and click on `Manage Extensions`
4. Click on `Load Unpack` and load the `chrome-homepage` folder you pulled

## Usage

Upon opening Chrome, you will be greeted with your custom homepage. You can click on any of the icons to quickly navigate to your chosen websites.

- To perform a `search`, type your query into the Google search bar and press enter
- To access the `shortcuts dropdown menu`, hover over over the `apps` icon on the top right

## Customisation

To customise the shortcuts:

1. Open the `index.html` file in a text editor
2. Locate the `div` with the class `dropdown-content`
3. Replace the existing `a href` and `img-src` with links and images with your preferred website URLs and icons
4. Save the file and refresh your browser to see the changes

To customise logo on homepage:

1. Open the `index.html` file in a text editor
2. Locate the `div` with the class `google-doodle`
3. Replace the existing `img-src` with your preferred image
4. Save the file and refresh your browser to see the changes

## External Resources

- Styles are defined in `./styles/styles.css`
- JavaScript functionality is handled by `./scripts/app.js`
- Fonts and icons are provided by Google Fonts and Material Icons
