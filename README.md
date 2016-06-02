# Web Development Template

#### This is a lightweight repository to deploy a basic project at the beginning of each Epicodus pair and solo project. It is meant to save time and support clean builds. Current as of June 1, 2016

#### By Kevin VanEvery, Cory Olson, and Patrick Lipscomb

## Description

This repository contains the following folders and files.  They can be used to support a basic project template for the beginning of each of your projects.

### css

This folder contains the css files that support the Bootstrap framework in parallel with files in the /js folder.  There is also a styles.css file which contains custom user scripts.

### js

This folder contains the js files that support the Bootstrap framework in parallel with files in the /css folder.  It also contains the js files to support JQuery.  There is also a scripts.js file which contains custom user scripts.

### fonts

This folder contains the files which support glyphicons in Bootstrap.

### img

This folder contains useful placeholder images.  There are four sizes

* thumbnail
* small
* medium
* large

and three orientations

* square
* portrait
* landscape

for a total of 15 images.  There is also a user profile square image, since that is common, and a favicon.

### index.html

This file contains basic markup for a starter page.  Markup includes a header and footer within a body tag and a div container with text.  The important feature is the head tag which includes the five Bootstrap, JQuery, and custom css and js files.  

### css/styles.css

This is your custom css file.

### js/scripts.js

This is your custom js file.

### README.md

You're looking at it.

## Setup/Installation Requirements

To create your own template repository on github

* Clone the github repository using the git clone command from /Desktop
* Create a new repository on github to keep your template
* Using git remote add pair the clone on your desktop with your new repository
* Add, commit, and push, and then you'll have your own copy of the template to do with as you wish

To install this repository into a new project each time, first

* Clone the github repository using the git clone command from /Desktop
* Move the .pairs folder to the /users folder (one level up from /Desktop)
* Create a new folder in the Desktop with your project name
* Copy and paste the entire contents of the cloned /bootstrap-jquery-project-template into your new folder (this should not include the .pairs file)
* Move into your new folder and initialize git as normal
* Congrats! You now have a new repo based on this template

Some **DONT'S**

* Don't just rename the cloned git repository - that will mess up future commits.  Do the copy/paste
* If you're using a bootstrap template, don't replace the <head> tag.  Only change the <body> tag.  The templates include code at the top and bottom that bring in js and css we're already including and a bunch we don't use.  If you call a js or css file twice, it causes problems.  
## Known Bugs

None.  But we haven't really tested much, so if you find anything, let us know and we'll fix it and update the repo.  

## Support and contact details

Come by during class if you have questions.

## Technologies Used

* Bootstrap
* JQuery

### License

Licensed under the MIT License

Copyright (c) 2016 **Epicodus Pair Projects**
