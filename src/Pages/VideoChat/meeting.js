import React, { useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import DailyIframe from '@daily-co/daily-js';


export default function Video({ match }) {
    let { id } = useParams();
    console.log(id)

    useEffect(() => {
        const domain = 'https://beatsup.daily.co/';
        const url = `${process.env.REACT_APP_API_URL}`;
        axios
            .get(`${url}/video-call/test`)
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
                        url: domain + 'test',
                    });
                    document.body.appendChild(callFrame);
                }
            })
            .catch((err) => console.log(err));
    }, [id]);



    return <React.Fragment>
        <a  style={{ marginLeft: "1100px" , marginTop:"25px"}} data-bs-toggle="tooltip" data-bs-placement="top" title="Close video chat" href="/">
            <span style={{color: "red"}}>
            <i class="fa fa-phone fa-2x" ></i>
            </span>
        </a>
        <br /><br /><br />
        <><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></>;

    </React.Fragment>
}
