
var firstStart = true

function pickdate(){
    let options = {
        date: new Date(),
        mode: 'datetime'
    }
    let onSuccess = function (date){
        var hours = calculateHours(date)
        $("#pooltime").html(hours)
        if(firstStart) {
            $("#date_button").removeClass("centered")
            $("#pooltime_container").removeClass("hidden")
            firstStart=false
        }
        alert('Selected date: '+ date)
    }

    let onError = function(error){
        alert('Error: '+ error)
    }
    datePicker.show(options,onSuccess,onError);
}

function calculateHours(date){
    var nowTime = Date.now()
    var endTime = date.value
    var diff = endTime-nowTime
    var days = diff/(1000*60*60*24)
    var hours = days*6
    return hours
}