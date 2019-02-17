const login = formData => {
    const result = {
        code: 0
    }

    if (formData.inputUserName === 'demo1' &&
        formData.inputPassword === 'demo1') {
            result.code = 1
    }

    return result
}

export default {
    login
}