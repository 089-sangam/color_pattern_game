var randomNumber;
var buttonColors = ["green","red","yellow","blue"];
var gamePattern = [];
var level=0;
function nextSequence(){
    randomNumber=Math.floor(Math.random()*4);
    gamePattern.push(buttonColors[randomNumber]);
    $("#"+buttonColors[randomNumber]).fadeOut(100).fadeIn(100);
    playSound(buttonColors[randomNumber]); 
    level++;
    $("h1").text("level "+level);
}

var j=0;
var userPattern;
$(".btn").click(function(){
    var userChoosen=$(this).attr("id");
    userPattern= userChoosen;
    playSound(userChoosen);
    $("#"+userChoosen).addClass("animate");
    setTimeout(function (){
        $("#"+userChoosen).removeClass("animate");
    },100);
    if(userPattern==gamePattern[j]){
        j++;
        if(j==level){
            userPattern=[];
            j=0;
            nextSequence();
        }
    }
    else if(level!=0){
        wrongAns();
    }
});

function playSound(id){
    var sound=new Audio("sounds/"+id+".mp3");
    sound.play();
}

document.addEventListener('keypress',()=>{
    if(level==0)
        nextSequence();
});


function wrongAns(){
    level=0;
    $("h1").text("GAME OVER !");
    var sound=new Audio("sounds/wrong.mp3");
    sound.play();
    $("body").addClass("wrong");
    setTimeout(function (){
        $("body").removeClass("wrong");
    },200);
    gameover();
}

function gameover(){
    gamePattern=[];
    level=0;
    j=0;
    setTimeout(function(){
        $("h1").text("Press Any Key to Start");
    },1000);
}
