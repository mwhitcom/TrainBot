
$('.workout-card').on('click', '.complete-button button', () => {
    e.preventDefault();
    let day = $(e.target).attr('id');
    console.log(day);
    console.log( typeof day);
    // let queryUrl = '/user/workout/' + id;
    
    // $.put(queryUrl, function(data){

    // })
})