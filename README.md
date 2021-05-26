# SCROLL TO TOP
This is a simple library that speaks for itself. It adds the logic of a button that, when clicked, `scrolls to the top`.
[Demo](https://1neye.github.io/Scroll-To-Top/src/index.html)

>All necessary files you can find in __downloadMe/__ folder
## Quick start
### HTML
Add tag with class `stt`
```html
<div class='stt'></div>
```
### JS
```html
<script defer src="scrollToTop-min.js"></script> 
```
With the setting finished, when you click on the tag, the page will scroll to the top.
### Costum styles
If you want to style your scroll to top button by yourself. Don't forget to write these styles into your css file. Without these styles, scrollToTop.js will not hide the button when needed.
```css
        .stt {
            visibility: hidden;
            opacity: 0;
            transition: 0.3s ease-in-out;
        }

        .stt__active {
            visibility: visible;
            opacity: 0.5;
        }
```
### CSS
```html
<link rel="stylesheet" href="scrollToTop.css">
```
### Stylying
You can change the styles of the buttons simply by adding the example classes below ↓.
```html
 <div class='stt stt__block_black'></div> 
```

| Class        | Style           | 
| ------------- |:-------------:|
| ``` <div class='stt stt__block_black'></div> ``` | ![stt__block_black](media/stt__block_black.jpg) |
| ```<div class='stt stt__circle__black'></div>  ``` | ![stt__circle__black](media/stt__circle__black.jpg) | 
| ```<div class='stt stt__emoji'></div>  ``` | ![stt__block_black](media/stt__emoji.jpg) | 


<!-- ![Demo](media/demo.gif) -->
