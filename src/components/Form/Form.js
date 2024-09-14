import React, { useState } from "react";
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
    // const [file, setFile] = useState('');
    const [gender, setGender] = useState('')

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
            // file,
            gender
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
        // setFile('');
        setJob('');
        setkeyskill('');
        setLinkedIn('');
        setGender('');
    }



    return (
        <>
            <form onSubmit>
                <div className="frm-holder">

                    <div className="profile">

                        {/* <input type="file"
                            className="fileupload"
                            accept="image/png,image/jpeg"
                            onChange={(e) => {
                                setFile(e.target.files[0]);
                            }
                            }
                            required >
                        </input> */}

                        <div className="input-gup">
                            <label for="degre">Degress Obtained</label>
                            <input type="text" id="degre" className="input-field" placeholder="Enter Degree" required onChange={(e) => { setDegree(e.target.value) }} />
                        </div>

                        <div className="input-gup">
                            <label for="institude">Institutions Attended</label>
                            <input type="text" id="institude" className="input-field" placeholder="Enter Institutions Attended" required onChange={(e) => { setInstitude(e.target.value) }} />
                        </div>

                        <div className="input-gup">
                            <label for="exp">Recuriter's Exp.</label>
                            <input type="number" id="exp" className="input-field" placeholder="Enter Recuriter Experiance" required onChange={(e) => { setExperiance(e.target.value) }} />
                        </div>

                        <div className="input-gup">
                            <label for="link">LinkedIn Profile</label>
                            <input
                                type="text"
                                id="link"
                                className="input-field"
                                placeholder="Enter Link Of Profile"
                                required
                                onChange={(e) => { setLinkedIn(e.target.value) }} />
                        </div>

                        <div className="input-gup">
                            <label for="skill">Enter Key Skills</label>
                            <input
                                type="text"
                                id="skill"
                                className="input-field"
                                placeholder="Enter Skills"
                                required
                                onChange={(e) => { setkeyskill(e.target.value) }} />
                        </div>

                        <div className="input-gup">
                            <label for="exper">Expertise</label>
                            <input type="text" id="exper" className="input-field" required placeholder="Expertise" onChange={(e) => { setExpertise(e.target.value) }} />
                        </div>

                        
                        <div className="input-gup">
                            <label for="text">Company Descriptions </label>
                            <textarea 
                                rows={4}
                                className="textArea"
                                id="text"
                                placeholder="Enter Details Of Company..."
                                required
                                onChange={(e) => { setDecriptions(e.target.value) }}>

                            </textarea>
                        </div>
                    </div>


                    <div className="right">

                        <div className="input-gup">
                            <label for="name">Full Name</label>
                            <input type="text" id="name"
                                className="input-field"
                                placeholder="e.g John Hardi"
                                required
                                onChange={(e) => { setName(e.target.value) }} />
                        </div>

                        <div className="input-gup">
                            <label for="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="input-field"
                                placeholder="Email id"
                                required
                                onChange={(e) => { setEmail(e.target.value) }} />
                        </div>

                        <div className="input-gup">
                            <label>Selected Gender </label>

                            <input type="radio" name="gender" value="male" 
                            onChange={(e) => {
                                    if (e.target.checked) 
                                    {
                                        setGender(e.target.value)
                                    }
                                }}
                            checked={gender ==="male"} />Male

                            <br/>
                            

                            <input type="radio" name="gender" value="female"
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setGender(e.target.value)
                                    }
                                }}
                            checked={gender ==="female"} />Female
                            
                        </div>

                        <div className="input-gup">
                            <label for="number">Mobile No.</label>
                            <input
                                type="number"
                                id="number"
                                className="input-field"
                                placeholder="+91 1254976843"
                                required
                                onChange={(e) => { setMobile(e.target.value) }} />
                        </div>

                        <div className="input-gup">
                            <label for="company">Company Name</label>
                            <input type="text" id="company" className="input-field" placeholder="Enter Company Name" required onChange={(e) => { setCompany(e.target.value) }} />
                        </div>


                        <div className="input-gup">
                            <label for="job">Job Title</label>
                            <input
                                type="text"
                                id="job"
                                className="input-field"
                                placeholder="Enter Job Title"
                                required
                                onChange={(e) => { setJob(e.target.value) }} />
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