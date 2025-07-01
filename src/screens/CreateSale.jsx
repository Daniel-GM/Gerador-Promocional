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
import { useRef } from 'react'
import { toPng } from 'html-to-image'
import InputRange from '../assets/components/InputRange'
import InputColor from '../assets/components/InputColor'
import RenderContent from '../assets/components/RenderContent'
import InputText from '../assets/components/InputText'

const CreateSale = ({ setStage }) => {


  const {
    styleInput, styleFullWidthCol, styleButtonConfirm, 
    styleButtonErro, scale, setScale, 
    bgColor, setBgColor, textColor, 
    setTextColor, priceColor, setPriceColor, 
    logoWidth, setLogoWidth, logoHeight, 
    setLogoHeight, observation, setObservation, 
    adress, setAdress, openingHoursWeek, 
    setOpeningHoursWeek, openingHoursWeekend, setOpeningHoursWeekend,
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
        <ContentCard className={'grid grid-cols-4 gap-y-8'}>
          <InputRange value={scale} setValue={setScale} step={0.01} min={0.01} max={1} mode={'%'} label={`Escala da pré-visualização: ${(scale * 100).toFixed(0)}%`} />
          <InputColor label={'Cor de fundo'} value={bgColor} setValue={setBgColor} />
          <InputColor label={'Cor do texto'} value={textColor} setValue={setTextColor} />
          <InputColor label={'Cor do preço'} value={priceColor} setValue={setPriceColor} />

          <InputText label={'Observação'} style={styleInput} placeholder={"Promoção válida somente por Pix"} value={observation} setValue={setObservation} />
          <InputText label={'Localização'} style={styleInput} placeholder={"Av. José Júlio da Costa, 1710 Ideal, Ipatinga – MG, 35162-189"} value={adress} setValue={setAdress} />
          <InputText label={'Horário de funcionamento (semana)'} style={styleInput} placeholder={"Segunda a Sexta: 08:00 ás 18:00"} value={openingHoursWeek} setValue={setOpeningHoursWeek} />
          <InputText label={'Horário de funcionamento (final de semana)'} style={styleInput} placeholder={"Sábado: 08:00 ás 12:00"} value={openingHoursWeekend} setValue={setOpeningHoursWeekend} />

          <InputRange value={logoWidth} setValue={setLogoWidth} step={1} min={1} max={984} mode={'px'} label={`Largura: ${logoWidth === 'auto' ? 'auto' : logoWidth + 'px'}`} />
          <InputRange value={logoHeight} setValue={setLogoHeight} step={1} min={1} max={240} mode={'px'} label={`Altura: ${logoHeight === 'auto' ? 'auto' : logoHeight + 'px'}`} />

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
                  <RenderContent textColor={textColor} priceColor={priceColor} />
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
                <RenderContent textColor={textColor} priceColor={priceColor} />
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