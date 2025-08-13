import {checkCircle} from "@heroicons/react/24/outline";

function StepFour({onNext}) {


    return (
        <>
            <div className="flex items-center justify-center ">
                <div className="flex flex-col items-center justify-center h-auto w-[60vh] text-center p-[1em]">
                    <checkCircle/>
                    <button onClick={onNext}
                        className="bg-red-600 m-1 mt-4 hover:bg-red-700 text-white py-3 px-6 rounded text-[1em] w-full font-medium  ">
                        Verify
                    </button>
                </div>
            </div>
        </>
    );

}

export default StepFour;