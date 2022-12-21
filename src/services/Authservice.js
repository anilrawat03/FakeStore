export const Islogin=()=>
{
  const user=localStorage.getItem('Authtoken');
  if(user)
    return true
  else 
    return false
}
export const SetUserlogin=(Authtoken)=>
{
 localStorage.setItem('Authtoken',Authtoken);
 return;
}