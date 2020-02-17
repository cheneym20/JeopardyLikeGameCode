


function xmlLoadFile(){}


function validateGameObject(gameObject){
  // ensure that the gameObject has everything required to begin a game.
  // the return value should reflect either that a game is possible
  // or returns what is needed.

}


function populateGameGrid(QAobject){}


function gridObjectAction(actionType){
  // remember "this"
  // use the "actionType" along with the gameMode to determine action taken

}


function overlayClick(){
  // use the gameMode to determine action taken


}


function gameModeChange(newGameMode){
  // change the current game mode.  still deciding all the game modes available to use
  // such as inGame, inGameShowingAnswer, inGameShowingQuestion, inGameShowingFinalQA,
  // editingGame, editingGame_changesMade, newGame_changesMade, etc.
  
  // used to change the global variable controlling the gameMode
  
}


function showAdminWindow(){
  // is there a way to determine whether or not a dual screen is available?
  // if so, warn user if not available.  else open the admin window
  
  // the admin window is defined with another html page

}


function onAdminWindowClose(){
  // do these things when the admin window is closed

}


// administrator functions:

function editQAobject(ob){
  // the ob should include attributes such as "type", "value", etc.

}


function importGameFile(){
  // import the xml game file

}


function exportGameFile(gameObject){
  // export the xml game file
  
}


function createNewGame(){
  // create a new game (not yet xml)
  
}


function editColumn(col, action){
  // 

}


function setNumberOfRows(numOfRows){
  // set the number of rows in the game

}


function validateQAobject(ob){
  // validate that an individual QAobject is playable.
  // return with a string of status

}


function resetGameGridObject(){
  // empty the game grid

}


function resetAll(){
// reset all

}











