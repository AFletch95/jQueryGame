

// jQuery containers for...
  // characters.
$fighterBugsBunny = $('#bugsBunny');
$fighterMarvinTheMartian = $('#marvinMartian');
$fighterDaffyDuck = $('#daffyDuck');
$fighterFoghornLeghorn = $('#foghornLeghorn');
$fighterGranny = $('#granny');
// HP text
$bugsBunnyHP = $('#bugsBunnyHP');
$marvinTheMartianHP = $('#marvinMartianHP');
$daffyDuckHP = $('#daffyDuckHP');
$foghornLeghornHP = $('#foghornLeghornHP');
$grannyHP = $('#grannyHP');
  // html elements
$yourCharacter = $('#yourCharacter');
$yourEnemy = $('#yourEnemy');
$attackBtn = $('#attackBtn');
$attackText = $('#attackText');
$gameOverText = $('#gameOver');
$instructionsText = $('#characterSelectText');
//----------------------------------------------
// Variables
var yourAttackPower = 0;
var counterAttackPower = 0;
var fighterChosen = false;
var enemyChosen = false;
var hitPoints = 0;
var currentAttackPower = 0;
var enemyHitPoints = 0;
var enemyAttackPower = 0;
var retry = false;

var yourFighter;
var yourHPText;
var enemyFighter;
var enemyHPText;

// Creating fighter class
class fighter {
  constructor (name,HP,attackPower,counterAttackPower,image){
  this.name = name;
  this.HP = HP;
  this.attackPower = attackPower;
  this.counterAttackPower = counterAttackPower;
  this.image = image;
}}
// creating fighters
var fighterBugsBunny = new fighter('Bugs Bunny',120,10,10,'../images/bugsBunny.jpg');
var fighterMarvinTheMartian = new fighter('Marvin the Martian',90,20,20,'../images/marvinMartian.jpg');
var fighterDaffyDuck = new fighter('Daffy Duck',130,12,12,'../images/daffyDuck.jpg');
var fighterFoghornLeghorn = new fighter('Foghorn Leghorn',150,15,15,'../images/foghornLeghorn.jpg');
var fighterGranny = new fighter('Granny',110,18,18,'../images/granny.jpg');

// on click attack button
$attackBtn.on('click',function(){
  if(retry){
    reset();
  }
  if(fighterChosen && enemyChosen){
    if(enemyFighter.HP > 0 && yourFighter.HP > 0){
      //user attack
      enemyFighter.HP -= yourFighter.attackPower;
      enemyHPText.text(enemyFighter.HP);
      yourFighter.HP -= enemyFighter.counterAttackPower;
      yourHPText.text(yourFighter.HP);
      $attackText.text("You hit for " + yourFighter.attackPower + " The enemy hit for " + enemyFighter.counterAttackPower)
      yourFighter.attackPower += 13;
      // console.log("enemyFighter.HP: " + enemyFighter.HP + " yourFighter.attackPower: " + yourFighter.attackPower);
      //enemy attack
      
      $attackText.append("<br />Your attack grew! Your attack power is now " + yourFighter.attackPower);
    }
    if(yourFighter.HP <= 0){
      $gameOverText.text('GAME OVER!');
      $attackBtn.text('Retry');
      retry = true;
    }
    if(enemyFighter.HP <= 0){
      $yourEnemy.empty();
      enemyChosen = false;
      $instructionsText.text('Select another enemy!');
    }
  }
})


// reset kinda broken***
function reset(){
  $('#characterList').empty(); //Clear out remaining fighters

  // Reset characterList
  $('#characterList').append($fighterBugsBunny);
  fighterBugsBunny.HP = 120;
  $bugsBunnyHP.text(fighterBugsBunny.HP);
  fighterBugsBunny.attackPower = 10;
  $('#characterList').append($fighterMarvinTheMartian);
  fighterMarvinTheMartian.HP = 90;
  $marvinTheMartianHP.text(fighterMarvinTheMartian.HP);
  fighterMarvinTheMartian.attackPower = 20;
  $('#characterList').append($fighterDaffyDuck);
  fighterDaffyDuck.HP = 130;
  $daffyDuckHP.text(fighterDaffyDuck.HP);
  fighterDaffyDuck.attackPower = 12;
  $('#characterList').append($fighterFoghornLeghorn);
  fighterFoghornLeghorn.HP = 150;
  $foghornLeghornHP.text(fighterFoghornLeghorn.HP);
  fighterFoghornLeghorn.attackPower = 15;
  $('#characterList').append($fighterGranny);
  fighterGranny.HP = 110;
  $grannyHP.text(fighterGranny.HP);
  fighterGranny.attackPower = 18;

  $yourCharacter.empty();
  $yourEnemy.empty();

  fighterChosen = false;
  enemyChosen = false;

  $instructionsText.text('Choose a fighter!');
  $attackBtn.text('Attack!');
  $gameOverText.text('');

  retry = false;

}

