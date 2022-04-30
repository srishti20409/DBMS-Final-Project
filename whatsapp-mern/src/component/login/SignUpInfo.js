import React from "react";

function SignUpInfo({ Info,setInfo }) {
  return (
    <div className="sign-up-container">
      <input
        type="text"
        placeholder="Phone..."
        value={Info.Phone}
        onChange={(e) => {
          setInfo({ ...Info, Phone: e.target.value });
         }}
      />
    </div>
  );
}

export default SignUpInfo;