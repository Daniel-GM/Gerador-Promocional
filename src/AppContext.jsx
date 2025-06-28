import { createContext, useContext, useState, useEffect, useCallback, Children } from 'react'
import { GetDomain } from './utils/GetDomain'

const AppContext = createContext()

export const useAppContext = () => useContext(AppContext)

export const AppProvider = ({ children }) => {
  // Style
  const styleInput = "border-2 border-gray-400 p-2 w-full flex items-center justify-between rounded-md"
  const styleFullWidthCol = "col-span-1 md:col-span-2 lg:col-span-3"
  const gridItemsResponsive = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
  const styleButtonConfirm = "text-white py-1 px-2 cursor-pointer bg-emerald-600 rounded-md w-full hover:text-black hover:bg-emerald-500 transition duration-150"
  const styleButtonErro = "text-white py-1 px-2 cursor-pointer bg-red-600 rounded-md w-full hover:text-black hover:bg-red-500 transition duration-150"

  // Data
  // const domain = GetDomain()
  const domain = 'https://proffix.sigesis.com.br'
  const [arrayProdutos, setArrayProdutos] = useState(null)
  const [arrayTabela, setArrayTabela] = useState(null)
  const [total, setTotal] = useState(0)
  const [itemsSelect, setItemsSelect] = useState([])

  // Body
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(10)

  // Inputs
  const [tabela, setTabela] = useState(1)
  const [nomeProduto, setNomeProduto] = useState("")
  const [codigoProduto, setCodigoProduto] = useState("")
  const [codigoBarrasProduto, setCodigoBarrasProduto] = useState("")

  // Current value for search
  const [searchParams, setSearchParams] = useState({
    tabela: 1,
    nomeProduto: "",
    codigoProduto: "",
    codigoBarrasProduto: ""
  })

  const handleArrayItemsSelect = (itemSelect) => {
    const exists = itemsSelect.some(item => item.id_produto === itemSelect.id_produto)

    if (exists) {
      setItemsSelect(itemsSelect.filter(item => item.id_produto !== itemSelect.id_produto))
    } else {
      setItemsSelect([...itemsSelect, itemSelect])
    }
  }

  const handleSetSearch = () => {
    setSearchParams({
      tabela,
      nomeProduto,
      codigoProduto,
      codigoBarrasProduto
    })
    setPage(1)
  }

  const fetchProdutos = async () => {
    try {
      const response = await fetch('/api/tabela_produtos_promo.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "id": searchParams.tabela,
          "page": page,
          "per_page": perPage,
          "busca": searchParams.nomeProduto,
          "codigo": searchParams.codigoProduto,
          "codigobarras": searchParams.codigoBarrasProduto
        }),
      })
      const data = await response.json()
      setArrayProdutos(data.precos)
      setTotal(data.total)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchProdutos()
  }, [page, searchParams])

  return (
    <AppContext.Provider value={{
      /* domain */
      domain,

      /* states */
      arrayProdutos, arrayTabela, total,
      itemsSelect, page, perPage,
      searchParams,

      /* function */
      setArrayTabela, setTabela, setNomeProduto,
      setCodigoProduto, setCodigoBarrasProduto, setPage,
      handleSetSearch, handleArrayItemsSelect,

      /* styles */
      styleInput, styleFullWidthCol, gridItemsResponsive, 
      styleButtonConfirm, styleButtonErro
    }} >
      {children}
    </AppContext.Provider>
  )
}