## Lecture 5 - Flexbox
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

