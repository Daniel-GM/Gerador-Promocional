const InputRange = ({ value, setValue, step, min, max, mode, label, sistemaNumerico = "decimal"  }) => {

  const newValue = sistemaNumerico === "decimal" ? value : parseInt(value, 16)
  console.log(newValue)
  
  return (
    <div className="flex flex-col gap-0 justify-between h-full px-2">
      <label className="text-white text-xl">{label}</label>
      <div className="flex items-center gap-1 justify-center">
        <input
          type="range"
          className="w-full"
          value={newValue}
          step={step}
          min={min}
          max={max}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  )
}

export default InputRange