function ValidatePin(pin: string) {
 
    if (/^[0-9]\d{5}$/.test(pin)) {
        return (true)
    }
        return (false)
}

export default ValidatePin;