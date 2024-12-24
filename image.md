# Image

+ [Aspect Ratio](#aspect-ratio)

## Aspect Ratio
The `aspect ratio` of an image refers to the proportional relationship between its `width` and `height`. It is expressed as a ratio, such as `16:9`, `4:3` or `1:1`. This ratio defines the shape of the image and ensures the image scales consistently without distorting when resized.

**TL;DR** - Essentially, the aspect ratio describes the image's shape.

Commin Aspect Ratios:

+ `1:1`: a square, something like a social media profile picture. This would be if the `width` and `height` dimensions are the same e.g. `500px x 500px`.
+ `16:9`: windscreen, most modern screens and videos.
+ `4:3`: traditional video and photo formats.
+ `3:2`: common for modern photography (using DSLR cameras).
+ `21:9`: ultrawide monitors and cinematic screens.

Because images scale up or down to fit different browser widths, they don't have exact dimensions (like `750px × 500px`), but will always be the same shape when using aspect ratio.

Why Aspect Ratio is important:

+ **Performance:** Browsers can allocate space for images before they load, reducing layout shifts.
+ **Design Consistency:** Ensures images fit well within the layout and align with design principles.
+ **User Experience:** Prevents distorted or awkwardly cropped images that detract from the visual appeal of a webpage.

For example, an image with the dimensions of `1920 x 1080 pixels` has an aspect ratio of `16:9` meaning `1920 / 1080` which creates the value of `1.777`. This is not the aspect ratio.

```
aspect ratio = width / height
```

To work out a ratio from a calculation like `1920 / 1080` which creates the calculation of `1.777`:

+ Divide both `1920` and `1080` by the Greatest Common Divisor (GCD). The largest value that can be divided into both values without a remainder is `120`.
+ `1920 / 120` = `16`
+ `1080 / 120` = `9`
+ This fraction of `16 / 9` can be simplified to be a ratio of `16:9`. This is the aspect ratio.

In `HTML` it is recommended to specify the `width` and `height` attributes on an `<img>` tag. This helps the browser to calculate the aspect ratio before the image is fully loaded.

```html
<img src="example.jpg" height="800" width="600" alt="This is an example image.">
```

In `CSS` we can make the image responsive whilst maintaining the aspect ratio.

```css
img {
  max-width: 100%;
  height: auto;
}
```

We can also use the `aspect-ratio` property to maintain the aspect ratio of an image using `CSS`. The support for `aspect-ratio` can be found [here](https://caniuse.com/?search=aspect-ratio):

```css
.image {
  aspect-ratio: 16 / 9;
  max-width: 100%;
  height: auto;
}
```

This can be adjusted slightly, if required, for maintaining the aspect ratio of images when responsive:

```css
.image {
  aspect-ratio: 16 / 9;  /* Maintain a 16:9 aspect ratio */
  max-width: 100%;  /* Make the image responsive */
  object-fit: cover;  /* Ensure proper fitting within the container */
}
```

The `aspect-ratio` can also be set to `auto`.

The `aspect-ratio` `CSS` property allows you to define the desired width-to-height ratio of an element's box. This means that even if the parent container or viewport size changes, the browser will adjust the element's dimensions to maintain the specified width-to-height ratio. The specified aspect ratio is used in the calculation of auto sizes and some other layout functions.
