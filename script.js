function start() {
  var temp = document.createElement("div");
  temp.innerText =
    botResponses.greetings[
      Math.floor(Math.random() * botResponses.greetings.length)
    ];
  userMessages.appendChild(temp);
  temp.className = "bot";
  on.innerHTML = "";
  var img = document.createElement("img");
  img.id = "messagebot";
  img.src = "./Images/messagebot.jpg";
  userMessages.appendChild(img);
  userMessages.appendChild(temp);
}
var userMessages = document.getElementById("user");
var on = document.getElementById("online");
on.innerHTML = "typing...";
var message = "";
fetch("botresponses.json")
  .then((response) => response.json())
  .then((data) => {
    botResponses = data;

    var user = () => {
      message = document.getElementById("userinput").value;

      if (message.trim() === "") {
      } else {
        var temp = document.createElement("div");
        temp.innerText = message;
        temp.className = "user";
        userMessages.appendChild(temp);
        on.innerHTML = "typing...";
        var img = document.createElement("img");
        img.id = "userbot";
        img.src = "./Images/user.jpg";
        userMessages.appendChild(img);
        userMessages.appendChild(temp);
        document.getElementById("btn").disabled = true;
        setTimeout(bot, 3000);
      }
    };

    var bot = () => {
      var temp = document.createElement("div");
      var hello = [
        "hi",
        "hello",
        "hey",
        "hii",
        "hey!",
        "bro",
        "Bro",
        "sis",
        "Sis",
        "hi bro",
        "Hi sis",
      ];
      var intro = [
        "who",
        "you",
        "name",
        "your name",
        "name?",
        "?",
        "your",
        "whats your name",
        "you?",
      ];
      var bye = [
        "bye",
        "see you",
        "take care",
        "care",
        "take",
        "adios",
        "good bye",
        "goodbye",
      ];
      var help = [
        "help",
        "sugggest",
        "take",
        "to",
        "good",
        "appreciate",
        "make",
        "kind",
        "help me",
      ];
      var like = [
        "likes",
        "love",
        "kind",
        "likes",
        "glad",
        "soul",
        "well",
        "good",
      ];
      var encourage = [
        "encouragement",
        "can't",
        "not",
        "bore",
        "may not",
        "bad",
        "worst",
        "negative",
        "Don't",
        "beleive",
        "difference",
        "corner",
      ];
      var curiosity = [
        "curios",
        "very",
        "intresting",
        "eager",
        "fascinating",
        "motivation",
      ];
      var humors = [
        "humor",
        "fun",
        "laugh",
        "jokes",
        "comedy",
        "funny",
        "comedic",
      ];
      var supports = [
        "help",
        "alone",
        "feel",
        "sad",
        "support",
        "lean",
        "admire",
        "force",
        "please",
        "frustrate",
        "moments",
        "journey",
        "journ",
        "im very sad",
      ];
      var motive = [
        "motivation",
        "can",
        "suggest",
        "do",
        "it",
        "really",
        "can i do",
        "sugest",
        "im very sad",
      ];
      var empath = [
        "empathy",
        "home",
        "tough",
        "hard",
        "very",
        "sense",
        "sorry",
        "bad",
      ];
      var celebrations = [
        "celebration",
        "kudos",
        "fans",
        "got",
        "im",
        "i'm",
        "celebrate",
        "pass",
        "i got",
        "congrats",
        "achievement",
        "achievements",
        "fine",
      ];
      var reflections = [
        "reflections",
        "reflection",
        "still",
        "story",
        "stories",
        "pause",
        "self",
      ];
      var positivity = [
        "positivity",
        "positive",
        "+ve",
        "ve",
        "true",
        "false",
        "good",
        "courage",
        "block",
      ];
      var inappropriate = [
        "shit",
        "horse",
        "damn",
        "dangerous",
        "die",
        "kill",
        "kil",
        "dam",
        "shucks",
        "shuck",
        "kucf",
        "bad",
        "sex",
        "me",
        "harm",
      ];
      var fineResponses = [
        "fine",
        "i'm fine",
        "good",
        "i'm good",
        "alright",
        "i'm alright",
        "im good",
        "im perfect",
        "perfect",
        "im fine",
        "imfine",
      ];
      if (hello.includes(message.toLowerCase())) {
        temp.innerText =
          botResponses.greetings[
            Math.floor(Math.random() * botResponses.greetings.length)
          ];
        console.log("Greetings");
      } else if (intro.includes(message.toLowerCase())) {
        temp.innerText =
          botResponses.introduction[
            Math.floor(Math.random() * botResponses.introduction.length)
          ];
        console.log("Intro");
      } else if (celebrations.includes(message.toLowerCase())) {
        temp.innerText =
          botResponses.celebration[
            Math.floor(Math.random() * botResponses.celebration.length)
          ];
        console.log("Celebrations");
      } else if (empath.includes(message.toLowerCase())) {
        temp.innerText =
          botResponses.empathy[
            Math.floor(Math.random() * botResponses.empathy.length)
          ];
        console.log("Empathy");
      } else if (reflections.includes(message.toLowerCase())) {
        temp.innerText =
          botResponses.reflection[
            Math.floor(Math.random() * botResponses.reflection.length)
          ];
        console.log("Reflections");
      } else if (humors.includes(message.toLowerCase())) {
        temp.innerText =
          botResponses.humor[
            Math.floor(Math.random() * botResponses.humor.length)
          ];
        console.log("Humor");
      } else if (positivity.includes(message.toLowerCase())) {
        temp.innerText =
          botResponses.positivity[
            Math.floor(Math.random() * botResponses.positivity.length)
          ];
        console.log("Positivity");
      } else if (motive.includes(message.toLowerCase())) {
        temp.innerText =
          botResponses.motivation[
            Math.floor(Math.random() * botResponses.motivation.length)
          ];
        console.log("Motivation");
      } else if (supports.includes(message.toLowerCase())) {
        temp.innerText =
          botResponses.support[
            Math.floor(Math.random() * botResponses.support.length)
          ];
        console.log("Supports");
      } else if (help.includes(message.toLowerCase())) {
        temp.innerText =
          botResponses.gratitude[
            Math.floor(Math.random() * botResponses.gratitude.length)
          ];
        console.log("Graditute");
      } else if (like.includes(message.toLowerCase())) {
        temp.innerText =
          botResponses.likes[
            Math.floor(Math.random() * botResponses.likes.length)
          ];
        console.log("Like");
      } else if (encourage.includes(message.toLowerCase())) {
        temp.innerText =
          botResponses.encouragement[
            Math.floor(Math.random() * botResponses.encouragement.length)
          ];
        console.log("Encouragement");
      } else if (curiosity.includes(message.toLowerCase())) {
        temp.innerText =
          botResponses.curios[
            Math.floor(Math.random() * botResponses.curios.length)
          ];
        console.log("Encouragement");
      } else if (bye.includes(message.toLowerCase())) {
        temp.innerText =
          botResponses.farewell[
            Math.floor(Math.random() * botResponses.farewell.length)
          ];
        console.log("Farewell");
      } else if (inappropriate.includes(message.toLowerCase())) {
        temp.innerText =
          botResponses.inappropriateLanguage[
            Math.floor(
              Math.random() * botResponses.inappropriateLanguage.length
            )
          ];
        console.log("inappropriateLanguage");
      } else if (fineResponses.includes(message.toLowerCase())) {
        temp.innerText =
          botResponses.fineResponses[
            Math.floor(Math.random() * botResponses.fineResponses.length)
          ];
        console.log("fineResponses");
      } else {
        temp.innerText =
          botResponses.generic[
            Math.floor(Math.random() * botResponses.generic.length)
          ];
        console.log("Generic");
      }
      var img = document.createElement("img");
      img.id = "messagebot";
      img.src = "./Images/messagebot.jpg";
      userMessages.appendChild(img);
      userMessages.appendChild(temp);
      temp.className = "bot";
      on.innerHTML = "";
      document.getElementById("btn").disabled = false;
    };

    window.addEventListener("keydown", (event) => {
      if (event.keyCode == 13) {
        user();
      }
    });

    document.getElementById("btn").addEventListener("click", user);
    document.getElementById("userinput").addEventListener("input", () => {
      if (document.getElementById("userinput").value != "")
        document.getElementById("btn").style.backgroundImage =
          "url('./Images/send.png')";
      else
        document.getElementById("btn").style.backgroundImage =
          "url('./Images/mic.png')";
    });
    var num = Math.floor(Math.random() * 2);
    if (num == 1) {
      document.getElementById("wrapper").style.backgroundImage =
        "url('./Images/wallpaper.jpg')";
    } else {
      document.getElementById("wrapper").style.backgroundImage =
        "url('./Images/background.png')";
    }
  });
