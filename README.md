<h1>Interactive Frontend Development Milestone Project</h1>

Google Maps API project: I chose to build a platform that allows a user to search for hotels, bars & restaurants, and tourist attractions in the resort town of Lahinch, Co. Clare, Ireland on the Wild Atlantic Way.  

You can view the website <a href="https://tobinwebdesign.github.io/Interactive-Frontend-Development-Milestone-Project/">here</a> using GitHub pages.

Initial Wireframes for the site:

Desktop: <a href="assets/wireframes/wireframe-desktop.png">Home </a>| 
Mobile: <a href="assets/wireframes/wireframe-mobile.png">Home </a>| 

<h1>UX</h1>

The purpose is for tourists to base themselves in Lahinch and explore Co. Clare and the Wild Atlantic Way. The website will allow tourists select Towns and Cities and in Ireland and see Hotels, Bars, resturants, and tourist attractions in Ireland. 

The website uses Google Maps API to allow users search locations, choose what they are looking for, and see their options. 

The UX is designed in 3 easy steps. Where to go. What to do. Find out More.

Wireframes


<h2>User Stories </h2>
<ul>
  <li>As a user, I want find a town or city in Ireland.</li>
<li>As a user, I want search for hotels in a town or city.</li>
<li>As a user, I want search for bars and restaurants in a town or city in Ireland.</li>
<li>As a user, I want search for attractions in a town or city in Ireland.</li>
<li>As a user, I want see this information on a map.</li>
<li>As a user, I want see this information on a table.</li>
</ul>

<h1> Features</h1>

<h2>Existing Features</h2>

<li>Full Width, mobile friendly navigation menu - A navigation Menu that will collapse down when the resolution reduces, making a user-friendly experience no matter what device the user is on.</li>

<li>User-friendly online contact form on the website to allow tourist contact to find out more information about the areas.</li>

<ul>
  <li>Sidebar with Home, How it works, and Map tabs. </li>
  <li>A hero section with a image/video of Irish tourist attractions</li>
<li>A how it works section. With a "Simple as 1, 2, 3" explinaction</li>
<li>A maps section with a search engine to choose the town or city, radio buttons to select "what to do", and map to display the information. The Map will be focused on the resort town of Lahinch and will also display a table of options. The map will also have markers idnetifying the various hotels, restaurants, bars, etc. </li>
<li>Contact Form</li>
</ul>

<h2>Features Left to Implement</h2>
<li>Currently the website focuses on Lahinch however it does not select the town and trigger the map</li>
<li>Blog/News pages with visual and written content abouth local attraction and things to do</li>
<li>Accommodation page</li>
<li>Tours page</li>


<h1>Technologies Used</h1>
In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.
<h3><a href="https://jquery.com/">JQuery</a></h3>
<li>The project uses JQuery to simplify DOM manipulation.</li>
<h3><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">Javascript</a></h3>
<li>I used JavaScript from the Google Maps API website and for the reset button</li>
<h3><a href="https://en.wikipedia.org/wiki/HTML5">HTML5</h3></a>
<li>HTML5 was used for the semantic structure and presenting the content of the webpage.</li>
<h3><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3">CSS3</h3></a>
<li>CSS3 was used for the styling of the content to produce an aesthetically pleasing viewing experience.</li>
<h3><a href="https://getbootstrap.com/">Bootstrap</h3></a>
<li>Bootstrap provides responsives layouts and components such as the navigation menu for quick, easy, efficient web development, all in a mobile-first approach.</li>
<h3><a href="https://fontawesome.com/">Font Awesome</h3></a>
<li>Font Awesome was used for the social links, mainly the social media icons for a professional finish.</li>
<h3><a href="https://fonts.google.com/">Google Fonts</h3></a>
<li>I used Google Fonts for the font families.</li>
<h3><a href="http://ianlunn.github.io/Hover/">Hover.css</h3></a>
<li>Hover.css was used power hover effects applied to buttons elements</li>
<h3><a href="https://www.emailjs.com/">Email JS</h3></a>
<li>I used Email JS to power the contact form</li>


<h1>Testing</h1>

Below is testing conducted on the website.

 <li>Initial index.html test on AWS cloud 9, using text “Hello” after adding the initial structure (html, body, header, section, and footer). </li>
 
