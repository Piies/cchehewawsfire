import React, { useState } from "react";
import useStorage from "../hooks/useStorage";

const UploadForm = () => {

    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const { startUpload, progress } = useStorage();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        if(e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
        }
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(selectedFile){
            startUpload(selectedFile);

        }setSelectedFile(null);
    }
    return <div>
        <form onSubmit={handleSubmit}>
            <input type="file" 
            onChange={handleFileChange}
            className="file-input file-input-bordered w-full max-w-xs" />
            <button type='submit' className={`btn gap-3 ${Boolean(progress)&&'loading'}`}
            disabled={!selectedFile}> 
                Upload</button>
        </form>
    </div>;
};

export default UploadForm;