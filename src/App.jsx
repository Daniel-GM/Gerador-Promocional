import { useEffect, useState, useCallback } from "react"
import Container from "./assets/components/Container"
import GetTabela from "./assets/components/GetTabela"
import ContentCard from "./assets/components/ContentCard"
import InputFilter from "./assets/components/InputFilter"
import Pagination from "./assets/components/Pagination"
import { GetDomain } from "./utils/GetDomain"
import Item from "./assets/components/Item"

function App() {
  // Style
  const styleInput = "border-2 border-gray-400 p-2 w-full flex items-center justify-between rounded-md"

  // Data
  // const domain = GetDomain()
  const domain = 'https://proffix.sigesis.com.br'
  const [arrayProdutos, setArrayProdutos] = useState(null)
  const [arrayTabela, setArrayTabela] = useState(null)
  const [total, setTotal] = useState(0)
  const [itemsSelect, setItemsSelect] = useState([])

  // Body
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(18)

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
    <div className="h-full min-h-screen bg-gray-900 text-white">
      <Container>
        <ContentCard className={'shadow-md shadow-gray-800'} >
          <h2 className="text-2xl">Busque produtos da tabela selecionada</h2>
          <div className="grid grid-cols-2 w-full mt-6 gap-6">
            <GetTabela tabela={arrayTabela} setArrayTabela={setArrayTabela} setTabela={setTabela} />
            <InputFilter style={styleInput} label={"Produto"} setState={setNomeProduto} />
            <InputFilter style={styleInput} label={"Código"} setState={setCodigoProduto} />
            <InputFilter style={styleInput} label={"Código de barras"} setState={setCodigoBarrasProduto} />
            <button
              className={`text-white col-span-2 py-1 px-2 cursor-pointer bg-emerald-600 rounded-md w-full hover:text-black hover:bg-emerald-500 transition duration-150`}
              onClick={handleSetSearch}
            >
              Buscar produtos
            </button>
          </div>
        </ContentCard>
      </Container>

      <Container>
        <ContentCard className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4'>
          <Pagination total={total} perPage={perPage} setPage={setPage} currentPage={page} />
          {arrayProdutos && Array.isArray(arrayProdutos) && arrayProdutos.length > 0 ? (
            arrayProdutos.map((item) => (
              <div
                key={item.id_produto}
                className={`${styleInput} px-0 py-0 cursor-pointer hover:border-emerald-300 transition duration-500 ${itemsSelect.some(obj => obj.id_produto === item.id_produto) ? 'text-gray-800 bg-white' : ''}`}
                onClick={() => {
                  handleArrayItemsSelect(item)
                }}
              >
                <Item item={item} domain={domain} />
              </div>
            ))
          ) : (
            <p className="text-center col-span-3">Nenhum produto encontrado.</p>
          )}
          <Pagination total={total} perPage={perPage} setPage={setPage} currentPage={page} />
        </ContentCard>
      </Container>

      <Container>
        <ContentCard className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4'>
          {itemsSelect.map((item) => (
            <div key={item.id_produto} className={`${styleInput} px-0 py-0 cursor-pointer hover:border-emerald-300 transition duration-500`}>
              <Item key={item.id} item={item} domain={domain} />
            </div>
          ))}
        </ContentCard>
      </Container>
    </div >
  )
}

export default App
