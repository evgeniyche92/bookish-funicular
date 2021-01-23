import {rerenderEntireTree} from "../render";

let state = {
    mainPage: {
        friend: [
            {id: 1, name: 'Ivan'},
            {id: 2, name: 'Mikhail'},
            {id: 3, name: 'Elena'},
            {id: 4, name: 'Viktor'},
            {id: 5, name: 'Svetlana'},
            {id: 6, name: 'Mina'},
        ],
        postData: [
            {id: 1, message: 'Hello, my first post of React App', like: '80'},
            {id: 2, message: 'I want to be a fullstack developer', like: '20'},
            {id: 3, message: 'I want to be a fullstack developer (React JS & Node JS)', like: '34'},
            {id: 4, message: 'I want to be a developer', like: '45'}
        ],
newPostText:' ',
    },

    messagePage: {
        messages: [
            {id: 1, message: 'STATE !!!!'},
            {id: 2, message: 'Where are you?'},
            {id: 3, message: 'Hello my dear friend'},
            {id: 4, message: 'YO HO HO'},
            {id: 5, message: 'YO'},
            {id: 6, message: 'React APP'},
            {id: 7, message: 'Redux'},
            {id: 8, message: 'Node JS'},
            {id: 9, message: 'YO Yo YO'},
        ],
        dialogsElement: [
            {id: 1, name: 'Mark'},
            {id: 2, name: 'Evgeniy'},
            {id: 3, name: 'Sasha'},
            {id: 4, name: 'Misha'},
            {id: 5, name: 'Grigory'},
            {id: 6, name: 'Yura'},
            {id: 7, name: 'Gena'},
            {id: 8, name: 'Mira'}]
    },

    newsPage: {
        news: [
            {id: 1, news: 'Hi'},
            {id: 2, news: 'How are you?'},
            {id: 3, news: 'Hello my dear friend'},
            {id: 4, news: 'YO HO HO'},
            {id: 5, news: 'YO '},
            {id: 6, news: 'React APP'},
            {id: 7, news: 'Redux'},
            {id: 8, news: 'Node JS'},
            {id: 9, news: 'YO Yo YO'},
        ]

    },
    musicPage: {},
    settingsPage: {},

}
window.state=state;

export let addPosts = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        like: 0,
    };
    state.mainPage.postData.push(newPost);
    rerenderEntireTree(state);
}

export let sendMessage = (send) => {
    let newMessage = {
        id: 10,
        messages: send,
    };
    state.messagePage.messages.push(newMessage);
    rerenderEntireTree(state);
}

export let updateTextPost = (newText) => {
    state.mainPage.newPostText = newText;

    rerenderEntireTree(state);

}
export default state;
