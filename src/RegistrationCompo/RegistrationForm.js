import { useEffect, useState } from "react";
import HomeNavBar from "../HomeCompo/HomeNavBar/HomeNavBar";
import StepOne from "../SignInCompo/SignInSteps/StepOne";
import StepTwo from "../SignInCompo/SignInSteps/StepTwo";
import StepThree from "../SignInCompo/SignInSteps/StepThree";
import StepFour from "../SignInCompo/SignInSteps/StepFour";

function RegistrationForm() {
  const [step, setStep] = useState(1);

  function disableLang() {
    let langBox = document.getElementById("language-selector");
    let btnSignIn = document.getElementById("btn-signin");
    if (langBox) langBox.style.display = "none";
    if (btnSignIn) {
      btnSignIn.style.alignSelf = "right";
      btnSignIn.style.backgroundColor = "transparent";
      btnSignIn.style.color = "black";
    }
  }

  const goNext = () => {
    setStep((prev) => prev + 1);
  };

  useEffect(() => {
    disableLang();
  }, []);

  return (
    <>
      <HomeNavBar />
      <div>
        {step === 1 && <StepOne onNext={goNext} />}
        {step === 2 && <StepTwo onNext={goNext}/>}
        {step == 3 && <StepThree onNext={goNext}/>}
        {step == 4 &&  <StepFour onNext={goNext}/>}
      </div>
    </>
  );
}

export default RegistrationForm;
