

$(function() {
    $('.toggleNav').on('click',function() {
        $('.flex-nav ul').toggleClass('open');
    });
});

function checkBoxOnClick() {
    var temp = "";
    $('input[type="checkbox"]:checked').next('span').each(function(){
        //console.log($(this).text());
        var textSelection = $(this).text();
        if(temp === ""){
            temp = textSelection;
        }else{
            temp = temp + "\n" + textSelection;
        }
    });

    document.getElementById("checkedText").innerHTML = "<pre>" + temp + "</pre>";
}

function radioBoxOnClick() {
    var TempValue='';
    $('#radiogroup1').find('input[type="radio"]:checked').each(function(){
        var radioName = this.name;
        var radioValue = this.value;

        if( TempValue === ''){
            TempValue = radioName + ' : '+ radioValue;
        }else {
            TempValue = TempValue + ', ' + radioName + ' : '+ radioValue;
        }
    });
    document.getElementById("radioButtonText").innerHTML = "Selected Radio Button(s) is/are : " + TempValue;
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

//modal

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}