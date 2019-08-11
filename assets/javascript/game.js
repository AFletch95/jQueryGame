// Austin Fletcher
// Homework #4 Looney Tunes RPG
// game.js

// Creating fighter class
// class fighter {
//   constructor (name,image,HP,attackPower,counterAttackPower){
//   this.name = name;
//   this.image = image;
//   this.HP = HP;
//   this.attackPower = attackPower;
//   this.counterAttackPower = counterAttackPower;

//   gameStart: true;
//   yourCharacter: null;
//   currentEnemy: null;
//   yourCurrentAttackPower: 0;
//   winOccurred: false;
//   attackOccurred: false;
//   lossOccurred: false;
//   wounded: false;
//   gameOver: false;
//   looneyTune: false;
// }}

// var bugsBunny = new fighter('Bugs Bunny','../images/bugsBunny.jpg',120,10,10);
// var marvinTheMartian = new fighter('Marvin the Martian','../images/marvinMartian.jpg',90,20,20);
// var daffyDuck = new fighter('Daffy Duck','../images/daffyDuck.jpg',130,12,12);
// var foghornLeghorn = new fighter('Foghorn Leghorn','../images/foghornLeghorn.jpg',150,15,15);
// var granny = new fighter('Granny','../images/granny.jpg',110,18,18);

// Variables
// var gameStart = true;
// var yourCharacter = null;
// var currentEnemy = null;
// var yourCurrentAttackPower = 0;
// var winOccurred = false;
// var attackOccurred = false;
// var lossOccurred = false;
// var wounded = false;
// var gameOver = false;
// var looneyTune = false;

function resetGame() {
  window.fighter = {
    gameStart: true,
    yourCharacter: null,
    currentEnemy: null,
    yourCurrentAttackPower: null,
    winOccurred: false,
    attackOccurred: false,
    lossOccurred: false,
    wounded: false,
    gameOver: false,
    looneyTune: false,
    characterArrayList: [
      {
        name: 'Bugs Bunny',
        visual: '../images/bugsBunny.jpg',
        healthPoints: 120,
        attackPower: 10,
        counterAttackPower: 10,
      },
      {
        name: 'Marvin the Martian',
        visual: '../images/marvinMartian.jpg',
        healthPoints: 90,
        attackPower: 20,
        counterAttackPower: 20,
      },
      {
        name: 'Daffy Duck',
        visual: '../images/daffyDuck.jpg',
        healthPoints: 130,
        attackPower: 12,
        counterAttackPower: 12,
      },
      {
        name: 'Foghorn Leghorn',
        visual: '../images/foghornLeghorn.jpg',
        healthPoints: 150,
        attackPower: 15,
        counterAttackPower: 15,
      },
      {
        name: 'Granny',
        visual: '../images/granny.jpg',
        healthPoints: 110,
        attackPower: 18,
        counterAttackPower: 18,
      }
    ],
}
// TODO: create an array of battle sounds
// TODO: create a function to select a random sound when attack button clicked
}

// Initial setup
$(document).ready(function(){
  resetGame();

  function render(){
    var $charList = $('#characterList');
    var $enemyList = $('#characterList');
    var $yourCharacter = $('#yourCharacter');
    var $attackText = $('#attackText');
    var $yourEnemy = $('#yourEnemy');
    var $winText = $('#attackText');
    var $lossText = $('#attackText');
    var $gameOver = $('#gameOver');
    var $toonText = $('#attackText');

    var charHtml = "";
    $yourCharacter.html("");
    $yourEnemy.html("");
    $attackText.html("");
    $gameOver.html("");

    if(fighter.yourCharacter){
      $enemyList.html(charHtml);
      $charList.html("");
    }
    else{
      $charList.html(charHtml);
      $enemyList.html("");
    }
    if(fighter.winOccurred){
      $winText.text("You won the fight!");
      $('#yourEnemy').empty(fighter.currentEnemy);
    }
    if(fighter.lossOccurred){
      $lossText.text("You lost the fight! Game Over!");
    }
    if(fighter.gameOver){
      let b = $('<button>');
      b.addClass('btn-primary btn-lg');
      b.text('Battle Again!');
      resetGame();

      b.click(render);
      $('#gameOver').append(b);
    }
    if(fighter.looneyTune){
      $toonText.text("You defeated everyone else! You won!");
      $('#yourEnemy').empty(fighter.currentEnemy);
      let b = $('<button>');
      b.addClass('btn-primary btn-lg');
      b.text('Battle Again!');
      resetGame();

      b.click(render);
      $('#gameOver').append(b);
    }
  }
  //STAGE 2:
  $('#characterList').on('click','.characterContainer',function(e){

    let element = $(this);
    let charIndex = element.data('character-index');

    if(!fighter.yourCharacter){
      fighter.yourCharacter = fighter.characterArrayList.splice(charIndex,1)[0];
      fighter.yourCurrentAttackPower = fighter.yourCharacter.attackPower;
    }
    render();
    //TODO: add sounds
  }) //.on(click)

  //stage 3
  $('#enemyList').on('click','.characterContainer',function(e){
 
    let element = $(this);
    let charIndex = element.data('character-index');
    
    if(!fighter.currentEnemy){
      fighter.winOccurred = false;

      fighter.attackOccurred = false;
      fighter.currentEnemy = fighter.characterArrayList.splice(charIndex,1);
    }
    render();
    //TODO: add sounds

  })
  $('#attackBtn').on('click',function(e){
    if(!fighter.yourCharacter || !fighter.currentEnemy){
      $('#attackText').html('No enemy here, select an emeny to fight.')
      return;
    }

    fighter.attackOccurred = true;

    var yourCharacter = fighter.yourCharacter;
    var currentEnemy = fighter.currentEnemy;

    fighter.yourCurrentAttackPower = fighter.yourCurrentAttackPower + yourCharacter.attackPower;
    currentEnemy.healthPoints = currentEnemy.healthPoints - fighter.yourCurrentAttackPower;

    yourCharacter.healthPoints = yourCharacter.healthPoints - currentEnemy.counterAttackPower;
    console.log ("enenemy health points: " + currentEnemy.healthPoints + ' your health: ' + yourCharacter.healthPoints);


    var win = (currentEnemy.healthPoints < 1 && yourCharacter.healthPoints > 1 || 
      ((yourCharacter.healthPoints < 1 && currentEnemy.healthPoints < 1) && 
      (yourCharacter.healthPoints > currentEnemy.healthPoints))
      ) ? true : false;

var loss = (yourCharacter.healthPoints < 1 && currentEnemy.healthPoints > 1 || 
      ((yourCharacter.healthPoints < 1 && currentEnemy.healthPoints < 1) && 
        (yourCharacter.healthPoints < currentEnemy.healthPoints))
       ) ? true: false;
  })

//UNFINISHED!

})