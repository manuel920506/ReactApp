import { Redirect } from "react-router";

export default function RedirectLandingPage(){
    return <Redirect to={{pathname: '/'}} />
}