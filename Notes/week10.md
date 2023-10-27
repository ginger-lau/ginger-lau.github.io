#Week 8 Programming
##Intro to Javascript
(slides here)[]

HW7 Released
Midsemester survey 

## What is Javascript?
- HTML and CSS implement the structure
- a programming language

#### what can we do with it?
- Our goal: write JS that will add interacitivty to our pages
  - specifically, JS can change our exisitng HTML and CSS in response to user behavior

#### CSS Role in a webpage
- when we write HTML, it just shows up when we opent ht e.html file
- when we write CSS, it shows up if there were css selectors that referred to specific HTML elements

#### Implementing CSS Filepath

```<script src="assets/js/script.js"></script>```

#### Think about this interactive funcitonality
when the user [clicks/hovers/scrolls] on this [button/link/image] then [add/change/remove][this HTML/CSS]

* think about the end goal and figure out your way there

examples:
* when the user clicks on this image, the increase its size

"increase size" --> change its CSS width/height

* when the user clicks on this button, then change colors to dark mode

"change colors to dark mode" --> change CSS color and background color 

* when the user clicks on this tab, then change the content

"change the content" --> hide the first div and show the second div 
--> Set ```display: none``` to the first five and se the block ```display: block``` to the second div

* when the user clicks on the up arrow, then increase the number

