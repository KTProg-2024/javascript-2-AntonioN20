function getDate() 
{
	var dateString = new Date();
	document.getElementById("date").innerHTML=dateString;
}

function red()
{
  document.getElementById("date").style.color="red";
}

function purple()
{
  document.getElementById("date").style.color="purple";
}