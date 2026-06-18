const checkValidData = (email, password, name) => {

    const isEmailValid =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    const isPasswordValid =
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if (!isEmailValid || !isPasswordValid) {
        return "Please enter a valid email or password";
    }

    if (name !== undefined && !/^[A-Za-z\s]{2,50}$/.test(name)) {
        return "Please enter a valid name";
    }

    return null;
}

export default checkValidData