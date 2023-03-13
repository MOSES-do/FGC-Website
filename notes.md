#1 How to use a powerful Sass mixing to write all our media queries
#2 How to use the @content and @if Sass directives;
#3 Taking advantage of Chrome DevTools for repsonsive design

<!-- How to create a package.json file -->

1. Using commandline: npm init
2. npm install node-sass --save-dev
3. npm install -g npm@8.17.0(a minor update)

<!-- intstall npm live-server -->

1. npm install live-server -g || npm install live-server --save-dev

<!-- Create foldre in terminal -->

1. mkdir sass
2. mkdir/type nul > main.scss

<!-- Run script folder in terminal -->

1. npm run complie:sass
2. node-sass sass/main.scss css/style.css -w

 <!-- Responsive images in HTML
                How to use the srcset attribute on the <img> and <source> elements, together with density descriptors;
        
                How and why to use the <picture> element for art direction;
        
                How to write media queries in HTML
                -->

// css
/\*

1. How to implement responsive images in CSS
2. How to use resolution media queries to target high-resolution screens with 2x
3. How to combine multiple conditions in media queries

\*/

TESTNG FOR BROWSER SUPPORTS

1. How to use @supports feature queries
2. Implement graceful degradation on selected properties
3. How to use backdrop-filter

The feature query allows us to implement a style on one browser that supports while maintaining a default fallback style for unsupported browsers.

Simple build process with NPM

1. Create a watch sass file and complie sass file in package.json

2. Compile css to new file :
   node-sass sass/main.scss css/style.comp.css in package.json

3. npm run compile:sass in command line.

4. npm install concat --save-dev in command line

5. create in package.json "concat:css": "concat -o css/style.concat.css css/icon-font.css css/style.comp.css"

6. npm run concat:css

7. create in package.json "prefix:css": ""
   7b. npm install autoprefixer --save-dev
   7c. npm install postcss-cli --save-dev
   7d. "prefix:css": "postcss --use autoprefixer -b 'last 10 versions' css/style.concat.css -o css/style.prefix.css" in package.json
   7e. npm run prefix:css

8. "compress:css": "node-sass css/style.prefix css/style.css --output-style compressed"

   npm run compress:css in command line

9. Final Step!
   npm install npm-run-all --save-dev
   "build:css": "npm-run-all compile:css concat:sass prefix:css compress:css"

   Then you can go ahead to delete those files, but ME no!

   then run:

   npm run build:css

10. Include live-server
    "devserver": "live-server",
    "start": "npm-run-all --parallel devserver watch:sass",
