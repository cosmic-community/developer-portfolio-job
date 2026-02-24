export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="inline-flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-brand-500 animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-3 h-3 rounded-full bg-brand-500 animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-3 h-3 rounded-full bg-brand-500 animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
        <p className="mt-4 text-gray-500 text-sm font-medium">Loading portfolio...</p>
      </div>
    </div>
  )
}