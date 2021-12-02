let users;
let tbody = document.getElementById("tbody");
currPageNo = 0;
pageSize=10;
let cp = document.getElementById('cp');

fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
.then((res) => res.json())
.then((result) =>{
  users = result;
  
  for (let i = 0; i < 10; i++){
    insertNewRow(users[i]);
  }
}); 


function insertNewRow(data){
  let row = tbody.insertRow();
  let cell0 = row.insertCell(0);
  let cell1 = row.insertCell(1);
  let cell2 = row.insertCell(2);
  cell0.innerHTML=data.id;
  cell1.innerHTML=data.name;
  cell2.innerHTML=data.email;
}

function changePage(alterpage){
  if(alterpage == "next" && currPageNo < users.length/ pageSize-1){
  tbody.innerHTML='';
  currPageNo++;
  cp.innerHTML= currPageNo+1;

  for(let i=currPageNo*pageSize; i<currPageNo*pageSize+pageSize;i++){
    insertNewRow(users[i]);
  }}
  else if(alterpage == "prev" && currPageNo > 0){
    tbody.innerHTML='';
    currPageNo--;
    cp.innerHTML= currPageNo+1;
  
    for(let i=currPageNo*pageSize; i<currPageNo*pageSize+pageSize;i++){
      insertNewRow(users[i]);
    }}
}