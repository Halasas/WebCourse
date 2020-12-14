var chatbox = document.getElementById("chat-box");
var inputcontainer = document.getElementById("input-message-container");
var nouns = ["голубь","мешок","носок","пингвин","порошок","гвоздь","слон","выход", "бургер"];
var verbs = ["булькает","отсвечивает","тронулся","просто стоит","останавливает время","дёргается","идёт за энергосом","делает эйс"];
var adjectives = ["Золотой","Сумасшедший","Звёздный","Свинцовый","Мясной","Крабовый","Кожаный","Бродячий"];

chatbox.style = "padding: 4% 1% " + (inputcontainer.clientHeight + 20) + "px";

AddMessage("Hi", "outgoing");

function AddMessage(text, type) {
    var message = document.createElement("div");
    if(type == 'outgoing') {
        message.append(tmplMessageOut.content.cloneNode(true));
    }
    else if (type == 'incoming') {
        message.append(tmplMessageIncom.content.cloneNode(true));
    }
    if(text) {
        message.firstElementChild.firstElementChild.textContent = text;
        message.firstElementChild.lastElementChild.textContent 
        = checkTime(new Date().getHours()) + ':' +  checkTime(new Date().getMinutes()); 
        chatbox.appendChild(message);
        inputTextField.value = '';
    }
}

function SendMessage() {
    var text = inputTextField.value;
    AddMessage(text, 'outgoing');
    inputTextField.value = '';
    if(text) {
        SendReply(GetReply());
    }
    window.scrollTo(0, document.body.clientHeight);
}

function GetReply() {
    var reply = adjectives[getRandomInd(adjectives.length)] + ' ' +
    nouns[getRandomInd(nouns.length)] + ' ' +
    verbs[getRandomInd(verbs.length)];
    return reply;
}

function SendReply(text) {
    AddMessage(text, 'incoming');
    inputTextField.value = '';
}

function DeleteMessage(elem) 
{
    elem.parentElement.parentElement.remove();
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function getRandomInd(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }