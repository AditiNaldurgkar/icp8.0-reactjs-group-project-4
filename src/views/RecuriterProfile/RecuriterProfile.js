import React from "react";
import './RecuriterProfile.css';
import Form from '../.././components/Form/Form.js';

const RecuriterProfile = ()=>{

    return(
        <>
            <div className="main">
                <div className="frm-heading">
                    <p className="main-heading">Profile settings</p>
                    <p className="sub-heading">You can set perferref display name,create your profile URL and Manage other personal settings.</p>
                </div>

                <div className="form">
                    <Form/>
                </div>
            </div>
        </>
    )
    
}

export default RecuriterProfile;