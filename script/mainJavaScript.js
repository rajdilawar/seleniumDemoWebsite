

$(function() {
    $('.toggleNav').on('click',function() {
        $('.flex-nav ul').toggleClass('open');
    });
});
function checkBoxOnClick() {

    alert('check if my selenium handle this alert');
}
function onClickButtonDisplayText() {
    var textDisplay = document.getElementById("myText").value;
    document.getElementById("myTextToPrint").innerHTML = textDisplay;
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
function displaySignupInfo() {

    //alert('check if my selenium handle this alert');
}