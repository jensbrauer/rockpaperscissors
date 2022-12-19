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
  

![Landing Page](https://github.com/jensbrauer/rockpaperscissors/blob/main/docs/readme_images/landingpage.PNG)

- __Header__

  - The header is built to effectively display the purpose of this one-page site with the title ROCK PAPER SCISSORS clearly stated in black and white. 
  - It also provides a small button with a link back to the Instructions. This is mainly in black and white theme not to draw unnecessary attention, but with an orange info-icon and an on-hover css feature in order to convey the interactivity to the user.

![Header](https://github.com/jensbrauer/rockpaperscissors/blob/main/docs/readme_images/header.PNG)

- __Score Card__

  - The Score Card section allows the user to monitor the progression of the game. It's default styling is in greyscale, and the table displaying the scores light up in green or red color when game is over to alert the user to the end results.
  - Next to the score table is an interactive element colored in a pale orange color that enables the user to start a new game at any point in the game flow.

![Score Card](https://github.com/jensbrauer/rockpaperscissors/blob/main/docs/readme_images/scorecard.PNG)

- __Game Section__ 

  - The game section is where users can interact with the game flow itself.

![Game Area](https://github.com/jensbrauer/rockpaperscissors/blob/main/docs/readme_images/gamearea.PNG)

#### Players Choice Section
  - Clearly displaying the interactive elements in another warm orange color that expand on hover. The functionality of the interactive elements are also clarified with associated text-elements and icons that should remind anyone familiar with the game of the hand signs normaly used in real life. Furthermore, the headings guide the user to understand where their choice should be inputed.

![Players Choice](https://github.com/jensbrauer/rockpaperscissors/blob/main/docs/readme_images/playerschoice.PNG)

#### Message line
  - Seperating the players choice and the computers choice areas, is a message line where the round results are messaged; "Computer wins the round", "You win the round" or "It is a draw".

#### Computers Choice Section
  - Underneath, a computers choice section is interconnected but with a colder blue/green color on no on-hover effect. It is displayed with the laptop icon and a "To Be Announced" text tag as well as a "Computers Choice", to show the user that the oponent's(the computer's) respons will be displayed there.
![Computers Choice](https://github.com/jensbrauer/rockpaperscissors/blob/main/docs/readme_images/computerschoice.PNG)

  - To the bottom right of the game-section, a "next-round" button pops at the end of a round before game is over. In order to allow the user to initiate next round at will instead of automatically.
![Next Round](https://github.com/jensbrauer/rockpaperscissors/blob/main/docs/readme_images/nextround.PNG)

#### Game Flow Scenarios
  - At the end of each round, when choises are evaluated. The button that the player clicked and chose, as well at the pseudo-button for the computer choice display, will light up in green, yellow or red colors based on the results of the round. I. e. The loosers choice turns red, the winners choice turns green and at a draw - both are colored in yellow.
  ![Round Over](https://github.com/jensbrauer/rockpaperscissors/blob/main/docs/readme_images/roundend.PNG)

  - At the end of the game (game over scenario), the complete gamesection is grayscaled to 70% in order to more effectively lead the users attention to the Score Card section where game results are displayed. Furthermore, no "next round" button is displayed and instead, "Start new game" button must be clicked in order to activate more game play.
  ![Game Over Scenario](https://github.com/jensbrauer/rockpaperscissors/blob/main/docs/readme_images/gameover.PNG)

For some/all of your features, you may choose to reference the specific project files that implement them.

### Features Left to Implement

- Popup warning message to "start new game button". It would be nice to alert the user with an "Are you sure you want to start a new game? This action will terminate the current game and scorecard. click(Y/N)" if new game was launched in the middle of gameflow. This might also be applied on user closing the site as it is not obvious that scores will not be stored in any way.
- Popup to display round results. This could both make the layout more effective and avoid button for "Next round" to interfere with the game section, as well as beeing the better choice over the messega strip between the computers choice and the players choice area.


## Testing 

### Manual Testing
#### Manual testing by myself, conducted on deployed version resulted in the following:

- CSS bugs found and addressed
  - The button with id="paper-button" in the players choice area caused the whole players area to expand downwards on hover.
    - The div with id="game-center" was given a fixed height, large enough to fit content.
  - The Computer Display pseudo button in the Computers choice area was slightly pushed to the left and did not align with middle button of Players Choice area.
    - An empty div with the same CSS as the left Choice Button area in the Players Choice area in order to push it into alignment.
- JS bugs found and addressed:
  - The "next round"-button appeared even though Game scenario was "Game Over".
    - Corrected in the js file by adding element.style.visibility = 'hidden' to function gameIsOver()
  - The "Players Choice" buttons remained clickable in Game Over scenario.
    - The function isGameOver() was updated to use element.textContent = 'TBA' on the computerMsg variable referencing the div id="computer-msg-center", in order to determin whether or round was played or finished.
- HTML bugs found and addressed:
  - No players choice buttons would fire onclick functions until "new game" button was clicked.
    - The original html element did not contain the correct element.textContent that the condition looked for in js function isRoundActive(). It was updated and bug was corrected.

#### Live link was shared with friends and no further bugs or problems was detected.

The site was tested on the following devices
- Android Oneplus 7
- Iphone SE 2022
- HP Elitebook 13"

The site was tested on the following web browser
- Mozilla Firefox
- Windows Edge
- Google Chrome
- Safari


### Validator Testing 

- HTML
  - [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fjensbrauer.github.io%2Frockpaperscissors%2F) highlighted no errors in the HTML.
- CSS
  - [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fjensbrauer.github.io%2Frockpaperscissors%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=sv#css) highlighted no errors in the CSS.
- JavaScript
  - [JSHint](https://jshint.com/) Returned 24 warnings about the JavaScript code. These warnings were all one of the following warnings;
    - 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
    - 'template literal syntax' is only available in ES6 (use 'esversion: 6').
    - 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
  - In the Configure tab of JSHint under "Assume", I clicked "New JavaScript features (ES6)" which got rid of the warnings. I. e. this website assumes that user browsers support ES6.
  

### Lighthouse Report

Lighthouse report was run multiple times with varying performance score as low as 83.
Performance issues are unnoticed in manual testing and therefore unattended to.

![Lighthouse Report](https://github.com/jensbrauer/rockpaperscissors/blob/main/docs/readme_images/lighthouse.PNG)


### Unfixed Bugs

- Performance issues caught by lighthouse are unattended to.

- An unwanted feature is the the next round button rendering weirdly.
  - When clicked, JS function is hiding it by changing element.style.visibility = 'hidden',
it does not instantly disappear but fades a little and then instantly disappears.
With another method, this could probably be solved better.

## Deployment

The finalized version of the website was deployed on GitHub pages, step by step;

- Navigate to to the github repository 'Settings' tab
- Select 'Pages' in the left side menu
- Under "Build and deployment" - "Branch"; Select 'Main' in the 'Select branch' drop-down menu.
- Click Save 

A green banner displays with a live link when deployment and build is finished.

This is the live link for the deployed page - https://jensbrauer.github.io/rockpaperscissors/


## Credits 

Gareth McGirr mentored this project and provided valuable feedback on graphical design and content.

Arvid Burström helped test this website and provided feedback on how to structure code in game development.

To better understand the JSHint warning messages on ES6 i read [W3Schools](https://www.w3schools.com/js/js_es6.asp) in order to understand how I wanted to proceed.

### Content 

- The icons used for buttons and display areas were taken from [Font Awesome](https://fontawesome.com/)
