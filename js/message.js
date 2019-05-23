let msgCont = document.querySelector("div .msg-cont");



function sendMsg() {
    let newMsg = document.getElementById("newMsg");

    if (newMsg.value == "") {
        return
    }
    let message = document.createElement("div");
    msgCont.appendChild(message);
    message.className = 'msg';
    message.classList.add('sent');
    // message.children.item(1).innerHTML = newMsg.value;
    message.innerHTML = `<p> ${newMsg.value} <p>` ;
    message.scrollIntoView(true);
    newMsg.value = "";

    respond();
    // console.log(message.childNodes.item(1).value);
}

let  replies = ['so what do you think?', 'let me know ok?',
  'call the tech support', 'who is the developer?'];
  
let i = 0;

function respond() {
    

    var reply = replies[i];
    
    i++;
    if (i >= replies.length) {
        i = 0;
    }
    
    let message = document.createElement("div");
    msgCont.appendChild(message);
    message.className = 'msg';
    message.classList.add('received');
    message.innerHTML = `<p> ${reply} <p>` ;
    message.scrollIntoView(true);
}