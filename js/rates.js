var cors = ('https://cors-anywhere.herokuapp.com/')
fetch( cors + 'https://ritikakeel.com/vinny/vinnytam')
.then(response => response.json())
.then(data => {
  var bread_difference = 250;
  console.log(data);
  rateData = data.Bhaw;
  firstData = data.Bhaw[0].Gold_RED;
  secondData = data.Bhaw[0].Gold_RED - bread_difference;
  thirdData = data.Bhaw[0].Silver;
  lastUpdated = data.Bhaw[0].TimeGold;
  console.log(firstData)
  console.log(secondData)
  console.log(thirdData)
  $("#rates").text("Rs."+ firstData)
  $("#rates1").text("Rs."+ secondData)
  $("#rates2").text("Rs."+ thirdData)
  $("#lastupdated").text("Last Updated : "+ lastUpdated)
})
.catch(error => {
console.log("Error While Getting Data")
})