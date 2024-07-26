var score = 0
 const audio = new Audio(
     "sound/correct.mp3"
   );
 audio.volume = 0.4
 const audio1 = new Audio(
     "sound/wrong.mp3"
   );
 audio1.volume = 0.3
const audio2 = new Audio(
    "sound/clock.mp3"
  );
audio2.volume = 1


function lost(){
    swal({
        title: "You got it wrong :(",
        text: `Better luck next time \n Your High Score is ${localStorage.getItem("high")}`,
        type: "error",
        icon : "error",
        button : "Retry?"
    }).then(function() {
        window.location.reload();
    });
}
function lostTime(){
    swal({
        title: "You ran out of time :(",
        text: `Better luck next time \n Your High Score is ${localStorage.getItem("high")}`,
        type: "error",
        icon : "error",
        button : "Retry?"
    }).then(function() {
        window.location.reload();
    });
}
function nextRound(){

  let text = `You got it right. Want to Continue?`;
  if (confirm(text) == true) {
    document.getElementsByClassName("ratio1")[0].innerHTML = ``
    document.getElementsByClassName("ratio2")[0].innerHTML = ``
    getDataId();
  } else {
    console.log("boooo!")
  }
}

async function getData(){
    today = new Date()
    let URL1 = `https://invidious.fdn.fr/api/v1/videos/${randomItems[0]}?fields=title,viewCount,published,videoThumbnails`
    let URL2 = `https://invidious.fdn.fr/api/v1/videos/${randomItems[1]}?fields=title,viewCount,published,videoThumbnails`
    let infores1 = await fetch(URL1);
    infores11 = await infores1.json()
    let titles1 = infores11.title;
    let thumb1 = infores11.videoThumbnails[3].url
    let views1 = infores11.viewCount
    let date1 = infores11.published;
    let date11   = new Date(date1*1000);
    TimeSec1 = (today.getTime() - date11.getTime()) / 86400000;
    ViewPerTime1 = views1/TimeSec1

    
    let infores2 = await fetch(URL2);
    infores22 = await infores2.json()
    let titles2 = infores22.title
    let thumb2 = infores22.videoThumbnails[3].url
    let views2 = infores22.viewCount
    let date2 = infores22.published
    let date22   = new Date(date2*1000);
    TimeSec2 = (today.getTime() - date22.getTime()) / 86400000;
    ViewPerTime2 = views2/TimeSec2
    document.getElementsByClassName("thumbnail1")[0].innerHTML = `<img src = ${thumb1} style = height:100%;width:100%>`
    document.getElementsByClassName("thumbnail2")[0].innerHTML = `<img src = ${thumb2} style = "width : 100% ; height : 100%">`
    document.getElementsByClassName("title1")[0].innerText = `\n\n\ ${titles1}`
    document.getElementsByClassName("title2")[0].innerText = `\n\n\ ${titles2}`
    var left = document.getElementsByClassName("container1")[0];
    var right = document.getElementsByClassName("container2")[0];
    if (score>=20 && score < 50){
        timeLeft=8
    }
    else if(score>=50){
        timeLeft=6
    }
    else{
        timeLeft = 10;
    }
    var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
    
    function timer()
    {
      timeLeft=timeLeft-1;
      audio2.play()
      if (timeLeft <= 0)
      {
         clearInterval(counter);
         lostTime()
         audio2.pause()
         return;
      }
      document.getElementById("seconds").innerHTML = String( timeLeft );
    }
    left.onclick = function(){
        if (timeLeft>0){
            audio2.pause()
            clearInterval(counter);
            if (ViewPerTime1>ViewPerTime2){
                audio.play()
                document.getElementsByClassName("ratio1")[0].innerHTML = `Views Per Day are nearly : ${Math.round(ViewPerTime1)}`
                document.getElementsByClassName("ratio2")[0].innerHTML = `Views Per Day are nearly: ${Math.round(ViewPerTime2)}`
                score+=10
                if(score>localStorage.getItem("high")){
                    localStorage.setItem("high", score)
                }
                document.getElementsByClassName("score")[0].innerHTML = `Your Score is : ${score}`           
                setTimeout(nextRound,10)
            }
            else{
                audio1.play()
                lost()
            }
        }
        else{
            lostTime()
        }
    }
    right.onclick = function(){
        if (timeLeft>0){
            audio2.pause()

            clearInterval(counter);
            if (ViewPerTime2>ViewPerTime1){
                audio.play()
                score+=10
                if(score>localStorage.getItem("high")){
                localStorage.setItem("high", score)
            }

                document.getElementsByClassName("ratio1")[0].innerHTML = `Views Per Day are nearly: ${Math.round(ViewPerTime1)}`
                document.getElementsByClassName("ratio2")[0].innerHTML = `Views Per Day are nearly: ${Math.round(ViewPerTime2)}`
                document.getElementsByClassName("score")[0].innerHTML = `Your Score is : ${score}`
                setTimeout(nextRound,10)
            }
            else{
                audio1.play()
                lost()
            }
        }
        else{
            lostTime()
        }
    }

        
}
async function getDataId(){
    currentDate = new Date
    monthNames = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
    set1 = ["awkward", "comedy", "cool", "cute", "creepy", "cosmic", "vintage", "unusual", "incredible", "extreme", "exotic", "great", "wholesome", "hilarious", "horrible", "bad", "cyber", "sweet", "artistic", "top", "old", "ultimate", "little", "big", "explosive", "early", "impossible", "professional", "military", "high", "strange", "alien", "cooking", "ancient", "super", "medieval", "good", "classic", "epic", "how to", "free", "amazing", "perfect", "magic", "simple", "important", "special", "strong", "romantic", "ingenious", "interesting", "review", "vlog", "music", "funny", "meme", "best", "worst", "asmr", "song", "trippy", "insane", "weird", "psychadelic", "viral", "brutal", "happy", "intense"]
    set2 = ["cat", "dog", "game", "technology", "bollywood", "battle", "bird", "hero", "claymation", "anime", "chef", "horse", "talent", "freestyle", "space", "survival", "mashup", "monster", "motivation", "fruit", "timelapse", "stuff", "gun", "explosion", "treasure", "hacks", "tricks", "makeup", "karma", "breakfast", "message", "dinner", "challenge", "days", "octopus", "reaction", "experience", "yoga", "workout", "true crime", "diy", "recipe", "dance", "competition", "fashion", "sport", "story", "history", "ninja", "commercial", "invention", "news", "travel", "exercise", "fantasy", "food", "fail", "trip", "animal", "power", "nature", "magic", "fight", "show", "tv series", "toy", "world", "horror", "japan", "gameshow", "gadget", "art", "kung fu", "vehicle", "machine", "movie", "idea", "mix", "standup", "parody", "animation", "prank", "love", "video", "optical illusion", "special effects", "theory"]
    setSpecial = ["memes " + currentDate.getFullYear(), "movie trailer " + currentDate.getFullYear(), "game trailer " + currentDate.getFullYear(), "news " + monthNames[currentDate.getMonth()] + " " + currentDate.getFullYear(), "official music video", "lofi mix", "try not to laugh", "monty python", "full movie", "youtube rewind", "marzia gaggioli", "fear factor", "weird al yankovic", "top 10", "60s music hits", "70s music hits", "80s music hits", "90s music hits", "trick shots", "zlad", "where the hell is matt", "forged in fire", "charlie the unicorn", "asdf movie", "shrek is love shrek is life", "10 hours", "baby shark", "how to basic", "aerobic championship", "bad lip reading", "shreksphone", "gabe the dog", "dragon ball", "dog vs cat", "south park", "family guy", "key and peele", "future shorts", "human jukebox", "prank goes wrong", "the office", "it crowd", "thug life", "bbc earth", "robot wars", "cyanide and happiness", "zap de spion", "got talent", "singing fish", "annoying orange", "creepypasta", "national geographic", "peace was never an option", "polish edits", "the prodigy", "dog of wisdom", "primitive technology", "device orchestra", "floppotron", "tier zoo", "slow motion", "oddly satisfying"];
t = Math.floor(100 * Math.random()) > 5 ? set1[Math.floor(Math.random() * set1.length)] + " " + set2[Math.floor(Math.random() * set2.length)] : setSpecial[Math.floor(Math.random() * setSpecial.length)]
    let urL = `https://invidious.fdn.fr/api/v1/search?q=${t}&fields=videoId&region=${(await (await fetch('//hutils.loxal.net/whois')).json()).countryIso}`;
    const response = await fetch(urL)
    const data1 = await response.json()
    let ids = data1.slice(0,15).map((item) => item.videoId);
    var n = 2
    randomItems = ids.sort(() => .5 - Math.random()).slice(0, n);
    getData()
}
getDataId()
