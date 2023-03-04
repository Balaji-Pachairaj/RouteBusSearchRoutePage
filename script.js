//These are id of time and data input tag
const timeInput = document.querySelector("#time");
const dateInput = document.querySelector("#date");
//calling Data inbuilt constructor to get the present time and data as object
let currentDate = new Date();
//This currentDate Obj to get hours, minute , date, month, year using getDateORTime() member function
function getCurrentDate(){
    //Return the stringify version of current date
    let date = (currentDate.getDate() < 10)? "0" + currentDate.getDate() : currentDate.getDate();
    let month = (currentDate.getMonth() < 10)? "0" + currentDate.getMonth():currentDate.getDate();
    let year = (currentDate.getFullYear() < 10 ) ? "0" + currentDate.getFullYear() : currentDate.getFullYear();
    let dateString = year+"-"+month+"-"+date;
    return dateString;
}
function getCurrentTime(){
    //Return the stringify version of current time 
    let hour = (currentDate.getHours() > 12)? "0" + (currentDate.getHours() - 12) : currentDate.getHours();
    hour = (hour < 10 )? "0" + hour : Number(hour);
    let minute = (currentDate.getMinutes() < 10)?"0" + currentDate.getMinutes():currentDate.getMinutes() 
    let timeString = hour+":"+ minute;
    return timeString;
}
// Getting the Date and Time to html using DOM
console.log(getCurrentDate(),getCurrentTime())
timeInput.value = getCurrentTime()
dateInput.value = getCurrentDate();
// current time and date is setted in html
//fORM INPUT DATA AND TIME SECTION 
const fromInput = document.querySelector("#fromInput")
const toInput = document.querySelector("#toInput")
const exchangeBtn = document.querySelector("#exchange")

//THIS IS FUNCTION TO EXCHANGE THE FROM TO EACHOTHER
function exchangeInputValues(){
    let temp = fromInput.value;
    fromInput.value = toInput.value;
    toInput.value = temp
}
exchangeBtn.addEventListener("click",exchangeInputValues)
