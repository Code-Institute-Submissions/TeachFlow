# TeachFlow Website

## Interactive Frontend Development 

[View the Live Site here.](https://emmahartedev.github.io/ms2-teachflow/)

![Teachflow logo](assets/images/logo/TeachFlow.png) 

![Generated from Am I Responsive](assets/images/readme_files/amiresponsive.jpg)

Teachflow is a fictitious company, providing support, information and materials to poeple considering ESL teschin in Asia, or to those who are already working in the field.

The purpose of this project to create a one-stop-shop of information for ESL teachers. 
The website highlights a selection of 4 destination countries, with information for potential ESL teachers. Additional countries may be added in future releases.
Teaching materials are also highlighted which include a game and flashcards, a class lesson. 

Important information and features to the company include: 

* providing information on 4 Asian countries
* Providing a class lesson (game and flashcards)
* Providing information on ESL teaching

----------------------------

## Contents
1. [UX](#ux "goto-ux")
    * [Overview](#overview "goto overview")
    * [User Stories](#user-stories "goto user stories")
    * [Project Scope](#project-scope "goto project scope")
    * [Design](#design "goto design")
    * [Wireframes](#wireframes "goto wireframes")

2. [Features](#features "goto features")
    * [Existing Features](#existing-features "goto existing features")
    * [Features Left to Implement](#features-left-to-implement "goto features left to implement")

3. [Technology Used](#technology-used "goto technology used")

4. [Testing](#testing "goto testing")
    * [User Story Testing](#user-story-testing " goto user story testing")
    * [Browser Compatibility](#browser-compatibility "goto browser compatibility")
    * [Responsiveness](#responsiveness "goto responsiveness")
    * [Code Validation & Testing](#code-validation-&-testing "goto code validation & testing")
    * [Bugs](#bugs "goto bugs")
    
5. [Deployment](#deployment "goto deployment")

6. [Credits](#credits "goto credits")
    * [Contents](#code "goto code")
    * [Code](#code "goto code")
    * [Media](#media "goto media")
    * [Acknowledgments](#acknowledgments "goto acknowledgments")

----------------------------

## UX

### Overview
TeachFlow aims to provide users with a personal and thorough resources for ESL teaching. 
By highlights both the personal and financial benefit to ESL teaching, the website aims to promote the experience for when the Coronavirus lock-downs end. 

### User Stories

#### Potential ESL Teacher Goals
As a potential ESL teacher:
* I am looking for information on ESL countries so that I can find out what appeals to me.
* I usually do all my reseach on my phone so I would like the website to be mobile responsiveness
* I am looking for information about a typical class lesson so I can learn about a typical day on the job. 
* I would like to be able to contact the website owners if I have any questions about the content.
* I would like to see the requirements for becoming an ESL teacher, the salary and benefits.

#### Current ESL Teacher Goals
As a current ESL Teacher:
* I would like to see information on regions in countries as I am familiar the countries do not give me indepth information. 
* I would like to see some interactive information about the countries, such as the current weather or statistics so that I am receiving live, updated information. 
* I would like any class material featured to be focused on learning English words and improving students speaking skills. 
* I would like to be able to sign up to a newsletter. 

### Project Scope
Based on the above user stories, the following are features that will be included:

* a newsletter signup.
* a simple memory game focused on speaking english words.
* a maps API which will show 4 countries in Asia.
* a contact us form, for users who who would to get more information about ESL teaching.
* Interactive Information on ESL countries which incorporates an API.

The following is a list of features that will not be included: 

* More than one lesson plan.
* functionality to enter a zip code on maps.
* custom designed maps with colors and detailed markers. 
* Coronavirus adapated ESL content.
* A save high score function on the memory game.

### Design

#### Typography
All fonts used are from [Google Fonts](https://fonts.google.com/). 

Fonts used include:
* Roboto (regular 400) - used for body text
* Lato (700) - used for headings; h1 - h6

#### Colour Scheme
A blue/yellow color palette was used which creates a bright undertone and compliments the striking imagery well. 

![color palette](assets/readme_files/color-pal.png).

Colours used for inspiration include: Blue (2F3180) dark blue (1D1E4E) teal (108690) and Yellow(#FCCF14).
The actual colours used on the website include blue (#034cae), dark blue (#070958), teal (#246e74), yellow light (#fef7dd) and Yellow dark (#fccf14).

#### Imagery
* A carousel banner was used on index.html which contains three striking images that focus on ESL teaching.
* In game.html, the animal images used for the flashcards are re-used for the memory game. 
    This is done intentionally, as reusing material to reinfoce learning is common practice in teaching. 

#### Design justifications
* Home, About & Contact us are all sections on index.html. In doing this, a strong pathway is created which shows information the company, ESL teaching and finally a contact form.   
* Classtime is created as a seperate page (game.html). This was done, as the 'classroom' is seperate experience and the page is heavy with content.  

### Wireframes
All wireframes were created using the software [Balsamiq](https://balsamiq.com/). 
Layouts were created following research on the five planes of UX and before coding.

<strong>
Please note, the final website layout contains slight variations to the original wireframes.
Each of the following files contain wireframes for desktop, tablet and mobile devices.
</strong>


* [Home Page](assets/wireframes/home.png)
* [About](assets/wireframes/about.png)
* [Contact us](assets/wireframes/contact.png)
* [Classtime](assets/wireframes/classtime.png)

--------------------------------------------------------------------------------------------

## Features

### Existing Features 
* **Navigation** 
    * The navigation contains the brand logo (anchor tag to homepage) with four links. 
        3 links, connect to sections on index.html (home, about & contact us). 1 link, connects to a separate page (game.html). 
    * For mobile devices, the navbar collapses to a toggler button.
    * The nav bar is fixed, disappears on scroll down and reappears on scroll up. 
    * The navigation was created using [Bootstrap](https://getbootstrap.com/). 

* **Maps API**
    * The user is able to explore 4 Asian countries using the Maps API.
    * 3 markers showing popular city to teach ESL in are featured on each map.
    * Information and statistics are displayed alongside each map. 
    * [Javascript](https://www.w3schools.com/js/DEFAULT.asp) and [Leaflet maps](https://leafletjs.com/) were used to create this feature.

* **Contact Us Form**
    * The contact form includes fields for name, email address and message text area.
    * A newsletter signup option is included.
    * Once a message has been submitted, the form collapes and a confirmation message is displayed.
    * [EmailJS](https://www.emailjs.com/) and [Bootstrap](https://getbootstrap.com/) were used to to create this feature.

* **Flashcards**
    * 4 animal flashcards, which onclick play a sound are featured. 
    * Duration for the lesson is featured at 15 minutes.
    * Flashcard sizes descrease with smaller device sizes.
    * [Javascript](https://www.w3schools.com/js/DEFAULT.asp) was used to create the onclick playsound function. 

* **Song lesson**
    * A youtube video (iframe) and content block create the song lesson. 
    * Duration for the lesson is featured at 20 - 30 minutes.
    * The iframe size descrease with smaller device sizes.

* **Memory Game**
    * The memory game re-used the flashcard animal tiles
    * There are 15 rounds, with taps incrementing at each new round. 
    * An event handler allows the player to progress when the order of tiles played by them matches the order played by the computer. 
    * When the sequences do not match, the game is reset.
    * Colorful tiles are added to on hover.
    * Audio sound and colorful tiles are to on press.  
    * [SweetAlert](https://sweetalert.js.org/) is used to create an aesthetic alert box.
    * [Javascript](https://www.w3schools.com/js/DEFAULT.asp) was used to create the memory game.
   
* **Footer**
    * Copyright information is included in the footer center.
    * Social media links are visible on the footer right.
    * The footer was created using [Bootstrap](https://getbootstrap.com/).

### Features Left to Implement
The following are features were not included in this release  

These include:
* Use an API to create the maps information. This would ensure that all data is up to date and accurate. 
    Unfortuately I was not able to find an API which would display the right information. 
* An automatic reply to be send to the user after they submit a contact form. 
* An API which will include ESL jobs in the 4 featured Asian countries. 

----------------------------

## Technology Used

* [HTML5](https://www.w3schools.com/html/) - Used for structuring the site pages.

* [CSS](https://www.w3schools.com/css/) - Used for styling the site pages.

* [Bootstrap 4](https://getbootstrap.com/) - Framework used for building the site pages.

* [Javascript](https://www.w3schools.com/js/DEFAULT.asp) - Used to make the website interactive.

* [jQuery](https://jquery.com/) - Used to make the website interactive.

* [Leaflet](https://leafletjs.com/) - Used to create the maps.

* [SweetAlert](https://sweetalert.js.org/) - Used to create pretty alert boxes.

* [EmailJS](https://www.emailjs.com/) - Used to create the email service.

* [Google Fonts](https://fonts.google.com/) - Used for typography.

* [Adobe Photoshop](https://www.adobe.com/de/products/photoshop.html?sdid=88X75SKP&mv=search&ef_id=EAIaIQobChMI95Sd8Zyv7QIVA893Ch3SYQCaEAAYASAAEgI41vD_BwE:G:s&s_kwcid=AL!3085!3!341205896389!e!!g!!adobe%20photoshop!1419109629!54636022246&gclid=EAIaIQobChMI95Sd8Zyv7QIVA893Ch3SYQCaEAAYASAAEgI41vD_BwE) - Used to resize and edit images including the company logo and game tiles.

* [Font Awesome](https://fontawesome.com/) - Used for all Icons.

* [Gitpod](https://www.gitpod.io/docs/) - Used as a development environment.

* [Github](https://github.com/) - Used for repository hosting.

* [Github Pages](https://pages.github.com/) - Used for site deployment.

* [Chrome Dev tools](https://developers.google.com/web/tools/chrome-devtools) - Used for monitoring the responsiveness of the website.

* [Cross Browser Testing](https://crossbrowsertesting.com/) - Used for monitoring the responsiveness of the website.

----------------------------
## Testing

### User Story Testing
In this section, the user stories which were defined in the [UX](#ux "goto-ux") section of this README document are re-evaluated.

### User Stories

#### Potential ESL Teacher Goals
As a potential ESL teacher:

* I am looking for information on ESL countries so that I can find out what appeals to me.
    * 4 Asian countries (popular ESL destinations) are featured in the maps section on index.html. 
    * Upon clicking on a country, an info section is displayed. 
    * 3 markers are placed on each country. Each marker shows a popular city to teach ESL in. 
    * [Maps example](assets/images/readme_files/maps.png)

* I usually do all my research on my phone so I would like the website to be mobile responsive.
    * A mobile-first design approach has been adopted.
    * The Bootstrap grid system provides an easy solution to creating mobile responsiveness.  
    * [Mobile responsiveness example](assets/images/readme_files/mobilerespons.png)

* I am looking for information about a typical class lesson so I can learn about a typical day on the job.
    * An entire class lesson is provided in game.html which gives the user a clear idea of what a typical class lesson looks like.
    * The class lesson includes flashcards, a song and a memory game.
    * the entire class lesson is approx. 1 hour in length. 
    * [Classtime](assets/images/readme_files/classtime.png) 

* I would like to be able to contact the website owners if I have any questions about the content.
    * A contact form is available on index.html.
    * Once a message has been submitted successfully, the contact form collapses and a admission message is dispalyed.
    * [Contact us](assets/images/readme_files/contact.png)

* I would like to see the requirements for becoming an ESL teacher, the salary and benefits.
    * Requirements, salary and additional information is featured in the country maps information section.
    * This information is displayed when a country is selected.
    * [Maps information](assets/images/readme_files/mapinfo.png)

#### Current ESL Teacher Goals
As a current ESL Teacher:

* I would like to see information on regions in countries as I am familiar the countries do not give me indepth information. 
    * General country information is included in the content map section. 
    * 3 Markers have been placed on each map, showing popular cities to teach in. 
    * [Maps information](assets/images/readme_files/mapinfo.png)


* I would like to see some interactive information about the countries, such as the current weather or statistics so that I am receiving live, updated information. 
    * Due to time limitation & project scope, a weather API was not integrated into this release. 
    * Country info however can be seen in the country maps information section.
        As this is not an API, this information would need to be updated manually. 
    * [Maps information](assets/images/readme_files/mapinfo.png)


* I would like any class material featured to be focused on learning English words and improving students speaking skills. 
    * Multiple content is featured including flashcards, a song lesson and a memory game.
    * A 'Farmyard Animal' theme is used to create a realistic class lesson. 
    * The class lesson is focused on improving vocabulary, pronounciation & grammer. 
    * [Classtime content](assets/images/readme_files/classtimeeng.png)


* I would like to be able to sign up to a newsletter. 
    * A newsletter signup option is offered on the contact us form.
    * [Newsletter signup](assets/images/readme_files/newslettersignup.png)

### Browser Compatibility
The website was viewed on the following browsers:
* Google Chrome
* Firefox
* Microsoft Edge
* Safari - not checked 
* Opera

internet explorer - all js not working inc flashcard sounds, game, emailform, instructions


[Cross Browser Testing](https://crossbrowsertesting.com/) 


### Responsiveness
The website's responsiveness was tested using [Chrome Dev Tools](https://developers.google.com/web/tools/chrome-devtools).
CSS Media Queries were written as required to improve appearances. 

The devices (and screen widths) tested with include: 
* iPhone 5/SE (320px)
* iPhone 6/7/8 (375px)
* iPhone 6/7/8 Plus (414px)
* iPad (768px)
* iPad Pro (1024px)
* Laptop (1200px)
* Desktop (1920px)
    
In addition to this, [Lighthouse](https://developers.google.com/web/tools/lighthouse) was run in Chrome Dev Tools, to generate reports on the quality of the website.

### Code Validation & Testing
#### HTML
* All HTML code was checked using [The W3C Markup Validation Service](https://validator.w3.org/).
* No errors or warnings were produced.

#### CSS
* All CSS code was checked using [The W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/).
* No erros were produced. 
* 26 noncritical warnings associated with imported stylesheets and vendor extensions were produced. 

#### Javascript
* All Javascript code was checked using [JSHint](https://jshint.com/). 
* As a result, all undefined variables were found and removed. 
* Several warnings were received stating that: 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz). To resolve, a file named ".jshintrc"  was added to this project.

### Bugs

#### Solved
* The js hash code was interferring with the functionality of the nav link to game.html. While researching, I found a similar issue on [Stack Overflow](https://stackoverflow.com/questions/59706410/link-with-anchor-to-different-page-href). 
After reading this, I created a data attribute for the anchor links on index.html and targeted these only in the js hash code. The navigation then worked without any issues.

* The userScrolled function was causing the nav bar to dissapear for a few seconds once it reached the top of the page. 
Because of this, the carousel's margin was unasthetically exposed. [Codepen](https://codepen.io/fbmiranda/pen/edqgxm) 
provided a solution to this, making sure that the user scrolls past the navbar before it dissapears. After modifying the code, the bug was solved. 


----------------------------

## Deployment

The website was hosted on Github Pages. It was deployed by carrying out the following steps:

1. login into Github.
2. Select the repository from the profile.
3. go to 'settings' in the repository.
4. In 'Github Pages' choose 'Master Branch' as Source and save.

The Live site deployed can be viewed on the following link: 
[TeachFlow](https://emmahartedev.github.io/ms2-teachflow/)

### Local
To clone this project locally; a Chrome browser and Github account are required. 

The following steps can then be followed:
1. Install the [Gitpod Browser Chrome Extention](https://chrome.google.com/webstore/detail/gitpod-dev-environments-i/dodmmooeoklaejobgleioelladacbeki), restarting the browser after installation.
2. Log into [Gitpod](https://gitpod.io/).
3. Click on the following link to go to the [project repository](https://github.com/emmahartedev/living-landscapes).
4. Click on the green 'Gitpod' button which is located to the right of the repository to launch a new workspace.
5. The code can be worked on in this newly launched workspace. 

To clone code within an IDE of your choice:

1. Click on the following link to go to the [project repository](https://github.com/emmahartedev/ms2-teachflow).
2. Click 'Code' and in the Clone with HTTPs, copy the provided repository URL. 
3. Open a terminal in your IDE.
4. Change the current working directory to the location you wish to generate the cloned directory.
5. Type ```git clone```, and then paste the URL from step 2. 

```
git clone https://github.com/emmahartedev/ms2-teachflow.git
```

----------------------------

## Credits 
the following material is not my own. Sources have been listed alongside the content type. 

### Content
* Map information - [Go Overseas](https://www.gooverseas.com/teach-abroad)

### Audio
* Animal names used in game.html - [Voice Maker](https://voicemaker.in/) (Joanna, Female) was used to create all audio files. 

### Code
The following websites were used for inspiration and assistance:
* [CSS Tricks](https://css-tricks.com/)
* [Stack Overflow](https://stackoverflow.com/)
* [Bootstrap Documentation](https://getbootstrap.com/docs/4.5/getting-started/introduction/)

The following were installed/used in the project:
* [SweetAlert](https://sweetalert.js.org) - used for popup messages
* [Grow hover effect](https://ianlunn.github.io/Hover/) - used on footer icons

The following code has been directly used in this project:
* [Switch div display](https://stackoverflow.com/questions/17115995/what-is-the-best-way-to-move-an-element-thats-on-the-top-to-the-bottom-in-respo) - used to switch the 3 'game-container' divs in game.html for mobile view */
* [smooth scroll](https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll)  - used to create a smooth-scrolling effect on index.html
* [Full Page Tabs](https://www.w3schools.com/howto/howto_js_full_page_tabs.asp) - idea used to display the map and info contents on button click

###  Media
The images used on this website were obtained from the following sources:

home.html
* [Students in a classroom](https://www.pexels.com/photo/three-toddler-eating-on-white-table-1001914/)
* [Students running outside](https://www.pexels.com/photo/boy-in-white-and-red-school-uniform-raising-hands-outdoors-1153976/)
* [Teacher writing on blackboard](https://www.pexels.com/photo/woman-in-red-long-sleeve-writing-on-chalk-board-3769714/)
* [Student outside looking to sky](pexels-artem-beliaikin-1565521)
* [Woman walking up a temple path](https://www.pexels.com/photo/woman-in-blue-dress-walking-on-concrete-staircase-leading-to-buildings-929168/)
* Child in Classroom - owned by me

game.html
* [Chicken](https://unsplash.com/photos/auijD19Byq8)
* [Duck](https://unsplash.com/photos/kCZSzqvIei4)
* [Cow](https://unsplash.com/photos/etrxob-VZRs)
* [Pig](https://unsplash.com/photos/W7uMPs8aeXs)
* [Finger Family Farm Animals Song](https://www.youtube.com/watch?v=MaHWFODvtfU&feature=emb_logo)

### Acknowledgments
* 