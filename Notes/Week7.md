# Lecture 5 
## Flexbox
Positing things manually is a pain
Reviewingi the box model
    * content - picture itself
    * padding - spac between pictur eand frame
    * border - picture frame
    * margin

Ways that CSS arrange things
* box model
* abs, static, fixed
* display properties

Using Flexbox to create layouts
* use flexbos to align a parent element's children
* **main axis** - direction that things are stacked (ie. vertically or horizontally)
  * has a main size (width)
  * main start on left 
  * main end on right
* **cross axis**
  * has a cross size (height)

#### Flesh out by flexing
Box alignign items in a row (default)
~~~
<div id="best-box">
    <div class="child">

~~~

```
#best-box{
    display:flex
    flex-direction:row; // can also use column, row-reverse, column-reverse
}

.child{
    display:flex;
    flex-direction:row;
    justify-content: center; // tells it to move things on the main axis (centering on left to right axis)
}
```

#### Flex Box Axis
flex-direction row:
* main axis is row

flex-direction column
* main axis is up down
* cross axis is left right
  
**Modifying things on the main axis**
```justify-content: center;``` centers items along main axis
```justify-content: space-between;``` spreads things as far apart as possinbble
```justify-content: space-around;``` space between each item is the same as space to the edge
```justify-content: space-evenly;```
```justify-content: flex-start;```

**Modifying things on the cross axis**
```align-items:center```- aligns things centered on the cross axis
```align-items:flex-start;```- puts things at the beginning of cross axis
```align-items:flex-end```- puts things at the end of the cross axis
```align-items:stretch```- fix the entire cross axis


practice: 
tinyurl.com/wddflexy
flexboxfroggy.com/

## Images and Layout
#### Image use
**Products websites**
  * promote and highlight products
  
**Catalog websites**
    * shows
    * ie. netflix, youtube, 

**Thumbnailing websites** - a small respersntaino of a larger image, usually intentded to make it easier and faster to manage a group of larger images
    * masonry
      * variable sizes
    * grid layout
    * justified
    * standard 

Icons - easily distinguished as a function

Image Formats
* JPEG
  * works well for natural images types (photography)
  * prone to deteriates as you save and edit often
  * lightweight compared to PNG
  * best for larger images
* PNG
  * supports transparency
  * supports 16 million color


Animation
GIFS (graphics interchange format)
* supports animations
* supports only 256 colors
* very light weight
* animations make it larger

https://waaark.com/ 

SVG (scalable vector graphic)
* vector: can be saved automatically without loss of quality
* extremely light weight
* easy to customize with a code editor

