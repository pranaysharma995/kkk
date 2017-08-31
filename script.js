$(document).ready(function()
                  {
     var questions=[
                                                                {
                                                                    "title":"What is HTML",
                                                                    "choice1":"MARKUP LANGUAGE",
                                                                    "choice2":"PROCEDURAL LANGUAGE",
                                                                    "choice3":"SCRIPTING LANGUAGE",
                                                                    "choice4":"HARDWARE LANGUAGE",
                                                                    "answer":"MARKUP LANGUAGE"
                                                                },
                                                                 {
                                                                    "title":"What is CSS",
                                                                    "choice1":"PROCEDURAL LANGUAGE",
                                                                    "choice2":"SCRIPTING LANGUAGE",
                                                                    "choice3":"STYLESHEET",
                                                                    "choice4":"PREPROCESSOR",
                                                                    "answer":"STYLESHEET"
                                                                },
                                                                 {
                                                                    "title":"What is Javascript",
                                                                    "choice1":"JAVA BASED LANGUAGE",
                                                                    "choice2":"SCRIPTING LANGUAGE",
                                                                    "choice3":"PREPROCESSOR",
                                                                    "choice4":"MARKUP LANGUAGE",
                                                                    "answer":"SCRIPTING LANGUAGE"
                                                                },
                                                                 {
                                                                    "title":"What is Bootstrap",
                                                                    "choice1":"A JAVASCRIPT FRAMEWORK",
                                                                    "choice2":"A HTML PREPROCESSOR",
                                                                    "choice3":"A CSS PREPROCESSOR",
                                                                    "choice4":"SCRIPTING LANGUAGE",
                                                                    "answer":"A JAVASCRIPT FRAMEWORK"
                                                                },
                                                                 {
                                                                    "title":"What is jQUery",
                                                                    "choice1":"JAVASCRIPT LIBRARY",
                                                                    "choice2":"CSS LIBRARY",
                                                                    "choice3":"HTML PREPROCESSOR",
                                                                    "choice4":"SCRIPTING LANGUAGE",
                                                                    "answer":"JAVASCRIPT LIBRARY"
                                                                }
                                                                
                                                            ];
    var status=0;
    var score=0;
    var totalScore=questions.length-1;
   
  setInterval(function()
           {
    mytimer()
},1000);
function mytimer()
{
    var d=new  Date();
    var t=d.toLocaleTimeString();
    document.getElementById("timer").innerHTML=t;
    
}
function setFirstQuestion()
    {
  var choiceList=document.getElementsByClassName("choice");
        choiceList[0].innerHTML=questions[status].choice1;
        choiceList[1].innerHTML=questions[status].choice2;
        choiceList[2].innerHTML=questions[status].choice3;
        choiceList[3].innerHTML=questions[status].choice4;
        var question=$("#questionNumber");
        question.text(questions[status].title);
    }
   
    $("body").on("onload",setFirstQuestion());
    $(".choice").on("click",function()
                   {
        
        
        var max=questions.length;
       if(status>=max)
           {
               $(".choice").css("opacity",0);
$("#questionNumber").text("QUIZ IS FINISHED"+" "+"\n"+"YOUR FINAL SCORE IS"+" "+score);
           }
        else{
            
            var yourAnswer=$(this).text();
            var correctAnswer=questions[status].answer;
            if(yourAnswer==correctAnswer)
                {
                    $(this).css("background-color","green");
                   setTimeout(function()
                             {
                       $(".choice").css("background-color","black");
                   },1000);
                   
                    console.log("you correct answer");
                    score=score+1;
                    console.log("your current score is"+" "+score);
                }
            else{
                $(this).css("background-color","red");
                 setTimeout(function()
                             {
                       $(".choice").css("background-color","black");
                   },1000);
                console.log("sorry your answer is wrong"+" "+"correct answer is"+" "+correctAnswer);
            }
            if(status<max-1)
                {
            status=status+1;
            
            setTimeout(setFirstQuestion,2000);
                }
            else{
                               $(".choice").css("opacity",0);
$("#questionNumber").text("QUIZ IS FINISHED"+" "+"\n"+"YOUR FINAL SCORE IS"+" "+score);
            }
    
        }
        
    });
      

   
});