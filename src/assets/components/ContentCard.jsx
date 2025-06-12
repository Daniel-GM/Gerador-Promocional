const ContentCard = ({ children, className }) => {
  return (
    <div className={`border-2 border-gray-500 bg-gray-800 p-4 rounded-md text-center w-full ${className}`}>
      {children}
    </div>
  )
}

export default ContentCard