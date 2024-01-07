const notesIcon = document.querySelector("#notesIcon");
const input = document.querySelector("#notes-input");
const close_notes_btn = document.querySelector("#closeNotesBtn");

let input_value;
function notes(){
    close_notes_btn.style.display = "flex";
    topSpan.style.backgroundColor = "black";
    mainScreenAppIcons.forEach(app => {
        app.style.display = "none";
    });
    Object.assign(middleSpan.style, {
        backgroundColor: "#727272",
        margin: "0"
    });
    middleSpan.style.display = "block";
    navDivs.forEach(div => {
        div.style.display = "none";
    });
    bottomSpan.style.backgroundColor = "black";
    input.style.display = "block";
    // input.addEventListener('keydown', () => {
    //     input_value = document.querySelector("#notes-input").value;
    //     console.log(input_value);
    // });
}
function closeNotes(){
    
    close_notes_btn.style.display = "none";
    topSpan.style.backgroundColor = "transparent";
    mainScreenAppIcons.forEach(app =>{
        app.style.display = "grid";
    });
    Object.assign(middleSpan.style, {
        backgroundColor: "transparent",
        margin: "10px"
    });
    if(!locked){
        middleSpan.style.display = "grid";
    } else{
        middleSpan.style.display = "block";
    }
    
    navDivs.forEach(div =>{
        div.style.display = "block";
    });
    bottomSpan.style.backgroundColor = "transparent";
    input.style.display = "none";
}
notesIcon.addEventListener('click', notes);
close_notes_btn.addEventListener('click', closeNotes);