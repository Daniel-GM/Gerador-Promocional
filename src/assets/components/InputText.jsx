const InputText = ({ label, value, setValue, placeholder=''  }) => {

  
  return (
    <div className="flex flex-col gap-0 justify-between h-full">
      <label className="text-white text-2xl">{label}</label>
      <div className="flex items-center gap-1 justify-center">
        <input
          type="text"
          className="w-full bg-white rounded-2xl text-black px-2"
          value={value}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  )
}

export default InputText