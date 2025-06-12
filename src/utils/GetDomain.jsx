export const GetDomain = () => {
  try {
    const { protocol, hostname, port } = window.location
    return port === '' ? `${protocol}//${hostname}` : `${protocol}//${hostname}:${port}`
  } catch (error) {
    console.error('Erro ao obter o domínio:', error)
    return ''
  }
}