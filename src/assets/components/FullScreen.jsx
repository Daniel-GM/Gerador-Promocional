const FullScreen = ({ children, additionalStyle }) => {
  return (
    <div className={`h-full min-h-screen bg-gray-900 text-white ${additionalStyle}`}>
      {children}
    </div>
  )
}

export default FullScreen