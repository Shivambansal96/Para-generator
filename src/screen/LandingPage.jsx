import { useState } from "react";
import {data} from "../components/Data.js";

function LandingPage() {

    const [noOfPara, setNoOfPara] = useState();
    const [para, setPara] = useState(["Para will be generated here!"]);

    // if(noOfPara  === 0) setNoOfPara("");


        function generateParagraphs() {

            if(noOfPara > 0 && noOfPara <= 8) {
            
                let TempPara = [];   

                    for (let i = 0; i < noOfPara; i++) {
                    // console.log(noOfPara)

                        TempPara[i] = data[i];
                    }

                    setPara([...TempPara]);
            }   

                if(noOfPara == 0) {
                    alert('Enter a number above 0!!! 🚀')
                }

                else if(noOfPara < 0) {
                    alert('Negative numbers not allowed!!! 😵')
                }

                else if(noOfPara > 8) {
                    alert('Number above limit! 💥')
                }

        }


    
    return(
        <div id="landing-page" className=" flex flex-col justify-center items-center gap-10 p-5">

                <div className="flex flex-col justify-center items-center h-1/5 w-2/5 border-2 gap-5 p-5">
                    <div>
                        <h1 className="text-center text-2xl font-medium">TIRED OF BORING LOREM IPSUM?</h1>
                    </div>

                    <div className="flex justify-around">
                        <div className="flex items-center">
                            <h1 className=" text-lg">Paragraphs:</h1>
                        </div>

                        <div className="border-2 w-1/5">
                            <input type="number" name="" id="input-field" onChange={(e) => {setNoOfPara(Number(e.target.value))}} value={noOfPara} className="px-2 w-full h-full"/>
                        </div>

                        <div>
                            <input type="button" onClick={generateParagraphs} value="GENERATE" className=" bg-cyan-500 px-2 py-2 rounded-lg hover:cursor-pointer hover:bg-red-600 hover:text-white"/>
                        </div>
                    </div>
                </div>

                <div id="result" className="w-3/4 text-center flex flex-col gap-3">
                    {para.map((item) => {
                        return(
                            <div className="border-2 border-cyan-800 p-5 hover:shadow-2xl shadow-black  hover:cursor-pointer">
                                <p>{item}</p>
                            </div>
                        );
                    })}
                </div>

                

        </div>
    )
}

export default LandingPage;