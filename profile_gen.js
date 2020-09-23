


// chatted with Helen - recursion might work in this this case

// make an object of questions and answers
const profileQA = {

  questions : {
    question1 : "What's your name? Nicknames are also acceptable?",
    question2 : "What's an activity you like doing?",
    question3 : "What do you listen to while doing that?",
    question4 : "Which meal is your favourite (eg: dinner, brunch, etc.)",
    question5 : "What's your favourite thing to eat for that meal?",
    question6 : "Which sport is your absolute favourite?",
    question7 : "What is your superpower? In a few words, tell us what you are amazing at!"
  },
  answers : {
      
    question1Ans : 1,
    question2Ans : 1,
    question3Ans : 1,
    question4Ans : 1,
    question5Ans : 1,
    question6Ans : 1,
    question7Ans : 1,
  }
};
  
// let i = 0;
// [`question${i}`]
// [`question${i}Ans`]

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// console.log(profileQA['questions']["question1"])
// loop through questions
// want to loop through questions in the object i.e. iterate through the questions

rl.question(profileQA["questions"]['question1'], (answer) => {
  profileQA.answers.question1Ans = answer;
  rl.question(profileQA["questions"]['question2'], (answer) => {
    profileQA.answers.question2Ans = answer;
    rl.question(profileQA["questions"]['question3'], (answer) => {
      profileQA.answers.question3Ans = answer;
      rl.question(profileQA["questions"]['question4'], (answer) => {
        profileQA.answers.question4Ans = answer;
        rl.question(profileQA["questions"]['question5'], (answer) => {
          profileQA.answers.question5Ans = answer;
          rl.question(profileQA["questions"]['question6'], (answer) => {
            profileQA.answers.question6Ans = answer;
            rl.question(profileQA["questions"]['question7'], (answer) => {
              profileQA.answers.question7Ans = answer;
              
              const profileAns = profileQA.answers;

              console.log(`${profileAns.question1Ans} loves listening to ${profileAns.question3Ans} while ${profileAns.question2Ans}, devouring ${profileAns.question5Ans} for ${profileAns.question4Ans}. ${profileAns.question1Ans} prefers ${profileAns.question6Ans} over any other sport, and is amazing ${profileAns.question7Ans} .`);
              
              rl.close();
            });
            
            
          });
          
          
          
        });
 
        
        
      });
    
      
      
    });
 
    
    
  });

});


//reference :
//https://www.thetopsites.net/article/52637189.shtml
//https://github.com/nodejs/node/blob/master/doc/api/readline.md