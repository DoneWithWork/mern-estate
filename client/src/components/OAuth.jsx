import React from "react";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { app } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInSuceess } from "../redux/user/userSlice";
export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handeGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        }),
      });
      const data = await res.json();
      dispatch(signInSuceess(data));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button
      onClick={handeGoogleClick}
      type="button"
      className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95"
    >
      Continue With Google
    </button>
  );
}
