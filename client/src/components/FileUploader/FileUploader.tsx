import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

export default function FileUploader() {
  const [file, setFile] = useState(null);

  const onSubmit = async () => {
    if (file) {
      try {
        const formData = new FormData();
        formData.append('file', file);
        const data = await fetch('https://api-yugireg.com', {
          method: 'POST',
          body: formData,
        })
        console.log('File uploaded successfully:', data);
        const pdfFile = await data.blob();        
        const objectURL = URL.createObjectURL(pdfFile);
        const downloadLink = document.createElement('a');
        downloadLink.href = objectURL;
        downloadLink.download = 'filledform.pdf';
        downloadLink.click();
        URL.revokeObjectURL(objectURL);

      }
      catch (error) {
        console.error('File upload failed:', error)
      }
    }
  }
  const onDrop = useCallback((acceptedFiles) => {
    const isYdk = acceptedFiles.length && acceptedFiles[0].name.endsWith('.ydk');

    if (isYdk) {
      setFile(acceptedFiles[0]);
    } else {
      console.log("Incorrect file type");
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const removeFile = () => {
    setFile(null);
  };



  return (
    <>
      <div {...getRootProps({ className: "container" })}>
        <input {...getInputProps({ className: "input" })} />
        {isDragActive ? <p>Release To Upload</p> : <p>Upload YDK File</p>}
      </div>
      {file?.name && (
        <>
          <p>{file.name}</p>
          <button type="button" onClick={removeFile}>
            Remove
          </button>
          <button type="button" onClick={onSubmit}>
            Submit
          </button>
        </>
      )}
    </>
  );
}
