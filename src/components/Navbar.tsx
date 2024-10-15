import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

const Navbar = () => {

    const handleLogout = async () => {
        try{
            await signOut(auth);
        } catch(error){
            console.log(error.message);
        }
    }
    return <div className="navbar bg-base-100 justify-between">
    <a className="font-bold normal-case text-xl text-xl">Gallery</a>
    <button onClick={handleLogout}> Log out</button>
  </div>;
};

export default Navbar;