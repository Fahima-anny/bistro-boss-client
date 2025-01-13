import useAuth from "../../../Providers/useAuth";


const UserHome = () => {

const {user} = useAuth() ;

    return (
        <div>
            <h1 className="text-3xl">Hi! Welcome  
<span>
    {
        user?.displayName ? <span> {user.displayName}</span> : "Back"
    }
</span>
            </h1>
        </div>
    );
};

export default UserHome;