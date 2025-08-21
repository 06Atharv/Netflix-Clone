import { useState } from "react";
import { Table } from "react-bootstrap";

let planArrObj = [
    {
        planId: 1,
        planName: "Basic",
        PlanPrice: 199,
        resolution: "720p (HD)",
        quality: "Good",
        supportedDevices: "TV, computer, mobile phone, tablet",
        deviceCount: 2,
        download: 1
    },
    {
        planId: 2,
        planName: "Standard",
        PlanPrice: 399,
        resolution: "1080p (Full HD)",
        quality: "Better",
        supportedDevices: "TV, computer, mobile phone, tablet",
        deviceCount: 4,
        download: 2
    },
    {
        planId: 3,
        planName: "Premium",
        PlanPrice: 599,
        resolution: "4K (Ultra HD)",
        quality: "Best",
        supportedDevices: "TV, computer, mobile phone, tablet",
        deviceCount: 6,
        download: 4
    },
    {
        planId: 4,
        planName: "Mobile",
        PlanPrice: 149,
        resolution: "480p (SD)",
        quality: "Fair",
        supportedDevices: "Mobile phone, tablet",
        deviceCount: 1,
        download: 1
    }
]

function PlanPage() {

    const TailwindTableColumn1 = "text-base font-montserrat";
    const TailwindTableColumn2 = "text-right font-bold font-montserrat";
    const TailwindTableRow = "border-b border-gray-300 p-1";
    let [price, setPrice] = useState("199");
    let [resolution, setResolution] = useState("Good");
    let [quality, setQuality] = useState("720 (HD)");
    let [devices, setDevices] = useState("TV, computer, mobile phone, tablet");
    let [deviceCount, setDevicesCount] = useState("2");
    let [download, setDownload] = useState("1");

    function funFocusGain(i, index) {
        console.log("Focus Gain");
        setPrice(planArrObj[index].PlanPrice);
        setResolution(planArrObj[index].resolution);
        setQuality(planArrObj[index].quality);
        setPrice(planArrObj[index].PlanPrice);
        setDevices(planArrObj[index].supportedDevices);
        setDevicesCount(planArrObj[index].deviceCount);
        setDownload(planArrObj[index].download);
    }

    return (
        <>
            <div className="w-auto h-auto ml-[20vh] mr-[20vh] flex-block place-items-center-safe">
                <div className="m-3">
                    <p className="text-gray-700">STEP <b>4</b> OF <b>4</b></p>
                    <h1 className="font-bold text-[2em]">Choose the plan that’s right for you</h1>
                </div>
                <div className="h-full w-full pt-5 pb-5 inline-flex p-2 place-content-around">
                    {
                        planArrObj.map((i, index) => (
                            <div
                                key={index}
                                onFocus={() => funFocusGain(i, index)}
                                className="border border-gray-800 p-4 rounded-xl w-[20%] h-[35vh] max-w-[50vh] focus:shadow-xl focus:shadow-black/10  focus:bg-gradient-to-b focus:from-purple-500 focus:to-pink-500 focus:text-slate-100"
                                tabIndex={0}>
                                <h5 className=" text-[1.3em]"><b>{i.planName}</b></h5>
                                <h6 className="text-[1.1em]">{i.resolution}</h6>
                            </div>
                        ))
                    }
                </div>
                <div className="flex">
                    <Table className="border-collapse w-full max-w-full">
                        <tbody>
                            <tr className={TailwindTableRow}>
                                <td className={TailwindTableColumn1}>Monthly Price</td>
                                <td className={TailwindTableColumn2}>{price}</td>
                            </tr>
                            <tr className={TailwindTableRow}>
                                <td className={TailwindTableColumn1} >Video and sound quality</td>
                                <td className={TailwindTableColumn2}>{quality}</td>
                            </tr>
                            <tr className={TailwindTableRow}>
                                <td className={TailwindTableColumn1}>Resolution</td>
                                <td className={TailwindTableColumn2}>{resolution}</td>
                            </tr>
                            <tr className={TailwindTableRow}>
                                <td className={TailwindTableColumn1}>Supported devices</td>
                                <td className={TailwindTableColumn2}>{devices}</td>
                            </tr>
                            <tr className={TailwindTableRow}>
                                <td className={TailwindTableColumn1}>Devices your household can watch at the same time</td>
                                <td className={TailwindTableColumn2}>{deviceCount}</td>
                            </tr>
                            <tr className={TailwindTableRow}>
                                <td className={TailwindTableColumn1}>Download devices</td>
                                <td className={TailwindTableColumn2}>{download}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <p className=" m-2 text-justify text-gray-500">HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our Terms of Use for more details.
                    Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.
                    Live events are included with any Netflix plan and contain ads.
                </p>

                <button
                    className="bg-red-600 m-1 mt-4 hover:bg-red-700 text-white py-3 px-6 rounded text-[1em] w-[70%] h-auto font-medium block mx-auto">                    Next
                </button>
            </div >
        </>
    )
}

export default PlanPage;