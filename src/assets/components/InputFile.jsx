import { useAppContext } from "../../AppContext"
import { useRef } from "react"

const InputFile = ({ label }) => {
  const inputRef = useRef()

  const {
    setLogo
  } = useAppContext()

  const handleChangeLogo = (e) => {
    const file = e.target.files[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setLogo(imageUrl)
    }
  }

  const triggerInputFile = () => {
    inputRef.current.click()
  }

  return (
    <div className={`flex flex-col gap-0 mx-2`}>
      <label className="text-white text-xl">{label}</label>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleChangeLogo}
      />
      <span
        onClick={triggerInputFile}
        className="text-black bg-white w-full rounded-2xl cursor-pointer"
      >
        Adicionar logo
      </span>
    </div>
  )
}

export default InputFile