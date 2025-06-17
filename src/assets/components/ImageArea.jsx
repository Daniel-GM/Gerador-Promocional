const ImageArea = ({ children, className, width = 1080, height = 1920, bgColor, textColor }) => {
  return (
    <div 
      className={`text-black flex flex-col justify-between items-center p-12 gap-5 ${className || ''}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        backgroundColor: bgColor,
        color: textColor
      }}
    >
      {children}
    </div>
  )
}

export default ImageArea