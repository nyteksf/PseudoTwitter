let shrinkTweetInputBox = function(){
  $('.mainTweetInputBox').removeClass('expandedOuterBox');
  $('.commentBox').removeClass('commentBoxExpanded');
  $('.visitor-input-ico').removeClass('visitor-input-ico-expanded');
  $('.charCount').css('visibility','hidden');
  $('#outerBox-btn').hide();
};

let visDisName;
//CREATE VISITOR INFO DISPLAY BOX:
$('#visitorProfileInfoDiv').append('<div id="containerDiv"><h4 id="visDisName"><strong>'+ visDisName +'</strong>');
$('#visitorProfileInfoDiv').append('<p id="visUName"><small>@'+ visUName +'</small></h4></div>');

let charCount = 140; //Note: if, like 25 or less? --10 or less!--, then .addClass() to make txt red colored
let curTweetCount;
let tweetVisOutput = streams.home.length; //RUNNING TWEET COUNT FOR VISITOR DISPLAY BOX:
$('#visitorProfileInfoDiv').append('<div id="tweetsVisDiv"><p id="tweets">TWEETS</p>');
$('#visitorProfileInfoDiv').append('<p id="tweetVisOutput"><small><span id="woot">'+ tweetVisOutput +'</span></small></p></div>');

let lastStreamsHomeLength = 0;
let nextTweetCount;
let countOnce = 1;
$('#newTweets-btn').hide();
let buttonHidden = true;
//let lenOfTweetArr = streams.home.length;


let $trendsDiv = $('#trendingTweetsContainerDiv');

let updateTrendDisplayDiv = function(){
    $trendsDiv.html('');  //TABULA ROSA -- CLEAN SLATE
    while (streams.trendingTweets.length > 0) {

    //UPDATE DISPLAY BY CREATING/APPENDING ELEMENTS
    var trend = streams.trendingTweets.pop();
    var $trend = $('<div class="trendingItemSubDivs"></div>');
    let words = (trend[1] === 1) ? "Tweet" : "Tweets";
    $trend.html('<h5 class="hashtagItems"><strong id="trendStrongText">'+ trend[0] +'</strong><br><small><big>'+ trend[1] +" "+ words +'</big></small></h5>');
    $trend.appendTo($trendsDiv);
  }
};


var updateTrendingTweets = function() {
  let resArr = [];
  let sortable;

  let streamsLength = streams.home.length;
  for(let i = 0; i < streamsLength; i++) {
    let cur = streams.home[i];
    resArr.push(cur.message);
    //\CREATING AN ARRAY OF MESSAGES TO SCAN FOR HASHTAGS
  }
  //console.log(resArr); //AN ARRAY OF MESSAGES AS STRINGS IS FORMED
  let result = {};
  for (let j = 0; j < resArr.length; j++) {
    let current = resArr[j].split(" ");
    //alert(current); //ALERTS EACH STRING CUT INTO ARRAY OF INDIVIDUAL WORDS
    for (let x = 0; x < current.length; x++) {
      let curWord = current[x];
      //alert(curWord); //ALERTS EACH STRING OF WORDS VIA EACH INDIVIDUAL WORD THEREIN
      if (curWord[0] === "#") {
        //alert(curWord); //SELECTS ALL WORDS STARTING WITH #HASHTAGS
        //
        //TO-DO: MAKE HASH-TABLE WITH KEYS AND # OF TIMES APPEARS AS ASSOCIATED VALUE HERE
        //IF EXISTS, ADD ANOTHER AND TALLY, ELSE ADD AND TALLY CURRENT WORD.
        if(result.hasOwnProperty(curWord)){
          result[curWord] += 1;
        } else {
          result[curWord] = 1;
        }
      }
    }
    sortable = [];
    //console.log(result); //RETURNS AN UNSORTED ARRAY OF TWEET TRENDS AND ASSOCIATED COUNTS
    for (let trendingTweet in result) {
      sortable.push([trendingTweet, result[trendingTweet]]);
      //sortable += ([trendingTweet, result[trendingTweet]]);
    }
  }
  //LIMIT/REDUCE SIZE BEFORE SORTING, ET AL:
  while (sortable.length > 10) {
    sortable.pop();
  }
  //SORT BY VALUE (COUNT):
  sortable.sort(function(a, b) { return a[1] - b[1] });

  for (let item in sortable) {
    //WORD | COUNT : (sortable[item][0]+"  |  "+sortable[item][1]);
    streams.trendingTweets.push(sortable[item]);
  }
  updateTrendDisplayDiv();
};


