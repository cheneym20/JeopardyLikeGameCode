

var gameState = "";

var overlayState = "";

var xmlGameOb;




function xmlLoadFile(){
    // needs to be called by a button on the admin window:

      var preview = document.getElementById('title'); // <-- change to element id where the file name is placed
        
      var file = document.querySelector('input[type=file]').files[0];
      
      var reader = new FileReader();
      
      var textFile = /text.*/;
      
      if (file.type.match(textFile)) {
        reader.onload = function (event) {

          // once successfully loaded, purge the gameOb and all fields:

      //		gameOb = new GameOb();

        //  purgeAll(); // <-- this is used to purge the entire jeopardy game object

        //  Object.assign(gameOb, JSON.parse(event.target.result)); <-- used to parse JSON files.  

        parser = new DOMParser();
        xmlGameOb = parser.parseFromString(event.target.result,"text/xml");

        if(validateGameObject(xmlGameOb)){
          populateAdminWindowWithFile(xmlGameOb);
        }
        else{
          alert("Invalid file.");
        }


          // load the round data:

        //  populateFromLoadedGameOb(); <-- this will load the game onto the html page

        }
      }
      else {
        preview.innerHTML = "Invalid filetype";
      }
      reader.readAsText(file);

}


function validateGameObject(gameObject){
  // ensure that the gameObject has everything required to begin a game.
  // the return value should reflect either that a game is possible
  // or returns what is needed.

  // thinking about how to validate the file... maybe just validate a few objects that are created in a proper game file.

  // but for now...

    return true;


}


function populateAdminWindowWithFile(QAobject){


    // LOAD THE VARIOUS GAME ELEMENTS:

      // Load the File Information into html elements in the administrator window

      displayFileInformation();


      // Load the Games onto the admin window dropdownlist of rounds

          // each game will be represented by a "gameObjectDiv" div.  Generate them and place them into the appropriate spot

}


function displayFileInformation(){


    // load the following into the administrator window:

          // File Title <-- place into the appropriate html element:

          // File Creator <-- place into the appropriate html element:

          // File Notes <-- place into the appropriate html element:

}


function displayGameInformation(){

    // each file can have multiple games that last for multiple rounds.  When a user clicks on a game from the xml file, display info about it.

    // each game should have the following information:

        // gameID <-- place into the appropriate html element:

        // game creator <-- place into the appropriate html element:

        // date created <-- place into the appropriate html element:

        // notes <-- place into the appropriate html element:

        // an array of rounds <-- place into the appropriate html dropdownlist element:


}


function loadRoundOntoGrid(roundOb){

    // each round will have the following information (all will not necessarily be displayed)

        // Round Title <-- place onto the overlay to display when the game is ready to start:

        // roundStatus (incomplete, incomplete_editsMade, complete, complete_editsMade)

        // hasRoundFinalQA (true/false) <-- will determine loading of roundFinalQA

        // roundFinalQuestion <-- will not be loaded until all questions are answered but it is part of the round object

        // roundFinalAnswer <-- will not be loaded until all questions are answered but it is part of the round object

        // roundFinalQAsource <-- will not be loaded until all questions are answered but it is part of the round object

        // an array of categoryObjects (one for each category)

            // for each categoryObject,

                // a categoryOrderNum (telling us the order of the columns)

                // an array of questions

                    // load each cell:

                    loadQAobjectIntoCell(questionArray[i]);

                    


        // first, count the categoryObjects array length to determine how many columns are needed:

        
        // generate the needed columns, labeling each with


}


function loadQAobjectIntoCell(QAobject){

    // each QAobject will have the following:

        // question

        // answer

        // source

        // obStatus (complete, complete_changesMade, incomplete, incomplete_changesMade, complete_markedForCorrection)


    // begin by validating the object:

    if(validateQAobject(questionArray[i])){
      // load a regular, playable object into the cell:
      
    }
    else{
      // load the cell, however complete/incomplete, and label as requiring attention:

    }

}


function validateQAobject(ob){
  // validate that an individual QAobject is playable.
  // return with a string of status

    // check each QAobject for complete data (question, answer, source, obStatus,)

    // return true if all are present

    // but for now...

    return true;

}


function gridObjectAction(actionType){
  // remember "this"
  // use the "actionType" along with the gameMode to determine action taken

}


function loadOverlayObject(question,answer,source,value){
  // load the following information
}

function displayOverlayObject(){}


function hideOverlayObject(){}


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



function resetGameGridObject(){
  // empty the game grid

}


function resetAll(){
// reset all

}


function enterFullScreenMode(){
  // enter full screen mode

}








