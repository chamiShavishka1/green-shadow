import { Link } from "react-router-dom";
import { HomeIcon } from "lucide-react";

export const NotFoundPage = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-green-50 to-green-100 ">
            <div className="relative w-full max-w-3xl px-4 text-center">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="h-64 w-64 rounded-full bg-green-100 opacity-50 blur-3xl"></div>
                </div>

                <div className="relative">
                    <h1 className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-[150px] font-bold leading-tight text-transparent sm:text-[200px]">
                        404
                    </h1>

                    <div className="mx-auto max-w-xl">
                        <h2 className="mb-4 text-2xl font-semibold text-green-800">
                            Page Not Found
                        </h2>
                        <p className="mb-8 text-green-600">
                            We couldn't find the page you're looking for. It might have been moved, deleted, or never existed in the first place.
                        </p>

                        <Link to="/" className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2">
                            <HomeIcon size={18} />
                            Back to Homepage
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};