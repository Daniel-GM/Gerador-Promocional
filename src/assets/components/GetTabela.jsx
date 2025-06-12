import { useEffect } from "react"

const GetTabela = ({ tabela, setArrayTabela, setTabela }) => {

  const sendData = async () => {
    try {
      const response = await fetch('/api/config_promo.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      const data = await response.json()
      setArrayTabela(data.tabela)
    } catch (error) {
      console.error(error)
    }
  }

  const handleChangeTable = (e) => {
    const id = e.target.value
    setTabela(id)
  }

  useEffect(() => {
    sendData()
  }, [])

  return (
    <div className="flex flex-col gap-0">
      <label className="text-left">Tabela</label>
      <select 
        className="text-md border-2 rounded-md py-1 px-3 bg-gray-700 border-gray-500 hover:border-emerald-500 cursor-pointer transition duration-300"
        onChange={handleChangeTable}  
      >
        {tabela && Array.isArray(tabela) && tabela.length > 0 ? (
          tabela.map((item, index) => (
            <option key={index} value={item.id} className="text-emerald-500" >
              {item.tabela}
            </option>
          ))
        ) : (
          <option>Carregando...</option>
        )}
      </select>
    </div>
  )
}

export default GetTabela