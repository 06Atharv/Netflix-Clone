import LoginInputCss from './LoginInput.module.css';
function LoginInput(params) {

    return (
        <>
            <h4 className={LoginInputCss['textLoginInput']}>Ready to watch? Enter your email to create or restart your membership.</h4>
            <div className={LoginInputCss['signin-field-div']}>
                <input type='email' className={LoginInputCss['email-ip-field']} placeholder='Email Address' />
                <button className={LoginInputCss['btn-getstarted']}>
                    Get Started <i className='bi bi-chevron-right'></i>
                </button>
            </div>
        </>
    )
}
export default LoginInput;