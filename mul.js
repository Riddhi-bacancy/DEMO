function demo()
{
  var num=document.getElementById("field").value;
  var i;
  
  var message = new Array(); 
  for(i=1;i<=10;i++)
  {
   
   message[i]= num*i;
   document.getElementById("display").innerHTML+=(num+ "x" +i+ "="  +message[i]+ "<br>");
  } 
 

}

