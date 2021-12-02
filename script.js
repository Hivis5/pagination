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
  if(alterpage == "first"){
    tbody.innerHTML='';
    currPageNo=0;
    cp.innerHTML= currPageNo+1;
  
    for(let i=0; i<10;i++){
      insertNewRow(users[i]);
    }}
  
  else if(alterpage == "prev" && currPageNo > 0){
    tbody.innerHTML='';
    currPageNo--;
    cp.innerHTML= currPageNo+1;
  
    for(let i=currPageNo*pageSize; i<currPageNo*pageSize+pageSize;i++){
      insertNewRow(users[i]);
    }}
  else if(alterpage == "2"){
      tbody.innerHTML='';
      currPageNo=1;
      cp.innerHTML= currPageNo+1;
    
      for(let i=10; i<20;i++){
        insertNewRow(users[i]);
      }}
  else if(alterpage == "3"){
        tbody.innerHTML='';
        currPageNo=2;
        cp.innerHTML= currPageNo+1;
      
        for(let i=20; i<30;i++){
          insertNewRow(users[i]);
        }}
  else if(alterpage == "4"){
          tbody.innerHTML='';
          currPageNo=3;
          cp.innerHTML= currPageNo+1;
        
          for(let i=30; i<40;i++){
            insertNewRow(users[i]);
          }}
  else if(alterpage == "5"){
            tbody.innerHTML='';
            currPageNo=4;
            cp.innerHTML= currPageNo+1;
          
            for(let i=40; i<50;i++){
              insertNewRow(users[i]);
            }}     
  else if(alterpage == "6"){
              tbody.innerHTML='';
              currPageNo=5;
              cp.innerHTML= currPageNo+1;
            
              for(let i=50; i<60;i++){
                insertNewRow(users[i]);
              }}
  else if(alterpage == "7"){
                tbody.innerHTML='';
                currPageNo=6;
                cp.innerHTML= currPageNo+1;
              
                for(let i=60; i<70;i++){
                  insertNewRow(users[i]);
                }}
  else if(alterpage == "8"){
                  tbody.innerHTML='';
                  currPageNo=7;
                  cp.innerHTML= currPageNo+1;
                
                  for(let i=70; i<80;i++){
                    insertNewRow(users[i]);
                  }}
  else if(alterpage == "9"){
                    tbody.innerHTML='';
                    currPageNo=8;
                    cp.innerHTML= currPageNo+1;
                  
                    for(let i=80; i<90;i++){
                      insertNewRow(users[i]);
                    }}   
  else if(alterpage == "10"){
                      tbody.innerHTML='';
                      currPageNo=9;
                      cp.innerHTML= currPageNo+1;
                    
                      for(let i=90; i<100;i++){
                        insertNewRow(users[i]);
                      }}         
}