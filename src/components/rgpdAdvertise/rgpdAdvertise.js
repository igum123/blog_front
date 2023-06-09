import React, { useCallback, useEffect, useState } from "react";

import styles from "./container.module.css";

import Button from '../inputs/button';


function RgpdAdvertise() {
    const [showing, setShowing] = useState(true);

    const addRgpd = useCallback(() => {
        const rgpd = document.createElement('script');
        rgpd.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', ${'399112514884906'});
        fbq('track', 'PageView');
      `;

        const google = document.createElement('script');
        google.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=G-HNQGJJY5TM');
        const googleCode = document.createElement('script');
        googleCode.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-HNQGJJY5TM');`;

        const hotjar = document.createElement('script');
        hotjar.innerHTML = `
                (function(h,o,t,j,a,r){
                    h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
                h._hjSettings={hjid:3228990,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`;

        let head = document.getElementsByTagName('head')[0];
        console.log(head)
        if (head) {
            head.appendChild(rgpd);
            head.appendChild(google);
            head.appendChild(googleCode);
            head.appendChild(hotjar);
        }
    }, []);

    useEffect(() => {
        const isAsking = localStorage.getItem('rgpd');
        if (isAsking) {
            setShowing(false);
        }
        const isAgree = localStorage.getItem('rgpd-agree');
        console.log(isAgree)
        if (isAgree) {
            addRgpd();
        }
    }, []);

    return (
        <div className={`${styles.advertise} ${showing ? styles.show : ''}`}>
            <p>Chez MeetCo, nous utilisons des cookies pour la personnalisation de nos publicités et dans le but d'annalyser notre trafic. Vous pouvez continuer votre navigation sans cookie ou les accepter.</p>
            <Button onClick={() => {
                addRgpd();
                localStorage.setItem('rgpd', true);
                localStorage.setItem('rgpd-agree', true);
                setShowing(false);
            }}>
                Accepter
            </Button>
            <Button onClick={() => {
                localStorage.setItem('rgpd', true);
                setShowing(false);
            }}>
                Refuser
            </Button>
        </div>
    );
}

export default RgpdAdvertise;