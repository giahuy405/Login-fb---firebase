import { useState } from "react";
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { auth, provider } from "./FirebaseConfig";
function App() {
  const [user, setUser] = useState(null);
  const [profilePic,setProfilePic] = useState(null);

  const handleChangeLogin = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        setUser(res.user);
        const credential = FacebookAuthProvider.credentialFromResult(res);
        const accessToken = credential.accessToken;
        fetch(`https://graph.facebook.com/${res.user.providerData[0].uid}/picture?type=large&access_token=${accessToken}`)
        .then((response)=>response.blob())
        .then((blob)=>{
          setProfilePic(URL.createObjectURL(blob));
        })
      })
      .catch((err) => console.log(err));
  };
  const handleLogout = () =>{
    setUser(null);
  }
console.log(user)
  return <div className=" ">

    {user? <>
    
      <button
    onClick={handleLogout}
    >
      Logout
    </button>
    <div>
      {user.displayName}
      <p>{user.email}</p>
      <img alt='' src={profilePic} />
    </div>
    </>
  :
  <button onClick={handleChangeLogin}>
    Login
  </button>  
  }
  </div>;
}

export default App;
