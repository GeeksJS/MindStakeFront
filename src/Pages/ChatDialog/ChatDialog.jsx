import React, { useEffect } from 'react';
function ChatDialog() {

    useEffect(() => {
        (function (d, m) {
            var kommunicateSettings = {
                "appId": "2803fc25ba6a7b8cc3610af437e2513b0",
                "popupWidget": true,
                "automaticChatOpenOnNavigation": true
            };
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app"; 
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    });
    return (<div>
        
    </div>
    )
}

export default ChatDialog