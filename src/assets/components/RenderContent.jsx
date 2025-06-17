const RenderContent = ({ itemsSelect, domain, textColor, priceColor }) => {
  return (
    <>
      <img
        className="max-w-[400px] max-h-[260px]"
        style={{
          width: `400px`,
          height: `400px`,
        }}
        src='/image/logo.png'
      ></img>
      <div
        className='h-[5%] text-[30px]'
        style={{
          color: textColor
        }}
      >
        <span>Promoção válida somente por Pix</span>
      </div>

      <div className='h-[75%] w-full grid grid-cols-2 gap-1'>
        {itemsSelect.length > 0 ? (
          itemsSelect.map((item) => (
            <div key={item.id_produto} className='flex justify-start w-full relative h-60 shadow-md rounded-3xl border-2 border-gray-300 p-2'>
              <img
                src={`${domain}/uploads/data/${item.foto}` || null}
                className='absolute w-1/3 h-50 top-3 left-0 rounded-l-xl'
              />
              <span
                className='text-left text-[24px] absolute top-0 left-1/3'
                style={{
                  color: textColor
                }}
              >
                {item.nome}
              </span>
              
              <span
                className='absolute text-[40px] bottom-2 left-1/3'
                style={{
                  color: priceColor
                }}
              >
                R$
              </span>
              <span
                className='absolute text-[40px] bottom-2 right-4'
                style={{
                  color: priceColor
                }}
              >
                {(item.valor_venda).replace('.',',')}
              </span>
            </div>
          ))
        ) : (
          <p
            className="text-center text-[53px] col-span-3"
            style={{
              color: textColor
            }}
          >
            Nenhum produto selecionado.
          </p>
        )}
      </div>

      <img
        className="max-w-[400px] max-h-[260px]"
        src='/image/logo.png'
      ></img>
    </>
  )
}

export default RenderContent