//WHEN NEW TWEETS BUTTON CLICKED, HIDE BUTTON UNTIL NEXT UPDATE
//CHECK FOR NEW TWEETS--CAN MAKE THIS INTO A WHILE LOOP.
function startTime() {
updateTrendingTweets();
  if(buttonHidden === true || countOnce) {
    //0) Check for new tweets
    //1) if so, make button visible again
    //2) reset buttonHidden boolean to false until clicked again
    //3) list number of new tweets in button

    if(lastStreamsHomeLength !== 0 || streams.home.length > 11) {
      curTweetCount = (lastStreamsHomeLength) ? streams.home.length - lastStreamsHomeLength : streams.home.length - 11;  //0 -- FRACTAL COMPARISON TO OUTER CLOSURE
      $('#newTweets-btn').show(); //1
      buttonHidden = false; //2

        let testLen = (curTweetCount === 1);
        let view = "View ";
        let words = (testLen) ? " new Tweet" : " new Tweets";
        if (streams.home.length - lastStreamsHomeLength === 0 || lastStreamsHomeLength == null) {
          $('#newTweets-btn').hide();
        };
        (lastStreamsHomeLength > 0) ? $("#newTweets-btn").val(view + (streams.home.length - lastStreamsHomeLength) + words) : $("#newTweets-btn").val(view + curTweetCount + words);

    }
  }

  if ((streams.home.length-11) === 0) { $("#newTweets-btn").val("No new Tweets"); }

  var t = setTimeout(startTime, 1500);
}
startTime();

/*
let indexReset;
*/
$(document).ready(function(){
  /*
  var $box = $('.box');
  $box.html('');

  //MAKE FOR LOOP, run addTweet() on cur from 0 to new total of newTweets
  //OR JUST SET index to 'streams.home.length -1;'
  let index = streams.home.length - 1; //SHOULD REGISTER THE 11 INITIAL POSTS.

  //POST MORE TWEETS:
  indexReset = function(num) { //CURRENT LENGTH - RECORDED LENGTH AS OF LAST NEW TWEETS
    index = num;

    for(let i = 1; i <= num; i++) {
        var tweet = streams.home[streams.home.length-i];
        var $tweet = $('<h5 class="tweetsOutput"></h5>');
        //var date = new Date(); date.toISOString();
        $tweet.html('<img class="tweetIcon" src="'+ tweet.icon +'"/><big><small><strong><span class="tweetText">'+ tweet.disName + '</span></strong> <span class="tweetSubtext">@' + tweet.user + ' &middot; <span data-livestamp="' + tweet.created_at +'"></span></span><br><span class="tweetText">'+ tweet.message+'</span></strong></big></small>');
        $tweet.append('<div id="tweetFooters"><span id="share-glyphicon" class="glyphicon glyphicon-share-alt tweetBottoms"></span><span id="retweet-glyphicon" class="glyphicon glyphicon-retweet tweetBottoms"></span><span id="glyphicon-heart" class="glyphicon glyphicon-heart tweetBottoms"></span><span id="option-horizontal-glyphicon" class="glyphicon glyphicon-option-horizontal tweetBottoms"></span></div>');
        $tweet.appendTo($box);
        //$box.before($tweet);
    }
  };
  */


  //LOAD TWEETS TO SCREEN WHEN COUNTED BY/WITHIN INDEX:
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<h5 class="tweetsOutput"></h5>');
    $tweet.html('<img class="tweetIcon" src="'+ tweet.icon +'"/><big><small><strong><span class="tweetText">'+ tweet.disName + '</span></strong> <span class="tweetSubtext">@' + tweet.user + ' &middot; <span data-livestamp="' + tweet.created_at +'"></span></span><br><span class="tweetText">'+ tweet.message+'</span></strong></big></small>');
    $tweet.append('<div id="tweetFooters"><span id="share-glyphicon" class="glyphicon glyphicon-share-alt tweetBottoms"></span><span id="retweet-glyphicon" class="glyphicon glyphicon-retweet tweetBottoms"><span id="retweetCount">0</span></span><span id="glyphicon-heart" class="glyphicon glyphicon-heart tweetBottoms"><span id="likeCount">0</span></span><span id="option-horizontal-glyphicon" class="glyphicon glyphicon-option-horizontal tweetBottoms"></span></div>');
    $tweet.appendTo($box);
    index -= 1;
  }
});


