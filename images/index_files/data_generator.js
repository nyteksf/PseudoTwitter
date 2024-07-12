
/*
 * NOTE: This file generates fake tweet data, and is not intended to be part of your implementation.
 * You can safely leave this file untouched, and confine your changes to index.html.
 */

 /*
  * NOTE: TRY ADDING THIS EXTERNAL JS TO BEGINNING OF INTERNAL JS SO THAT
  *       I CAN ADD IN COOKIE FUNCTIONALITY. CURRENTLY INDEX LOADS FIRST, THEN EXT. JS
  */
let guestTweeting; //TMP SOLUTION

window.streams = {};
streams.home = [];//MAIN TIMELINE AKA THE HOME TIMELINE
streams.trendingTweets = [];
streams.likes = 0;
streams.retweets = 0;
streams.users = {};
streams.users.shawndrost = [];
streams.users.sharksforcheap = [];
streams.users.mracus = [];
streams.users.douglascalhoun = [];
streams.users.nyteksf = [];
streams.users.bigblocho5 = [];
streams.users.kflores86 = [];
streams.visitor = []; //Visitor's Tweet Timeline Here

window.users = Object.keys(streams.users); //LISTS ALL USERNAMES

let visDisName;
window.visitor = visDisName = prompt('Please enter your desired Display Name unless remaining anonymous:\nDon\'t worry. You will only be asked once.') || "Visitor Account"; //NEED FILTER TEXT!
//SET COOKIE HERE. CHECK FOR COOKIE AT BEGINNING OF SCRIPT.
//IF COOKIE NOT FOUND, RUN AS USUAL.
//ELSE DUMPCOOKIEVAL

//
//STRATEGY:
//TRYING: MODIFY INDEX.HTML=>... visDisName = win.vis = prompt(...) spiel
//ALSO MODIFIED: NEXT=> tweet.disName; = visDisName;
/*-=-=-=-=-=-=-=-=-=-=-=,
//BEGIN COOKIE SEGMENT  |
//Purpose: Store Username.
//Store likes. Store retweets.
//Feature * on timeline.|
//=-=-=-=-=-=-=-=-=-=-=*/
/*
function setCookie() {
    document.cookie = "display-name="+visDisName+"; dispN-set=true; path=/;";
    //ADD EXPIRY OF 1 MOS
    alert(document.cookie+" setCookie()");
}

function dumpCookieVal(cname) {
  var re = new RegExp(cname + "=([^;]+)");
  var value = re.exec(document.cookie);
  return (value != null) ? unescape(value[1]) : null;
}

function getCookie(cname) {
    var target = cname;
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        alert(c+" getCookie()");
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(target) !== -1) return c.substring(target.length, c.length);
    }
    return "";
}


function checkCookie() {
    var user = getCookie('display-name=');
    if (user != "") {
        alert("SKIPPED SETTING COOKIE: COOKIE FOUND");
        visDisName = dumpCookieVal('display-name');
        return false;
    } else {
        window.visitor = visDisName = prompt('Please enter your desired Display Name:\nDon\'t worry. You will only be asked once.') || "Visitor Account"; //NEED TO FILTER TEXT
        streams.visitor.disName = visDisName;
        setCookie();
        alert("setCookie() has run.  Proof: "+visDisName+" <=visDisName");
    }
}


$(document).ready(function() {
    alert("testing for presence of cookie");
    checkCookie();
});

//visDisName = window.visitor = prompt('Please enter your desired Display Name unless remaining anonymous:\nDon\'t worry. You will only be asked once.') || "Visitor Account"; //NEED FILTER TEXT!
//tweet.disName = visDisName;
//let num = Math.floor(Math.random() * (64529-23040) + 23040);
//let visUName;
//streams.visitor.uName = visUName = 'guest'+num;
//$('#visitorProfileInfoDiv').append('<div id="containerDiv"><h4 id="visDisName"><strong>'+ visDisName +'</strong>');
//$('#visitorProfileInfoDiv').append('<p id="visUName"><small>@'+ visUName +'</small></h4></div>');
*/

let visUIcon;
let visBGImg;
//streams.visitor.disName = visDisName;
let num = Math.floor(Math.random() * (64529-23040) + 23040);
let visUName;
streams.visitor.uName = visUName = 'guest'+num;
streams.visitor.uIcon = visUIcon = '';
streams.visitor.bgImg = visBGImg ='http://i65.tinypic.com/21acvaw.jpg';

