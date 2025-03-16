export default function UserProfile({params}:any){
    return (
        <div>
            <h1>Profile Page!</h1>
            <h2>Hello, {params.id}</h2>
        </div>
    )
}