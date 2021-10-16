



function showMessage() {
    var fname = $("#fname").val()
    alert("Thanks" + " "+ fname + " " +  "For Your Time We Will Reach To You As Soon As Possible.")
    
}
function showAll(){
    $(".mercedes").show()
    $(".bmw").show()
    $(".Audi").show()
    $(".porsh").show()
}




function showMercedes() {
    $(".mercedes").show()
    $(".bmw").hide()
    $(".Audi").hide()
    $(".porsche").hide()
}

function showBMW() {
    $(".mercedes").hide()
    $(".bmw").show()
    $(".Audi").hide()
    $(".porsche").hide()
}

function showPorshe() {
    $(".mercedes").hide()
    $(".bmw").hide()
    $(".Audi").hide()
    $(".porsche").show()
}

function showAudi() {
    $(".mercedes").hide()
    $(".bmw").hide()
    $(".Audi").show()
    $(".porsche").hide()
}




