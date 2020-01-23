
(function(){
    function Question(question,correctAnswer){
        this.question = question;
        this.correctAnswer = correctAnswer;
        
    } 
    
    Question.prototype.check = function(){
            if(this.answer == this.correctAnswer) {
                return true;
            }
            else {
                return false;
            }
    }
    Question.prototype.showQuestion = function(){
        console.log(this.question);
    }
    
    
    let JsQuestion = new Question("do you love javascript ?","yes");
    let randomQuestion = new Question("9*9 = ?",81);
    let curryQuestion = new Question("is bind method appliable using curry technique ?","yes");
    
    let arrQuestion = [JsQuestion,randomQuestion,curryQuestion];
    function dawey(){
        let correctScore = 0;
       let flag = true;
        while(flag){
        let random = Math.round( (Math.random() * 2) );
        arrQuestion[random].showQuestion();
        arrQuestion[random].answer = prompt("what is your answer?");
            
        if(arrQuestion[random].answer==="exit"){
            flag = false;
            console.log("bye bro !!")
        }
        else if(arrQuestion[random].check()==true){
            correctScore += 1; 
            console.log("congratulation, you answered " + correctScore + " correct");
            console.log("=========================================");
            } 
        
        else {
            console.log("dw, you false.try next time, correctScore still: "+ correctScore);
            console.log("=========================================");
    }
        }
    };
    dawey();
    
}) ();



//pomodoro 5