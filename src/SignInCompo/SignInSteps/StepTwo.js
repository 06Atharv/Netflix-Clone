function StepTwo({ onNext }) {


    return (
        <>
            <div className="flex-block h-auto w-[60vh] justify-self-safe-center place-self-center p-[1em]">
                <p className="text-gray-700">STEP 2 OF 4</p>
                <h1 className="font-bold">Create a password to start your membership</h1>
                <h5 className="m-2 mb-4">Just a few more steps and you're done! We hate paperwork, too.</h5>
                <input type="text" placeholder="Email ID or Phone No" className="w-full h-[2.8em] m-1 p-3 border border-black rounded-[3px] text-black hover:border-double" />
                <input type="password" placeholder="Set Password" className="w-full h-[2.8em] m-1 p-3 border border-black rounded-[3px] text-black hover:border-double" />
                <button
                    onClick={onNext}
                    className="bg-red-600 m-1 mt-4 hover:bg-red-700 text-white py-3 px-6 rounded w-full font-medium">
                    Next
                </button>
            </div>
        </>
    )
}

export default StepTwo;