const InputText = ({ label, value, setValue, placeholder='', style  }) => {

  
  return (
    <div className="flex flex-col gap-0 justify-between h-full px-2">
      <label className="text-white text-2xl">{label}</label>
      <div className="flex items-center gap-1 justify-center">
        <input
          type="text"
          className={`${style}`}
          value={value}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  )
}

export default InputText