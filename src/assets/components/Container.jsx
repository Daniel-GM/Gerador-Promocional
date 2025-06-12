const Container = ({ children, additionalStyle }) => {
  return (
    <div className={`p-4 ${additionalStyle}`}>
      {children}
    </div>
  )
}

export default Container