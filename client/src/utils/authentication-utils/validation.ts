export const validateEmail = (email: string): boolean => {
    if(!email){
        return true;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const validatePassword = (password: string): string | null => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,20}$/;

    if (!passwordRegex.test(password)) {
        return "Password must be 8-20 characters long, including at least one uppercase letter, one lowercase letter, and one number.";
    }

    return null; // Password is valid
};