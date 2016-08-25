/*jshint esversion: 6 */
/*
 * NOTE: This file generates fake tweet data, and is not intended to be part of your implementation.
 * You can safely leave this file untouched, and confine your changes to index.html.
 */

 /*
  * NOTE: TRY ADDING THIS EXTERNAL JS TO BEGINNING OF INTERNAL JS SO THAT
  *       I CAN ADD IN COOKIE FUNCTIONALITY. CURRENTLY INDEX LOADS FIRST, THEN EXT. JS
  *
 // Initializing Firebase
		var config = {
			apiKey: "AIzaSyDhuyNAJ22Gzni_IyxEft-Z8nxhf3YiFZQ",
			authDomain: "twitter-like-63942.firebaseapp.com",
			databaseURL: "https://twitter-like-63942.firebaseio.com",
			storageBucket: "twitter-like-63942.appspot.com", //SET UP NEW AWS ACCOUNT: FREE TIER
		};
		firebase.initializeApp(config);
*/

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
streams.users.inessaskaya = [];
streams.users.bugbountyhuntr = [];
streams.users.difezza = [];
streams.users.sharpdesignfirm = [];
streams.users.cyxo387 = [];
streams.users.jsdaily = [];
streams.users.datamsecurity = [];
streams.users.evanwilliams = [];


streams.visitor = []; //Visitor's Tweet Timeline Here

window.users = Object.keys(streams.users); //LISTS ALL USERNAMES

let visDisName;
if(localStorage["visDisName"]) {
   visDisName = localStorage["visDisName"];
} else {
	 visDisName = prompt('Please enter your desired Display Name unless remaining anonymous:\nDon\'t worry. You will only be asked once.') || "Visitor Account";
	 localStorage.setItem('visDisName',visDisName);
}
window.visitor = visDisName;
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
//$('#visitorProfileInfoDiv').('<p id="visUName"><small>@'+ visUName +'</small></h4></div>');
*/

let visUIcon;
let visBGImg;
let num = Math.floor(Math.random() * (64529-23040) + 23040);
let visUName;
//streams.visitor.uName = visUName = 'guest'+num;

if(localStorage["visUName"]) {
   visUName = localStorage["visUName"];
} else {
	 visUName = 'guest'+num;
	 localStorage.setItem('visUName',visUName);
}
streams.visitor.uName = visUName;

streams.visitor.uIcon = visUIcon = 'http://i68.tinypic.com/fx57hs.png';
streams.visitor.bgImg = visBGImg ='http://i65.tinypic.com/21acvaw.jpg';

//ADDING ICONS TO STRUCTURES
streams.users.shawndrost.icon = "http://i64.tinypic.com/2dqply1.gif";
streams.users.sharksforcheap.icon = "http://i67.tinypic.com/e5fo5l.gif";
streams.users.mracus.icon = "http://i68.tinypic.com/2luzx29.gif";
streams.users.douglascalhoun.icon = "http://i63.tinypic.com/w98oko.gif";
streams.users.nyteksf.icon = "http://i65.tinypic.com/dn2fdf.gif";
streams.users.bigblocho5.icon = "http://i64.tinypic.com/1zbuseg.gif";
streams.users.kflores86.icon = "http://i65.tinypic.com/f1ezq.gif";
streams.users.inessaskaya.icon = "http://i66.tinypic.com/2zprzog.gif";
streams.users.bugbountyhuntr.icon = "http://i63.tinypic.com/rjgzr5.gif";
streams.users.difezza.icon = "http://i64.tinypic.com/24vtm61.gif";
streams.users.sharpdesignfirm.icon = "http://i66.tinypic.com/2ronv52.gif";
streams.users.cyxo387.icon = "http://i68.tinypic.com/2dklrbd.gif";
streams.users.jsdaily.icon = "http://i67.tinypic.com/ek1d95.gif";
streams.users.datamsecurity.icon = "http://i63.tinypic.com/2lvfmkg.gif";
streams.users.evanwilliams.icon = "http://i66.tinypic.com/2csa16p.gif";

