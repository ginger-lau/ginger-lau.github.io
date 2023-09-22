note: this is corresponds with week 3 lecture notes
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

## Intro to layout
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
* **best way** to debug code
* <span style="color:red;">MISSING CONENT</span>


Some Common patterns in layout structure
* there is a main container for the page that holds everything
* the header might be separaet since its a block on its own
* a column of content is a div

<span style="color:red;">MISSING CONTENT</span>