<h2>Testing the Contact form</h2>
<li>First I clicked the 'Send' button - No request was sent as no information was filled in.</li>
<li>I filled out the form without the @ symbol for the e-mail address. As expected the form failed to submit due to incorrect formatting of the e-mail address.</li>
<li>After filling in the form I clicked the 'Send' button again, this time the submission was successful. This is noted by the information appearing in the URL.</li>
<li>succesfully sending a test email using email.js</li>
 
<h2>Testing links betweens pages</h2>
For this section I tested all of the links between the pages, navigation bar and and links built into the page. Testing all of the links resulted in everything linking to another page in the website working as intended by staying within the tab.
All links to which the user is directed to another site opened in a separate browser tab. These links include social site and the third-party ticket purchasing site.
 
<h2>Issues discovered while testing and how they were rectified.</h2>
<li>This site was tested across multiple browsers (Chrome, Microsorft Edge, FireFox) and on multiple mobile devices (iPhone 4, 5, 7, 8, X, iPad, iPad Pro, Galaxy S5, Pixel 2, and Pixel 2XL) to ensure compatibility and responsiveness.  </li>
<li>For testing the responsive aspect of the website I used a Google Chrome Developer Tools</li>
<li>During the testing phase there were issues with the responsiveness of the side bar and how it migrated to a header bar in mobile.</li>
<li>Another responsive dificulty was found in positioning the right pannel results table. Moving from absolute positioning in desktop to reletive positioning in mobile</li>
<li>The Google Maps API had a lag when the page was loading. This was overcome by adding $( document ).ready() which only runs once the page DOM is ready for JavaScript code to execute</li>
<li>Wen the website first loaded there were no markers until a town name was added to the search box. This was an issue as is made for a poor user experience. The was overcome using the getBounds() function. </li>
<li>Validating the code was done with the help of <a href="https://validator.w3.org/nu/#textarea">Nu Html Checker</a> and validating of the CSS was done with the help of <a href="https://jigsaw.w3.org/css-validator/">W3C CSS Validation Service, Jigsaw</a></li>
<li>I validated my maps.js and sendemail.js with <a href="https://jshint.com/">JSHint</a></li>

This website is currently viewable with no deployment issues in:
<li>Google Chrome</li>
<li>Microsorft Edge</li>
<li>Mozilla Firefox</li>

AWS Cloud 9 was the editor that I used in the coding of the website.


<h1>Depolyment</h1>
The website was developed lovally on AWS cloud 9 anddeployed using Github Pages, you can view it <a href="https://tobinwebdesign.github.io/Interactive-Frontend-Development-Milestone-Project/">here</a>.
<li>To do this I had to create AWS Cloud 9 account.
Create a new GitHub repository and clone is to AWS cloud 9 Next, I committed files to said repository, and finally pushed files up to GitHub.</li>
<li>STEP 1: Create a new GitHub repository and clone is to AWS cloud 9</li>
<li>STEP 2: Commit files developed in AWS Cloud 9 to said repository </li>
<li>STEP 3: Push files up to GitHub  </li>
<li>STEP 4: Click on the settings tab in GitHub</li>
<li>STEP 5: Scroll down to the GitHub Pages section</li>
<li>STEP 6: Select master branch and click "SAVE" to publish to GitHub Pages</li>
<h1>Credits</h1>
<ul>
<li>I got the Google Maps Hotels API code from the <a href="https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-hotelsearch" rel="nofollow">Maps Platform</a> website</li>
<li>I got the Place Types code from the <a href="https://developers.google.com/places/supported_types" rel="nofollow">Place Types</a> page</li>
<li>I got the Get Bounds code from the <a href="https://stackoverflow.com/questions/2832636/google-maps-api-v3-getbounds-is-undefined" rel="nofollow">HERE</a></li>
</ul>


<h2>Media</h2>

<li>The hero photo used in this website is licenced to <a href="https://www.greengrafphotography.com/">Greengraf Photography </a></li>

<h2>Acknowledgements</h2>

<P>My mentor Anthony Ngene also helped me out with UX improvements, duplicate code issues, loading lag on Maps API. Most importantly Anthony guided me through how to make the markers load when the page loaded.  Design inspiration came from Airbnb, Booking.com and other tourism websites. </P>

