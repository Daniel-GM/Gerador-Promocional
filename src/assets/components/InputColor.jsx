const InputColor = ({ label = '', value, setValue }) => {
  return (
    <div className="flex flex-col gap-0 justify-between h-full px-2">
      <label className="text-white text-xl">{label}</label>
      <div className="flex items-center gap-1 justify-center">
        <input 
          type="color" 
          className=""
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  )
}

export default InputColor