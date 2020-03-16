var signForm=document.getElementById("signForm");
var olEl=document.getElementById("showList");

// global arry of object, that contain name and date
enterArr=[];

function ToDo(name,date){
    this.name=name;
    this.date=date;

    
    enterArr.push(this);
}

function setItem(){
    var convObj=JSON.stringify(enterArr);
    localStorage.setItem("formLS",convObj);
}

function getItem(){
     var formLS=localStorage.getItem("formLS");
     if(formLS){
        enterArr=JSON.parse(formLS);
     }
      //for solving null problem
     renderForm();
}


signForm.addEventListener("submit",handelWithForm);

function handelWithForm(event){
    event.preventDefult;
    // console.log(enterArr);
    var name=event.target.name.value;
    var date=event.target.date.value;

    new ToDo(name,date);
    setItem();

    renderForm();
    signForm.reset();

}


function renderForm(){
    olEl.textContent= "";

    for(var i=0;i<enterArr.length;i++){
        var liEl=document.createElement("li");

        liEl.textContent=`${enterArr[i].name} ${enterArr[i].date}`;
        olEl.appendChild(liEl);

    }


}

getItem();