
$(document).ready(function(){


var adminWindow;

$('#openAdminButton').on('click', function(){
  
    adminWindow = window.open('admin.html', "ADMIN WINDOW", "width=800px, height=600px, resizable");
  
});



//

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



function loadCellInformation(gameID, roundID, columnID, rowID){

  // load the appropriate information into the admin window


}

function onAdminWindowClose(){
  // do these things when the admin window is closed

  // can you ask if the user really wants to close this window, especially if something is happening... game, editing, changes made?

}


// administrator functions:


function enterFullScreenMode(){
  // enter full screen mode

}


});





