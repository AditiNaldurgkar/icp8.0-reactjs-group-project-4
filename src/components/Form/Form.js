import React, { useState } from "react";
import './Form.css';

const Form = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mno, setMobile] = useState("");
    const [txt, setTxt] = useState("");
    const[exp,setExp] = useState("");
    const[expertise,setExpertise] = useState("");
    const[file,setFile] = useState("");

    return (
        <>
            <form>

                <div className="frm-holder">

                    <div className="profile">
                        <input type="file" 
                        className="fileupload" 
                        accept="image/png,image/jpeg" 
                        onChange={
                            (e)=>{setFile(e.target.files[0])
                            console.log(files);
                        }}
                        required/>
                    </div>

                    <div className="input">

                        <div className="input-gup">
                            <label for="name">Name {name}</label>
                            <input type="text" id="name" className="input" placeholder="e.g John Hardi" required onChange={(e) => { setName(e.target.value) }} />
                        </div>

                        <div className="input-gup">
                            <label for="email">Email {email}</label>
                            <input type="email" id="email" className="input" placeholder="Email id" required onChange={(e) => { setEmail(e.target.value) }} />
                        </div>

                        <div className="input-gup">
                            <label for="number">Mobile No. {mno}</label>
                            <input type="number" id="number" className="input" placeholder="+91 1254976843" required onChange={(e) => { setMobile(e.target.value) }} />
                        </div>

                        <div className="input-gup">
                            <label for="exp">Recuriter's Exp. {exp}</label>
                            <input type="text" id="exp" className="input" placeholder="Enter Recuriter Experiance" required onChange={(e) => { setExp(e.target.value) }} />
                        </div>

                        <div className="input-gup">
                            <label for="exper">Expertise {expertise}</label>
                            <input type="text" id="exper" className="input" required onChange={(e) => { setExpertise(e.target.value) }} />
                        </div>

                        <div className="input-gup">
                            <label for="textarea">Company Descriptions {txt}</label>
                            <textarea cols={30} rows={10} id="textarea" placeholder="Enter Details Of Company..." required onChange={(e) => { setTxt(e.target.value) }}></textarea>
                        </div>

                        <div className=" input-gup">
                            <button className="btn">Update Profile</button>
                        </div>

                    </div>
                </div>
            </form>
        </>
    )

}

export default Form;