$(".back-button").on("click", () => {
    $(".program_section").show();
    $(".workouts").hide();
    $(".workouts-content-block").empty();
});

$('.program_section').on('click','.programChoice' , (e) =>{
    e.preventDefault();
    let id = $(e.target).attr('id');
    let program = $(e.target).attr('value');
    // console.log( program );
    getWorkout(id, program);
});

$('.workouts').on('click', '.singleWorkout', (e) =>{
    e.preventDefault();
    let dayId = $(e.target).data('dayId');
    let progId = $(e.target).data('progId');
    console.log(dayId + " " + progId);
});



function getWorkout(id, program){
    $('.program_section').hide();
    $('.workouts').show();

    let queryUrl = '/admin/programs/' + id;

    $.get(queryUrl, function(data){

        let allWorkouts = data.WorkoutDays;
       
        for( var iter = 0; iter < allWorkouts.length; iter++){
            
            let words = allWorkouts[iter].text;
            let day = allWorkouts[iter].day;
            let parsedWords = words.replace('\n','<br />');

            let newDiv = $('<div>');
            let h3 = $('<h3>');
            let p = $('<p>');

            h3.html(`Day: ${day}`);
            p.html(parsedWords);
            newDiv.attr('id', allWorkouts[iter].day );
            newDiv.addClass('singleWorkout');

            $(newDiv).prepend(h3);
            $(newDiv).append(p);
            $(newDiv).append( addUpdateButton(day, program) );
            $('.workouts-content-block').append(newDiv);  
        }
    });
};
// var addUpdateButton = function(){};

function addUpdateButton(day, program){
    var newBtn = $('<button>');
    var btnDiv = $('<div>');
    newBtn.attr({
        type: 'submit',
    });
    newBtn.data({
        dayId: day,
        progId: program
    });
    newBtn.text("Update Workout?");
    $(btnDiv).append(newBtn)
    btnDiv.addClass("header-button update-button");
    return btnDiv;
};



function updateWorkout(){
    $('.program_section').hide();
    $('.workouts').hide();

    let queryUrl = '/admin/programs/update' + id;

    $.put(queryUrl, function(data){

    })
}