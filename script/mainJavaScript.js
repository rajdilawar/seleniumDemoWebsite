

$(function() {
    $('.toggleNav').on('click',function() {
        $('.flex-nav ul').toggleClass('open');
    });
});

function checkBoxOnClick() {
    $('input[type="checkbox"]:checked').next('span').each(function(){
        //console.log($(this).text());
        var textSelection = $(this).text();
        document.getElementById("checkedText").innerHTML = textSelection;

    });
}

function radioBoxOnClick() {
   var radioTextToDisplay = $("input:checked").val();
    document.getElementById("radioButtonText").innerHTML = "Selected Radio Button is : " + radioTextToDisplay;

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
    var showSubject = document.getElementById("subject").value;
    document.getElementById("displaySomething").innerHTML = showSubject;

    var showFirstName = document.getElementById("fname").value;
    document.getElementById("displaySomething").innerHTML = showFirstName;

    var showLastName = document.getElementById("lname").value;
    document.getElementById("displaySomething").innerHTML = showLastName;
    //alert('check if my selenium handle this alert');

    var inputValues = "First name is : " + showFirstName + " " + "Last name is : " + showLastName + " " + "Subject is : " + showSubject;
    document.getElementById("displaySomething").innerHTML = inputValues;
}

    function showToastMessage() {
    var showMessage = document.getElementById("snackbar");
    showMessage.className = "show";
    setTimeout(function(){ showMessage.className = showMessage.className.replace("show", ""); }, 9000);
}