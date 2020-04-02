'use strict'

import '../../common/css/normalize.css';
import '../../common/css/skeleton.css';
import './styles.css';

const chatForm = document.querySelector('#chat-form');
const msgList = document.querySelector('#msg-list');
const userNameInput = document.querySelector('#username-input');
const msgInput = document.querySelector('#msg-input');

const ws = new WebSocket('wss://fep-app.herokuapp.com/');
chatForm.addEventListener('submit', onSubmitForm);

let msgs = [];

ws.onmessage = onSocketMessage;

function onSocketMessage(message) {
    const packetData = JSON.parse(message.data);
    createMsgElement(packetData.payload);
}

function onSubmitForm(e) {
    e.preventDefault();
    const msgObj = getInputData();
    sendMsg(msgObj);
    createMsgElement(msgObj);
    addMsg(msgObj);
    resetForm();
}

function sendMsg(msg) {
    ws.send(
        JSON.stringify({
            action: 'message',
            payload: msg
        })
    )
}

function addMsg(msg) {
    msgs.push(msg);
}

function createMsgElement(msg) {
    const li = document.createElement('li');
    li.innerHTML = `${msg.author}: ${msg.message}`;
    msgList.appendChild(li);
}

function getInputData() {
    return {
        author: userNameInput.value,
        message: msgInput.value
    }
}

function resetForm() {
    chatForm.reset();
}