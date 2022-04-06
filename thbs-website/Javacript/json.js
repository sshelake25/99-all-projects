
let ana = {
    "settingsVersion": "2-3-0"
    "propertyName": "Learnlytica"
    "branding": {
        3 items
        "whitelabeled": false
        "text": "We're ⚡ by *tawk.to*"
        "url": "https://www.tawk.to/?utm_source=visitor-widget&utm_medium=link&utm_campaign=referral&utm_term=61a76b0a53b398095a66f22b"
    }
    "widget": {
        14 items
        "type": "inline"
        "version": 2
        "language": "en"
        "minimized": {
          
            "desktop": {
              
                "type": "1" //  ana.widget.minimized.desktop.type
            }
            "mobile": {
                1 item
                "type": "round"
            }
        }
        "maximized": {
            1 item
            "desktop": {
                2 items
                "height": 0
                "width": 0
            }
        }
        "bubble": {
            2 items
            "type": "image"
            "config": {
                7 items
                "width": 124
                "height": 79
                "zIndex": 1
                "rotate": 0
                "offsetX": 0
                "offsetY": 30
                "image": {
                    2 items
                    "type": "gallery"
                    "content": "168"
                }
            }
        }
        "theme": {
            3 items
            "header": {
                2 items
                "text": "#ffffff"
                "background": "#7349ad"
            }
            "agent": {
                2 items
                "messageText": "#ffffff"
                "messageBackground": "#039746"
            }
            "visitor": {
                2 items
                "messageText": "#333333"
                "messageBackground": "#e5e5e5"
            }
        }
        "notification": {
            3 items
            "all": {
                5 items
                "estimatedWaitTime": false
                "sound": true
                "agentTyping": true
                "visitorTyping": true
                "tab": true
            }
            "desktop": {
                1 item
                "preview": true
            }
            "mobile": {
                1 item
                "preview": true
            }
        }
        "behavior": {
            1 item
            "click": "max"
        }
        "visibility": {
            3 items
            "all": {
                1 item
                "showWhenOffline": true
            }
            "desktop": {
                2 items
                "position": "br"
                "show": true
            }
            "mobile": {
                2 items
                "position": "br"
                "show": true
            }
        }
        "features": {
            4 items
            "emoji": true
            "uploads": true
            "rating": true
            "transcript": true
        }
        "components": {
            3 items
            "liveChat": true
            "kb": true
            "webrtc": true
        }
        "scheduler": {
            1 item
            "enabled": false
        }
        "states": {
            3 items
            "online": {
                3 items
                "header": [2 items
    0: {
                        3 items
    "id": "heading:XN_bcE6cuF"
    "type": "heading"
    "content": {
                            2 items
    "value": "Hi there 👋"
    "alignment": "left"
                        }
                    }
    1: {
                        3 items
    "id": "text:VmTcSY50XU"
    "type": "text"
    "content": {
                            2 items
    "value": "Need help? Search our help center for answers or start a conversation:"
    "alignment": "left"
                        }
                    }
                ]
                "body": [3 items
    0: {
                        3 items
    "id": "kbs:rkCuZHwSq0"
    "type": "kb-search"
    "content": {
                            3 items
    "siteId": "primary"
    "linkTarget": "self"
    "inputPlaceholder": "Search for answers"
                        }
                    }
    1: {
                        3 items
    "id": "chat:AJRjWfzvd_"
    "type": "chat"
    "content": {
                            2 items
    "buttonText": "New Conversation"
    "inputPlaceholder": "Type here and press enter.."
                        }
                    }
    2: {
                        3 items
    "id": "pc:8p2LKKxMak"
    "type": "previous-conversations"
    "content": {}0 items
                    }
                ]
                "minimizedText": "Online"
            }
            "away": {
                3 items
                "header": [1 item
    0: {
                        3 items
    "id": "heading:vw5nEOXB7m"
    "type": "heading"
    "content": {
                            2 items
    "value": "Hi there 👋"
    "alignment": "left"
                        }
                    }
                ]
                "body": [2 items
    0: {
                        3 items
    "id": "kbs:VqdpbmmzRe"
    "type": "kb-search"
    "content": {
                            3 items
    "siteId": "primary"
    "linkTarget": "self"
    "inputPlaceholder": "Search for answers"
                        }
                    }
    1: {
                        3 items
    "id": "chat:AU8kLlsMNY"
    "type": "chat"
    "content": {
                            2 items
    "buttonText": "New Conversation"
    "inputPlaceholder": "Type here and press enter.."
                        }
                    }
                ]
                "minimizedText": "Away"
            }
            "offline": {
                3 items
                "header": [1 item
    0: {
                        3 items
    "id": "text:PVAxm_k3n3"
    "type": "text"
    "content": {
                            2 items
    "value": "Please fill out the form below and we will get back to you as soon as possible."
    "alignment": "center"
                        }
                    }
                ]
                "body": [1 item
    0: {
                        3 items
    "id": "form:ookBeDVuGj"
    "type": "form"
    "content": {
                            1 item
    "fields": [3 items
    0: {
                                    4 items
    "label": "Name"
    "required": true
    "type": "text"
    "context": "name"
                                }
    1: {
                                    5 items
    "label": "Email"
    "required": true
    "type": "text"
    "context": "email"
    "format": "email"
                                }
    2: {
                                    3 items
    "label": "Message"
    "required": true
    "type": "textarea"
                                }
                            ]
                        }
                    }
                ]
                "minimizedText": "Send message"
            }
        }
    }
}
