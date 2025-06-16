import Container from "../assets/components/Container"
import ContentCard from "../assets/components/ContentCard"
import GetTabela from "../assets/components/GetTabela"
import InputFilter from "../assets/components/InputFilter"
import Pagination from "../assets/components/Pagination"
import Item from "../assets/components/Item"
import { useAppContext } from "../AppContext"

function SelectProducts({ setStage }) {

  const {
    arrayProdutos, arrayTabela, total,
    itemsSelect, page, perPage,
    domain, setArrayTabela, setTabela,
    setNomeProduto, setCodigoProduto, setCodigoBarrasProduto,
    setPage, handleSetSearch, handleArrayItemsSelect,
    styleInput, styleFullWidthCol, gridItemsResponsive,
    styleButton
  } = useAppContext()

  return (
    <div className="h-full min-h-screen bg-gray-900 text-white">
      <Container>
        <ContentCard className={'shadow-md shadow-gray-800'}>
          <h2 className="text-2xl">Busque produtos da tabela selecionada</h2>
          <div className="grid grid-cols-2 w-full mt-6 gap-6">
            <GetTabela tabela={arrayTabela} setArrayTabela={setArrayTabela} setTabela={setTabela} />
            <InputFilter style={styleInput} label={"Produto"} setState={setNomeProduto} />
            <InputFilter style={styleInput} label={"Código"} setState={setCodigoProduto} />
            <InputFilter style={styleInput} label={"Código de barras"} setState={setCodigoBarrasProduto} />
            <button className={`${styleButton} col-span-2`} onClick={handleSetSearch}>
              Buscar produtos
            </button>
          </div>
        </ContentCard>
      </Container>

      <Container>
        <ContentCard className={`${gridItemsResponsive}`}>
          <h2 className={`text-2xl ${styleFullWidthCol}`}>Selecione os produtos para gerar a promoção</h2>
          <Pagination total={total} perPage={perPage} setPage={setPage} currentPage={page} styleFullWidthCol={styleFullWidthCol} />

          {arrayProdutos?.length > 0 ? (
            arrayProdutos.map((item) => (
              <div key={item.id_produto} className={`${styleInput} px-0 py-0 cursor-pointer hover:border-emerald-300 transition duration-500 ${itemsSelect.some(obj => obj.id_produto === item.id_produto) ? 'text-gray-800 bg-white' : ''}`}
                onClick={() => handleArrayItemsSelect(item)}>
                <Item item={item} domain={domain} />
              </div>
            ))
          ) : (
            <p className="text-center col-span-3">Nenhum produto encontrado.</p>
          )}

          <Pagination total={total} perPage={perPage} setPage={setPage} currentPage={page} styleFullWidthCol={styleFullWidthCol} />
        </ContentCard>
      </Container>

      <Container>
        <ContentCard className={`${gridItemsResponsive}`}>
          <h2 className={`text-2xl ${styleFullWidthCol}`}>Produtos selecionados para gerar a promoção</h2>
          {itemsSelect.length > 0 ? (
            itemsSelect.map((item) => (
              <div key={item.id_produto} className={`${styleInput} px-0 py-0 cursor-pointer hover:border-emerald-300 transition duration-500`}>
                <Item item={item} domain={domain} />
              </div>
            ))
          ) : (
            <p className="text-center col-span-3">Nenhum produto selecionado.</p>
          )}

          <button className={`${styleButton} ${styleFullWidthCol}`} onClick={() => setStage("createSale")}>
            Gerar Imagem
          </button>
        </ContentCard>
      </Container>
    </div>
  )
}

export default SelectProducts