//ADDING ICONS TO STRUCTURES
streams.users.shawndrost.icon = "http://i64.tinypic.com/2dqply1.gif";
streams.users.sharksforcheap.icon = "http://i67.tinypic.com/e5fo5l.gif";
streams.users.mracus.icon = "http://i68.tinypic.com/2luzx29.gif";
streams.users.douglascalhoun.icon = "http://i63.tinypic.com/w98oko.gif";
streams.users.nyteksf.icon = "http://i65.tinypic.com/dn2fdf.gif";
streams.users.bigblocho5.icon = "http://i64.tinypic.com/1zbuseg.gif";
streams.users.kflores86.icon = "http://i65.tinypic.com/f1ezq.gif";

//ADDING DISPLAY NAMES NEXT
streams.users.shawndrost.disName = "Shawn Drost";
streams.users.sharksforcheap.disName = "Sharks4Sale";
streams.users.mracus.disName = "Mark Racus";
streams.users.douglascalhoun.disName = "Doug Calhoun";
streams.users.nyteksf.disName = "Joe Coviello";
streams.users.bigblocho5.disName = "Jim Blocho";
streams.users.kflores86.disName = "Kristina Flores";

//CREATE VISITOR INFO DISPLAY BOX:
//$('#visitorProfileInfoDiv').append('<div id="containerDiv"><h4 id="visDisName"><strong>'+ visDisName +'</strong>');
//$('#visitorProfileInfoDiv').append('<p id="visUName"><small>@'+ visUName +'</small></h4></div>');

//ADD POSTED IMAGES, AND CREATE RANDOM ASSIGNMENT FUNCTION
//code here...
//
//
let $box = $('.box');

let guestTweet = function() {
  guestTweeting = false; //RESET FOR NEXT ENTRY
  var tweet = streams.home[streams.home.length-1];
  var $tweet = $('<h5 class="tweetsOutput"></h5>');
  $tweet.html('<img class="tweetIcon" src="'+ tweet.icon +'"/><big><small><strong><span class="tweetText">'+ tweet.disName + '</span></strong> <span class="tweetSubtext">@' + tweet.user + ' &middot; <span data-livestamp="' + tweet.created_at +'"></span></span><br><span class="tweetText">'+ tweet.message+'</span></strong></big></small><hr>');
  $tweet.appendTo($box);
};


