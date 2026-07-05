const quotes = [
"Success is the sum of small efforts repeated every day.",
"Dream big. Work hard. Stay focused.",
"Every expert was once a beginner.",
"Learning never exhausts the mind.",
"Your future is created by what you do today.",
"Keep coding. Keep growing.",
"Small progress is still progress.",
"Believe in yourself and all that you are."
];

function calculateResult(){

const name=document.getElementById("name").value.trim();
const roll=document.getElementById("roll").value.trim();

const math=Number(document.getElementById("math").value);
const science=Number(document.getElementById("science").value);
const english=Number(document.getElementById("english").value);
const computer=Number(document.getElementById("computer").value);
const social=Number(document.getElementById("social").value);

if(name==""||roll==""){
alert("Please enter Student Name and Roll Number");
return;
}

const marks=[math,science,english,computer,social];

for(let mark of marks){

if(isNaN(mark)||mark<0||mark>100){

alert("Enter valid marks between 0 and 100");

return;

}

}

const total=math+science+english+computer+social;

const average=(total/5).toFixed(2);

const percentage=((total/500)*100).toFixed(2);

let grade="";

if(percentage>=90){

grade="A+";

}

else if(percentage>=80){

grade="A";

}

else if(percentage>=70){

grade="B";

}

else if(percentage>=60){

grade="C";

}

else if(percentage>=50){

grade="D";

}

else{

grade="F";

}

let status="PASS ✅";

for(let mark of marks){

if(mark<35){

status="FAIL ❌";

break;

}

}

document.getElementById("dashboard").style.display="block";

document.getElementById("studentName").innerHTML=name;

document.getElementById("studentRoll").innerHTML="Roll No : "+roll;

document.getElementById("status").innerHTML=status;

document.getElementById("total").innerHTML=total+" / 500";

document.getElementById("average").innerHTML=average;

document.getElementById("percentage").innerHTML=percentage+"%";

document.getElementById("grade").innerHTML=grade;

// Subject Bars

document.getElementById("mathBar").style.width=math+"%";
document.getElementById("scienceBar").style.width=science+"%";
document.getElementById("englishBar").style.width=english+"%";
document.getElementById("computerBar").style.width=computer+"%";
document.getElementById("socialBar").style.width=social+"%";

document.getElementById("mathValue").innerHTML=math+" /100";
document.getElementById("scienceValue").innerHTML=science+" /100";
document.getElementById("englishValue").innerHTML=english+" /100";
document.getElementById("computerValue").innerHTML=computer+" /100";
document.getElementById("socialValue").innerHTML=social+" /100";

// Progress Circle

let circle=document.getElementById("circle");

let radius=90;

let circumference=2*Math.PI*radius;

circle.style.strokeDasharray=circumference;

let offset=circumference-(percentage/100)*circumference;

circle.style.strokeDashoffset=offset;

document.getElementById("circleValue").innerHTML=percentage+"%";

// Random Quote

let random=Math.floor(Math.random()*quotes.length);

document.getElementById("quoteText").innerHTML=quotes[random];
// ===============================
// AI PERFORMANCE ANALYSIS
// ===============================

let analysis = "";
let achievement = "";

if (percentage >= 95) {
    analysis =
        "🌟 Outstanding Performance! You have scored exceptionally well in all subjects. Your consistency and dedication are excellent. Keep challenging yourself with advanced topics and competitions.";

    achievement = "🏆 Diamond Scholar";
}
else if (percentage >= 90) {
    analysis =
        "🎉 Excellent Performance! You have achieved an A+ grade. Your fundamentals are very strong. Continue practicing regularly to maintain this level.";

    achievement = "🥇 Gold Performer";
}
else if (percentage >= 80) {
    analysis =
        "👏 Very Good Performance! You have a strong understanding of the subjects. Focus on improving weaker areas to reach the top grade.";

    achievement = "🥈 Silver Performer";
}
else if (percentage >= 70) {
    analysis =
        "👍 Good Job! Your performance is above average. More revision and practice will help you score above 90%. Keep learning consistently.";

    achievement = "⭐ Rising Star";
}
else if (percentage >= 60) {
    analysis =
        "📚 Average Performance. You understand the basics but need more practice. Spend extra time on difficult subjects.";

    achievement = "📖 Consistent Learner";
}
else if (percentage >= 50) {
    analysis =
        "⚠ Fair Performance. You passed, but there is significant room for improvement. Create a study schedule and revise daily.";

    achievement = "💪 Keep Improving";
}
else {
    analysis =
        "❌ You need more preparation. Don't lose confidence. Analyze your mistakes, revise concepts, and practice regularly.";

    achievement = "🚀 Never Give Up";
}

document.getElementById("analysisText").innerHTML = analysis;
document.getElementById("achievementText").innerHTML = achievement;

// ===============================
// SUBJECT BAR COLORS
// ===============================

const subjects = [
    { bar: "mathBar", value: math },
    { bar: "scienceBar", value: science },
    { bar: "englishBar", value: english },
    { bar: "computerBar", value: computer },
    { bar: "socialBar", value: social }
];

subjects.forEach(subject => {

    let bar = document.getElementById(subject.bar);

    if (subject.value >= 90) {
        bar.style.background = "#00e676";
    }
    else if (subject.value >= 75) {
        bar.style.background = "#00c6ff";
    }
    else if (subject.value >= 50) {
        bar.style.background = "#ffca28";
    }
    else {
        bar.style.background = "#ff5252";
    }

});

// ===============================
// STATUS BADGE COLOR
// ===============================

const badge = document.getElementById("status");

if (status.includes("PASS")) {
    badge.style.background = "#00c853";
} else {
    badge.style.background = "#d50000";
}

// ===============================
// SCROLL TO DASHBOARD
// ===============================

document.getElementById("dashboard").scrollIntoView({
    behavior: "smooth"
});

} // ===== End of calculateResult() =====