//WHEN MAIN INPUT TEXT BOX CLICKED:
$('.commentBox').click(function(){
  if ($('.commentBox').val() === "") {
    //lock up the tweet button until text has been entered
    //add class to change to flat color to help symbolize is not working
    $('#outerBox-btn').prop('disabled', true);
  }
  //EXPAND OUTER AND INNER BOXES:
  $('.mainTweetInputBox').addClass('expandedOuterBox');
  $('.commentBox').addClass('commentBoxExpanded');
  $('.visitor-input-ico').addClass('visitor-input-ico-expanded');
  $('.charCount').css('visibility','visible');
  $('#outerBox-btn').show();
  //DISPLAY TWEET BUTTON, AND COUNT FROM 140 by COUNT = 140, and count-- with each keypress.
});


//BUILDNOTE Sat. 05/14/16:
//if 140, you can removeClass and shrink back when click on body, or anywhere else, really.
//Else, if charCount > 0 && < 140, slice it and push to message var if enter pressed or
//tweet button clicked


//BACKSPACE TALLY FUNCTION:
$('.commentBox').keydown(function(e){
    if(charCount > -2) {
      $('#outerBox-btn').prop('disabled', false);
    }

    if(charCount >= 139) {
      $('#outerBox-btn').prop('disabled', true);
    }

    if(charCount <= 140 - 1) {
      if (charCount > 9) {
        $('.charCount').css('color','#333333');
      }

      if(e.keyCode == 8) {
        charCount++;
        $('.charCount').text(charCount);
      }
    }
  });


//TWEET INPUT CHARCOUNT LIMIT FUNCTION:
$(".commentBox").keypress(function(e) {
    //PRESSING DELETE SHOULD DO CHARCOUNT++ UNTIL 140.
    let len = $('.commentBox').val().length;
    $('#outerBox-btn').prop('disabled', false);
    if (len >= 0) {
    }

    if (charCount < 1) {
      $('#outerBox-btn').prop('disabled', true);
    }

    if(charCount < 12){
      $('.charCount').css('color','red');
    }
    else if (charCount > 12) {
      $('.charCount').css('color','#333333');
    }

    if (e.which !== 0) {
        charCount--;
        $('.charCount').text(charCount);
    }
});


//RETURN INPUT BOX TO CLOSED/RETRACTED MODE:
$('body, #trendingTweetsDiv, #visitorProfileInfoDiv, .navbar').click(function(e){
  if(e.target !== this) {
    return; //IF NOT BODY, RETURN.
  } //ELSE:
  //REMOVE ALL CLASSES FROM OUTERBOX TO SHRINK IT AGAIN TO OG SIZE
  if (charCount === 140) {
    shrinkTweetInputBox();
  }
});


//LOAD NEW TWEETS IN STREAM:
$('#newTweets-btn').click(function(){
  $('#newTweets-btn').hide();
  buttonHidden = true;
  let curLen = lastStreamsHomeLength = streams.home.length;
  indexReset(curTweetCount);
  $('#woot').text(curLen); //LIST # OF TWEETS IN VISITOR INFO BOX
  updateTrendingTweets();
  });

$('#outerBox-btn').click(function(){
  let message = $('.commentBox').val();
  $('.commentBox').val(" ");
  writeTweet(message);
  shrinkTweetInputBox();
});

//BEGIN COOKIE SEGMENT
//Purpose: Store Username. Store likes. Store retweets. Feature on timeline.


function setCookie() {
document.cookie = "display-name="+visDisName+"; dispN-set=true; path=/;";
//ADD EXPIRY OF 1 MOS
}

function getCookie(cname) {
var target = cname;
var ca = document.cookie.split(';');
for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(target) !== -1) return c.substring(target.length, c.length);
}
return "";
}

function checkCookie() {
var user = getCookie('=true');
if (user != "") {
    alert("SKIPPED MODAL");
    //EXTRACT visDisName FROM COOKIE AND SET TO GLOBAL VAR
    return false;
} else {
    window.visitor = visDisName = prompt('Please enter your desired Display Name unless remaining anonymous:\nDon\'t worry. You will only be asked once.') || "Visitor Account"; //NEED FILTER TEXT!
    streams.visitor.disName = visDisName;
    //window.streams.visitor = visDisName = prompt('Please enter your desired Display Name unless remaining anonymous:\nDon\'t worry. You will only be asked once.') || "Visitor Account"; //NEED FILTER TEXT!
    setCookie();
    alert("alertifyEnabled runs now");
    //alertifyEnabled();
}
}

$(document).ready(function() {
alert("testing");
checkCookie();
});

$('#share-glyphicon').click(function(){
alert("hahahaha")
});