// utility function for adding tweets to our data structures
var addTweet = function(newTweet){
  if (guestTweeting) {
    streams.visitor.push(newTweet); //UPDATE VISITORS PERSONAL TIMELINE
  } else { //ELSE POST TO USER TIMELINE
    var username = newTweet.user;
    streams.users[username].push(newTweet);
  }
  //streams.home.push(newTweet); //KEEP THIS HERE IN CASE I CHANGE BACK CONFIG
  streams.home.push(newTweet);

  if (guestTweeting) {
    guestTweeting = false;
    $('#newTweets-btn').click();
  }
};
//Utility Func: Choose randomElement:
var randomElement = function(array){
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

//"Random Tweet Generator":
var opening = ['just', '', '', '', '', 'ask me how i', 'completely', '', 'nearly', 'productively', '', 'last night i', 'vladimir putin', 'linus torvalds', 'the president', 'that techno wizard', 'a ninja', 'a seedy old man'];
var verbs = ['drank', 'crashed', 'deployed', 'got', 'programmed', 'trojaned', 'coded', 'developed', 'built', 'tested', 'debugged', 'refactored', 'experienced', 'fought off', 'ported OSX apps for', 'hardened', 'enjoyed', 'coded apps for', 'DDoS\'ed', 'cracked', 'reverse engineered', 'developed', 'consumed', 'debunked', 'entered', 'went through', 'made', 'wrote', 'saw'];
var objects = ['my', 'Joe Coviello\'s', 'the', 'John Cabot\'s', 'a', 'my', 'an entire', 'this', 'that', 'the', 'a buffer overflow in the', 'the big', 'your', 'a new form of'];
var nouns = ['cat', 'koolaid', 'system', 'irc chatbot', 'javascript library', 'intrusion detection system', 'compiler', 'city grid', 'Raspberry Pi server', 'worm', 'cloud', 'potato script', 'currency converter', 'way of life', 'belief system', 'security system', 'bitcoin mine', 'dangerous decision', 'future', 'massive botnet', 'life', 'operating system', 'mind'];
var tags = ['#techlife', '#colormebad', '#infosec', '#burningman', '#sf', '#omg #lol', "#w00t", '#counterterrorismops', '#linux', 'left-handed and blindfolded', '#infosec', '', '#sorcery', '#technowizardy', '#w00t #UID_0', '#javascript', "#winning", 'but only i know how', 'like whoa', '#sxsw', '#ballin', '#omg', '#yolo', '#hacktheplanet', '#magic', '', '', '', ''];

var randomMessage = function(){
  return [randomElement(opening), randomElement(verbs), randomElement(objects), randomElement(nouns), randomElement(tags)].join(' ');
};

// Generate random tweets on a random schedule
var generateRandomTweet = function(){
  var tweet = {};
  tweet.user = randomElement(users);
  tweet.message = randomMessage();
  tweet.icon = streams.users[tweet.user].icon;
  tweet.disName = streams.users[tweet.user].disName;
  tweet.created_at = new Date();
  addTweet(tweet);
};

//THE FIRST 11 TWEETS ARE GENERATED AT ONCE TO POPULATE SCREEN:
for(var i = 0; i < 10; i++){
  generateRandomTweet();
}

var scheduleNextTweet = function(){
  let randInterval = Math.random() * (5405-2600) + 2600;
  generateRandomTweet();
  setTimeout(scheduleNextTweet, randInterval);
};
scheduleNextTweet(); //KICK OFF UPDATES! :)

// Utility function for allowing user to "write a tweet":
// (note: not used by the rest of this file.)
let guestUserTweetCount = 0;
var writeTweet = function(message){

  if(!visitor){  //SHOULD BE GLOBAL
    alert('ERROR #43E: User undefined! Define the visitor name property before proceeding!');
  }

  var tweet = {};

  tweet.user = visUName; //eg, '@guest39499'
  tweet.message = message || randomMessage(); //message; //MODAL TEXT BOX OUTPUT HERE ON SUBMIT AS .val()
  tweet.icon = visUIcon; 
  tweet.disName = visDisName; //<=FALLBACK TO DEFAULT, BUT PROMPT ONE TIME AT LOAD. STORE COOKIE
  tweet.created_at = new Date(); //ADDED TIMESTAMP FUNCTIONALITY
  guestTweeting = true;
  addTweet(tweet);
};


let indexReset;

$(document).ready(function(){
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
        $tweet.html('<img class="tweetIcon" src="'+ tweet.icon +'"/><big><small><strong><span class="tweetText">'+ tweet.disName + '</span></strong> <span class="tweetSubtext">@' + tweet.user + ' &middot; <span data-livestamp="' + tweet.created_at +'"></span></span><br><span class="tweetText">'+ tweet.message+'</span></strong></big></small>');
        $tweet.append('<div id="tweetFooters"><span id="share-glyphicon" class="glyphicon glyphicon-share-alt tweetBottoms"></span><span id="retweet-glyphicon" class="glyphicon glyphicon-retweet tweetBottoms"></span><span id="glyphicon-heart" class="glyphicon glyphicon-heart tweetBottoms"></span><span id="option-horizontal-glyphicon" class="glyphicon glyphicon-option-horizontal tweetBottoms"></span></div>');
        $tweet.appendTo($box);
    }
  };


  //LOAD TWEETS TO SCREEN WHEN COUNTED BY/WITHIN INDEX:
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<h5 class="tweetsOutput"></h5>');
    $tweet.html('<img class="tweetIcon" src="'+ tweet.icon +'"/><big><small><strong><span class="tweetText">'+ tweet.disName + '</span></strong> <span class="tweetSubtext">@' + tweet.user + ' &middot; <span data-livestamp="' + tweet.created_at +'"></span></span><br><span class="tweetText">'+ tweet.message+'</span></strong></big></small>');
    $tweet.append('<div id="tweetFooters"><button id="shareBtn"><span id="share-glyphicon" class="glyphicon glyphicon-share-alt tweetBottoms"></span></button><button id="retweetBtn"><span id="retweet-glyphicon" class="glyphicon glyphicon-retweet tweetBottoms"><span id="retweetCount">0</span></span></button><button id="heartIconBtn"><span id="heartIcon-glyph" class="glyphicon glyphicon-heart tweetBottoms"><span id="likeCount">0</span></span></button><button id="optionBtn"><span id="option-horizontal-glyphicon" class="glyphicon glyphicon-option-horizontal tweetBottoms"></span></button></div>');
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
  console.log("asadsasd")
  let message = $('.commentBox').val();
  $('.commentBox').val(" ");
  writeTweet(message);
  shrinkTweetInputBox();
});




/*
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
*/


//console.log(setTimeout(updateTrendingTweets, 2500));
//setTimeout(function(){ alert(output2); }, 2600);
