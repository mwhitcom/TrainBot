
$(document).on('click', '#newsfeed', () =>{

});

$(document).on('click', '#users', () =>{
    
});

$(document).on('click', '.adminChoice', () =>{
    console.log( $(this))
    // let value = $(this).val().trim(); 
    // getData(value);
});


function getData(type){
    var queryUrl;
    switch(type) {
        case 'users':
            queryUrl = '/user';
            break;
        case 'programs':
            queryUrl = '/program';
            break;
    };
    $.get(queryUrl, function(data){
        console.log( data.username || data.description);
    })

};