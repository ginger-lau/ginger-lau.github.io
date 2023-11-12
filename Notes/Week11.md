# Week 9 How Javascript Meets HTML/CSS
Reviewing variables and functions 
New concepts: objects
JS & HTML : the DOM
Addding/removing CSS classes with JS

## Reviewing Variables & Functions 
Use a variable when we want to stores a variable and give it a name
```let name = "Ginger";```
If we do something with a variable we want to store it
```age = age * 2;```

functions are used when we want to repeat things
```
function functionName(parameters){
    some calculation maybe;
    return;
}
```

## Objects 
* objects are JavaScripts way of representing more complex things
* objects are a collection of methods (functions) and properties(variables)
* theme: think about what youre trying to do in english before converting to code
* Ex. Car
  * what are the properties of a car? color, model, currentmph
  * functinos: drive straight, break, change color 

Properties: 
* color string
* model string
* mph number

Functions:
* drive stright()
* brake()
* changeColor(color)

```
let car = {
    color: "red";
    model: "tesla model s";
    mph:0;

    driveStraight: function(){
        //...
    }

    changeColor: functino(newColor):{
        //...
    }
}
```

#### Dot Notation
```
console.log(car.color);     //look up color property of car red

car.driveStraigth();
car.changeColor(blue);

```

## The DOM: Document Object Model 
WHne the HTML page is loades, JS creates its own representaiton fo th epage which is made up of objects. Each HTML tag is an object

```document.getElementById()```
* takes one argument, a string, which is the id of the HTML we want
* returns the element 

```document.querySelector()```
* takes one arguemnt, a strong which is a CSS selector of the HTML element 
* returns the first element object that matches that selector name
* can be the same as document.getElementById()


## Adding/Removing CSS classes with JS
Properties of properties 
```.add(---);```
```.remove(---);```


# Design - Dark Design Patterns
(not referring to dark mode - referring to antagonistic design intentions)

Dark/unpleasant design -
user interface that has been carefully crafted to trick users
