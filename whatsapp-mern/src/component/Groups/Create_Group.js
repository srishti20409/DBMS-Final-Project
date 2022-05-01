import React , {useState} from 'react';
import "./group.css"
import { Link } from 'react-router-dom';

function Create_Group() 
{
    const [Info, setInfo] = useState({
        Name: "",
        Desciption: "",
        Picture: "",
      })
    return (
        <div className='main'>  
            <div className="Main__body">
                    <div className="header">
                    <h1>Create Group</h1>
                    </div>

                    <div className="body">
                        <div className="sign-up-container">
                            <p>Group Name</p>
                            <input
                                type="text"
                                value={Info.Name}
                                onChange={(e) => {
                                setInfo({ ...Info, Name: e.target.value });
                                }}
                            />
                            <p>Description</p>
                            <input
                                type="text"
                                value={Info.Desciption}
                                onChange={(e) => {
                                setInfo({ ...Info,Desciption : e.target.value });
                                }}
                            />
                            <p>Image url</p>
                            <input
                                type="text"
                                value={Info.Picture}
                                onChange={(e) => {
                                setInfo({ ...Info, Picture: e.target.value });
                                }}
                            />
                        </div>
                    </div>

                    <div className="footer">
                    <button >
                    <Link to = "/userlist" style={{ color: 'inherit', textDecoration: 'inherit'}}>Next</Link>
                    </button>

    </div>
            </div>
        </div>       
  )
}

export default Create_Group