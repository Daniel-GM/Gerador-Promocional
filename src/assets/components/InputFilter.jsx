const InputFilter = ({ style, label, setState }) => {
  return (
    <div className={`flex flex-col gap-0`}>
      <label className="text-left">{label}</label>
      <input 
        type="text"
        className={`${style}`}
        onChange={(e) => setState(e.target.value)}
      />
    </div>
  )
}

export default InputFilter