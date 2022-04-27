import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import DailyIframe from '@daily-co/daily-js';


export default function Video({ match }) {
    let { id } = useParams();
    console.log(id)

    useEffect(() => {
        const domain = 'https://beatsup.daily.co/';
        const url = 'http://localhost:3000';
        axios
            .get(`${url}/video-call/${id}`)
            .then((res) => {
                if (res.status === 200) {
                    const callFrame = DailyIframe.createFrame({
                        iframeStyle: {
                            position: 'absolute',
                            top: "20%",
                            right: "20%",
                            width: '60%',
                            height: '85%',
                        },
                        showLeaveButton: true,
                        showFullscreenButton: true,
                    }).join({
                        url: domain + id,
                    });
                    document.body.appendChild(callFrame);
                }
            })
            .catch((err) => console.log(err));
    }, [id]);



    return <React.Fragment>
        <br /><br /><br />
        <><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></>;
    </React.Fragment>
}
