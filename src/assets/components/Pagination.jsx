const Pagination = ({ total, perPage, setPage, currentPage, styleFullWidthCol }) => {
  const maxPages = Math.ceil(total / perPage)

  const getPaginationRange = () => {
    const range = []
    const delta = 2
    const startPage = Math.max(2, currentPage - delta)
    const endPage = Math.min(maxPages - 1, currentPage + delta)

    range.push(1)

    if (startPage > 2) {
      range.push('...')
    }

    for (let i = startPage; i <= endPage; i++) {
      range.push(i)
    }

    if (endPage < maxPages - 1) {
      range.push('...')
    }

    if (maxPages > 1) {
      range.push(maxPages)
    }

    return range
  }

  const handlePageChange = (page) => {
    if (page !== '...') {
      setPage(page)
    }
  }

  const handleChangePreviousPage = () => {
    const newCurrentPage = currentPage > 1 ? currentPage - 1 : 1
    handlePageChange(newCurrentPage)
  }

  const handleChangeNextPage = () => {
    const newCurrentPage = currentPage < maxPages ? currentPage + 1 : maxPages
    handlePageChange(newCurrentPage)
  }

  const pages = getPaginationRange()

  return (
    <div className={`${styleFullWidthCol} h-full flex justify-center items-center flex-wrap gap-2`}>
      <button
        onClick={handleChangePreviousPage}
        className={`font-bold text-xl border-2 border-gray-700 px-1 rounded-md hover:border-emerald-400 transition duration-300 ${
          currentPage !== 1
            ? 'text-white cursor-pointer'
            : 'text-gray-500 cursor-default hover:border-gray-700'
        }`}
      >
        {'<'}
      </button>

      {pages.map((page, index) =>
        page === '...' ? (
          <span key={`ellipsis-${index}`} className="px-2 py-0.5 text-gray-500 select-none">...</span>
        ) : (
          <button
            key={page}
            className={`px-2 py-0.5 text-black rounded-sm cursor-pointer hover:bg-emerald-600 hover:text-white transition duration-200 ${
              currentPage === page ? 'bg-emerald-500 text-white' : 'bg-white'
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={handleChangeNextPage}
        className={`font-bold text-xl border-2 border-gray-700 px-1 rounded-md hover:border-emerald-400 transition duration-300 ${
          currentPage !== maxPages
            ? 'text-white cursor-pointer'
            : 'text-gray-500 cursor-default hover:border-gray-700'
        }`}
      >
        {'>'}
      </button>
    </div>
  )
}

export default Pagination
