
$(document).ready(function(){

var gameState = ""; // inGameMode, editMode
        
var gameFileState = ""; // complete, complete_changesMade, incomplete, incomplete_changesMade

var overlayState = "";  // visible_question_value, visible_answer_source, hidden

var xmlGameOb;
        
var emptyXMLgameOb;  // used when a new game file is created.  This is the framework.  It is a mostly empty game file

var adminWindow = window;  // points to the admin window (which this window is)

var gameWindow = window.opener;  //


// load all event listeners:

        document.getElementById('debug').innerHTML = "creating all event listeners...";

        var openFileOption = document.getElementById('fileLoader'); // <-- change to DOM element open button ID
        var saveFileButton = document.getElementById('save-file-button'); // <-- change to DOM element save button ID
        var newGameButton = document.getElementById('new-file-button'); // <-- change to DOM element new game button ID

        var fileTitleField = document.getElementById('file-title'); // <-- change to DOM element file title field ID
        var gamesInFileDropDown = document.getElementById('game-select-menu'); // <-- change to DOM element games in file dropdown ID
        var roundsInGameDropDown = document.getElementById('round-select-menu'); // <-- change to DOM element rounds in game dropdown ID

        var adminGameCells = document.getElementsByClassName('grid-cell'); // <-- change class name appropriately
        var adminQuestionField = document.getElementById('question-field'); // <-- change to DOM object question field ID
        var adminAnswerField = document.getElementById('answer-field'); // <-- change to DOM object answer field ID
        var adminSourceField = document.getElementById('source-field'); // <-- change to DOM object source field ID
        var adminValueField = document.getElementById('< value field id >'); // <-- change to DOM object value field ID
        var adminCellResetButton = document.getElementById('cell-reset-button'); // <-- change to DOM object reset button ID
        var adminCellDisableButton = document.getElementById('cell-disable-button'); // <-- change to DOM object disable button ID

        // The admin window's elements are now defined.  Add event listeners to them:

        openFileOption.addEventListener('change', function(){
              // the open file button has been pressed.  
              alert("attempting to open file");

              xmlLoadFile();
              // do we already have a file open?  Are there changes made to an open file that will be overwritten?  Inquire.
        });

        saveFileButton.addEventListener('click', function(){
              // save the changes to xml and export to a file.

              console.log("attempting to save file")
              xmlSaveFile();

        });

        newGameButton.addEventListener('click', function(){
              // this will abandon any changes made if a file is open.  Inquire.
              
                // check for changes and warn if any changes will be lost:
                if(


        });

        fileTitleField.addEventListener('change', function(){
              // the file title has been changed.  do something.


        });

        adminGameCells.addEventListener('click', function(){
            // a cell in the admin window's game representation was clicked.  
            // display the cell's contents in the designated area on the admin window:

            // each cell has a column and row attribute:
            var gameID = gamesInFileDropDown.value; // <-- this needs to point to an actual game ID.  figure it out.
            var roundID = roundsInGameDropDown.value; // <-- this needs to point to an actual round ID. figure it out.
            var columnID = this.getAttribute(column); // <-- when loading the cells, the cell DOM will get this additional attribute
            var rowID = this.getAttribute(row); // <-- when loading the cells, the cell DOM will get this additional attribute
            

            loadCellInformation(gameID, roundID, columnID, rowID);
        });

        adminQuestionField.addEventListener('change', function(){
            // the field has been edited.  do something.
        });

        adminAnswerField.addEventListener('change', function(){
            // the field has been edited.  do something.
        });

        adminSourceField.addEventListener('change', function(){
            // the field has been edited.  do something.
        });

        adminValueField.addEventListener('change', function(){
            // the field has been edited.  validate field (should only be numbers). Do something accordingly

            // validate that the new field value is a number:

            // if it is, do something accordingly:

        });

        adminSourceField.addEventListener('change', function(){
          // the field has been edited.  do something.
        });

        adminCellResetButton.addEventListener('click', function(){
          // user wants to reset the cell to unclicked condition. 
        });

        adminCellDisableButton.addEventListener('click', function(){
          // user wants to disable the cell as if already clicked.
        });







function xmlLoadFile(){
    // needs to be called by a button on the admin window:

      alert("attempting to parse xml file...");

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



      //  parser = new DOMParser();
      //  xmlGameOb = parser.parseFromString(event.target.result,"text/xml");

        xmlGameOb = $.parseXML(event.target.result);

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


function xmlSaveFile(){

        // create the xml string from the xml object:

    var xmlSerializer = new XMLSerializer();

    var XMLstr = xmlSerializer.serializeToString(xmlGameOb);

    saveAs(blob, "newGame.txt");
    


}


function validateGameObject(gameObject){
  // ensure that the gameObject has everything required to begin a game.
  // the return value should reflect either that a game is possible
  // or returns what is needed.
  alert("attempting to validate the game object...");
  // thinking about how to validate the file... maybe just validate a few objects that are created in a proper game file.

  // but for now...

    return true;


}


function populateAdminWindowWithFile(QAobject){

    alert("attempting to populate the window...");
    // LOAD THE VARIOUS GAME ELEMENTS:

      // Load the File Information into html elements in the administrator window

      displayFileInformation();


      // Load the Games onto the admin window dropdownlist of rounds

          // each game will be represented by a "gameObjectDiv" div.  Generate them and place them into the appropriate spot

}


function displayFileInformation(){

    alert("filling fields with available information...");
    // load the following into the administrator window:

          // File Title <-- place into the appropriate html element:
          document.getElementById('file-title').value = xmlGameOb.getElementByTagName('title')[0].childNodes[0].nodeValue;

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

function displayOverlayObject(){
  // This is only to test.  
  var QuestionBox = document.getElementById("column1row1");
  QuestionBox.firstElementChild.innerHTML = "test";
  QuestionBox.lastElementChild.innerHTML = "test2";
  revealBox(QuestionBox);
  ////////////////////////
}

function revealBox(QuestionBox){
  // This is only to test.  
  QuestionBox.lastElementChild.style.backgroundColor = "Blue";
  QuestionBox.lastElementChild.style.display
  ////////////////////////
}

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

/*
                
function showAdminWindow(){
  // is there a way to determine whether or not a dual screen is available?
  // if so, warn user if not available.  else open the admin window

  // the admin window will contain the following:

      // The button to open a game file

      // The button to save changes to a game file, grayed-out if not needed

      // the button to create a new game file

      // The name of the game file that is currently open.  grayed-out if no file used

      // A dropdown menu of different games in the game file

      // a dropdown menu of different rounds in a game

      // a duplicate of the game grid, for control over the game grid.

          // the game grid contains:

              // Category titles

              // a cell for each row

      // a section is designated for displaying cell information:

          // Question

          // Answer

          // Source

          // RESET button

          // DISABLE button
    console.log("showing admin window...");

    console.log(window.innerHeight);


  
  // the admin window is defined with another html page
    adminWindow = window.open('admin.html', "ADMIN WINDOW", "width=800px, height=600px, resizable");

    console.log("loading...");
    console.log(adminWindow.innerHeight);

function connectAdminWindow(){
      // once the window is loaded, eventlisteners are added to interact with the original game window:

      console.log("loading listeners...");

        

    }


    adminWindow.alert("Admin window loaded.");



}

*/

function loadCellInformation(gameID, roundID, columnID, rowID){

  // load the appropriate information into the admin window


}

function onAdminWindowClose(){
  // do these things when the admin window is closed

  // can you ask if the user really wants to close this window, especially if something is happening... game, editing, changes made?

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


});





