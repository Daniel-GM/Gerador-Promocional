// Import icon
import { CiLocationOn } from "react-icons/ci";
import { LuAlarmClock } from "react-icons/lu";
import { useAppContext } from "../../AppContext"

const RenderContent = ({ textColor, priceColor }) => {
  const {
    itemsSelect, domain, observation,
    adress, openingHoursWeek, openingHoursWeekend,
  } = useAppContext()

  return (
    <>
      <div className="w-60 h-60 flex justify-center items-center">
        <img
          className=""
          src='/image/logo.png'
        ></img>
      </div>
      <div
        className='text-3xl font-bold'
        style={{
          color: textColor
        }}
      >
        <span>{observation}</span>
      </div>

      <div className='h-[75%] w-full flex flex-wrap justify-center items-center content-start gap-4'>
        {itemsSelect.length > 0 ? (
          itemsSelect.map((item) => (
            <div key={item.id_produto} className='flex justify-start w-full relative h-76 shadow-xl rounded-3xl border-2 border-gray-300 p-2'>
              <img
                src={`${domain}/uploads/data/${item.foto}` || null}
                className='absolute w-55 h-55 top-10 left-5 rounded-xl'
                onError={(e) => (e.target.src = '/image/img_error_img_not_found.png')}
              />
              <span
                className='text-left text-3xl absolute top-10 left-65 line-clamp-4'
                style={{
                  color: textColor
                }}
              >
                {item.nome}
              </span>
              <span
                className='absolute text-5xl font-semibold bottom-10 left-65'
                style={{
                  color: priceColor
                }}
              >
                R${Number(item.valor_venda).toFixed(2).replace('.', ',')}
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


      {adress || openingHoursWeek || openingHoursWeekend ? (
        <div
          className="text-2xl border-2 rounded-2xl p-2 flex gap-2 text-left w-full"
          style={{ backgroundColor: '#cfcff133', color: textColor }}
        >
          {adress ? (
            <div className="flex items-center gap-4 w-1/2">
              <CiLocationOn size={60} />
              <span className="text-adjust">
                {adress}
              </span>
            </div>) : (
            ""
          )}

          {openingHoursWeek || openingHoursWeekend ? (
            <div className="flex items-center gap-4 w-1/2">
              <LuAlarmClock size={60} />
              <div className="flex flex-col text-adjust">
                <p>
                  {openingHoursWeek}
                </p>
                <p>
                  {openingHoursWeekend}
                </p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}

      <div>
        <span
          className="text-xl"
          style={{
            color: textColor
          }}
        >
          Desenvolvido por
        </span>
        <img
          className="max-w-[400px] max-h-[260px]"
          src='/image/logo.png'
        ></img>
      </div>
    </>
  )
}

export default RenderContent