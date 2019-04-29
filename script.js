// TODO(you): Write the JavaScript necessary to complete the homework.

// You can access the RESULTS_MAP from "constants.js" in this file since
// "constants.js" has been included before "script.js" in index.html.

function complete_check() {
    const len=document.querySelectorAll('.chosen').length;

    if(len==3){
        const boxes = document.querySelectorAll('.choice-grid div');
        for (const box of boxes) {
            box.removeEventListener('click', change_checked);
        }
        Allitem= document.querySelectorAll('div.chosen');
        const item1= Allitem[0].dataset.choiceId;
        const item2= Allitem[1].dataset.choiceId;
        const item3= Allitem[2].dataset.choiceId;
        console.log(item1);
        console.log(item2);
        console.log(item3);

        document.getElementById('result_section').hidden=false;

        if(item1 == item2){
            document.getElementById('result_title').innerHTML=RESULTS_MAP[item1]['title'];
            document.getElementById('result_content').innerHTML=RESULTS_MAP[item1]['contents'];
        }
        else if(item1 == item3){
            document.getElementById('result_title').innerHTML=RESULTS_MAP[item1]['title'];
            document.getElementById('result_content').innerHTML=RESULTS_MAP[item1]['contents'];
        }
        else if(item2 == item3){
            document.getElementById('result_title').innerHTML=RESULTS_MAP[item2]['title'];
            document.getElementById('result_content').innerHTML=RESULTS_MAP[item2]['contents'];
        }
        else{
            document.getElementById('result_title').innerHTML=RESULTS_MAP[item1]['title'];
            document.getElementById('result_content').innerHTML=RESULTS_MAP[item1]['contents'];
        }
    }

}

function change_checked(event) {
    console.log(event.currentTarget.dataset.questionId);
    const items = document.querySelectorAll('.choice-grid div[data-question-id='+event.currentTarget.dataset.questionId+']');
    for (const item of items) {
        item.querySelector("img + img").src="images/unchecked.png";
        item.classList='';
        item.classList.add('unchosen');
    }
    console.log(event.currentTarget.dataset.choiceId);
    dst=document.querySelector('div[data-question-id='+event.currentTarget.dataset.questionId+' ][data-choice-id='+event.currentTarget.dataset.choiceId+']');
    dst.querySelector("img + img").src="images/checked.png";
    dst.classList='chosen';

    complete_check();
}

// ----
// MAIN
// ----

const boxes = document.querySelectorAll('.choice-grid div');
for (const box of boxes) {
    box.addEventListener('click', change_checked);
}

function reset() {
    const boxes = document.querySelectorAll('.choice-grid div');
    for (const box of boxes) {
        box.addEventListener('click', change_checked);
        box.classList="";
        img = box.querySelectorAll("img + img");
        for (const i of img){
            i.src="images/unchecked.png";
        }
    }
    document.getElementById('result_section').hidden=true;
}
