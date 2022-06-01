const ok = (data, use = true) => {
    if(use){
        let wOk = {OK: true, data,}

        if(process.env.NODE_ENV && !process.env.NODE_ENV.toUpperCase().includes('PROD', 'PRODUCTION')) {
            wOk.execution_time = 1
        }
        return wOk
    }
    return data
}

const error = (error, data) => {
    if(Array.isArray(error) && error.length > 0){
        error = error[0]
    }

    let errorObject = {
        OK: false,
        error:{
            code: error.code || '',
            message: error.message || '',
        },
    }

    if (data) {
        errorObject.data = data 
    }
        
    return errorObject;
}

module.exports = {
    ok,
    error,
}
