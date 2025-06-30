const InputNumber = ({ label, style, setState }) => {

  return (
    <div className={`flex flex-col gap-0`}>
      <label className="text-left">{label}</label>
      <input
        type="number"
        className={style}
        placeholder="10"
        min={1}
        onChange={(e) => setState(e.target.value > 0 ? e.target.value : 10)}
      />
    </div>
  )
}

export default InputNumber