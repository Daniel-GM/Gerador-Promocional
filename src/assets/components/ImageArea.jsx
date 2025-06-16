const ImageArea = ({ children }) => {
  return (
    <div className="min-w-[1080px] min-h-[1920px] flex flex-col p-12 items-center justify-between gap-5">
      {children}
    </div>
  )
}

export default ImageArea