
$(document).on('click', '#newsfeed', () =>{

});

$(document).on('click', '#users', () =>{
    
});
$(document).ready(function(){
    $('.program_section').on('click','.programChoice' , () =>{
        let value = $(this).attr('value');
        // let value = $(this);
        // let value = $(this).val();
        // console.log("This should be rowing: " +  value);
        console.log(value);
        // console.log($("button").val());

    
    });
});