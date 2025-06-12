const Item = ({ item, domain }) => {
  return (
    <div className="flex items-center w-full h-[92px]">
      <img
        src={item.foto ? `${domain}/uploads/data/${item.foto}` : '/image/img_error_img_not_found.png'}
        className="w-1/5 h-full rounded-bl-sm rounded-tl-sm"
        onError={(e) => (e.target.src = '/image/img_error_img_not_found.png')}
      />
      <div className="w-4/5 flex flex-col justify-between items-start h-full px-2 py-2">
        <span className="text-wrap text-left line-clamp-2">
          {item.nome}
        </span>
        <span className="font-bold text-lg text-emerald-500">
          R${item.valor_venda.replace('.', ',') || '0'}
        </span>
      </div>
    </div>
  )
}

export default Item