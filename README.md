# Live on the Line Bet Tracker
### Follow along with the bets made on 'Live on the Line' or track your own bets!

## How to Install
- Once in this application's GitHub repository, create a copy for yourself by clicking the fork button. In your own fork, click the 'Code' button and select SSH to copy the SSH key.
- Open your Command Line Interface and go to the directory where you want to store your new repo. Type in 'git clone' followed by the SSH key you copied and press enter to run the command. 
- Then simply head into that new directory to begin working with the bet tracker

## Setup
- Now that you have your own version you can get started by running a few commands in the terminal to get the backend up and running:
  
  ```
  /phase-3-project$ bundle install 
  /phase-3-project$ rake db:migrate
  /phase-3-project$ rake server  
  ```

  This will run the backend server on http://localhost:9292/.

- For the frontend:

  ```
  /phase-3-project$ cd client
  /phase-3-project/client$ npm install
  /phase-3-project/client$ npm start
  ```

  This will run the frontend serer on http://localhost:3000/.

## How to Use
- View all of the people's most recent bets on the home page
- Add a person by submitting the form on the Add A Person page
- View all of the bets made by a specific person by clicking the corresponding button for that person
- Once viewing all of the bets made by one person you can add a bet, edit a bet and delete a bet. 
  - Delete the bet by clicking the 'Delete Bet' button. 
  - Edit a bet by clicking the 'Edit Bet' button which will take you to an edit form with all the data prepopulated. Submit that edit form to complete the edit bet process. 
  - Add a bet by clicking the 'Add A Bet' button then fill out the corresponding form and submit it to complete the add bet process.

## Acknowledgements
- 'Live on the Line' is a live sports betting show on Stadium, your local Bally Sports Network, YES Network and Marquee Sports Network. 
- Note: the information on this GitHub is not up-to-date with the show, nor is this GitHub affiliated with the show. 