//ADDING DISPLAY NAMES NEXT
streams.users.shawndrost.disName = "Shawn Drost";
streams.users.sharksforcheap.disName = "Sharks4Sale";
streams.users.mracus.disName = "Mark Racus";
streams.users.douglascalhoun.disName = "Doug Calhoun";
streams.users.nyteksf.disName = "Joe Coviello";
streams.users.bigblocho5.disName = "Jim Blocho";
streams.users.kflores86.disName = "Kristina Flores";
streams.users.inessaskaya.disName = "Inessa Stanishevskaya";
streams.users.bugbountyhuntr.disName = "Gerald Scheuler";
streams.users.difezza.disName = "Denis Makrushin";
streams.users.sharpdesignfirm.disName = "Sharp Design Firm LLC";
streams.users.cyxo387.disName = "John Cabot";
streams.users.jsdaily.disName = "JavaScript Daily";
streams.users.datamsecurity.disName = "Datam Security";
streams.users.evanwilliams.disName = "Evan Williams";

//ADD POSTABLE IMAGES FOR TWEETS:
window.tweetRelated = {};
tweetRelated.cachedInfo = ['http://i68.tinypic.com/122ohm9.jpg','http://i64.tinypic.com/2cwpzph.jpg','http://i68.tinypic.com/2vc6t4z.jpg','http://i68.tinypic.com/2isdvrt.jpg','http://i67.tinypic.com/211ue01.jpg','http://i68.tinypic.com/1yqp8w.jpg','http://i63.tinypic.com/1z1h9a0.jpg','http://i64.tinypic.com/2hs9ce8.jpg','http://i68.tinypic.com/1445v5s.jpg','http://i68.tinypic.com/65myah.jpg','http://i67.tinypic.com/w1sejb.jpg','http://i63.tinypic.com/25s8t9z.jpg','http://i65.tinypic.com/103cuhs.jpg','http://i64.tinypic.com/2u8gmlc.jpg','http://i67.tinypic.com/2yy33v4.jpg','http://i65.tinypic.com/6eowhk.png','http://i67.tinypic.com/dcupt.jpg','http://i64.tinypic.com/2ds48dz.png','http://i64.tinypic.com/2w3tkiq.jpg','http://i67.tinypic.com/2yy33v4.jpg','http://i65.tinypic.com/289vbew.jpg','http://i68.tinypic.com/122ohm9.jpg','http://i64.tinypic.com/2hs9ce8.jpg'];


//SELECT A URL AT RANDOM FROM ABOVE LIST AND RETURN
let getRandURL = function() {
	let randURLNum = Math.floor(Math.random() * 22);
	return tweetRelated.cachedInfo[randURLNum];
};


let $box = $('.box');


let guestTweet = function() {
  guestTweeting = false; //RESET FOR NEXT ENTRY
  var tweet = streams.home[streams.home.length-1];
  var $tweet = $('<h5 class="tweetsOutput visitor"></h5>');
  $tweet.html('<img class="tweetIcon" src="'+ tweet.icon +'"/><big><small><strong><span class="tweetText">'+ tweet.disName + '</span></strong> <span class="tweetSubtext">@' + tweet.user + ' &middot; <span data-livestamp="'+tweet.created_at+'"></span></span><br><span class="tweetText">'+ tweet.message+'</span></strong></big></small><hr>');
  $tweet.appendTo($box);
};


