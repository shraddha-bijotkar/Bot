import {ChatUx} from 'chatux';

const chatux = new ChatUx();

const opt = {
    api: {
        endpoint: 'http://localhost:8080/chat',//URL of chat server
        method: 'GET',                         //HTTP METHOD
        dataType: 'json'                       //DATA TYPE
    },
    bot: {
        wakeupText: 'hi',//user input which is automatically send to server on startup
        botPhoto: 'https://img.icons8.com/color/48/000000/bot.png',//URL of bot photo image
        humanPhoto: 'https://img.icons8.com/color/48/000000/customer-skin-type-7.png',//URL of human photo image
        widget: {
            sendLabel: 'SEND',
            placeHolder: 'Say something'
        }
    },
    window: {
        title: 'Search FAQs',
        size: {
            width: 350,
            height: 500,
            minWidth: 300,
            minHeight: 300,
            titleHeight: 50
        },
        appearance: {
            border: {
                shadow: '2px 2px 10px  rgba(0, 0, 0, 0.5)',
                width: 0,
                radius: 6
            },
            titleBar: {
                fontSize: 14,
                color: 'white',
                background: '	#303030',
                leftMargin: 40,
                height: 40,
                buttonWidth: 36,
                buttonHeight: 15,
                

                buttons: [
                    {
                        fa: 'fas fa-times',
                        name: 'hideButton',
                        visible: true
                    }
                ],
                buttonsOnLeft: [
                    {
                        fa: 'fas fa-comment-alt',
                        name: 'info',
                        visible: true
                    }
                ],
            },
        }
    }
};

//initialize
chatux.init(opt);

let isAutoStartChat = true;
if (chatux.isMobileDevice()) {
    isAutoStartChat = false;
}

chatux.start(isAutoStartChat);
