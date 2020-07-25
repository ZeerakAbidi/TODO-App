
var text = document.getElementById("todo-text");
var list = document.getElementById("list");
function addItem(){
	var li = document.createElement('li');
	list.appendChild(li);

	li.innerHTML= text.value;
	text.value="";

	var editBut = document.createElement('button');
	var editText = document.createTextNode('Edit');
	editBut.appendChild(editText);
	li.appendChild(editBut);

	editBut.setAttribute("id","editBtn");
	editBut.setAttribute("onclick","edit(this)");


	var delBut = document.createElement('button');
	var delText = document.createTextNode('Delete');
	delBut.appendChild(delText);
	li.appendChild(delBut);

	delBut.setAttribute("id","delBtn");
	delBut.setAttribute("onclick","del(this)");

}

function edit(z){
 	z.parentNode.innerHTML="<input type='text' id='index_text'>" + "<button id='upBut' onclick='upItem(this)'>Update</button>";

}

function del(z){
 	z.parentNode.remove();
}

function deleteAll(){
	list.innerHTML="";
}

function upItem(up){
	var upBtn = document.getElementById('upBut');
	var upText = document.getElementById('index_text');

	up.parentNode.innerHTML= upText.value + "<button id='editBtn' onclick='edit(this)'>Edit</button>" + "<button id='delBtn' onclick='del(this)'>Delete</button>";;

}
