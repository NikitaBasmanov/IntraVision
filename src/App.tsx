import { useState } from 'react';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center ">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-800 mb-4">
                    IntraVision
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                    React + TypeScript + Vite + Tailwind CSS
                </p>
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
                    <button
                        onClick={() => setCount((count) => count + 1)}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                    >
                        Count is {count}
                    </button>
                    <p className="mt-4 text-gray-500 text-sm">
                        Edit{' '}
                        <code className="bg-gray-100 px-2 py-1 rounded">
                            src/App.tsx
                        </code>{' '}
                        and save to test HMR
                    </p>
                </div>
            </div>
        </div>
    );
}

export default App;
