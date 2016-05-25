$( document ).ready(function() {

    $('#start_time,#end_time').on('change',function() {
      var start_time = $('#start_time').val();
      var end_time = $('#end_time').val();
    
      //TODO: redish background if interval is not valid

      //TODO: formatting, negative numbers, etc...
      var diff = ( new Date("1970-1-1 " + end_time) - new Date("1970-1-1 " + start_time) ) / 1000 / 60 / 60;  

      $('#duration').val(diff);

    })
    
    //TODO: Dynamic color change based on the progression
    $('#start_time,#end_time').on('change',function() {
        var red = '#d04437';
        var progressbar = $('#daily-progress');
        if(progressbar.attr('data-value')<0.4){
            $('.aui-progress-indicator-value').css("background-color",red);
        }
        
    })

});

