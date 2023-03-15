import { useFormikContext } from "formik";
import { ChangeEvent, useState } from "react"

export default function FormGroupImage(props: formGroupImage){

    const divStyle = {marginTop: '10px'}
    const imgStyle = {width: '450px'}

    const [imgBase64, setImageBase64] = useState('');
    const [imgURL, setImageURL] = useState(props.imgURL)
    const {values} = useFormikContext<any>();

    const HandleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files){
            const file = e.currentTarget.files[0];
            aBase64(file)
                .then((representationBase64: string) => setImageBase64(representationBase64))
                .catch(error => console.error(error))

            values[props.field] = file;
            setImageURL('');
        }
    }

    const aBase64 = (file: File) => {
        return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = (error) => reject(error);
        })
    }

    return (
        <div className="form-group">
            <label>{props.label}</label>
            <div>
                <input type="file" accept=".jpg,.jpeg,.png" onChange={HandleOnChange} />
            </div>
            {imgBase64 ? 
            <div>
                <div style={divStyle}>
                    <img style={imgStyle} src={imgBase64} alt="selected image" />
                </div>
            </div> : null    
        }
        {imgURL ? 
            <div>
                <div style={divStyle}>
                    <img style={imgStyle} src={imgURL} alt="selected image" />
                </div>
            </div> : null    
        }
        </div>
    )
}

interface formGroupImage{
    field: string;
    label: string;
    imgURL: string;
}

FormGroupImage.defaultProps = {
    imgURL: ''
}