// on click bugs bunny character
$fighterBugsBunny.on('click', function(){
  if(!fighterChosen){
    // hitPoints = fighterBugsBunny.HP;
    // currentAttackPower = fighterBugsBunny.attackPower;
    yourFighter = fighterBugsBunny;
    yourHPText = $bugsBunnyHP;
    $yourCharacter.append($fighterBugsBunny);
    fighterChosen = true;
    $instructionsText.text('Choose an Enemy!')
  }
  else if(!enemyChosen){
    // enemyHitPoints = fighterBugsBunny.HP;
    // enemyAttackPower = fighterBugsBunny.counterAttackPower;
    enemyFighter = fighterBugsBunny;
    enemyHPText = $bugsBunnyHP;
    $yourEnemy.append($fighterBugsBunny);
    enemyChosen = true;
    $instructionsText.text('Fight!')
  }
})
// on click marvin the martian character
$fighterMarvinTheMartian.on('click', function(){
  if(!fighterChosen){
    // hitPoints = fighterMarvinTheMartian.HP;
    // currentAttackPower = fighterMarvinTheMartian.attackPower;
    yourFighter = fighterMarvinTheMartian;
    yourHPText = $marvinTheMartianHP;
    $yourCharacter.append($fighterMarvinTheMartian);
    fighterChosen = true;
    $instructionsText.text('Choose an Enemy!')
  }
  else if(!enemyChosen){
    // enemyHitPoints = fighterMarvinTheMartian.HP;
    // enemyAttackPower = fighterMarvinTheMartian.counterAttackPower;
    enemyFighter = fighterMarvinTheMartian;
    enemyHPText = $marvinTheMartianHP;
    $yourEnemy.append($fighterMarvinTheMartian);
    enemyChosen = true;
    $instructionsText.text('Fight!')
  }
})
// on click daffy duck character
$fighterDaffyDuck.on('click', function(){
  if(!fighterChosen){
    // hitPoints = fighterDaffyDuck.HP;
    // currentAttackPower = fighterDaffyDuck.attackPower;
    yourFighter = fighterDaffyDuck;
    yourHPText = $daffyDuckHP;
    $yourCharacter.append($fighterDaffyDuck);
    fighterChosen = true;
    $instructionsText.text('Choose an Enemy!')
  }
  else if(!enemyChosen){
    // enemyHitPoints = fighterDaffyDuck.HP;
    // enemyAttackPower = fighterDaffyDuck.counterAttackPower;
    enemyFighter = fighterDaffyDuck;
    enemyHPText = $daffyDuckHP;
    $yourEnemy.append($fighterDaffyDuck);
    enemyChosen = true;
    $instructionsText.text('Fight!')
  }
})
// on click Foghorn Leghorn character
$fighterFoghornLeghorn.on('click', function(){
  if(!fighterChosen){
    // hitPoints = fighterFoghornLeghorn.HP;
    // currentAttackPower = fighterFoghornLeghorn.attackPower;
    yourFighter = fighterFoghornLeghorn;
    yourHPText = $foghornLeghornHP;
    $yourCharacter.append($fighterFoghornLeghorn);
    fighterChosen = true;
    $instructionsText.text('Choose an Enemy!')
  }
  else if(!enemyChosen){
    // enemyHitPoints = fighterFoghornLeghorn.HP;
    // enemyAttackPower = fighterFoghornLeghorn.counterAttackPower;
    enemyFighter = fighterFoghornLeghorn;
    enemyHPText = $foghornLeghornHP;
    $yourEnemy.append($fighterFoghornLeghorn);
    enemyChosen = true;
    $instructionsText.text('Fight!')
  }
})
// on click Granny character
$fighterGranny.on('click', function(){
  if(!fighterChosen){
    // hitPoints = fighterGranny.HP;
    // currentAttackPower = fighterGranny.attackPower;
    yourFighter = fighterGranny;
    yourHPText = $grannyHP;
    $yourCharacter.append($fighterGranny);
    fighterChosen = true;
    $instructionsText.text('Choose an Enemy!')
  }
  else if(!enemyChosen){
    // enemyHitPoints = fighterGranny.HP;
    // enemyAttackPower = fighterGranny.counterAttackPower;
    enemyFighter = fighterGranny;
    enemyHPText = $grannyHP;
    $yourEnemy.append($fighterGranny);
    enemyChosen = true;
    $instructionsText.text('Fight!')
  }
})