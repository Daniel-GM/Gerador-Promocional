const InputColor = ({ label = '', setInput }) => {
  return (
    <div className="flex flex-col gap-0 justify-between h-full">
      <label className="text-white text-2xl">{label}</label>
      <div className="flex items-center gap-1 justify-center">
        <input 
          type="color" 
          className=""
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </div>
  )
}

export default InputColor