//Utility function for adding tweets to our data structures
let addTweet = function(newTweet){
  if (newTweet.guestTweeting) {
    streams.visitor.push(newTweet); //UPDATE VISITORS PERSONAL TWITTER TIMELINE
  } else { //ELSE POST TO USER TIMELINE
    var username = newTweet.user;
    streams.users[username].push(newTweet);
  }
  streams.home.push(newTweet);

  //FIRING UPDATE AND POSTING VISITOR'S TWEET TO THEIR TIMELINE:
  if (newTweet.guestTweeting) {
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
var tags = ['#techlife', '#colormebad', '#infosec', '#burningman', '#sf', '#omg #lol', "#w00t", '#counterterrorismops', '#linux', 'left-handed and blindfolded', '#infosec', '', '#sorcery', '#technowizardry', '#w00t #UID_0', '#javascript', "#winning", 'but only i know how', 'like whoa', '#sxsw', '#ballin', '#omg', '#yolo', '#hacktheplanet', '#magic', '', '', '', ''];


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
  tweet.postImg = getRandURL();
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
var writeTweet = function(message){

  if(!visitor){  //SHOULD BE GLOBAL
    alert('ERROR #43E: User undefined! Define the visitor name property before proceeding!');
  }
  var tweet = {};

  tweet.user = visUName; //eg, '@guest39499'
  tweet.message = message || randomMessage(); //message; //MODAL TEXT BOX OUTPUT HERE ON SUBMIT AS .val()
  tweet.icon = visUIcon; //http://i68.tinypic.com/fx57hs.png //REMEMBER TO REPLACE CUR. TMP. ICON WITH CUSTOM GUEST ICO
  tweet.disName = visDisName; //<=FALLBACK TO DEFAULT, BUT PROMPT ONE TIME AT LOAD. STORE COOKIE
  tweet.created_at = new Date(); //ADDED TIMESTAMP FUNCTIONALITY
  tweet.guestTweeting = true; //if true, then property .disabled = true for retweet btn!
	tweet.postImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Transparent_square.svg/12px-Transparent_square.svg.png'; //POSTS SM. TRANSPARENT SQUARE--JUST IN CASE GUEST WINS THE LOTTO ;)
	addTweet(tweet);
};


let indexReset;
$(document).ready(function(){
  var $box = $('.box');
  $box.html('');

  //POST MORE TWEETS TO MAIN TIMELINE:
  indexReset = function(num) { //CURRENT LENGTH - RECORDED LENGTH AS OF LAST NEW TWEETS
    index = num;

    for(let i = 1; i <= num; i++) {
        var tweet = streams.home[streams.home.length-i];

        let trendWord;
        if (tweet.message.indexOf("#") !== -1) {
          let curMsgArr = tweet.message.split(" ");
          for (let i = 0; i < curMsgArr.length; i++) {
            let curWord = curMsgArr[i];
            if(curWord[0] === "#") {
              if (trendWord === undefined) {
                trendWord = curWord.slice(1); //REMOVE '#' FROM NEW CLASSNAME
              } else {
                trendWord += " "+curWord.slice(1);
              }
            }
          }
        }
        let $tweet;
        let randNum1to10 = Math.floor((Math.random() * 9) + 1);

        //DYNAMIC ELEMENT GENERATION BLOCKS:
        if (trendWord !== "") {

          if (randNum1to10 === 7) {

            $tweet = $('<h5 class="tweetsOutput '+tweet.user+' '+trendWord+'"></h5>');
            $tweet.html('<div class="imgWrap"><img class="tweetIcon" src="'+tweet.icon+'"/></div><big><small><strong><span class="tweetText">'+tweet.disName+'</span></strong> <span class="tweetSubtext"> @'+tweet.user+' &middot; <span data-livestamp="'+tweet.created_at+'"></span></span><br><span class="tweetText">'+tweet.message+'</span></strong></big></small>');
            $tweet.append('<div class="tweetAddedImage"><a href="https://twitter.com/nyteksf" target="_blank"><img src="'+tweet.postImg+'" class="postedImages" /></a></div>');
            $tweet.append('<div id="tweetFooters"><button class="shareBtn"><span id="share-glyphicon" class="glyphicon glyphicon-share-alt tweetBottoms"></span></button><button class="retweetBtn"><span id="retweet-glyphicon" class="glyphicon glyphicon-retweet tweetBottoms"><span class="retweetCount makeHidden">0</span></span></button><button class="heartIconBtn"><span id="heartIcon-glyph" class="glyphicon glyphicon-heart tweetBottoms"><span class="likeCount hideLikeCount">0</span></span></button><button class="optionBtn"><span class="option-horizontal-glyphicon glyphicon glyphicon-option-horizontal  tweetBottoms"></span></button></div>');
            trendWord = "";
          } else { //OR POST WITHOUT IMAGE INSTEAD:
            $tweet = $('<h5 class="tweetsOutput '+tweet.user+' '+trendWord+'"></h5>');
            $tweet.html('<div class="imgWrap"><img class="tweetIcon" src="'+tweet.icon+'"/></div><big><small><strong><span class="tweetText">'+tweet.disName+'</span></strong> <span class="tweetSubtext"> @'+tweet.user+' &middot; <span data-livestamp="'+tweet.created_at+'"></span></span><br><span class="tweetText">'+tweet.message+'</span></strong></big></small>');
            $tweet.append('<div id="tweetFooters"><button class="shareBtn"><span id="share-glyphicon" class="glyphicon glyphicon-share-alt tweetBottoms"></span></button><button class="retweetBtn"><span id="retweet-glyphicon" class="glyphicon glyphicon-retweet tweetBottoms"><span class="retweetCount makeHidden">0</span></span></button><button class="heartIconBtn"><span id="heartIcon-glyph" class="glyphicon glyphicon-heart tweetBottoms"><span class="likeCount hideLikeCount">0</span></span></button><button class="optionBtn"><span class="option-horizontal-glyphicon glyphicon glyphicon-option-horizontal  tweetBottoms"></span></button></div>');
            trendWord = "";
          }
        } else {
          if (randNum1to10 === 7) {

            $tweet = $('<h5 class="tweetsOutput '+tweet.user+'"></h5>');
            $tweet.html('<div class="imgWrap"><img class="tweetIcon" src="'+tweet.icon+'"/></a><big><small><strong><span class="tweetText">'+tweet.disName+'</span></strong> <span class="tweetSubtext"> @'+tweet.user+' &middot; <span data-livestamp="'+tweet.created_at+'"></span></span><br><span class="tweetText">'+tweet.message+'</span></strong></big></small>');
            $tweet.append('<div class="tweetAddedImage"><a href="https://twitter.com/nyteksf" target="_blank"><img src="'+tweet.postImg+'" class="postedImages" /></a></div>');
            $tweet.append('<div id="tweetFooters"><button class="shareBtn"><span id="share-glyphicon" class="glyphicon glyphicon-share-alt tweetBottoms"></span></button><button class="retweetBtn"><span id="retweet-glyphicon" class="glyphicon glyphicon-retweet tweetBottoms"><span class="retweetCount makeHidden">0</span></span></button><button class="heartIconBtn"><span id="heartIcon-glyph" class="glyphicon glyphicon-heart tweetBottoms"><span class="likeCount hideLikeCount">0</span></span></button><button class="optionBtn"><span class="option-horizontal-glyphicon glyphicon glyphicon-option-horizontal  tweetBottoms"></span></button></div>');
          } else {
            $tweet = $('<h5 class="tweetsOutput '+tweet.user+'"></h5>');
            $tweet.html('<div class="imgWrap"><img class="tweetIcon" src="'+tweet.icon+'"/></div><big><small><strong><span class="tweetText">'+tweet.disName+'</span></strong> <span class="tweetSubtext"> @'+tweet.user+' &middot; <span data-livestamp="'+tweet.created_at+'"></span></span><br><span class="tweetText">'+tweet.message+'</span></strong></big></small>');
            $tweet.append('<div id="tweetFooters"><button class="shareBtn"><span id="share-glyphicon" class="glyphicon glyphicon-share-alt tweetBottoms"></span></button><button class="retweetBtn"><span id="retweet-glyphicon" class="glyphicon glyphicon-retweet tweetBottoms"><span class="retweetCount makeHidden">0</span></span></button><button class="heartIconBtn"><span id="heartIcon-glyph" class="glyphicon glyphicon-heart tweetBottoms"><span class="likeCount hideLikeCount">0</span></span></button><button class="optionBtn"><span class="option-horizontal-glyphicon glyphicon glyphicon-option-horizontal  tweetBottoms"></span></button></div>');
        }
      }
      $tweet.appendTo($box);
    }
  };


    //POPULATE .BOX WITH FIRST 11 TWEETS CONSECUTIVELY
    streams.home.forEach(function(tweet) {
    let trendWord;
    if (tweet.message.indexOf("#") !== -1) {
      let curMsgArr = tweet.message.split(" ");
      for (let i = 0; i < curMsgArr.length; i++) {
        let curWord = curMsgArr[i];
        if(curWord[0] === "#") {
          if (trendWord === undefined) {
            trendWord = curWord.slice(1); //REMOVE '#' FROM NEW CLASSNAME
          } else {
            trendWord += " "+curWord.slice(1);
          }
        }
      }
    }
    let $tweet;
    let randNum1to10 = Math.floor((Math.random() * 12) + 1);

    if (trendWord !== "") {
      if (randNum1to10 === 7) {

        $tweet = $('<h5 class="tweetsOutput '+tweet.user+' '+trendWord+'"></h5>');
        $tweet.html('<div class="imgWrap"><img class="tweetIcon" src="'+tweet.icon+'" /></div><big><small><strong><span class="tweetText">'+tweet.disName+'</span></strong> <span class="tweetSubtext"> @'+tweet.user+' &middot; <span data-livestamp="'+tweet.created_at+'"></span></span><br><span class="tweetText">'+tweet.message+'</span></strong></big></small>');
        $tweet.append('<div class="tweetAddedImage"><a href="https://twitter.com/nyteksf" target="_blank"><img src="'+tweet.postImg+'" class="postedImages" /></a></div>');
        $tweet.append('<div id="tweetFooters"><button class="shareBtn"><span id="share-glyphicon" class="glyphicon glyphicon-share-alt tweetBottoms"></span></button><button class="retweetBtn"><span id="retweet-glyphicon" class="glyphicon glyphicon-retweet tweetBottoms"><span class="retweetCount">0</span></span></button><button class="heartIconBtn"><span id="heartIcon-glyph" class="glyphicon glyphicon-heart tweetBottoms"><span class="likeCount hideLikeCount">0</span></span></button><button class="optionBtn"><span class="option-horizontal-glyphicon glyphicon glyphicon-option-horizontal  tweetBottoms"></span></button></div>');
        trendWord = "";
      } else {
        $tweet = $('<h5 class="tweetsOutput '+tweet.user+' '+trendWord+'"></h5>');
        $tweet.html('<div class="imgWrap"><img class="tweetIcon" src="'+tweet.icon+'" /></div><big><small><strong><span class="tweetText">'+tweet.disName+'</span></strong><span class="tweetSubtext"> @'+tweet.user+' &middot; <span data-livestamp="'+tweet.created_at+'"></span></span><br><span class="tweetText">'+tweet.message+'</span></strong></big></small>');
        $tweet.append('<div id="tweetFooters"><button class="shareBtn"><span id="share-glyphicon" class="glyphicon glyphicon-share-alt tweetBottoms"></span></button><button class="retweetBtn"><span id="retweet-glyphicon" class="glyphicon glyphicon-retweet tweetBottoms"><span class="retweetCount">0</span></span></button><button class="heartIconBtn"><span id="heartIcon-glyph" class="glyphicon glyphicon-heart tweetBottoms"><span class="likeCount hideLikeCount">0</span></span></button><button class="optionBtn"><span class="option-horizontal-glyphicon glyphicon glyphicon-option-horizontal  tweetBottoms"></span></button></div>');
        trendWord = "";
      }
    } else {
      if (randNum1to10 === 7) {

        $tweet = $('<h5 class="tweetsOutput '+tweet.user+'"></h5>');
        $tweet.html('<div class="imgWrap"><img class="tweetIcon" src="'+tweet.icon+'" /></div><big><small><strong><span class="tweetText">'+tweet.disName+ '</span></strong> <span class="tweetSubtext"> @'+tweet.user+' &middot; <span data-livestamp="'+tweet.created_at+'"></span></span><br><span class="tweetText">'+tweet.message+'</span></strong></big></small>');
        $tweet.append('<div class="tweetAddedImage"><a href="https://twitter.com/nyteksf" target="_blank"><img src="'+tweet.postImg+'" class="postedImages" /></a></div>');
        $tweet.append('<div id="tweetFooters"><button class="shareBtn"><span id="share-glyphicon" class="glyphicon glyphicon-share-alt tweetBottoms"></span></button><button class="retweetBtn"><span id="retweet-glyphicon" class="glyphicon glyphicon-retweet tweetBottoms"><span class="retweetCount">0</span></span></button><button class="heartIconBtn"><span id="heartIcon-glyph" class="glyphicon glyphicon-heart tweetBottoms"><span class="likeCount hideLikeCount">0</span></span></button><button class="optionBtn"><span class="option-horizontal-glyphicon glyphicon glyphicon-option-horizontal  tweetBottoms"></span></button></div>');
      } else {
        $tweet = $('<h5 class="tweetsOutput '+tweet.user+'"></h5>');
        $tweet.html('<div class="imgWrap"><img class="tweetIcon" src="'+tweet.icon+'" /></div><big><small><strong><span class="tweetText">'+tweet.disName+'</span></strong> <span class="tweetSubtext"> @'+tweet.user+' &middot; <span data-livestamp="'+tweet.created_at+'"></span></span><br><span class="tweetText">'+tweet.message+'</span></strong></big></small>');
        $tweet.append('<div id="tweetFooters"><button class="shareBtn"><span id="share-glyphicon" class="glyphicon glyphicon-share-alt tweetBottoms"></span></button><button class="retweetBtn"><span id="retweet-glyphicon" class="glyphicon glyphicon-retweet tweetBottoms"><span class="retweetCount">0</span></span></button><button class="heartIconBtn"><span id="heartIcon-glyph" class="glyphicon glyphicon-heart tweetBottoms"><span class="likeCount hideLikeCount">0</span></span></button><button class="optionBtn"><span class="option-horizontal-glyphicon glyphicon glyphicon-option-horizontal tweetBottoms"></span></button></div>');
      }
    }
    $tweet.appendTo($box);
  });
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
  //Get .val().length of input for this purpose.
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

let lastStreamsHomeLength = 0;

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
