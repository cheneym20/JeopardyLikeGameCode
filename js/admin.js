
$(document).ready(function(){

var gameState = ""; // inGameMode, editMode
        
var gameFileState = ""; // complete, complete_changesMade, incomplete, incomplete_changesMade

var overlayState = "";  // visible_question_value, visible_answer_source, hidden

var gameCounter = 100;
var roundCounter = 1000;

document.getElementById("game-id").disabled = true;


function FileOb(_fileTitle, _fileCreator, _fileNotes){
  this.fileTitle = _fileTitle;
  this.fileCreator = _fileCreator;
  this.fileNotes = _fileNotes;
  this.games = [];

  this.addGame = function(){
  //  this.games.push(new GameOb(new GameInfoOb(this.games.length, "sample title", "sample creator", "sample date", "sample notes"), [].push(new RoundOb(roundCounter++, new RoundInfoOb(0,"Round Title"), new Categories(0,"sample title")))));
  
    this.games.push(new GameOb(new GameInfoOb(this.games.length, "sample title", "sample creator", "sample date", "sample notes")));


    //    var newRound = newGame.addRound();
//    newRound.roundInfo = new RoundInfoOb(0,"sample round title");
//    var newCategory = newRound.addCategory();
//    newCategory.title = "sample category title";
//    newCategory.column = 0;
//    newCategory.qaArray = [];
  
  
  }
}


function GameOb(_gameInfo){
	this.gameInfo = _gameInfo;
	this.rounds = [];

	this.addRound = function(){
		this.rounds.push(new RoundOb(roundCounter++, new RoundInfoOb(this.rounds.length,"sample round title")));
	}
}

function GameInfoOb(_gamePosition,_title, _creator, _dateCreated, _gameNotes){
  this.gameId = gameCounter++;
  this.gamePosition = _gamePosition;
  this.gameTitle = _title;
	this.gameCreator = _creator;
	this.gameDateCreated = _dateCreated;
	this.gameNotes = _gameNotes;
}


function RoundOb(id,info){
	this.roundID = id;
	this.roundInfo = info;
	this.categories = [];

	this.addCategory = function(){
		this.categories.push(new Categories(categories.length,"sample category title"));
	}
}


function RoundInfoOb(_roundPosition,_roundTitle){
  this.roundPosition = _roundPosition;
  this.roundTitle = _roundTitle;
  this.roundStatus = "incomplete";
	this.hasFinalQA = false;
	this.finalQA = new finalJ("Xanswer", "Xquestion", "Xsource");
}


function Categories(_column,_title){
  this.column = _column;
  this.title = _title;
  this.qaArray = [];

  this.addQA = function(){
    this.qaArray.push(new QAob(true,qaArray.length+1,"sample question", "sample answer", "sample source", false, 100));
  }
}

function QAob(_selectable,_row,_question,_answer,_source,_isDailyDouble,_value){
	this.selectable = _selectable;
	this.row = _row;
	this.question = _question;
	this.answer = _answer;
	this.source = _source;
	this.isDailyDouble = _isDailyDouble;
	this.value = _value;
}


function finalJ(_answer,_question,_source){
	this.fAnswer = _answer;
	this.fQuestion = _question;
  this.fSource = _source;
  this.fStatus = "incomplete";
}

let fileOb = new FileOb("ET1","now","none.");

let currGameId = -1;
let currRoundId = -1;
let currCategory = -1;
let currQA = {};

let fileLoaded = false;

var adminWindow = window;  // points to the admin window (which this window is)

var gameWindow = window.opener;  //

$("#game-select-menu").empty();


// load all event listeners:

        document.getElementById('debug').innerHTML = "creating all event listeners...";

        var openFileOption = document.getElementById('fileLoader'); // <-- change to DOM element open button ID
        var saveFileButton = document.getElementById('save-file-button'); // <-- change to DOM element save button ID
        var newFileButton = document.getElementById('new-file-button'); // <-- change to DOM element new game button ID
        var addGameButton = document.getElementById("add-new-game");

        var fileTitleField = document.getElementById('file-title'); // <-- change to DOM element file title field ID
        var fileCreatorField = document.getElementById('file-creator'); // <-- change to DOM element file creator field ID
        var fileNotesField = document.getElementById('file-notes');
        var gamesInFileSortable = document.getElementById('game-select-menu'); // <-- change to DOM element games in file sortable ID
        var roundsInGameDropDown = document.getElementById('round-select-menu'); // <-- change to DOM element rounds in game dropdown ID

        var adminGameCells = document.getElementsByClassName('grid-cell'); // <-- change class name appropriately
        var adminQuestionField = document.getElementById('question-field'); // <-- change to DOM object question field ID
        var adminAnswerField = document.getElementById('answer-field'); // <-- change to DOM object answer field ID
        var adminSourceField = document.getElementById('source-field'); // <-- change to DOM object source field ID
        var adminValueField = document.getElementById('cell-value-field'); // <-- change to DOM object value field ID
        var adminCellResetButton = document.getElementById('cell-reset-button'); // <-- change to DOM object reset button ID
        var adminCellDisableButton = document.getElementById('cell-disable-button'); // <-- change to DOM object disable button ID
        var gameListItem = document.getElementsByClassName("gameListItem");

        // The admin window's elements are now defined.  Add event listeners to them:

        openFileOption.addEventListener('change', function(){
              // the open file button has been pressed.  
        //      alert("attempting to open file");

              loadFile();
              // do we already have a file open?  Are there changes made to an open file that will be overwritten?  Inquire.
        });

        saveFileButton.addEventListener('click', function(){
              // save the changes to xml and export to a file.

              console.log("attempting to save file")
              saveFile();

        });


        $("#new-file-button").on("click", function(){

          console.log("new file button clicked.");
          addNewFile();


        });


        addGameButton.addEventListener('click', function(){
          addNewGame();
        });


        fileTitleField.addEventListener('change', function(){
              // the file title has been changed.  do something.


        });


        fileCreatorField.addEventListener('change', function(){
              // the file creator has been changed. do something.
        });
/*
        adminGameCells.addEventListener('click', function(){
            // a cell in the admin window's game representation was clicked.  
            // display the cell's contents in the designated area on the admin window:

            // each cell has a column and row attribute:
          //  var gameID = gamesInFileSortable.value; // <-- this needs to point to an actual game ID.  figure it out.
            var roundID = roundsInGameDropDown.value; // <-- this needs to point to an actual round ID. figure it out.
            var columnID = this.getAttribute(column); // <-- when loading the cells, the cell DOM will get this additional attribute
            var rowID = this.getAttribute(row); // <-- when loading the cells, the cell DOM will get this additional attribute
            
            loadCellInformation(gameID, roundID, columnID, rowID);

        });
*/

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


        $("#game-select-menu").sortable();
        $("#game-select-menu").disableSelection();


        $("#round-select-menu").sortable();
        $("#round-select-menu").disableSelection();



function loadFile(){
    // needs to be called by a button on the admin window:

    //  alert("attempting to parse json file...");

      var preview = document.getElementById('title'); // <-- change to element id where the file name is placed
        
      var file = document.querySelector('input[type=file]').files[0];
      
      var reader = new FileReader();
      
      var textFile = /text.*/;
      
      if (file.type.match(textFile)) {
        reader.onload = function (event) {

      //    alert("parsing json file...");

          // once successfully loaded, purge the gameOb and all fields:

      //		gameOb = new GameOb();

        //  purgeAll(); // <-- this is used to purge the entire jeopardy game object

          Object.assign(fileOb, JSON.parse(event.target.result)); //<-- used to parse JSON files.  



    //    parser = new DOMParser();
    //    gameOb = parser.parseFromString(event.target.result,"text/xml");

// OLD XML STUFF.

    //    xmlGameOb = $.parseXML(event.target.result);

        if(validateGameObject(fileOb)){
          populateAdminWindowWithFile(fileOb);
          fileLoaded = true;
          document.getElementById("add-new-game").disabled = false;
        }
        else{
          alert("Invalid file.");
        }


          // load the round data:

        //  populateFromLoadedGameOb(); <-- this will load the game onto the html page

        }
      }
      else {
        document.getElementById('debug').innerHTML = "Invalid filetype";
      }
      reader.readAsText(file);

}


function saveFile(){

        // create the xml string from the xml object:

    var xmlSerializer = new XMLSerializer();

    var XMLstr = xmlSerializer.serializeToString(fileOb);

    saveAs(blob, "newGame.txt");
    


}


function validateGameObject(gameObject){
  // ensure that the gameObject has everything required to begin a game.
  // the return value should reflect either that a game is possible
  // or returns what is needed.
//  alert("attempting to validate the game object...");
  // thinking about how to validate the file... maybe just validate a few objects that are created in a proper game file.

  // but for now...

    return true;


}


function populateAdminWindowWithFile(QAobject){

  //  alert("attempting to populate the window...");
    // LOAD THE VARIOUS GAME ELEMENTS:

      // Load the File Information into html elements in the administrator window

      displayFileInformation();


      // Load the Games onto the admin window dropdownlist of rounds

          // each game will be represented by a "gameObjectDiv" div.  Generate them and place them into the appropriate spot

}


function displayFileInformation(){

//    alert("filling fields with available information...");
    // load the following into the administrator window:

          // File Title <-- place into the appropriate html element:
          fileTitleField.value = unescape(fileOb.title);

          // File Creator <-- place into the appropriate html element:
          fileCreatorField.value = unescape(fileOb.fileCreator);

          // File Notes <-- place into the appropriate html element:
          fileNotesField.value = unescape(fileOb.fileNotes);

          populateGamesList();


}


function populateGamesList(){

  // empty the games list:
    $("#game-select-menu").empty();

    // OLD XML:
  //  var gameList = gameOb.getElementsByTagName("game");

//    alert("gameList.length: " + gameList.childNodes.length);

    for(var i = 0; i<fileOb.games.length; i++){
      var gid = fileOb.games[i].gameInfo.gameId;
      var title = unescape(fileOb.games[i].gameInfo.gameTitle);
      var creator = unescape(fileOb.games[i].gameInfo.gameCreator);
      var dateCreated = unescape(fileOb.games[i].gameInfo.gameDateCreated);
      var notes = unescape(fileOb.games[i].gameInfo.gameNotes);

      addGameListElement(gid,title,creator,dateCreated,notes);
    }


}


function addGameListElement(gid,title,creator,dateCreated,notes){

    // take the game elements in xml and create a list item:

    var liSpan = document.createElement("span");
    liSpan.innerHTML = title;


    var newLI = document.createElement("li");
    var editButton = document.createElement("button");
    editButton.innerHTML = "edit";
    editButton.onclick = function(){
      loadGameInfoIntoFields(gid);
    }

    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "delete";
    deleteButton.onclick = function(){
      if(confirm("Are you sure you want to delete this game and all associated data?")){
        deleteGame(gid);
      }
    }

    newLI.classList.add("ui-state-default");
    
    newLI.id = gid;
    editButton.setAttribute("gid", gid);
    deleteButton.setAttribute("gid", gid);
  //  newLI.setAttribute("title", title);
    newLI.setAttribute("creator", creator);
    newLI.setAttribute("dateCreated", dateCreated);
    newLI.setAttribute("notes", notes);

    newLI.appendChild(liSpan);
    newLI.appendChild(editButton);
    newLI.appendChild(deleteButton);

    $("#game-select-menu").append(newLI);

}


function deleteGame(gid){
  // delete the game associated with the gid:

}


function gameObIndexFromGID(gid){
  // determine the gameOb index number in the games array from the gid (gameId):
  var index = 0;

  for(var i = 0; i<fileOb.games.length; i++){
    if(fileOb.games[i].gameInfo.gameId == gid){
      index = i;
      return index;
    }
  }
  return index;

}


function loadGameInfoIntoFields(gid){

  currGameId = gid;

  clearGameInfoFields();


    var index = gameObIndexFromGID(gid);

  // load the game of index into the html fields:
    document.getElementById("game-id").value = fileOb.games[index].gameInfo.gameId;
    document.getElementById("game-title").value = fileOb.games[index].gameInfo.gameTitle;
    document.getElementById("game-creator").value = fileOb.games[index].gameInfo.gameCreator;
    document.getElementById("game-date-created").value = fileOb.games[index].gameInfo.gameDateCreated;
    document.getElementById("game-notes").value = fileOb.games[index].gameInfo.gameNotes;

    loadListOfRounds(index);
    
    
}


function clearGameInfoFields(){
// clear all game info fields:
    document.getElementById("game-id").value = "";
    document.getElementById("game-title").value = "";
    document.getElementById("game-creator").value = "";
    document.getElementById("game-date-created").value = "";
    document.getElementById("game-notes").value = "";

}


function clearRoundInfoFields(){
  // clear all round info fields:
    document.getElementById("round-pos").value = "";
    document.getElementById("round-title").value = "";
    document.getElementById("round-status").value = "";
    document.getElementById("round-has-final-QA").value = "";
    document.getElementById("round-final-question").value = "";
    document.getElementById("round-final-answer").value = "";
    document.getElementById("round-final-source").value = "";
    document.getElementById("round-final-qa-status").value = "";

}


function clearQAfields(){
  // clear all QA fields:
  document.getElementById("question-field").value = "";
  document.getElementById("answer-field").value = "";
  document.getElementById("source-field").value = "";
  document.getElementById("cell-value-field").value = "";

}


function loadListOfRounds(index){

  // empty the rounds ul:
  console.log("index: " + index);

  $("#round-select-menu").empty();

  // empty the round info fields:
  clearRoundInfoFields();
  clearQAfields();

  // populate the list with the rounds:

  for(var i = 0; i<fileOb.games[index].rounds.length; i++){
    // for every round, create an item:
    createRoundListItem(index,i);
  }

}


function createRoundListItem(index,i){

  // create a li for the item:
//  $("#round-select-menu").append("<li>test</li>");

    console.log("index: " + index + ", i: " + i);

    var newLI = document.createElement("li");
    var liDiv = document.createElement("div");

    liDiv.innerHTML = fileOb.games[index].rounds[i].roundInfo.roundPosition;
    liDiv.setAttribute("pos", fileOb.games[index].rounds[i].roundInfo.roundPosition);
    liDiv.setAttribute("gameNum", index);

    newLI.appendChild(liDiv);
  // add the title to the li:
    liDiv.innerHTML = fileOb.games[index].rounds[i].roundInfo.roundTitle;

  // add interactivity:
    liDiv.onclick = function(){
      editRound(this.getAttribute("gameNum"), this.getAttribute("pos"));
    }

    $("#round-select-menu").append(newLI);

}


function editRound(gameNum,roundNum){

    console.log(gameNum + ", " + roundNum);

    // load values:

    var thisRound = fileOb.games[gameNum].rounds[roundNum];

    document.getElementById("round-pos").value = thisRound.roundInfo.roundPosition;
    document.getElementById("round-title").value = thisRound.roundInfo.roundTitle;
    document.getElementById("round-status").value = thisRound.roundInfo.roundStatus;
    document.getElementById("round-has-final-QA").value = thisRound.roundInfo.hasFinalQA;
    document.getElementById("round-final-question").value = thisRound.roundInfo.finalQA.fQuestion;
    document.getElementById("round-final-answer").value = thisRound.roundInfo.finalQA.fAnswer;
    document.getElementById("round-final-source").value = thisRound.roundInfo.finalQA.fSource;
    document.getElementById("round-final-qa-status").value = thisRound.roundInfo.finalQA.fStatus

    let rows = 0;

    // get the number of rows, max rows;
    for(var i = 0; i<thisRound.categories.length; i++){
      // for each category, go through the qa values and get the highest row value:
      for(var j = 0; j<thisRound.categories[i].qaArray.length; j++){
        // go through each qa object and see what the highest number is:
          if(thisRound.categories[i].qaArray[j].row > rows){
            rows = thisRound.categories[i].qaArray[j].row;
          }
      }
    }

    let cols = thisRound.categories.length;

    createJeopardyTable(gameNum,roundNum,rows,cols);

}


function createJeopardyTable(gameNum,roundNum,rows,cols){

  //	alert("currQA.category: " + typeof currQA.category + ", currQA.pos: " + typeof currQA.pos);
    // use the rows and columns to fill a div with a grid/table thing:
  //  rowsNum = parseInt(rows);
    var rowsNum = rows;

    var roundOb = fileOb.games[gameNum].rounds[roundNum];
    // clear the grid:
  //  $("#gameGrid").empty();
  
    $("#gen_tab").empty();
  
    // prebuild the grid:

    let headerComplete = false;
    
    let tableEl = document.getElementById("gen_tab");
  
    let tblBody = document.createElement('tbody');
    tblBody.id = "1,2";
    tableEl.appendChild(tblBody);
  
    for(var t = 0; t < rowsNum+2; t++){
      // add a <tr> for each row, to include the title row:
      let tblRow = document.createElement('tr');
  
      //for each row, add the appropriate amount of cells (equal to the number of columns):
      for(var c = 0; c < cols; c++){

        if(t == 0){
          // it's a title row. Make <th>'s:
          let th = document.createElement('th');

          th.innerHTML = unescape(roundOb.categories[c].title);
        //  th.innerHTML = gameOb.rounds[currRound].roundInfo.columnTitles[c];
          tblRow.appendChild(th);
        }
        else{
          // regular cell, make <td>'s:
          let td = document.createElement('td');
          td.setAttribute("rowID", t);
          td.setAttribute("colID", c);
          td.setAttribute("gameID", gameNum);
          td.setAttribute("roundNum", roundNum);
      //    td.id = t+","+c;
          td.innerHTML = roundOb.categories[c].qaArray[t-1].value;
          td.classList.add("qa_item");
      //    let cellCall = td.id.split(",");
          td.addEventListener("click", function(){editQA(td.getAttribute("rowID"),td.getAttribute("colID"), this);}, false);
          tblRow.appendChild(td);
        }
      }
  
      tblBody.appendChild(tblRow);
  
    }
  
    document.getElementById("finalGrid").appendChild(tableEl);
  
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


function exportGameFile(gameObject){
  // export the xml game file
  
}


function addNewGame(){
  // create a new game (not yet xml)

//  alert("adding new game...");

  fileOb.addGame();
  fileOb.games[fileOb.games.length-1].addRound();
  //fileOb.games[fileOb.games.length-1].roundInfoOb()

  // clear all fields:

  //update the admin window:

  populateGamesList();

  
}


function addNewFile(){
  // warn user about losing info:
  if(confirm("You are about to create a new file.\nAny game changes or edits will be deleted.  Are you sure you want to contine?")){
    //erase the current fileOb:
    fileOb = new FileOb("ET1","now","none.");
  }
}


function editColumn(col, action){
  // 

}


function setNumberOfRows(numOfRows){
  // set the number of rows in the game

}



function refreshGameGridObject(){
  // empty the game grid

}


function resetAll(){
// reset all

}


function enterFullScreenMode(){
  // enter full screen mode

}


});





