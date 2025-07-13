import HomeFooterCss from './HomeFooter.module.css';
function HomeFooter() {

    return (
        <>
            <div className={HomeFooterCss['foorter-main-div']}>
                <div className="row">
                    <p>
                        Questions? Call
                        <a href="tel:000-800-919-1743 "> 000-800-919-1743</a>
                    </p>
                </div>
                <div className="row">
                    <div className="col-3">
                        <a href="https://help.netflix.com/en/node/412">FAQ</a><br></br>
                        <a href="https://help.netflix.com/en/node/412">Help Centre</a><br></br>
                        <a href="https://help.netflix.com/en/node/412">Account</a><br></br>
                        <a href="https://help.netflix.com/en/node/412">Media Centre</a><br></br>
                    </div>
                    <div className="col-3">
                        <a href="https://help.netflix.com/en/node/412">Investor Relations</a><br></br>
                        <a href="https://help.netflix.com/en/node/412">Jobs</a><br></br>
                        <a href="https://help.netflix.com/en/node/412">Ways to Watch</a><br></br>
                        <a href="https://help.netflix.com/en/node/412">Terms of Use</a><br></br>
                    </div>
                    <div className="col-3">
                        <a href="https://help.netflix.com/en/node/412">Privacy</a><br></br>
                        <a href="https://help.netflix.com/en/node/412">Cookie Preferences</a><br></br>
                        <a href="https://help.netflix.com/en/node/412">Corporate Information</a><br></br>
                        <a href="https://help.netflix.com/en/node/412">Only on Netflix</a><br></br>
                    </div>
                    <div className="col-3">
                        <a href="https://help.netflix.com/en/node/412">Speed Test</a><br></br>
                        <a href="https://help.netflix.com/en/node/412">Legal Notices</a><br></br>
                        <a href="https://help.netflix.com/en/node/412">Contact Us</a><br></br>
                    </div>
                </div>
                <div className="row">
                    <div className='col-1'>
                        <select className={HomeFooterCss['lang-select']}>
                            <option>English</option>
                            <option>Marathi</option>
                        </select>
                    </div>
                </div>
                <div className='row'>
                    <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href='' className={HomeFooterCss['txt-learn-more']}>Learn more.</a></p>
                </div>
            </div >
        </>
    )
}
export default HomeFooter;