import React from 'react'
import "./AddPost.css"

const AddPost = () => {
    const [formData, setFormData] = useState({
        jobTitle: '',
        jobDescription: '',
        location: '',
        employmentType: '',
        experienceLevel: '',
        salaryMin: '',
        salaryMax: '',
        applicationDeadline: '',
        companyName: '',
    });

    return (
        <div className="job-post-container">
            <div className="job-post-card">
                <h2>Create Job Posting</h2>
                <form onSubmit={handleSubmit}>
                    <label>Job Title</label>
                    <input
                        type="text"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        required
                    />


                    <label>Job Description</label>
                    <textarea
                        name="jobDescription"
                        value={formData.jobDescription}
                        onChange={handleChange}
                        required
                    />

                    <label>Location</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                    />

                    <label>Employment Type</label>
                    <select
                        name="employmentType"
                        value={formData.employmentType}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select</option>
                        <option value="full-time">Full-Time</option>
                        <option value="part-time">Part-Time</option>
                        <option value="contract">Contract</option>
                        <option value="internship">Internship</option>
                    </select>


                    <label>Salary Range</label>
                    <div className="salary-range">
                        <input
                            type="number"
                            name="salaryMin"
                            value={formData.salaryMin}
                            onChange={handleChange}
                            placeholder="Min"
                        />
                        <span>-</span>
                        <input
                            type="number"
                            name="salaryMax"
                            value={formData.salaryMax}
                            onChange={handleChange}
                            placeholder="Max"
                        />
                    </div>

                    <label>Application Deadline</label>
                    <input
                        type="date"
                        name="applicationDeadline"
                        value={formData.applicationDeadline}
                        onChange={handleChange}
                    />

                    <label>Company Name</label>
                    <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">Submit Job Post</button>
                </form>
            </div>
        </div>
    );
};

export default AddPost;
