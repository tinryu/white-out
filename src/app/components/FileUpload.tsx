"use strict";
import React from "react";

const FileUpload = () => {
  const [fileList, setFileList] = React.useState<FileList | null>(null);
  const [dragActive, setDragActive] = React.useState(false);

  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const files = fileList ? [...fileList] : [];
  const data = new FormData();

  const handleDrag = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  const handleDrop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFileList(e.dataTransfer.files);
    }
  };
  const handleFileClick = () => {
    inputRef.current?.click();
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileList(e.target.files);
  };
  const handleUploadClick = () => {
    if (!fileList) {
      return;
    }

    files.forEach((file, i) => {
      data.append(`file-${i}`, file, file.name);
    });

    console.log(files);
  };

  return (
    <div className="drop bg-slate-100 p-3 rounded-xl text-center text-gray-500 hover:cursor-pointer hover:shadow-inner focus:shadow-inner">
      <form
        id="form-file-upload"
        onDragEnter={handleDrag}
        onSubmit={(e) => e.preventDefault()}
        className="relative h-[3.5rem] max-w-full text-center"
      >
        <input
          type="file"
          id="fileUpload"
          accept="image/*"
          multiple
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        <label
          htmlFor="fileUpload"
          id="fileUpload"
          onClick={handleFileClick}
          className={
            dragActive
              ? "drag-active flex h-full justify-center items-center"
              : "flex h-full justify-center items-center"
          }
        >
          <p>Drop files here or upload files</p>
          <button
            className="ml-3 bg-gray-200 text-gray-700 py-2 px-4 rounded-xl"
            onClick={handleUploadClick}
          >
            Upload
          </button>
        </label>
        {dragActive && (
          <div
            id="drag-file-element"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            className="absolute top-0 bottom-0 left-0 right-0 w-full h-full"
          ></div>
        )}
      </form>

      <ul className="flex flex-wrap w-full justify-center text-xs">
        {files.map((file, i) => (
          <li key={i} className="truncate">{file.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FileUpload;
