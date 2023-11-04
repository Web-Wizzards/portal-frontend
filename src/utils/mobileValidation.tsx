function ValidateMobile(mobile: string) {

    if (/^[6-9]\d{9}$/.test(mobile)) {
        return (true)
    }
        return (false)
}

export default ValidateMobile;