const questions = [
    {
    que: "which of the following is a markup language?",
    'a': "HTML",
    'b': "CSS",
    'c': "javaScript",
    'd': "PHP",
    'correct': 'a',
  },
  {
    que: "dataType of 4",
    a: "string",
    b: "boolean",
    c: "number",
    d: "float",
    correct: "c",
  },
  {
    que: "js launched",
    a: "1999",
    b: "1995",
    c: "2006",
    d: "1983",
    correct: "b",
  }
];
// console.log(questions[0].a);





let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
let q ;
const quesBox = document.getElementById('quesBox');
const optionInputs = document.querySelectorAll('.options');

const loadQuestion = () =>{
    if(index == total){
        return endQuiz();
    }
    reset();
    const data = questions[index];
    quesBox.innerText = `${index+1}) ${data.que}`;  
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;

}

const submitQuiz = ()=>{
    const data = questions[index];
    const ans =  getAnswer();
    if(ans === data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    pre = document.getElementById("pre").style.display = "block";
    return;
    
    
}


let pre = (document.getElementById("pre").style.display = "none");


const prev = ()=>{ 
    
    console.log(questions[0]);
}



const getAnswer = ()=>{
    let answer;
    optionInputs.forEach(
        (input)=>{
        if(input.checked){
            answer = input.value;
        }
    }
    )
    return answer;
}

const reset = () =>{
    optionInputs.forEach(
        (input) =>{
            input.checked = false;
        }
    )
}

const endQuiz = ()=>{
    document.getElementById('box').innerHTML = `
    <h3>thankyou for playing the quiz</h3>
    <h2> ${right}/${total}</h2>
    `;
}


loadQuestion();
prev();














