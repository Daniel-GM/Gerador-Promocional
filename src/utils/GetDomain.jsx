export const GetDomain = () => {
  try {
    const { protocol, hostname, port, pathname } = window.location
    const pathSegments = pathname.split('/').filter(segment => segment !== '');
    const basePath = pathSegments.length > 0 ? `/${pathSegments[0]}` : '';
    const baseDomain = port === '' ? `${protocol}//${hostname}` : `${protocol}//${hostname}:${port}`;
    return basePath ? `${baseDomain}${basePath}` : baseDomain;
  } catch (error) {
    console.error('Erro ao obter o domínio:', error)
    return ''
  }
}