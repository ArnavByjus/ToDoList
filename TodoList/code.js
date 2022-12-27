var ListStart = "<div class='input-group brake' id='";
var ListMid1 = "'><div class='input-group-prepend'><div class='input-group-text rightborder' style='height: 42px;'><input type='checkbox' class='checkbox'></div></div><li class='list-group-item form-control' style='text-align: left;'>"
var ListMid2 = "</li><div class='input-group-append'><button class='input-group-text btn btn-outline-danger leftborder' type='button' onclick='fn_delete(";
var ListEnd = ")'>🗑</button></div></div>"
var arrList = [
    "Add items to your TODO list"
]
arrList = JSON.parse(localStorage.getItem('TodoListARRAY'));
var ListUJ = arrList.join("");
var element;
Update();

function fn_add(){
    arrList.push(String(document.getElementById("IT").value));
    document.getElementById("IT").value="";
    document.getElementById("IT").focus();
    Update();
}

function Update(){
    document.getElementById("ulList").innerHTML = "";
    for(i=0; i<arrList.length; i++){
        document.getElementById("ulList").innerHTML =  
    document.getElementById("ulList").innerHTML.concat(ListStart, i, ListMid1, arrList[i], ListMid2, i, ListEnd);
    }
    localStorage.setItem('TodoListARRAY', JSON.stringify(arrList));
}

function fn_delete(n){
    const element = document.getElementById(String(n));
    element.remove();
    arrList.pop(n);
    Update();
}