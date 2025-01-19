import React from "react";
import {AuthInputComponent} from "../components/auth/AuthInputComponent.tsx";
import {AuthCheckboxComponent} from "../components/auth/AuthCheckboxComponent.tsx";
import {AuthButtonComponent} from "../components/auth/AuthButtonComponent.tsx";
import {useNavigate} from "react-router-dom";

export const UserSignInPage: React.FC = () => {
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate('/dashboard');
    }

    return (
        <>
            <div
                className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 flex items-center justify-center p-4">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
                    <div className="flex flex-col items-center mb-6">
                        <div className="bg-green-100 p-3 rounded-full mb-3">
                            <img
                                className="w-8 h-8 text-green-600"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAABQxJREFUSEudV2+IFGUY/z3vTndinpJ1BZGS/9q5MzFudz3Jnb2zNEWSIlMI/CRFCPUpQiUL46LEhPqQWgh97IMFKgShmYs3i3nu7HaRuLNk+I9KFMMO9fR2531yZmf2ZnZm9HI+De/7Pv9/v+d9XoL9EQB2/ib2OecJBJ6YWIR+cnU4hv37ceshz1yh/+e77bTvu6twnIEJCqWKqQduWImpZu/Jq16SXdP+1MVpIxCzmD/U22lZVqe0ME1w4nLtxtULf6w6c5tbxLr11ExmvCBBy4iwipk3VXOlPSHD/kL7U50yUpNvjtIaZrxKhJUMtDULY2ODHMlrBPwJ4BqAxwE8CtCDLTjYZmrGhy2GI2osQV3HMxuY8SnAD0UizzEcQkfEUQKIPzazxnvjhv3huSLJwpIOwtgBMD/nbDciuwJgP5hPAfQXCFfBsh0i0UPM7QFiMEki8RvEWJml8ovtOIE+qmjF90MRe27OPdE7VRmzjoCQaazRIZbWjmqunHc4FIfIiADAEGohXQNIAHKLmStt9xgUSouqp78E8Ka70axLk/J+hO9bm+juPNfJbfwI6jS90lcc9PeGBSd6H6vVrEv2GhNvrGZLtu4wnebpixYKyGF389uKZqxr9aw73z3FUiavA2MNEVYAlPBAdAc8gYqrhZ7FYPFzQ4dcbWrl722zgUP2VlJPbSWIAYBv19macSY3fMVR6kaZHMysJ+LdAHU4WGbcYuAgEY6irhw2l54453dUHUy9DqK9DbuJp8y+od+doFoZqxYyP9mAAnDE1IzlnhJ1aNHDqMmv7CidtNn0YfoM7bTLawpRte8qZHYz80YAN6tZo4MJMhJcqp6+DFAng3dUNWOTfchOLSuTTzLQ5bQ6oj01RWw+s3hoJII3gdar6ukKGCoEHTWzxee984GIl+b7lb+V67WGbv6gopUGIEFqIX0QwGo3RW9XssYXUQZb154+lplRF3yhsc5bqlppu0eJQK/uz/crl5TrYw7oiN41s8WdXXp6gIGtjlGmTZVccce9bjOPVepg5hMCb3aM1ZVZ/vqHLomkm2oC7xIJ+blliSoAAQqmqjW61t41x+4FNXkW4OlgHDZzxorWM00d9kZST/8A0EqQPMdMwwS87EQrsKCyxDgVSnHUXdvQ8w2A19xMLa/kikf8smE6DaY2EtFuX5u067Pf1EqvRNY14rp0KATa63aJADua4HJ+fF7P/jE1rW0SnQcwrWmI5UozVz4UD6hxBare8yIgbDAKgP5RJJ451Ve8GFWapmFPXNV73iGIne7FYAnw7NO50oW7zTnJY4tmkZDbAKxvGMUoJC0z+4rHo8DYAJc/XQSoRxc/CaV+1uflv2AcZJIlBpWJJv3KtdF2RYgZUlAaYLuW/V4LJuAKkVxzOlvW4zAROfok9dRaAu2bCFfDZ+R+alPeqPhGnKg5MmDYi75rMDPAYIe7AJbeocOzRNjAwJyQocY9fYuAvAS+rmrGdwH0+gbYAJ2ipquuQvoAM14CY9TUjClEkLb+ufneJ5REbT5BLGTiOhEuEfji2MjISWfmiktRDOVCx1U9NUyghQyUTM1I31/KW+jiQcmHJ1evnxLp8wTMBBB5HzcE4ibRibnpq/H4eKvqmRGAOwDsMjXjrfsy4TbsuNdGwLA33qp6epu9IYmPVbPlfOh9c1+eBDMRRnUcJCcC1XtkedzflifMuFxcSDHwbH1C3M0BtwT/AUxDJUG8Vcr0AAAAAElFTkSuQmCC"
                                alt="Leaf"
                            />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
                        <p className="text-gray-500 text-sm">Sign in to your Green Shadow account</p>
                    </div>

                    <form className="space-y-6">
                        <AuthInputComponent label="Email Address" type="email" placeholder="you@gmail.com" required/>
                        <AuthInputComponent label="Password" type="password" placeholder="••••••••" required/>
                        <div className="flex items-center justify-between">
                            <AuthCheckboxComponent id="remember" label="Remember me"/>
                            <a href="#" className="text-sm text-green-600 hover:text-green-800">
                                Forgot password?
                            </a>
                        </div>
                        <AuthButtonComponent type="submit" onClick={handleSignIn} text="Sign In"/>
                    </form>

                    <p className="text-center mt-6 text-sm text-gray-500">
                        New to Green Shadow?{' '}
                        <a href="/signup" className="text-green-600 hover:text-green-800 font-medium">
                            Create an account
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
};