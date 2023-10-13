# Animations
Def Animation - a change of state over time
* can be achieved through CSS

## @Keyframes
Format: @keyframes name{rules}
Rules: waht to do during animation
Defnintion animation to use later
```
@keygrames name{
    rules
}
```
** need to apply this animation to an HTML element

#### Writing Rules
* using **from** and **to**
* using percentages [0-100]

```
@keyframes fadeIn{
    from{opacity:0;}
    to{opacity:1;}
}
```

Can define the steps; this will fade in an out
```
@keyframes fadeInOut{
    0% {opacity:0;}
    50% {opacity:1;}
    100% {opacity:0;}
}
```
can also apply for margins

#### Using your Keyframe
* put it in the element of choice
    - use the name you chose

* set the animaton duration
* add optional adjustments

```
@keyframes upDown{
    0% {top: 0;}
    50% {top: 0;}
    100% {top: 0;}
}

#potato-head{
    animation-name:upDown;
    animation-duatino:0.5s;
}
```

#### Optional Adjustments
* speed curve (can refence Easing Functions -ex. easeOutQuart)
* delay
* Play #
* Direction

example:
```
potato-head{
    animat
}
```

#### Animation Shorthand
Follows a convetion. Follow this attribute order
* name
* duraction 
* speedcurve

#### Transitions: Pseudo-Selectors
Responding to a users action
Using transition protery to detmerin time, speedcurve, and pseduo-selector to determin sates
ex. div:hover{rules}


# Motion, Flow, Aesthetics
Animations are best when they do not take away from the content
