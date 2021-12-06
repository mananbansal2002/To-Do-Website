console.log("working");
loadEvents();
function loadEvents(){
	console.log("working");
    document.querySelector('form').addEventListener('submit',submit);
    document.querySelector('ul').addEventListener('click',deleteortick);
    document.getElementById('remove').addEventListener('click',clearboard);
}

function submit(e){
    e.preventDefault();
    var input=document.querySelector('input');
    if(input.value!='')
        addtask(input.value);
}

function addtask(task)
{
    let ul=document.querySelector('ul');
    let li=document.createElement('li');
    li.innerHTML = `<span class="delete">×</span><input type="checkbox" class="box"><label>${task}</label>`;
    ul.appendChild(li);
    document.querySelector('.taskboard').style.display='block';
}


function deleteortick(e){
  if(e.target.className=='delete')
    deletetask(e);
  else
  {
   console.log('prssed');
      ticktask(e);
  }
}
function deletetask(e){
    var del=e.target.parentNode;
    let parentNode=del.parentNode;
    parentNode.removeChild(del);
}

function ticktask(e){
  const task=e.target.nextSibling;
  if(e.target.checked){
    task.style.textDecoration = "line-through";
    task.style.color = "#ff0000";
  }
  else{
    task.style.textDecoration = "none";
    task.style.color = "#2f4f4f";
  }
}


function clearboard(e){
    let ul = document.querySelector('ul').innerHTML = '';
    
}