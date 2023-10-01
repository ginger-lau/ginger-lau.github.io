note: this is corresponds with **week 4** lecture notes and hw4
**note: midterm released**
[Slides Availabe Here]()

Midterm 
* create a high fidelity mockup by **Thur 10/5 **to get 3 points
* dont start coding until you've been checked off
  
# Programming -- CSS Positioning and Centering
Recall HTML skeleton
* header tags
* a tag - links
  
Think of these divs as containers with parent-child heirarchies
When we have contenet, we will position them relative to their containers

The big deal about divs and boxes ... positioning
When we position things, we are disruptiong the page's normal flow of elements 
    * normally things are just stacked ontop of each other
  --> we will change this with positioning

## CSS Positioning 
1. static *(default)*- positiong the elemetn according to normal flow
2. relative - position the element according to the normal flow, and then offset relative to itself. Offset does not affet the surrounding
3. Absolute - the element is pulled out of the normal flow. and positionged relative to tis closest position ancestor
4. Fixed - the element is pulled out of the normal flow. and positioned to the window/view point

#### Default Positioning
a 
<span style="color:red">{MISSING}</span>

#### position: relative
Positiong the ellemtn according to the normal flow, and then offset relative to itself. this doesn affect the normal flow
* as if positioning things relative to where they normally would be
<span style="color:red">{MISSING}</span>

#### position: absolute
The element is pulled out of the nomral flow. It is poitioned relative to its closest relatively position ancestor

<span style="color:red">{MISSING}</span>

###### Layering things on top of each other
Everythign will be at 0,0 of the bigger containter
~~~
.container{
    position:relative;
}
.a,.b.,c{
    positiong: absolute;
}
~~~

**Think of relatively positing anestors as the origin point for absolute positioning**

#### position:fixed
Teh elelemtn is pulled out of the normal flow. It is positionged relative to the window/viewport

* blue bar is nav fixed to the top of the window
* stays on screen even if scrolling


## Centering
Do this to get peoples eyes onto the middle of the page. Helps with readability. 

#### Horizontally center block elements by telling it to automatically center on the left and right. (Cant do just one - could maybe get away with margin: auto;)
```
margin-right: auto;
margin-left: auto;
```
If you do ```margin: 0 auto;``` sets the vertical positing to 0 and the left and right to center automatically

#### Vertically centering block elements w/ absolute positioning
centered veritclaly
```
position: absolutel
top: 50%;                           %% translate to halfway of containter
left: 50%;
transform: translateY(-50% -50%)         %% translate up 50% of potato --- gets it 
                                        %% transpate potato up and left 50%

```

#### z-index
Whichever has the higher z-index goes on top. Like ordering images on a slide.

# Design  - Color Theory
Basic terminology: hue, value, saturation
* Hue - what colors are
* Value - how bright a colr is
* Saturation - how intense a color is 

* make shades by adding black
* add tinty by adding white

## How do we know what colors to use?
* primary, secondary, tertiary colors on color wheels
  * either complementary, triadic, analogous

## Color conveys emotions
Red 
- emotionally intense (hungry/fire/passion)
- use for important actiosn in UX, or expressing strong bold emotions

Blue
- reliable and calm color 
- it is a very neutral color that is much easier on the eyes than red or yellow
- builds trust and rapport

Yellow
- bight and creative color
- it is very vibrant and attention grabbing color that is used in association to trendiness and quicky decision making

## Practical Applications + tips in web design 
- contrast: measured of difference in perieved luminance or brightness between two colors
  - de-saturate colors and compare their grayscales
  - use accessible colors 
- no one uses pure black for text and bckgrnd(use #333 instead to reduce strain) --- use a dark gray
- match colors to 

figma lab next tues - oct 3
check in with ta thur - oct 
have 2 weeks to develop it in HTML/CSS due OCT 17 Tues 
Thur after, pick a few midterm that stuck out and present 