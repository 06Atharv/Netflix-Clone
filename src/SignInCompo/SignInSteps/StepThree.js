import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

function StepThree({onNext}) {

    const navigate = useNavigate();
    function funVerify(params) {
       onNext();
    }

    return (
        <div className="flex items-center justify-center ">
            <div className="flex flex-col items-center justify-center h-auto w-[60vh] text-center p-[1em]">
                <ShieldCheckIcon className="text-red-500 w-[3em]" />
                <p className="text-gray-700">STEP 3 OF 4</p>
                <h1 className="font-bold text-[2em]">Great, now let us verify your email</h1>
                <h5 className="m-2 mb-4">Click the link we sent to<b> abcg@gmail.com to verify.</b></h5>
                <p>Verifying your email will improve account security and help you receive important Netflix communications.</p>
                <input type="text" placeholder="Verification Code Here" id="txtVerificationCode" className="border border-black w-full text-center text-[1.3em] rounded h-[6vh]" />
                <button onClick={funVerify}
                    className="bg-red-600 m-1 mt-4 hover:bg-red-700 text-white py-3 px-6 rounded text-[1em] w-full font-medium  ">
                    Verify
                </button>
            </div>
        </div>
    )
}
export default StepThree;