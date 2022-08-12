const authHeader = () =>{
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        return { 'x-access-token': user};
    }
    else {
        return {};
    }
}
export default authHeader