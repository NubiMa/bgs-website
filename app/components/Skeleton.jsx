export function SectionSkeleton() {
  return (
    <div className="w-full py-24 bg-[#F8F9FA] flex flex-col justify-center items-center overflow-hidden border-t border-b border-gray-100/50">
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 space-y-12 animate-pulse">
        <div className="flex flex-col md:flex-row gap-12 items-center">
           <div className="w-full md:w-1/2 h-[400px] bg-gray-200 rounded-3xl"></div>
           <div className="w-full md:w-1/2 space-y-6 flex flex-col justify-center">
              <div className="h-12 bg-gray-200 rounded-lg w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 rounded w-4/6 mt-6"></div>
           </div>
        </div>
      </div>
    </div>
  )
}

export function CharcoalSkeleton() {
  return (
    <div className="w-full py-24 bg-[#1C1C1C] flex flex-col justify-center items-center overflow-hidden">
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 space-y-12 animate-pulse">
        <div className="flex justify-between items-end mb-12">
          <div className="w-1/2">
            <div className="h-4 bg-gray-800 rounded w-24 mb-4"></div>
            <div className="h-12 bg-gray-800 rounded-lg w-full"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1,2,3].map(i => (
            <div key={i} className="flex flex-col gap-5 bg-gray-800/20 p-6 rounded-3xl border border-gray-800/50">
              <div className="h-48 bg-gray-800 rounded-2xl w-full"></div>
              <div className="h-6 bg-gray-800 rounded w-3/4"></div>
              <div className="h-4 bg-gray-800 rounded w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function GallerySkeleton() {
  return (
    <div className="w-full py-24 bg-[#F8F9FA] flex flex-col justify-center items-center overflow-hidden">
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 space-y-8 animate-pulse">
        <div className="h-12 bg-gray-200 rounded-lg w-1/3 mx-auto mb-16"></div>
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-6 h-[800px] md:h-[600px]">
          <div className="md:col-span-2 md:row-span-2 bg-gray-200 rounded-3xl h-full w-full"></div>
          <div className="md:col-span-2 md:row-span-1 bg-gray-200 rounded-3xl h-full w-full"></div>
          <div className="md:col-span-1 md:row-span-1 bg-gray-200 rounded-3xl h-full w-full"></div>
          <div className="md:col-span-1 md:row-span-1 bg-gray-200 rounded-3xl h-full w-full"></div>
        </div>
      </div>
    </div>
  )
}

export function MasonrySkeleton() {
  return (
    <div className="w-full pt-16 border-t border-gray-200 animate-pulse">
      <div className="flex justify-between items-end mb-8">
        <div className="w-1/2">
          <div className="h-10 bg-gray-200 rounded-lg w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded-lg w-2/3"></div>
        </div>
        <div className="w-16 h-1 bg-gray-200 rounded-full hidden md:block mb-2"></div>
      </div>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
        {[1,2,3,4,5,6].map(i => (
          <div key={i} className={`mb-6 bg-gray-200 rounded-3xl w-full ${i % 2 === 0 ? 'h-64' : 'h-[400px]'}`}></div>
        ))}
      </div>
    </div>
  )
}
