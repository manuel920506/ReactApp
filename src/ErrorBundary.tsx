import React, { ReactElement } from "react";

export default class ErrorBundary extends
    React.Component<errorBundaryProps, errorBundaryState>{
    constructor(props: errorBundaryProps){
        super(props);
        this.state = {thereIsAnError: false, message: ''}
    }

    componentDidCatch(error: any, errorInfo: any){ 
        console.log('componentDidCatch error: ',error);
        console.log('errorInfo: ',errorInfo);
    }

    static getDerivedStateFromError(error: any){
        console.log('getDerivedStateFromError error: ',error);
        return {thereIsAnError: true, message: error}
    }

    render(){
        if(this.state.thereIsAnError){
            if(this.props.errorUI){
                return this.props.errorUI;
            }else{
                return <h3>{this.state.message}</h3>
            }
        }

        return this.props.children;
    }
}
interface errorBundaryState{
    thereIsAnError: boolean;
    message: string;
}

interface errorBundaryProps{
    errorUI?: ReactElement; 
    children?: React.ReactNode
}