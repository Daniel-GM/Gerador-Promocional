// Import components
import Container from '../assets/components/Container'
import ContentCard from '../assets/components/ContentCard'
import FullScreen from '../assets/components/FullScreen'
import ImageArea from '../assets/components/ImageArea'
import Item from "../assets/components/Item"

// Import context
import { useAppContext } from "../AppContext"

const CreateSale = () => {

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
    <FullScreen >
      <Container>
        <ContentCard>
          <ImageArea >
            <img src="" />
            {itemsSelect.length > 0 ? (
              itemsSelect.map((item) => (
                <div key={item.id_produto}>
                  
                </div>
              ))
            ) : (
              <p className="text-center col-span-3">Nenhum produto selecionado.</p>
            )}
          </ImageArea>
          
        </ContentCard>
      </Container>
    </FullScreen>
  )
}

export default CreateSale