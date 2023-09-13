**<span style="color : blue;"> * note week 3 is the first class </span>**
**[Slides Available Here](https://docs.google.com/presentation/d/13lEc5LIJ8tu5n54VvG7R6K-xgsm3hr74xoXlMEgZv5Y/edit#slide=id.g149e7a0f405_1_279) **
# Course logistics
Tues (lab)
Thursday (lecture)
[ED](https://edstem.org/us/join/PnEe3N) 
[Notion (HWs and slides)](https://wddstaff.notion.site/WDD-Student-Portal-Fall-2023-03ea44c7ee4f4fb2a03634b37de00327) 
GitHub (submit hw through git)

HW assignments--- (**4pts**) 
	**Released** Thur 8 PM
	**Due** Thur 6:30 PM

Lab Assignments--- (**1pt**)
	**Released** Tues 6:30 PM
	**Due** Tues 6:30 PM

Lectures found here [Youtube](https://www.youtube.com/user/wddlive)
 4 required attendances

## Grading: (100 pts) - 70 pts to pass
Homework: 32 points
Labs: 8 points
Midterm Project: 24 points
Final Project: 32 points
Attendance: 4 points
```html
<! Doctype html>
<html>
<head>
	<title? Welcome page</title>
</head>
<body>
	<!-- xxx> (comments)
	<p> welcome to .. </p>
	<img src />
</body>

	</html>
```
## Creative Tools
| Web Brower      | Code Editor | Prototyping   |
| --------------- | ----------- | ------------- |
| Chrome          | VS Code     |Figma          |
| Safari          | Atom        |Adobe XD       |
|		          | Brackets    |Sketch         |
|		          | Sublime     |Illustrator    |

## Structure of website
What is a website - set of web pages served under a single domain
&nbsp;&nbsp; HTML - structure (heading/body/text/images)
&nbsp;&nbsp; CSS [cascading style sheets] - design (color/font/layout/animation)
&nbsp;&nbsp; JavaScript - function (interactive functions)

## Structure of single web page (HTML)
Plain text file (.html)
**Index.html** is starting point/homepage
Edit with text editors (VS Code)
Open in web browser to see result
A collection of tags related to each other in parent-child relationships
- TAGS example 
- ```<strong>text will be bold </strong>```
- result: <strong>text will be bold </strong>
- ```<strong>``` is opening tag ```</strong>``` closing tag

## Anatomy of an HTML document 
```
<! Doctype html>
<html>
<head>
	<title? Welcome page</title>
</head>
<body>
	<!-- xxx> (comments)
	<p> welcome to .. </p>
	<img src />
</body>

	</html>
```

### Basic forms of content in a document
- Paragraph text
  - Bold italic
- Headings
- Links
- Lists
- Images

### Text
```
<p> denotes paragraph </p>
<p>> second paragraph </p>

<strong> bold text </strong>
<em> italic text </em>
```

<strong> bold text </strong>
<em> italic text </em>

Can next bold and italics 
``` <p> <strong><em>different</em> text </strong> </p>```
→  <p> <strong><em>different</em> text </strong> </p>

### Headings (ranked in importance)
- Function like p tags but slightly different
- Can change size dep on style in CSS
- Makes it clearer when reading HTML

```
<h1>Big Bold heading </h1>
<h2>smaller Bold heading </h2>
…
<h6>Smallest Bold heading </h6>
```

### Links
```<a href = “https://example.com”>Click here </a> ```
- Click here will be a clickable text
- href points to url

### Lists
```<ul> ``` means Unordered lists 
```<li> ``` means list item

Ex. 

```
<ul> 
	<li>apples</li>
	<li>oranges</li>
</ul>
```
<ul> 
	<li>apples</li>
	<li>oranges</li>
</ul>

### Images 
- Exception only one tag, not a pair
- Has slash on end
src = source (where should the web browser find the image)
```<img src = “folder/apple.jpg” />```

If taking an image from the internet:
```<img src = "https://wdd.io/static/images/ajia.jpg" />```

&nbsp; Example 
```
< a href = “https://wdd.io”>
	<img src = “img_folder/logo.png“ />
</a>
```
&nbsp; → clicking the image will redirect to the website

### Div tag
Empty meaningless bod
“Divides” up page content for better structure - grouping things

### File Paths
The most common issue on the first homework is adding images
Problem : image doesn't show up

### The issue:
- For images and links you need to specify **where the image is**, or **where you want to link to**
- The images is on your laptop, so you type: ```<img src = “C:\Users….jpg”/>```
--> But other computers wont know to look into your computer

### Soln: 
Put the image in the **same folder as your html file**
* Go into the images directory
* Now no matter where you move the folder, the path to the image will still be correct

## Summary
* Some tags like ```<em>``` or ```<h1>``` come with some visual formatting already
  * These default like TNR can come with the browser, but we can use CSS to change the appearance
* HTML is not for visual, it is for putting things into meaningful chunks
* Note: images are case sensitive!
* ```dog.jpg``` =/= ```dog.JPG```

## How do we organize our project workspace
Quick analogy (bullet points)
Similarly 
* Assets will hold images, scripts, and styles
* Otter can hold other files

Two types of pathing

<table>
<tr>
<td> Relative path </td> <td> Absolute path </td>
</tr>
<td>
*  Path to another file relative to the current file
* May point to different files dep on the current location 
  

``` ./assets/images/otter.jpg (./ stay in same directory)```
```../assets/images/otter.jpg (go back 2 directories)```

</td>

<td>
Complete path to another file
Since not relative, the absolute path always points to the same file

```file:///```
```C:// ```
* Not as good because might indicate that it is coming from my computer directly 
</td> <tr></tr>

</table>


**<span style="color: red;">Homework Submission</span>**
[Github Set Up](https://tinyurl.com/wddgithubsetup 	)
[HW 1](https://wddstaff.notion.site/Assignments-65e01db2541f43958a0a76b9d87a8b7d)
