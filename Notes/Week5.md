note: this is corresponds with week 3 lecture notes
[Slides Availabe Here](https://docs.google.com/presentation/d/1Bnh9YsU_qQP-sAK9_ZlJgRz8BdzUpy4HUYzljBaUR_Q/edit?usp=sharing)
# Box Model and Spacing

Agenda
- CSS Review
- Box Model
- Intro to Layout

## CSS Review
#### HTML Reminders
```<head>``` is a special part of the HTML file
- no content
- think of it as just a title

 ```body``` is where the content goes

#### CSS reminders

 
 ```
 p{
    font-size; 18px;
    font-family:arial;
 }
 ```

 or can put them together
 ```
 p{
    font: 18px Arial;
 }
 ``````
 To **select multiple things**, seapare with commas ex.
 ```
 h1, li{
    font-family: Arial;
 }
 ```
## Box Model

**Picture on the Wall Analogy**
content - picture itself
padding - space between the picutre and the picutre frame
border - the picture frame
margin - spacing between the pictures and wall (spacing btw container elements)

* changing margin changes margin to all sides
unrelated note: can also include css into HTML file
~~~
<html>
<head>
<style>
div {
        background-color: lightgray;
        width:300px; //refers to content width
        border: 15px solid green;
        padding: 50px;
        margin: 20px;
 }
 </style>
 </head>
 <body>
 ~~~

Example of different padding on different sides
~~~
#box{
    width: 60px;
    height: 60px;

    padding-top:10px; ///content is pushed away from the top by 10px
    padding-right:20px;
    padding-bottom: 30px;
    padding-left:40px;

    /// or more neadtly margin; 10px 20px 30px 40px;
}
~~~

Can also specify top right bottom left for **margin**

#### Units
**px - pixels**; objective value but may not always be the best unit
**% -percents**; relative value
 
 HTML 
 ~~~
 <div id="outer">
    <div id = "inner"></div>
</div>
 ~~~
 CSS
~~~
 #outer{
    width: 50%;     ///50% of webpage
    height 200px;   ///constant
 }

 #inner{
    width:50%       /// 50% of 50% of outer div is 25% of screen
    height: 50%     /// will always be 100px because refers to parent "outer" div
 }
~~~

#### Intro to layout
to center an content with margin can use ```auto```

#### How do we put stuff next to each other?
In CSS; by defaul things stack column wise

**CSS Display**
```display:block;```
Everything goes on its own line no matter width
* can use margin 

```display:in-line;```

<span style="color:red;"> MISSING CONTENT</span>

```diaply ``` and ```float```
can tell CSS to prefer left or right side ie ```float:left;``` 

**Tink of a page as building blocks put together**

#### Chrome DevTools (Inspect Element)
Inspect Element is the best way to debug & figure out what’s going on with your code!
* Hover over an HTML tag → it will show you the box model diagram of the element (its width, height, padding, margin)

* Click on an HTML tag → see what CSS rules are affecting it

* Click on a CSS property or value → edit the CSS and see the changes happen!

* Click in the CSS rules area → add CSS to the specific HTML tag you’re on and see the changes happen!


Some Common patterns in layout structure
* There is a main container for the page that holds everything
  * The header might be separate since it’s a block of its own
* A column of content is a div
  * These columns have components like a list of links, some text, a post
  * Columns of content next to each other are put next to each other in a row

Start from simple components 
→ piece together in rows and columns
→ complex layouts are just put together from simple layouts!

# Typography in Web Design
## Typography
* typography evokes the personality.character of a website
* branding can showacse a variety of metions through type
* often more than 80% of content is text
* lets communicate effectively through size, weight, and color


#### How do we use typography?
**Serif Fonts*
* has a little flick wither the letter forms terminate
* feels classy and formal
* TNR
  Use for **text heavy content** because easier to carry between words

**San Serif Fonts**
* does not have a flick
* feels modern
* arial, Helvetica Neue, karla
  Use for **image-heavy content**

#### **Hierarchy**
Use weights to create hierarchy, think of type as blocks
* rule of thumb; 
  * use 2-3 fonts per website (one for headers and one for body)
  * type is not an exact sicence, it is aligned when it feels aligned
    * With alignment, sometimes fonts have built in padding and you have to eyeball things
* Pick a font that has a lot fo weights

Spacing for text
* use line-spacing 1.2x - 1.5x 
* text width; 40-70 characters per line
* Use contrast


#### Choosing fonts
Resources:
Google Fonts is your friend  -- shows types and weights available
Typesample.com 
whatfont - explores fonts on the web
Korean Google Fonts
Rin Typography


