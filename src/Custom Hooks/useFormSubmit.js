import { useState } from "react";
import { educationAction, experiencesAction, personalDataAction, professionAction } from "../Redux/actions";
import { educationFormValidate, experiencesFormValidate, personalFormValidate, professionFormValidate } from "../Utils/validation";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

const propsObject = {
    "personal": {
        path: "/details/education",
        dispatchAction: personalDataAction,
        validatorFn: personalFormValidate,
    },
    "education": {
        path: "/details/profession",
        dispatchAction: educationAction,
        validatorFn: educationFormValidate,
    },
    "profession": {
        path: "/details/experiences",
        dispatchAction: professionAction,
        validatorFn: professionFormValidate,
    },
    "experiences": {
        path: "/resume/generate",
        dispatchAction: experiencesAction,
        validatorFn: experiencesFormValidate,
    }
}

export default function useFormSubmit() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState();

    const handleSubmit = (pageName, data) => {

        if (propsObject[pageName]) {
            const { path, dispatchAction, validatorFn } = propsObject[pageName];
            const { isValid, newErrors } = validatorFn(data);
            setErrors(newErrors);
            if (isValid) {
                dispatch(dispatchAction(data))
                navigate(path);
            }
        }
        else {
            throw console.error("Action Failed");
        }
    }

    return {handleSubmit, errors}
}