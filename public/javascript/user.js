
$('.workout-card').on('click', '.complete-button button', (e) => {
    e.preventDefault();
    let day = parseInt($(e.target).attr('id'));
    day = day+1;
    let update = {
        currentDay: day
    }

    let queryUrl = '/user/workout/';
    
    $.ajax({
        method: "PUT",
        url: queryUrl,
        data: update
    }).done(function(){
        window.location.href = "/user/profile";
    }); 
    
})