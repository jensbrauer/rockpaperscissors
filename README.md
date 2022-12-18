# Rock Paper Scissors

Rock paper scissors is a site that aims to provide users with a cheat safe way of playing rock paper scissors. Mental games and trying to cheat through delaying the reveal of the chosen weapon are effectively eradicated when playing a pseudo-random algorithm. Users who need to settle a score or make a choice can use the website and rely on true 50/50 probability, while still having a fun and colored experience.

With the sites colorful responses and screenupdates, users can hover over the screen together and bite their nails as they face off with computerized lady luck.

![Responsice Mockup](https://github.com/jensbrauer/rockpaperscissors/blob/main/docs/readme_images/screenmockup.PNG)

## Features 

  - The site is built in greyscale with only interactive elements displayed in color, in order to effectively direct the users attention to features that can be activated.

### Existing Features

- __The landing page instructions__

  - First of users are presented with instructions on the rules of rock, paper, scissors, as well as the gameflow on this particular site. 
  - This ensures that all users enter the game on equal terms and understanding of how a winner/looser will be determined.
  - The "close-instructions" button is displayed in yellow to show users how to proceed to the game when ready.
  

![Landing Page](#)

- __Header__

  - The header is built to effectively display the purpose of this one-page site with the title ROCK PAPER SCISSORS clearly stated in black and white. 
  - It also provides a small button with a link back to the Instructions. This is mainly in black and white theme not to draw unnecessary attention, but with an orange info-icon and an on-hover css feature in order to convey the interactivity to the user.

![Header](#)

- __Score Card__

  - The Score Card section allows the user to monitor the progression of the game. It's default styling is in greyscale, and the table displaying the scores light up in green or red color when game is over to alert the user to the end results.
  - Next to the score table is an interactive element colored in a pale orange color that enables the user to start a new game at any point in the game flow.

![Score Card](#)

- __Game Section__ 

  - The game section is where users can interact with the game flow itself.
#### Players Section
  - Clearly displaying the interactive elements in another warm orange color that expand on hover. The functionality of the interactive elements are also clarified with associated text-elements and icons that should remind anyone familiar with the game of the hand signs normaly used in real life. Furthermore, the headings guide the user to understand where their choice should be inputed.

#### Message line
  - To the bottom right of the game-section, a "next-round" button pops at the end of a round before game is over. In order to allow the user to initiate next round at will instead of automatically.
  
#### Computers Section
  - Underneath, a computers choice section is interconnected but with a colder blue/green color on no on-hover effect. It is displayed with the laptop icon and a "To Be Announced" text tag as well as a "Computers Choice", to show the user that the oponent's(the computer's) respons will be displayed there.
  - To the bottom right of the game-section, a "next-round" button pops at the end of a round before game is over. In order to allow the user to initiate next round at will instead of automatically.

  
  

![Footer](https://github.com/lucyrush/readme-template/blob/master/media/love_running_footer.png)

- __Gallery__

  - The gallery will provide the user with supporting images to see what the meet ups look like. 
  - This section is valuable to the user as they will be able to easily identify the types of events the organisation puts together. 

![Gallery](https://github.com/lucyrush/readme-template/blob/master/media/love_running_gallery.png)

- __The Sign Up Page__

  - This page will allow the user to get signed up to Love Running to start their running journey with the community. The user will be able specify if they would like to take part in road, trail or both types of running. The user will be asked to submit their full name and email address. 

![Sign Up](https://github.com/lucyrush/readme-template/blob/master/media/love_running_signup.png)

For some/all of your features, you may choose to reference the specific project files that implement them.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement

- Another feature idea
- Warning message to "start new game button"


## Testing 

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your project’s features and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.


### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fcode-institute-org.github.io%2Flove-running-2.0%2Findex.html)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fvalidator.w3.org%2Fnu%2F%3Fdoc%3Dhttps%253A%252F%252Fcode-institute-org.github.io%252Flove-running-2.0%252Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en#css)

### Unfixed Bugs

You will need to mention unfixed bugs and why they were not fixed. This section should include shortcomings of the frameworks or technologies used. Although time can be a big variable to consider, paucity of time and difficulty understanding implementation is not a valid reason to leave bugs unfixed. 

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub) 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://code-institute-org.github.io/love-running-2.0/index.html 


## Credits 

In this section you need to reference where you got your content, media and extra help from. It is common practice to use code from other repositories and tutorials, however, it is important to be very specific about these sources to avoid plagiarism. 

You can break the credits section up into Content and Media, depending on what you have included in your project. 

### Content 

- The text for the Home page was taken from Wikipedia Article A
- Instructions on how to implement form validation on the Sign Up page was taken from [Specific YouTube Tutorial](https://www.youtube.com/)
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)

### Media

- The photos used on the home and sign up page are from This Open Source site
- The images used for the gallery page were taken from this other open source site


Congratulations on completing your Readme, you have made another big stride in the direction of being a developer! 

## Other General Project Advice

Below you will find a couple of extra tips that may be helpful when completing your project. Remember that each of these projects will become part of your final portfolio so it’s important to allow enough time to showcase your best work! 

- One of the most basic elements of keeping a healthy commit history is with the commit message. When getting started with your project, read through [this article](https://chris.beams.io/posts/git-commit/) by Chris Beams on How to Write  a Git Commit Message 
  - Make sure to keep the messages in the imperative mood 

- When naming the files in your project directory, make sure to consider meaningful naming of files, point to specific names and sections of content.
  - For example, instead of naming an image used ‘image1.png’ consider naming it ‘landing_page_img.png’. This will ensure that there are clear file paths kept. 

- Do some extra research on good and bad coding practices, there are a handful of useful articles to read, consider reviewing the following list when getting started:
  - [Writing Your Best Code](https://learn.shayhowe.com/html-css/writing-your-best-code/)
  - [HTML & CSS Coding Best Practices](https://medium.com/@inceptiondj.info/html-css-coding-best-practice-fadb9870a00f)
  - [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html#General)

Getting started with your Portfolio Projects can be daunting, planning your project can make it a lot easier to tackle, take small steps to reach the final outcome and enjoy the process! 