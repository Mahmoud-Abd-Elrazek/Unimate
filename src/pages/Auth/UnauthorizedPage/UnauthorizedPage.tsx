
export default function UnauthorizedPage() {
  return (
    <div>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-red-600">Unauthorized</h1>
            <p className="mt-4 text-lg text-gray-700">You do not have permission to access this page.</p>
            <a href="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Go to Home</a>
        </div>
    </div>
  )
}
