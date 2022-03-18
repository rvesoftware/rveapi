export const validateSignupInput = (email, password) => {
    const errors = {};

    if(email.trim() == ''){
        errors.email = 101;
    }else{
        const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/
        if(!email.match(regEx)){
            errors.email = 102
        }
    }

    if(password === ''){
        errors.password = 103;
    }

    return {
        errors, 
        valid: Object.keys(errors).length < 1
    }
}

export const validateSigninAdminInput = (username, password) => {

    const errors = {};
    if(username.trim() == ''){
        errors.email = 101;
    }
    
    if(password === ''){
        errors.password = 104;
    }
    
    return {
        errors, 
        valid: Object.keys(errors).length < 1
    }
}

export const validateSigninInput = (email, password) => {

    const errors = {};
    if(email.trim() == ''){
        errors.email = 101;
    }else{
        const regEx = /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/
        if(!email.match(regEx)){
            errors.email = 102
        }
    }
    if(password === ''){
        errors.password = 104;
    }
    
    return {
        errors, 
        valid: Object.keys(errors).length < 1
    }
}


