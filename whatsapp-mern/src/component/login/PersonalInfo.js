import React from "react";

function PersonalInfo({ Info,setInfo }) {
  return (
    <div className="personal-info-container">
      <input
        type="text"
        placeholder="Name."
        value={Info.Name}
        onChange={(e) => {
         setInfo({ ...Info, Name: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Desciption"
        value={Info.Desciption}
        onChange={(e) => {
         setInfo({ ...Info, Desciption: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Picture"
        value={Info.Picture}
        onChange={(e) => {
         setInfo({ ...Info, Picture: e.target.value });
        }}
      />
    </div>
  );
}

export default PersonalInfo;