# checklist-web-automation

The checklist of the web page testing using automation.

## Requirements

- [Node.js 14+ - a JavaScript runtime built on Chrome's V8 JavaScript engine](https://nodejs.org/en/)
- [Yarn 1.22+ - a package manager for your code.](https://classic.yarnpkg.com/en/docs/getting-started)
- [Playwright Test 1.16+ - enables reliable end-to-end testing for modern web apps](https://playwright.dev/docs/intro/)
- [CLD3 - a neural network model for language identification](https://github.com/google/cld3)

## Run Playwright tests

- To run tests add a spec title to the `package.json` file in the `test` script.
- Set up all configuration parameters in a `playwright.config.mjs` file.
- Execute tests:

    ```
    yarn test
    ```
    
- Create an HTML report for resources saved in the folder `allure-results` and open report from the folder `allure-report`:

    ```
    yarn allure:report
    ```

## Tests

- [Take a full-page screenshot for a set of viewports](tests/visual-testing/fullpage-screen.spec.mjs)

---

## Checklist of a web page testing

### title tag

- The title matches the corporate style.
- Localized to all supported languages.
- An optimal title tag length. Most desktop and mobile browsers can display the first 50–60 characters of a title tag.

### meta description tag

- Localized to all supported languages.
- An optimal description length. The recommended description is between 50–160 characters.

### Texts

- Each HTML heading (H1, H2, etc.) has a corporate font, size, weight.
- Localized to all supported languages.
- Wrap long words on a small screen.

### Buttons

- A button matches the corporate style.
- A text of the button is localized to all supported languages.
- Style hover, focus, and active states differently.
- Call-to-action.
- TODO

### Internal links

- An internal link matches the corporate style.
- Style hover, focus and visited states differently.
- The link is opened on a new browser tab (if required).
- Ensure all internal URLs respond with 200 status codes.
- Localized to all supported languages using a path or subdomain.

### External links

- An external link matches the corporate style.
- The link is opened on a new browser tab (if required).
- Ensure all external URLs respond with 200 status codes.

### Redirects and 404 error page

- A non-longer existing page redirects to the custom 404 error page.
- The old page URL that was modified redirects to the new URL.

### Icons

- Format: icon font, svg.
- Icons match the corporate style.
- Ensure that users understand the meaning and purpose of icons. (Can users correctly guess what will happen once they interact with the icon?)
- An icon functionality.

### Images

    Recommended image parameters:
    - Name: only use letters, numbers, underscores, and hyphens.
    - Format: jpg, png, gif, svg.
    - Screen resolution: 72 - 96 ppi (pixels per inch).
    - Color mode: RGB.
    - Color profile: sRGB to look right on mobile devices.

- Optimize file names and titles. Make sure they’re relevant, not random.
- Include alt text to describe each image.
- Compress images to balance the smallest file size with the best image quality. Make sure your images display well on different devices.
- Remember that your image has to fit on someone's monitor screen. A good rule (for now) is to make everything fit into a 1024 pixel display screen.
- Reduce image load times with a content delivery network (CDN).
- Use lazy-loading to improve loading speed. 
- GIFs play in a loop.

### Videos

    Recommended video parameters:
    - Name: only use letters, numbers, underscores, and hyphens.
    - Format: mp4 container, encoded with H.264.
    - Video length: under 40 seconds.
    - Frame rate: around 25 frames per second (fps).
    - Resolution : 720p, which is 1280 x 720 pixels.

- Optimize file names and titles. Make sure they’re relevant, not random.
- Use lazy-loading to improve loading speed.
- A background video plays in a loop without sound.

### Navigation

**Main header menu**

- Logotype
- Navigation links
- Call-to-action buttons
- TODO

**Second menu**

- TODO

**Page switcher**

- TODO

**Left/Right sidebar**

- TODO

### Search

- TODO

### Views: Tables / Tree / Cards

- Filters
- Sort
- TODO

### Downloads

- Filename
- File extension
- File size
- TODO

### Pricing

- Currency
- Amount format
- Amount annual/monthly
- Total Price
- Taxes
- Invoice
- TODO

### Notifications

- Email notification
- Browser notification
- 
- TODO

### Modal window

- Scrollbar
- Close icon
- TODO

### Forms

- Inline validation
- Submitting validation
- TODO

**Sign in form**
- TODO

**Sign up form**
- TODO

**Subscribe form**
- TODO
