import SignInCss from './SignIn.module.css';
import Ntflogo from '../Images/HomeImg/ntflogo.png';
import SignFooter from './SiginFooter/SignFooter';


function SignIn(params) {


    function forgetPassword() {}

    function funSignIn() {
        console.log("logeed In");
        
    }

    return (
        <>
            <div className={SignInCss['signin-ui']}>
                <div className={SignInCss['nav-bar']}>
                    <img src={Ntflogo} className={SignInCss['ntf-logo']} alt="Netflix Logo" />
                </div>
                <div className={`w-[30em] p-16 pt-10 place-self-center block justify-center mt-[1em] text-white ${SignInCss['sigin-panel-div']}`}>
                    <h4>Sign In</h4>
                    <input type='text' placeholder='Email or Mobile Number' className={`${SignInCss['email-pass-ip']} block w-full mt-[2em] h-[3.4em] p-3`} />
                    <input type='password' placeholder='Password' className={`${SignInCss['email-pass-ip']} block w-full mt-[1em] h-[3.4em] p-3`} />
                    <input type='button' value="Sign In" onClick={funSignIn} className={'w-full h-[2.6em] mt-3 rounded-[5px] bg-red-600 text-white font-bold'} />
                    <label className="block text-center m-3 text-gray-300">OR</label>
                    <input type='button' value="Use a sign-in code" className="w-full h-[2.6em] rounded-md bg-[rgba(237,237,237,0.2)] text-white font-bold" />
                    <a href="h" onClick={forgetPassword} className='block text-center m-3 text-white'>Forgot Password?</a>
                    <div>
                        <label className="inline-flex items-center">
                            <input type="checkbox" className="h-[1.2em] w-[1.2em] accent-red-600" />
                            <span className="ml-2 bg-transparent">Remember me</span>
                        </label>
                    </div>
                    <span className='text-gray-300'>
                        New to Netflix? <a href='ddd' className='text-white'>Sign Up now.</a>
                    </span>
                    <p className='text-[0.8em] mt-[2em]'>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot.
                    </p>
                </div>
            </div>
            <SignFooter></SignFooter>            
        </>
    )
}

export default SignIn;