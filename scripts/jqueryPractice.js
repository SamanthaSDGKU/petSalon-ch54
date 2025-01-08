console.log("Welcome to jQuery");

// JS vs jQuery
//getting an element
document.getElementById("results");
$("#results");

document.getElementsByTagName("p");
$("p");

document.getElementsByClassName("with-border");
$(".with-border");

// ID SELECTORS
let redParagraph = $("#red").css("background","red").css("color","white");
console.log("my red paragraph",redParagraph);

let blueParagraph = $("#blue").css("background","blue").css("color","white");

// CLASS SELECTORS
let myParagraphWithBorder = $(".with-border");

myParagraphWithBorder.css("border","5px dashed yellow");

myParagraphWithBorder.click(function(){
    console.log("Cliked");
    $(this).addClass("bg-gray");
});

//TAG SELECTORS
let paragraphs = $("p");
paragraphs.css("cursor","pointer");

//SIMPLE AND COMMON FUNCTION
function register(){
    let testEntry = $("#testInput").val();// get and store info
    $("#results").append(`<li>${testEntry}</li>`);// display the info
}

//EVENTS
$("#registerBtn").on('click',register);

// SIMPLE AND COMMON FUNCTION

function clickMe(){
    console.log("Click me");

    $("p:first").hide();
    //$("p:first").show();
    $("p:last").css("border","3px solid black");
}

$("#newBtn").on("click",clickMe);

//ANIMATIONS
function hideName(){
    $("#user-name").slideUp(2000);
}

function showName(){
    $("#user-name").slideDown(2000);
}


function foodSelection(){
    let food = {
        fruits: ["Apple","Banana","Orange"],
        vegetables: ["Carrot","Broccoli","Spinach"]
    }
    let category = $("#category").val();
    let itemDropDown = $("#items");
    itemDropDown.empty();
    
    console.log(category);
    if(category=="fruits"){
        for(let i=0;i<food.fruits.length;i++){
            itemDropDown.append(`<option value="${food.fruits[i]}">${food.fruits[i]}</option>`)
        }
        console.log(food.fruits);
    }else{
        for(let i=0;i<food.fruits.length;i++){
            itemDropDown.append(`<option value="${food.vegetables[i]}">${food.vegetables[i]}</option>`)
        }
            console.log(food.vegetables);
    }
}

$("#category").on("change",foodSelection);

