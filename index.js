// call API to get the image source
// data to be formatted
let responseData;

const formatData = function(responseData) {
  console.log('in formatter');

  // TODO format

  // set src attr of element to thumbnail retrieved from API
  $("#kong-img").attr("src", responseData);

}

$( document ).ready(function() {
    console.log( "ready!" );
    $.get( "https://en.wikipedia.org/w/api.php?action=query&origin=*&generator=search&prop=extracts|pageimages&gsrsearch=boeing&gsrlimit=1&exintro=1&explaintext=1&exchars=350&exlimit=1&format=json",
    function(data) {
       console.log('got data', data.query.pages['18933266'].thumbnail.source);
       responseData = data.query.pages['18933266'].thumbnail.source;
       console.log('RESPONSE DATA', responseData);
       //call formatter helper function
       formatData(responseData);
    } );
});



// format image source to truncate thumbnail in location
