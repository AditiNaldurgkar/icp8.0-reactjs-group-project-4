import React, { useState} from "react";
import './Form.css';
import toast from "react-hot-toast";

const Form = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [degree, setDegree] = useState('');
    const [institude, setInstitude] = useState('');
    const [mno, setMobile] = useState('');
    const [exp, setExperiance] = useState('');
    const [expertise, setExpertise] = useState('');
    const [company, setCompany] = useState('');
    const [job, setJob] = useState('');
    const [desc, setDecriptions] = useState('');
    const [keyskill, setkeyskill] = useState('');
    const [linkedIn, setLinkedIn] = useState('');
    const [file, setFile] = useState('');

    function Add() {

        const items = JSON.parse(localStorage.getItem("items")) || [];

        const itmsobj = {
            name,
            email,
            degree,
            institude,
            exp,
            mno,
            expertise,
            desc,
            company,
            job,
            keyskill,
            linkedIn,
            file
        }

        items.push(itmsobj);

        localStorage.setItem("items", JSON.stringify(items));

        toast.success("Note Added Successfully!");

        setName('');
        setEmail('');
        setDegree('');
        setInstitude('');
        setExperiance('');
        setExpertise('');
        setMobile('');
        setDecriptions('');
        setCompany('');
        setFile('');
        setJob('');
        setkeyskill('');
        setLinkedIn('');
    }



    return (
        <>
            <form onSubmit>
                <div className="frm-holder">

                        <div className="profile">

                            <input type="file"
                                className="fileupload"
                                accept="image/png,image/jpeg"
                                onChange={(e) => {
                                    setFile(e.target.files[0]);
                                }
                                }
                                required >
                            </input>

                            <div className="input-gup">
                                <label for="degre">Degress Obtained</label>
                                <input type="text" id="degre" className="input" placeholder="Enter Degree" required onChange={(e) => { setDegree(e.target.value) }} />
                            </div>

                            <div className="input-gup">
                                <label for="institude">Institutions Attended</label>
                                <input type="text" id="institude" className="input" placeholder="Enter Institutions Attended" required onChange={(e) => { setInstitude(e.target.value) }} />
                            </div>

                            <div className="input-gup">
                                <label for="exp">Recuriter's Exp.</label>
                                <input type="text" id="exp" className="input" placeholder="Enter Recuriter Experiance" required onChange={(e) => { setExperiance(e.target.value) }} />
                            </div>

                            <div className="input-gup">
                                <label for="link">LinkedIn Profile</label>
                                <input
                                    type="text"
                                    id="link"
                                    className="input"
                                    placeholder="Enter Link Of Profile"
                                    required
                                    onChange={(e) => { setLinkedIn(e.target.value) }} />
                            </div>

                            <div className="input-gup">
                                <label for="skill">Enter Key Skills</label>
                                <input
                                    type="text"
                                    id="skill"
                                    className="input"
                                    placeholder="Enter Skills"
                                    required
                                    onChange={(e) => { setkeyskill(e.target.value) }} />
                            </div>
                        </div>



                        <div className="right">

                            <div className="input-gup">
                                <label for="name">Full Name</label>
                                <input type="text" id="name"
                                    className="input"
                                    placeholder="e.g John Hardi"
                                    required
                                    onChange={(e) => { setName(e.target.value) }} />
                            </div>

                            <div className="input-gup">
                                <label for="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="input"
                                    placeholder="Email id"
                                    required
                                    onChange={(e) => { setEmail(e.target.value) }} />
                            </div>

                            <div className="input-gup">
                                <label for="number">Mobile No.</label>
                                <input
                                    type="number"
                                    id="number"
                                    className="input"
                                    placeholder="+91 1254976843"
                                    required
                                    onChange={(e) => { setMobile(e.target.value) }} />
                            </div>


                            <div className="input-gup">
                                <label for="job">Job Title</label>
                                <input
                                    type="text"
                                    id="job"
                                    className="input"
                                    placeholder="Enter Job Title"
                                    required
                                    onChange={(e) => { setJob(e.target.value) }} />
                            </div>

                            <div className="input-gup">
                                <label for="exper">Expertise</label>
                                <input type="text" id="exper" className="input" required placeholder="Expertise" onChange={(e) => { setExpertise(e.target.value) }} />
                            </div>

                            <div className="input-gup">
                                <label for="textarea">Company Descriptions </label>
                                <textarea
                                    cols={10}
                                    rows={5}
                                    id="textarea"
                                    placeholder="Enter Details Of Company..."
                                    required
                                    onChange={(e) => { setDecriptions(e.target.value) }}>

                                </textarea>
                            </div>

                            <div className="input-gup center">
                                <button className="btn" onClick={Add}>Add Details</button>
                            </div>
                        </div>
                    </div>
            </form>


        </>
    )

}

export default Form;