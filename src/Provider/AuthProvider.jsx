import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const auth = getAuth(app);
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    
    const [users,setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();
    const provider = new GoogleAuthProvider();
    const googleSignIn = () =>{
        return signInWithPopup(auth,provider)
    }
   

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email,password);
    }
    const updateUser = (name, photo) =>{
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }
    const logoutUser = () =>{
        setLoading(true);
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log("Current user: "+ currentUser.email);
            setLoading(false);
            axiosPublic.get('/users')
            .then(res=>{setUsers(res.data)})
            
        });
        return ()=>{
            return unsubscribe();
        }
    },[axiosPublic])

    useEffect(()=>{
        // console.log(users);
            const loggedinUser = users.find(logger=>logger.email==user?.email)
            // console.log(loggedinUser);
            if(loggedinUser?.premiumTaken){
                const currdate = new Date().getTime();
                const enddate = new Date(loggedinUser?.expiredDate).getTime();
                if(currdate>enddate){
                    const updatedInfo = {
                        premiumDuration: null,
                        premiumTaken: null,
                        takenDate: null,
                        expiredDate: null
                    }
                    
                    axiosPublic.patch(`/updatepremiumuser?email=${user?.email}`,updatedInfo)
                    .then(res=>{
                        if(res.data.modifiedCount){
                            Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Your subscription has ended",
                              });
                        }
    
                        
                    })
                }
            }
    },[users,user,axiosPublic])
    const userInfo ={
        user,
        loading,
        createUser,
        loginUser,
        updateUser,
        logoutUser,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;