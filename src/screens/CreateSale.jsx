// Import font
import '@fontsource/geist-sans'

// Import components
import Container from '../assets/components/Container'
import ContentCard from '../assets/components/ContentCard'
import FullScreen from '../assets/components/FullScreen'
import ImageArea from '../assets/components/ImageArea'
import Item from "../assets/components/Item"

// Import context
import { useAppContext } from "../AppContext"
import { useRef, useState } from 'react'
import { toPng } from 'html-to-image'
import InputRange from '../assets/components/InputRange'
import InputColor from '../assets/components/InputColor'
import RenderContent from '../assets/components/RenderContent'

const CreateSale = ({ setStage }) => {
  const [scale, setScale] = useState(0.5)
  const [bgColor, setBgColor] = useState("#ffffff")
  const [textColor, setTextColor] = useState("#000000")
  const [priceColor, setPriceColor] = useState("#000000")
  const [logoWidth, setLogoWidth] = useState('auto')
  const [logoHeight, setLogoHeight] = useState('auto')

  const {
    arrayProdutos, arrayTabela, total,
    itemsSelect, page, perPage,
    domain, setArrayTabela, setTabela,
    setNomeProduto, setCodigoProduto, setCodigoBarrasProduto,
    setPage, handleSetSearch, handleArrayItemsSelect,
    styleInput, styleFullWidthCol, gridItemsResponsive,
    styleButtonConfirm, styleButtonErro
  } = useAppContext()

  const realImageRef = useRef(null)

  const handleDownloadImage = () => {
    if (realImageRef.current) {
      toPng(realImageRef.current)
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.download = 'encarte.png';
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.error('Erro ao gerar imagem', err);
        });
    }
  }

  return (
    <FullScreen >
      <Container>
        <ContentCard className={'grid grid-cols-4'}>
          <InputRange value={scale} setValue={setScale} step={0.01} min={0.01} max={1} mode={'%'} label={`Escala da pré-visualização: ${(scale * 100).toFixed(0)}`} />
          <InputColor label={'Cor de fundo'} setInput={setBgColor} />
          <InputColor label={'Cor do texto'} setInput={setTextColor} />
          <InputColor label={'Cor do preço'} setInput={setPriceColor} />
        </ContentCard>

        <ContentCard className="h-full">
          <div className="grid grid-cols-1 gap-4 place-items-center">
            <div style={{ width: 1080 * scale, height: 1920 * scale, overflow: 'hidden', }}>
              <div
                style={{
                  transformOrigin: 'top left',
                  transform: `scale(${scale})`,
                  width: 1080,
                  height: 1920,
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <ImageArea
                  bgColor={bgColor} >
                  <RenderContent itemsSelect={itemsSelect} domain={domain} textColor={textColor} priceColor={priceColor} />
                </ImageArea>
              </div>
            </div>
          </div>
          <div
            style={{
              position: 'absolute',
              top: -1000,
              left: -1920,
              overflow: 'hidden',
              opacity: 0,
              pointerEvents: 'none',
              zIndex: -1,
            }}
          >
            <div ref={realImageRef}>
              <ImageArea
                bgColor={bgColor} >
                <RenderContent itemsSelect={itemsSelect} domain={domain} textColor={textColor} priceColor={priceColor} />
              </ImageArea>
            </div>
          </div>
          <div className='flex mt-4 gap-4'>
            <button
              className={`${styleButtonErro} ${styleFullWidthCol}`}
              onClick={() => setStage("selectProducts")}
            >
              Voltar
            </button>
            <button className={`${styleButtonConfirm} ${styleFullWidthCol}`} onClick={handleDownloadImage}>
              Baixar
            </button>
          </div>
        </ContentCard>
      </Container>
    </FullScreen>
  )
}

export default CreateSale